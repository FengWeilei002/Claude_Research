import {
  ATTRIBUTE_MAX,
  ATTRIBUTE_MIN,
  type AttributeKey,
  type Attributes,
  type BurnPlan,
  type Character,
  type CheckBreakdownItem,
  type CheckResult,
  type EventId,
  type HistoryLogEntry,
  type NarrativeOutcome,
  type SkillCheck,
} from "../types/game";

export const burnBonusByAttribute: Record<AttributeKey, number> = {
  health: 2,
  money: 2,
  cognition: 3,
};

const startupIdentityBonus = {
  professor: 2,
  executive: 4,
  student: 1,
  cleaner: 0,
} as const;

interface DiceRoll2d6 {
  dice: [number, number];
  total: number;
}

interface BurnResult<T extends Character> {
  character: T;
  bonus: number;
  appliedBurns: BurnPlan;
}

function createLogId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function getAttribute(character: Character, attribute: AttributeKey): number {
  return character[attribute];
}

function getStartupIdentityBonus(character: Character): number {
  const identityId = character.identity;
  return identityId ? startupIdentityBonus[identityId] : 0;
}

function getStartupAttributeValue(character: Character): { value: number; breakdown: CheckBreakdownItem[] } {
  const healthHalf = Math.floor(character.health / 2);
  const identityBonus = getStartupIdentityBonus(character);
  const breakdown = [
    { label: "金钱", value: character.money },
    { label: "认知", value: character.cognition },
    { label: "健康折半", value: healthHalf },
    { label: "身份加成", value: identityBonus },
  ];

  return {
    value: character.money + character.cognition + healthHalf + identityBonus,
    breakdown,
  };
}

function withSyncedLegacyFields<T extends Character>(character: T, stats: Attributes, fateFracture: number): T {
  const next = {
    ...character,
    ...stats,
    fateFracture,
  } as T & { attributes?: Attributes; fateFractures?: number };

  if ("attributes" in character) {
    next.attributes = stats;
  }

  if ("fateFractures" in character) {
    next.fateFractures = fateFracture;
  }

  return next;
}

export function roll2d6(): DiceRoll2d6 {
  const first = Math.floor(Math.random() * 6) + 1;
  const second = Math.floor(Math.random() * 6) + 1;
  return {
    dice: [first, second],
    total: first + second,
  };
}

export function clampStats(stats: Attributes): Attributes {
  return {
    money: Math.min(ATTRIBUTE_MAX, Math.max(ATTRIBUTE_MIN, stats.money)),
    cognition: Math.min(ATTRIBUTE_MAX, Math.max(ATTRIBUTE_MIN, stats.cognition)),
    health: Math.min(ATTRIBUTE_MAX, Math.max(ATTRIBUTE_MIN, stats.health)),
  };
}

// 属性燃烧先扣除角色资源，再把燃烧值转化为检定加值。
export function applyBurnBonus<T extends Character>(
  character: T,
  check: SkillCheck,
  burnPlan: BurnPlan = {},
): BurnResult<T> {
  const appliedBurns: BurnPlan = {};
  const stats: Attributes = {
    money: character.money,
    cognition: character.cognition,
    health: character.health,
  };

  let bonus = 0;

  check.burnableAttributes.forEach((attribute) => {
    const requested = Math.max(0, Math.floor(burnPlan[attribute] ?? 0));
    const applied = Math.min(requested, stats[attribute]);
    if (!applied) return;

    stats[attribute] -= applied;
    appliedBurns[attribute] = applied;
    bonus += applied * burnBonusByAttribute[attribute];
  });

  return {
    character: withSyncedLegacyFields(character, clampStats(stats), character.fateFracture),
    bonus,
    appliedBurns,
  };
}

// 检定系统统一为 2d6 + 关联属性 + 燃烧加值，对比 dc。
export function calculateCheckResult(
  character: Character,
  check: SkillCheck,
  burnBonus = 0,
  forcedRoll?: DiceRoll2d6,
): CheckResult {
  const roll = forcedRoll ?? roll2d6();
  const startupValue = check.formula === "startupVenture" ? getStartupAttributeValue(character) : undefined;
  const attributeValue = startupValue?.value ?? getAttribute(character, check.relatedAttribute);
  const total = roll.total + attributeValue + burnBonus;

  return {
    dice: roll.dice,
    diceTotal: roll.total,
    relatedAttribute: check.relatedAttribute,
    attributeValue,
    burnBonus,
    total,
    dc: check.dc,
    success: total >= check.dc,
    formulaLabel: startupValue ? "创业总值" : check.label,
    breakdown: startupValue?.breakdown,
  };
}

export function writeHistoryLog<T extends Character>(
  character: T,
  entry: Omit<HistoryLogEntry, "id" | "createdAt"> & Partial<Pick<HistoryLogEntry, "id" | "createdAt">>,
): T {
  return {
    ...character,
    historyLog: [
      {
        id: entry.id ?? createLogId("history"),
        createdAt: entry.createdAt ?? new Date().toISOString(),
        ...entry,
      },
      ...character.historyLog,
    ].slice(0, 20),
  };
}

// Outcome 是新叙事系统的唯一结算入口：属性、裂痕、声音状态、flag 与历史日志都从这里写入。
export function applyOutcome<T extends Character>(
  character: T,
  outcome: NarrativeOutcome,
  options: { round: number; eventId?: EventId } = { round: 0 },
): T {
  const stats = clampStats({
    money: character.money + (outcome.statDelta?.money ?? 0),
    cognition: character.cognition + (outcome.statDelta?.cognition ?? 0),
    health: character.health + (outcome.statDelta?.health ?? 0),
  });
  const fateFracture = Math.max(0, character.fateFracture + (outcome.fateFractureDelta ?? 0));
  const voiceChanges = outcome.voiceChanges ?? [];
  const flags = Array.from(new Set([...character.flags, ...(outcome.flagsToAdd ?? [])]));
  const relationshipEffects = [...(outcome.relationshipEffects ?? []), ...character.relationshipEffects];

  const next = withSyncedLegacyFields(
    {
      ...character,
      flags,
      relationshipEffects,
      voiceProfiles: character.voiceProfiles.map((voice) => {
        const directPatch = voiceChanges.find((change) => change.voiceId === voice.id)?.state;
        return directPatch ? { ...voice, ...directPatch } : voice;
      }),
    },
    stats,
    fateFracture,
  );

  const withHistory = writeHistoryLog(next, {
    round: options.round,
    eventId: options.eventId,
    title: outcome.logTitle,
    body: outcome.logBody,
  });

  if ("logs" in withHistory && Array.isArray(withHistory.logs)) {
    return {
      ...withHistory,
      logs: [{ title: outcome.logTitle, body: outcome.logBody }, ...withHistory.logs].slice(0, 5),
    };
  }

  return withHistory;
}

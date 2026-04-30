import { create } from "zustand";
import { identities, identityOrder } from "../data/identities";
import { eventMap } from "../data/events";
import { applyBurnBonus, applyOutcome, calculateCheckResult, writeHistoryLog } from "../utils/checks";
import { buildEnding, collectGlobalEndingFlags } from "../utils/endings";
import {
  applyDelta,
  applyIdentity,
  createPlayer,
  getBaseEventDelta,
  getBaseEventLog,
} from "../utils/gameLogic";
import { shuffle } from "../utils/random";
import type {
  Attributes,
  BurnPlan,
  CheckResult,
  EndingResults,
  EventChoiceLog,
  EventId,
  GameLogEntry,
  IdentityId,
  NarrativeEventChoice,
  NarrativeOutcome,
  PlayerId,
  PlayerLog,
  PlayerState,
  RelationshipEffect,
  Stage,
} from "../types/game";

type ChoiceBook = Partial<Record<EventId, Partial<Record<PlayerId, EventChoiceLog>>>>;

interface TimelineEntry {
  title: string;
  body: string;
}

interface GameState {
  stage: Stage;
  players: PlayerState[];
  characters: PlayerState[];
  drawOrder: IdentityId[];
  drawnCount: number;
  autoMode: boolean;
  autoPlay: boolean;
  appliedEvents: EventId[];
  choices: ChoiceBook;
  currentDecisionIndex: number;
  currentRound: number;
  currentEvent: EventId | null;
  activeCharacterIndex: number;
  timeline: TimelineEntry[];
  gameLog: GameLogEntry[];
  unlockedLinks: string[];
  endingResults: EndingResults;
  startGame: () => void;
  resetGame: () => void;
  toggleAutoMode: () => void;
  drawNextIdentity: () => void;
  advanceStage: () => void;
  applyEventBase: (eventId: EventId) => void;
  choosePandemicMedicine: (playerId: PlayerId, buyMedicine: boolean) => void;
  chooseInternetLearning: (playerId: PlayerId, learn: boolean) => void;
  chooseStartup: (playerId: PlayerId, attempt: boolean) => void;
  resolveNarrativeChoice: (
    playerId: PlayerId,
    choiceId: string,
    burnPlan?: BurnPlan,
    precomputedResult?: CheckResult,
    selectedVoiceId?: string,
  ) => void;
}

const playerIds: PlayerId[] = ["p1", "p2", "p3", "p4"];
const eventStageOrder: EventId[] = ["pandemic", "internet", "startup"];
const stageOrder: Stage[] = ["start", "gacha", "pandemic", "internet", "startup", "ending"];

function createInitialPlayers(): PlayerState[] {
  return playerIds.map((id, index) => createPlayer(id, index));
}

function createLogId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function createGameLog(
  title: string,
  body: string,
  options: { round?: number; eventId?: EventId; characterId?: PlayerId } = {},
): GameLogEntry {
  return {
    id: createLogId("game-log"),
    round: options.round ?? 0,
    title,
    body,
    eventId: options.eventId,
    characterId: options.characterId,
    createdAt: new Date().toISOString(),
  };
}

function prependGameLog(logs: GameLogEntry[], entry: GameLogEntry): GameLogEntry[] {
  return [entry, ...logs].slice(0, 40);
}

function prependGameLogs(logs: GameLogEntry[], entries: GameLogEntry[]): GameLogEntry[] {
  return [...entries, ...logs].slice(0, 40);
}

function getRoundForEvent(eventId: EventId): number {
  return eventStageOrder.indexOf(eventId) + 1;
}

function getStageEvent(stage: Stage): EventId | null {
  return eventStageOrder.includes(stage as EventId) ? (stage as EventId) : null;
}

function createInitialState() {
  const players = createInitialPlayers();
  const openingLog = createGameLog(
    "雾城档案启封",
    "四名参与者将在四十年的城市雾气中抽取身份、承受冲击，并写下各自的未来。",
  );
  return {
    stage: "start" as Stage,
    players,
    characters: players,
    drawOrder: shuffle(identityOrder),
    drawnCount: 0,
    autoMode: false,
    autoPlay: false,
    appliedEvents: [] as EventId[],
    choices: {} as ChoiceBook,
    currentDecisionIndex: 0,
    currentRound: 0,
    currentEvent: null as EventId | null,
    activeCharacterIndex: 0,
    timeline: [
      {
        title: openingLog.title,
        body: openingLog.body,
      },
    ] as TimelineEntry[],
    gameLog: [openingLog] as GameLogEntry[],
    unlockedLinks: [] as string[],
    endingResults: {} as EndingResults,
  };
}

function addLog(
  player: PlayerState,
  log: PlayerLog,
  options: { round?: number; eventId?: EventId } = {},
): PlayerState {
  const withHistory = writeHistoryLog(player, {
    round: options.round ?? 0,
    eventId: options.eventId,
    title: log.title,
    body: log.body,
  });
  return {
    ...withHistory,
    logs: [log, ...withHistory.logs].slice(0, 5),
  };
}

function updatePlayer(
  players: PlayerState[],
  playerId: PlayerId,
  updater: (player: PlayerState) => PlayerState,
): PlayerState[] {
  return players.map((player) => (player.id === playerId ? updater(player) : player));
}

function changeAttributes(
  player: PlayerState,
  delta: Partial<Attributes>,
  log: PlayerLog,
  options: { round?: number; eventId?: EventId } = {},
): PlayerState {
  const attributes = applyDelta(player.attributes, delta);
  return addLog(
    {
      ...player,
      money: attributes.money,
      cognition: attributes.cognition,
      health: attributes.health,
      attributes,
    },
    log,
    options,
  );
}

function nextDecisionIndex(players: PlayerState[], choices: ChoiceBook, eventId: EventId): number {
  const eventChoices = choices[eventId] ?? {};
  const nextIndex = players.findIndex((player) => !eventChoices[player.id]);
  return nextIndex === -1 ? players.length - 1 : nextIndex;
}

function hasChoice(choices: ChoiceBook, eventId: EventId, playerId: PlayerId): boolean {
  return Boolean(choices[eventId]?.[playerId]);
}

function recordChoice(
  choices: ChoiceBook,
  eventId: EventId,
  playerId: PlayerId,
  choice: EventChoiceLog,
): ChoiceBook {
  return {
    ...choices,
    [eventId]: {
      ...(choices[eventId] ?? {}),
      [playerId]: choice,
    },
  };
}

function resolveLinkedVoiceId(choice: NarrativeEventChoice, player: PlayerState): string | undefined {
  if (player.identity && choice.voiceByIdentity?.[player.identity]) return choice.voiceByIdentity[player.identity];
  if (player.identityId && choice.voiceByIdentity?.[player.identityId]) return choice.voiceByIdentity[player.identityId];
  return choice.voiceId;
}

function resolveLinkedOutcome(outcome: NarrativeOutcome, linkedVoiceId?: string): NarrativeOutcome {
  if (!linkedVoiceId || !outcome.voiceChanges?.length) return outcome;
  return {
    ...outcome,
    voiceChanges: outcome.voiceChanges.map((change) =>
      change.voiceId === "linked" ? { ...change, voiceId: linkedVoiceId } : change,
    ),
  };
}

function syncFateFracture(player: PlayerState, delta: number): PlayerState {
  const nextValue = Math.max(0, player.fateFracture + delta);
  return {
    ...player,
    fateFracture: nextValue,
    fateFractures: nextValue,
  };
}

function applyRelationshipEffectToPlayers(
  players: PlayerState[],
  sourceId: PlayerId,
  effect: RelationshipEffect,
  options: { round: number; eventId: EventId },
): PlayerState[] {
  return players.map((player) => {
    const isTarget =
      effect.targetCharacterId === "all" ||
      (effect.targetCharacterId === "others" && player.id !== sourceId) ||
      effect.targetCharacterId === player.id ||
      effect.targetIdentityId === player.identityId;

    if (!isTarget) return player;

    const withEffect = {
      ...player,
      relationshipEffects: [
        {
          ...effect,
          sourceCharacterId: sourceId,
        },
        ...player.relationshipEffects,
      ],
    };
    const withStats = effect.attributeDelta
      ? changeAttributes(withEffect, effect.attributeDelta, { title: "交叉影响", body: effect.description }, options)
      : withEffect;
    const withFracture = effect.fateFractureDelta ? syncFateFracture(withStats, effect.fateFractureDelta) : withStats;
    return effect.fateFractureDelta
      ? addLog(withFracture, { title: "交叉影响", body: effect.description }, options)
      : withFracture;
  });
}

function buildEndingResults(players: PlayerState[], unlockedLinks: string[]): EndingResults {
  const globalFlags = collectGlobalEndingFlags(players, unlockedLinks);
  return Object.fromEntries(players.map((player) => [player.id, buildEnding(player, globalFlags)])) as EndingResults;
}

function buildCheckChoiceLog(choice: NarrativeEventChoice, result: CheckResult, linkedVoiceName?: string): EventChoiceLog {
  return {
    title: result.success ? `${choice.title}：检定成功` : `${choice.title}：检定失败`,
    body: `${linkedVoiceName ? `内心声音「${linkedVoiceName}」参与。` : ""}2d6=${result.diceTotal}，${formatCheckBase(result)}，燃烧加值+${result.burnBonus}，总计 ${result.total} / DC ${result.dc}。`,
    tone: result.success ? "good" : "bad",
    dice: result.diceTotal,
    successRate: result.dc,
    roll: result.total,
  };
}

const attributeLabels: Record<keyof Attributes, string> = {
  money: "金钱",
  cognition: "认知",
  health: "健康",
};

function formatCheckBase(result: CheckResult): string {
  if (!result.breakdown?.length) {
    return `${attributeLabels[result.relatedAttribute]} ${result.attributeValue}`;
  }

  const details = result.breakdown.map((item) => `${item.label}${item.value >= 0 ? "+" : ""}${item.value}`).join("，");
  return `${result.formulaLabel ?? "综合底数"} ${result.attributeValue}（${details}）`;
}

function formatBurnPlan(burnPlan: BurnPlan): string {
  const parts = (Object.keys(attributeLabels) as Array<keyof Attributes>)
    .map((attribute) => {
      const value = burnPlan[attribute] ?? 0;
      return value > 0 ? `燃烧${attributeLabels[attribute]} ${value} 点` : "";
    })
    .filter(Boolean);
  return parts.length ? parts.join("，") : "未燃烧属性";
}

function buildStartupDecline(player: PlayerState): { choice: EventChoiceLog; delta: Partial<Attributes>; flag: string } {
  if (player.identityId === "professor") {
    return {
      choice: {
        title: "不创业：留在讲台",
        body: "健康 +1，认知 +1。他拒绝把全部知识注册成公司，转而守住可持续的课堂。",
        tone: "neutral",
      },
      delta: { health: 1, cognition: 1 },
      flag: "startup_declined_professor",
    };
  }

  if (player.identityId === "executive") {
    return {
      choice: {
        title: "不创业：保住旧船",
        body: "金钱 +1，健康 +1。他没有再造一个帝国，而是把现有组织修到还能航行。",
        tone: "neutral",
      },
      delta: { money: 1, health: 1 },
      flag: "startup_declined_executive",
    };
  }

  if (player.identityId === "student") {
    return {
      choice: {
        title: "不创业：先成为稳定的人",
        body: "健康 +1，认知 +1。他没有把焦虑包装成项目，先学会让生活站稳。",
        tone: "neutral",
      },
      delta: { health: 1, cognition: 1 },
      flag: "startup_declined_student",
    };
  }

  return {
    choice: {
      title: "不创业：不把晚年押上桌",
      body: "健康 +2，认知 +1。他拒绝把最后的力气交给风口，保住了自己的节奏。",
      tone: "neutral",
    },
    delta: { health: 2, cognition: 1 },
    flag: "startup_declined_cleaner",
  };
}

export const useGameStore = create<GameState>((set) => ({
  ...createInitialState(),

  startGame: () => set({ stage: "gacha", currentRound: 0, currentEvent: null }),

  resetGame: () => set(createInitialState()),

  toggleAutoMode: () => set((state) => ({ autoMode: !state.autoMode, autoPlay: !state.autoMode })),

  drawNextIdentity: () =>
    set((state) => {
      if (state.stage !== "gacha" || state.drawnCount >= state.players.length) return state;
      const identityId = state.drawOrder[state.drawnCount];
      const players = state.players.map((player, index) =>
        index === state.drawnCount ? applyIdentity(player, identityId) : player,
      );
      const log = createGameLog(
        `${players[state.drawnCount].label}抽中身份`,
        `身份已写入档案：${identities[identityId].name}`,
        { characterId: players[state.drawnCount].id },
      );
      return {
        players,
        characters: players,
        drawnCount: state.drawnCount + 1,
        timeline: [
          {
            title: log.title,
            body: log.body,
          },
          ...state.timeline,
        ].slice(0, 8),
        gameLog: prependGameLog(state.gameLog, log),
      };
    }),

  advanceStage: () =>
    set((state) => {
      const current = stageOrder.indexOf(state.stage);
      if (current === -1 || current >= stageOrder.length - 1) return state;
      if (state.stage === "gacha" && state.drawnCount < state.players.length) return state;
      const nextStage = stageOrder[current + 1];
      const nextEvent = getStageEvent(nextStage);
      const endingResults = nextStage === "ending" ? buildEndingResults(state.players, state.unlockedLinks) : state.endingResults;
      return {
        stage: nextStage,
        currentDecisionIndex: 0,
        activeCharacterIndex: 0,
        currentEvent: nextEvent,
        currentRound: nextEvent ? getRoundForEvent(nextEvent) : nextStage === "ending" ? eventStageOrder.length + 1 : 0,
        endingResults,
      };
    }),

  applyEventBase: (eventId) =>
    set((state) => {
      if (state.appliedEvents.includes(eventId)) return state;
      const event = eventMap[eventId];
      const round = getRoundForEvent(eventId);
      const players = state.players.map((player) => {
        if (!player.identityId) return player;
        const agedPlayer = { ...player, age: event.age };
        const delta = getBaseEventDelta(eventId, player.identityId);
        return changeAttributes(agedPlayer, delta, {
          title: `${event.title}：时代结算`,
          body: getBaseEventLog(eventId, player.identityId),
        }, { round, eventId });
      });
      const log = createGameLog(event.title, event.subtitle, { round, eventId });
      return {
        players,
        characters: players,
        appliedEvents: [...state.appliedEvents, eventId],
        currentDecisionIndex: nextDecisionIndex(players, state.choices, eventId),
        activeCharacterIndex: nextDecisionIndex(players, state.choices, eventId),
        currentRound: round,
        currentEvent: eventId,
        timeline: [
          {
            title: log.title,
            body: log.body,
          },
          ...state.timeline,
        ].slice(0, 8),
        gameLog: prependGameLog(state.gameLog, log),
      };
    }),

  choosePandemicMedicine: (playerId, buyMedicine) =>
    set((state) => {
      if (hasChoice(state.choices, "pandemic", playerId)) return state;
      const round = getRoundForEvent("pandemic");
      const choice: EventChoiceLog = buyMedicine
        ? {
            title: "购买药品",
            body: "金钱 -2，健康 +2。用现金换来短暂的体温稳定。",
            tone: "good",
          }
        : {
            title: "没有购买药品",
            body: "命运裂痕 +1。省下的钱留在口袋里，裂缝留在日后。",
            tone: "bad",
          };
      const players = updatePlayer(state.players, playerId, (player) => {
        const changed = buyMedicine
          ? changeAttributes(player, { money: -2, health: 2 }, { title: choice.title, body: choice.body }, { round, eventId: "pandemic" })
          : addLog(syncFateFracture(player, 1), { title: choice.title, body: choice.body }, { round, eventId: "pandemic" });
        return changed;
      });
      const choices = recordChoice(state.choices, "pandemic", playerId, choice);
      const activeCharacterIndex = nextDecisionIndex(players, choices, "pandemic");
      const log = createGameLog(choice.title, choice.body, { round, eventId: "pandemic", characterId: playerId });
      return {
        players,
        characters: players,
        choices,
        currentDecisionIndex: activeCharacterIndex,
        activeCharacterIndex,
        gameLog: prependGameLog(state.gameLog, log),
      };
    }),

  chooseInternetLearning: (playerId, learn) =>
    set((state) => {
      if (hasChoice(state.choices, "internet", playerId)) return state;
      const round = getRoundForEvent("internet");
      const choice: EventChoiceLog = learn
        ? {
            title: "学习互联网工具",
            body: "认知 +1，健康 -1。屏幕照亮眼睛，也偷走一部分睡眠。",
            tone: "good",
          }
        : {
            title: "保留旧习惯",
            body: "无额外变化。世界继续加速，而此刻选择站在原地。",
            tone: "neutral",
          };
      const players = updatePlayer(state.players, playerId, (player) =>
        learn
          ? changeAttributes(player, { cognition: 1, health: -1 }, { title: choice.title, body: choice.body }, { round, eventId: "internet" })
          : addLog(player, { title: choice.title, body: choice.body }, { round, eventId: "internet" }),
      );
      const choices = recordChoice(state.choices, "internet", playerId, choice);
      const activeCharacterIndex = nextDecisionIndex(players, choices, "internet");
      const log = createGameLog(choice.title, choice.body, { round, eventId: "internet", characterId: playerId });
      return {
        players,
        characters: players,
        choices,
        currentDecisionIndex: activeCharacterIndex,
        activeCharacterIndex,
        gameLog: prependGameLog(state.gameLog, log),
      };
    }),

  chooseStartup: (playerId, attempt) =>
    set((state) => {
      if (hasChoice(state.choices, "startup", playerId)) return state;
      const player = state.players.find((item) => item.id === playerId);
      if (!player?.identityId) return state;
      const round = getRoundForEvent("startup");

      if (attempt) return state;

      const decline = buildStartupDecline(player);
      const players = updatePlayer(state.players, playerId, (item) => {
        const withStats = changeAttributes(item, decline.delta, { title: decline.choice.title, body: decline.choice.body }, { round, eventId: "startup" });
        return {
          ...withStats,
          flags: Array.from(new Set([...withStats.flags, decline.flag])),
        };
      });
      const choice = decline.choice;
      const choices = recordChoice(state.choices, "startup", playerId, choice);
      const activeCharacterIndex = nextDecisionIndex(players, choices, "startup");
      const log = createGameLog(choice.title, choice.body, { round, eventId: "startup", characterId: playerId });
      return {
        players,
        characters: players,
        choices,
        currentDecisionIndex: activeCharacterIndex,
        activeCharacterIndex,
        gameLog: prependGameLog(state.gameLog, log),
      };
    }),

  resolveNarrativeChoice: (playerId, choiceId, burnPlan = {}, precomputedResult, selectedVoiceId) =>
    set((state) => {
      const eventId = state.currentEvent ?? getStageEvent(state.stage);
      if (!eventId) return state;

      const event = eventMap[eventId];
      const choice = event.availableChoices.find((item) => item.id === choiceId);
      const player = state.players.find((item) => item.id === playerId);
      if (!choice || !player) return state;

      const linkedVoiceId = selectedVoiceId ?? resolveLinkedVoiceId(choice, player);
      const linkedVoiceName = player.voiceProfiles.find((voice) => voice.id === linkedVoiceId)?.name;
      const burnResult = applyBurnBonus(player, choice.skillCheck, burnPlan);
      const checkResult = precomputedResult ?? calculateCheckResult(burnResult.character, choice.skillCheck, burnResult.bonus);
      const rawOutcome = checkResult.success ? choice.successOutcome : choice.failureOutcome;
      const outcome = resolveLinkedOutcome(rawOutcome, linkedVoiceId);
      const round = state.currentRound || getRoundForEvent(eventId);
      const resolvedPlayerWithOutcome = applyOutcome(burnResult.character, outcome, { round, eventId });
      const resolvedPlayer = linkedVoiceName
        ? writeHistoryLog(resolvedPlayerWithOutcome, {
            round,
            eventId,
            title: `内心声音：${linkedVoiceName}`,
            body: `选择「${choice.title}」，${checkResult.success ? "通过" : "未通过"}检定。`,
            tags: ["voice", linkedVoiceId ?? "unknown", choice.id],
          })
        : resolvedPlayerWithOutcome;
      const choiceLog = buildCheckChoiceLog(choice, checkResult, linkedVoiceName);

      let players = updatePlayer(state.players, playerId, () => resolvedPlayer);
      if (choice.crossCharacterEffect && checkResult.success) {
        players = applyRelationshipEffectToPlayers(players, playerId, choice.crossCharacterEffect, { round, eventId });
      }

      const choices = recordChoice(state.choices, eventId, playerId, choiceLog);
      const activeCharacterIndex = nextDecisionIndex(players, choices, eventId);
      const unlockedLinks = Array.from(
        new Set([
          ...state.unlockedLinks,
          ...(choice.unlockFlag && checkResult.success ? [choice.unlockFlag] : []),
          ...(outcome.flagsToAdd ?? []),
        ]),
      );
      const identityName = player.identityId ? identities[player.identityId].name : player.label;
      const checkName =
        choice.skillCheck.formula === "startupVenture"
          ? choice.skillCheck.label ?? "创业综合"
          : `${attributeLabels[choice.skillCheck.relatedAttribute]}检定`;
      const selectLog = createGameLog(
        `${identityName}选择了“${linkedVoiceName ?? "未命名声音"}”`,
        `进行${checkName}：${choice.title}。`,
        { round, eventId, characterId: playerId },
      );
      const rollLog = createGameLog(
        "检定结果",
        `投出 ${checkResult.diceTotal}，${formatCheckBase(checkResult)}，${formatBurnPlan(burnPlan)}，燃烧加成 ${checkResult.burnBonus}，最终值 ${checkResult.total} / DC ${checkResult.dc}，${checkResult.success ? "成功" : "失败"}。`,
        { round, eventId, characterId: playerId },
      );
      const resultLog = createGameLog(
        `结果：${outcome.logTitle}`,
          choice.crossCharacterEffect && checkResult.success
          ? `${outcome.logBody} ${choice.crossCharacterEffect.description}`
          : choice.unlockFlag
            ? `${outcome.logBody} 解锁新的城市记忆。`
            : outcome.logBody,
        { round, eventId, characterId: playerId },
      );

      return {
        players,
        characters: players,
        choices,
        currentDecisionIndex: activeCharacterIndex,
        activeCharacterIndex,
        unlockedLinks,
        gameLog: prependGameLogs(state.gameLog, [resultLog, rollLog, selectLog]),
      };
    }),
}));

import { identities } from "../data/identities";
import {
  ATTRIBUTE_MAX,
  ATTRIBUTE_MIN,
  type Attributes,
  type EventId,
  type IdentityId,
  type PlayerState,
} from "../types/game";
import { cloneVoiceProfiles } from "../data/voiceProfiles";

const baseStartupRate: Record<IdentityId, number> = {
  professor: 15,
  executive: 25,
  student: 18,
  cleaner: 8,
};

export const diceModifiers: Record<number, number> = {
  1: -20,
  2: -10,
  3: 0,
  4: 8,
  5: 15,
  6: 25,
};

export const initialAttributes: Attributes = {
  money: 5,
  cognition: 5,
  health: 5,
};

export function clamp(value: number): number {
  return Math.min(ATTRIBUTE_MAX, Math.max(ATTRIBUTE_MIN, value));
}

export function applyDelta(attributes: Attributes, delta: Partial<Attributes>): Attributes {
  return {
    money: clamp(attributes.money + (delta.money ?? 0)),
    cognition: clamp(attributes.cognition + (delta.cognition ?? 0)),
    health: clamp(attributes.health + (delta.health ?? 0)),
  };
}

export function createPlayer(id: PlayerState["id"], index: number): PlayerState {
  const name = `${index + 1}号玩家`;
  return {
    id,
    name,
    label: name,
    money: initialAttributes.money,
    cognition: initialAttributes.cognition,
    health: initialAttributes.health,
    attributes: { ...initialAttributes },
    fateFracture: 0,
    fateFractures: 0,
    age: 20,
    voiceProfiles: [],
    flags: [],
    relationshipEffects: [],
    historyLog: [],
    logs: [],
  };
}

export function applyIdentity(player: PlayerState, identityId: IdentityId): PlayerState {
  const identity = identities[identityId];
  const attributes = applyDelta(initialAttributes, identity.modifier);
  return {
    ...player,
    identity: identityId,
    identityId,
    money: attributes.money,
    cognition: attributes.cognition,
    health: attributes.health,
    attributes,
    voiceProfiles: cloneVoiceProfiles(identityId),
    historyLog: [
      {
        id: `identity-${player.id}-${identityId}`,
        round: 0,
        title: `身份揭示：${identity.name}`,
        body: identity.quote,
        createdAt: new Date().toISOString(),
        tags: ["identity", identityId],
      },
      ...player.historyLog,
    ],
    logs: [
      {
        title: `身份揭示：${identity.name}`,
        body: identity.quote,
      },
    ],
  };
}

export function getBaseEventDelta(eventId: EventId, identityId: IdentityId): Partial<Attributes> {
  void identityId;

  if (eventId === "pandemic") {
    return {};
  }

  if (eventId === "internet") {
    return {};
  }

  return {};
}

export function getBaseEventLog(eventId: EventId, identityId: IdentityId): string {
  void identityId;

  if (eventId === "pandemic") {
    return "疫情不是一次统一扣减，而是一组由身份、声音与选择打开的分岔。";
  }

  if (eventId === "internet") {
    return "互联网不再自动奖赏任何身份；每个人都必须在内心声音、属性燃烧与检定结果之间选择入口。";
  }

  return "创业潮来临，城市把选择伪装成命运。";
}

export function calculateStartupRate(
  identityId: IdentityId,
  attributes: Attributes,
  dice: number,
): number {
  const raw =
    baseStartupRate[identityId] +
    attributes.money * 4 +
    attributes.cognition * 5 +
    attributes.health * 2 +
    diceModifiers[dice];
  return Math.min(95, Math.max(5, raw));
}

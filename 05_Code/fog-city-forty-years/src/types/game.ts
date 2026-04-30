export const ATTRIBUTE_MIN = 0;
export const ATTRIBUTE_MAX = 12;

export type AttributeKey = "money" | "cognition" | "health";

export type Attributes = Record<AttributeKey, number>;

export type IdentityId = "professor" | "executive" | "student" | "cleaner";

export type EventId = "pandemic" | "internet" | "startup";

export type Stage = "start" | "gacha" | EventId | "ending";

export type PlayerId = "p1" | "p2" | "p3" | "p4";

export type VoiceStatePatch = Partial<Pick<VoiceProfile, "weakened" | "strengthened">>;

export type BurnPlan = Partial<Record<AttributeKey, number>>;

export interface VoiceProfile {
  id: string;
  name: string;
  tone: string;
  description: string;
  preferredAttribute: AttributeKey;
  weakened: boolean;
  strengthened: boolean;
}

export interface RelationshipEffect {
  id: string;
  sourceCharacterId?: PlayerId;
  targetCharacterId?: PlayerId | "all" | "others";
  targetIdentityId?: IdentityId;
  attributeDelta?: Partial<Attributes>;
  fateFractureDelta?: number;
  description: string;
  expiresAtRound?: number;
}

export interface HistoryLogEntry {
  id: string;
  round: number;
  title: string;
  body: string;
  createdAt: string;
  eventId?: EventId;
  tags?: string[];
}

export interface Character {
  id: PlayerId;
  name: string;
  identity?: IdentityId;
  money: number;
  cognition: number;
  health: number;
  fateFracture: number;
  age: number;
  voiceProfiles: VoiceProfile[];
  flags: string[];
  relationshipEffects: RelationshipEffect[];
  historyLog: HistoryLogEntry[];
}

export interface IdentityDefinition {
  id: IdentityId;
  name: string;
  subtitle: string;
  modifier: Partial<Attributes>;
  palette: {
    ink: string;
    soft: string;
    ring: string;
    glow: string;
  };
  icon: string;
  quote: string;
  bio: string;
  voiceProfiles: VoiceProfile[];
}

export interface PlayerState extends Character {
  label: string;
  identityId?: IdentityId;
  attributes: Attributes;
  fateFractures: number;
  logs: PlayerLog[];
}

export interface PlayerLog {
  title: string;
  body: string;
}

export interface SkillCheck {
  diceCount: "2d6";
  relatedAttribute: AttributeKey;
  dc: number;
  burnableAttributes: AttributeKey[];
  formula?: "attribute" | "startupVenture";
  label?: string;
}

export interface CheckBreakdownItem {
  label: string;
  value: number;
}

export interface CheckResult {
  dice: [number, number];
  diceTotal: number;
  relatedAttribute: AttributeKey;
  attributeValue: number;
  burnBonus: number;
  total: number;
  dc: number;
  success: boolean;
  formulaLabel?: string;
  breakdown?: CheckBreakdownItem[];
}

export interface NarrativeOutcome {
  statDelta?: Partial<Attributes>;
  fateFractureDelta?: number;
  voiceChanges?: Array<{ voiceId: string; state: VoiceStatePatch }>;
  flagsToAdd?: string[];
  relationshipEffects?: RelationshipEffect[];
  logTitle: string;
  logBody: string;
}

export interface NarrativeEventChoice {
  id: string;
  title: string;
  description: string;
  voiceId?: string;
  voiceByIdentity?: Partial<Record<IdentityId, string>>;
  skillCheck: SkillCheck;
  successOutcome: NarrativeOutcome;
  failureOutcome: NarrativeOutcome;
  crossCharacterEffect?: RelationshipEffect;
  unlockFlag?: string;
}

export interface EventDefinition {
  id: EventId;
  title: string;
  coverText: string;
  age: number;
  backgroundStyle: string;
  era: string;
  subtitle: string;
  scene: string;
  quote: string;
  coverClass: string;
  accentClass: string;
  availableChoices: NarrativeEventChoice[];
}

export interface EventChoiceLog {
  title: string;
  body: string;
  tone: "good" | "bad" | "neutral";
  dice?: number;
  successRate?: number;
  roll?: number;
}

export interface Ending {
  title: string;
  verdict: string;
  poemLines: string[];
  direction: string;
  monologue: string;
  trajectory: string[];
  archetype: string;
}

export interface GameLogEntry {
  id: string;
  round: number;
  title: string;
  body: string;
  eventId?: EventId;
  characterId?: PlayerId;
  createdAt: string;
}

export type EndingResults = Partial<Record<PlayerId, Ending>>;

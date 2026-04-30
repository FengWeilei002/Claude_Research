import bgInternet from "./assets/backgrounds/bg_internet.png";
import bgPandemic from "./assets/backgrounds/bg_pandemic.png";
import bgStartup from "./assets/backgrounds/bg_startup.png";
import fateCardBackImage from "./assets/cards/fate_card_back.png";
import cleanerPortrait from "./assets/characters/cleaner_portrait.png";
import executivePortrait from "./assets/characters/executive_portrait.png";
import professorPortrait from "./assets/characters/professor_portrait.png";
import studentPortrait from "./assets/characters/student_portrait.png";
import type { EventId, IdentityId, Stage } from "./types/game";

// Visual assets are centralized here so screens can share the same image anchors
// while keeping the narrative/event logic independent from presentation details.
export const characterPortraits: Record<IdentityId, string> = {
  professor: professorPortrait,
  executive: executivePortrait,
  student: studentPortrait,
  cleaner: cleanerPortrait,
};

export const eventBackgrounds: Record<EventId, string> = {
  pandemic: bgPandemic,
  internet: bgInternet,
  startup: bgStartup,
};

export const stageBackgrounds: Partial<Record<Stage, string>> = {
  start: bgPandemic,
  gacha: bgInternet,
  pandemic: bgPandemic,
  internet: bgInternet,
  startup: bgStartup,
  ending: bgInternet,
};

export const fateCardBack = fateCardBackImage;

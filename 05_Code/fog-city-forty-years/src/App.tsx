import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { GachaDrawScreen } from "./screens/GachaDrawScreen";
import { EndingScreen } from "./screens/EndingScreen";
import { EventScreen } from "./screens/EventScreen";
import { StartScreen } from "./screens/StartScreen";
import { eventMap } from "./data/events";
import { useGameStore } from "./store/gameStore";
import type { EventId, NarrativeEventChoice, PlayerState } from "./types/game";

const eventStages: EventId[] = ["pandemic", "internet", "startup"];
const narrativeEventStages: EventId[] = ["pandemic", "internet", "startup"];

function getChoiceVoiceId(choice: NarrativeEventChoice, player: PlayerState): string | undefined {
  if (player.identityId && choice.voiceByIdentity?.[player.identityId]) return choice.voiceByIdentity[player.identityId];
  return choice.voiceId;
}

function pickAutoNarrativeChoice(eventId: EventId, player: PlayerState): NarrativeEventChoice | undefined {
  const voiceIds = new Set(player.voiceProfiles.map((voice) => voice.id));
  return eventMap[eventId].availableChoices.find((choice) => {
    const voiceId = getChoiceVoiceId(choice, player);
    return Boolean(voiceId && voiceIds.has(voiceId));
  });
}

function useAutoPilot() {
  const stage = useGameStore((state) => state.stage);
  const autoMode = useGameStore((state) => state.autoMode);
  const players = useGameStore((state) => state.players);
  const drawnCount = useGameStore((state) => state.drawnCount);
  const choices = useGameStore((state) => state.choices);
  const startGame = useGameStore((state) => state.startGame);
  const drawNextIdentity = useGameStore((state) => state.drawNextIdentity);
  const advanceStage = useGameStore((state) => state.advanceStage);
  const resolveNarrativeChoice = useGameStore((state) => state.resolveNarrativeChoice);

  useEffect(() => {
    if (!autoMode || stage === "ending") return undefined;

    const timer = window.setTimeout(() => {
      if (stage === "start") {
        startGame();
        return;
      }

      if (stage === "gacha") {
        if (drawnCount < players.length) drawNextIdentity();
        else advanceStage();
        return;
      }

      if (eventStages.includes(stage)) {
        const eventId = stage;
        const eventChoices = choices[eventId] ?? {};
        const currentPlayer = players.find((player) => !eventChoices[player.id]);
        if (!currentPlayer) {
          advanceStage();
          return;
        }

        if (narrativeEventStages.includes(eventId)) {
          const choice = pickAutoNarrativeChoice(eventId, currentPlayer);
          if (!choice) return;
          resolveNarrativeChoice(currentPlayer.id, choice.id, {}, undefined, getChoiceVoiceId(choice, currentPlayer));
          return;
        }
      }
    }, stage === "gacha" ? 1800 : 2600);

    return () => window.clearTimeout(timer);
  }, [
    advanceStage,
    autoMode,
    choices,
    drawNextIdentity,
    drawnCount,
    players,
    resolveNarrativeChoice,
    stage,
    startGame,
  ]);
}

function App() {
  const stage = useGameStore((state) => state.stage);
  useAutoPilot();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.32 }}
      >
        {stage === "start" ? <StartScreen /> : null}
        {stage === "gacha" ? <GachaDrawScreen /> : null}
        {stage === "pandemic" ? <EventScreen eventId="pandemic" /> : null}
        {stage === "internet" ? <EventScreen eventId="internet" /> : null}
        {stage === "startup" ? <EventScreen eventId="startup" /> : null}
        {stage === "ending" ? <EndingScreen /> : null}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;

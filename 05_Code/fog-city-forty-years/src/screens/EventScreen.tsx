import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, HeartPulse, Wifi } from "lucide-react";
import { ControlBar } from "../components/ControlBar";
import { InnerVoicesPanel } from "../components/InnerVoicesPanel";
import { PlayerGrid } from "../components/PlayerGrid";
import { SkillCheckModal } from "../components/SkillCheckModal";
import { StageFrame } from "../components/StageFrame";
import { StartupDecisionPanel } from "../components/StartupDecisionPanel";
import { eventMap } from "../data/events";
import { identities } from "../data/identities";
import { getVoiceLinesForEvent } from "../data/voiceLines";
import { useGameStore } from "../store/gameStore";
import type { EventChoiceLog, EventId, NarrativeEventChoice, PlayerId, PlayerState } from "../types/game";
import { eventBackgrounds } from "../visualAssets";
import type { VoiceLineWithProfile } from "../data/voiceLines";

interface EventScreenProps {
  eventId: EventId;
}

const emptyEventChoices: Partial<Record<PlayerId, EventChoiceLog>> = {};
const narrativeEventIds: EventId[] = ["pandemic", "internet"];

function isNarrativeEvent(eventId: EventId): boolean {
  return narrativeEventIds.includes(eventId);
}

function getEventIcon(eventId: EventId) {
  if (eventId === "pandemic") return HeartPulse;
  if (eventId === "internet") return Wifi;
  return BriefcaseBusiness;
}

function getCoverOverlay(eventId: EventId) {
  if (eventId === "pandemic") {
    return "bg-[linear-gradient(180deg,rgba(232,240,238,0.10),rgba(7,11,12,0.84)),radial-gradient(circle_at_24%_12%,rgba(255,255,255,0.24),transparent_22rem)]";
  }
  if (eventId === "internet") {
    return "bg-[linear-gradient(180deg,rgba(6,47,56,0.18),rgba(7,11,12,0.82)),linear-gradient(90deg,rgba(14,165,233,0.12)_1px,transparent_1px)] bg-[length:auto,46px_46px]";
  }
  return "bg-[linear-gradient(180deg,rgba(245,158,11,0.08),rgba(7,11,12,0.86)),radial-gradient(circle_at_78%_16%,rgba(217,70,239,0.18),transparent_24rem)]";
}

function ChoiceHistory({ player, eventId }: { player: PlayerState; eventId: EventId }) {
  const choice = useGameStore((state) => state.choices[eventId]?.[player.id]);
  if (!choice) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border px-4 py-3 text-sm leading-6 ${
        choice.tone === "good"
          ? "border-emerald-200/30 bg-emerald-300/10 text-emerald-50"
          : choice.tone === "bad"
            ? "border-orange-200/30 bg-orange-300/10 text-orange-50"
            : "border-white/20 bg-white/10 text-zinc-200"
      }`}
    >
      <div className="font-medium">{choice.title}</div>
      <div className="mt-1 text-zinc-300">{choice.body}</div>
      {choice.dice ? (
        <div className="mt-2 font-mono text-xs text-zinc-300">
          骰子 {choice.dice} · DC {choice.successRate} · 总值 {choice.roll}
        </div>
      ) : null}
    </motion.div>
  );
}

export function EventScreen({ eventId }: EventScreenProps) {
  const [selectedVoiceId, setSelectedVoiceId] = useState<string | undefined>();
  const [pendingCheck, setPendingCheck] = useState<{
    line: VoiceLineWithProfile;
    choice: NarrativeEventChoice;
  } | null>(null);
  const [startupIntent, setStartupIntent] = useState<"undecided" | "launch">("undecided");
  const event = eventMap[eventId];
  const backgroundImage = eventBackgrounds[eventId];
  const players = useGameStore((state) => state.players);
  const choiceBook = useGameStore((state) => state.choices);
  const currentDecisionIndex = useGameStore((state) => state.currentDecisionIndex);
  const applyEventBase = useGameStore((state) => state.applyEventBase);
  const chooseStartup = useGameStore((state) => state.chooseStartup);
  const resolveNarrativeChoice = useGameStore((state) => state.resolveNarrativeChoice);
  const advanceStage = useGameStore((state) => state.advanceStage);

  useEffect(() => {
    applyEventBase(eventId);
  }, [applyEventBase, eventId]);

  const choices = choiceBook[eventId] ?? emptyEventChoices;
  const unresolvedPlayer = players.find((player) => !choices[player.id]);
  const currentPlayer = unresolvedPlayer ?? players[currentDecisionIndex];
  const allResolved = players.every((player) => choices[player.id]);
  const Icon = getEventIcon(eventId);
  const identity = currentPlayer?.identityId ? identities[currentPlayer.identityId] : undefined;
  const startupMotivationOpen = eventId === "startup" && startupIntent === "launch";
  const narrativeEvent = isNarrativeEvent(eventId) || startupMotivationOpen;
  const voiceLines = useMemo(
    () =>
      narrativeEvent && currentPlayer?.identityId
        ? getVoiceLinesForEvent(eventId, currentPlayer.identityId, currentPlayer.voiceProfiles)
        : [],
    [currentPlayer?.identityId, currentPlayer?.voiceProfiles, eventId, narrativeEvent],
  );

  useLayoutEffect(() => {
    setSelectedVoiceId(undefined);
    setPendingCheck(null);
    setStartupIntent("undecided");
  }, [currentPlayer?.id, eventId]);

  function handleVoiceConfirm(line: VoiceLineWithProfile, choice: NarrativeEventChoice) {
    setPendingCheck({ line, choice });
  }

  return (
    <StageFrame
      footer={
        <ControlBar canNext={allResolved} nextLabel={eventId === "startup" ? "生成命运结局" : "进入下一时代"} onNext={advanceStage}>
          <span className="text-sm text-zinc-400">
            {allResolved ? "本时代选择已完成" : `${currentPlayer?.label ?? ""}正在决策`}
          </span>
        </ControlBar>
      }
    >
      <div className="grid flex-1 grid-cols-1 gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <section className={`paper-edge relative overflow-hidden border bg-gradient-to-br ${event.coverClass} p-8 shadow-[0_26px_80px_rgba(0,0,0,0.32)] before:absolute before:inset-0 before:opacity-100`}>
          {backgroundImage ? <img src={backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.82]" /> : null}
          <div className={`absolute inset-0 ${getCoverOverlay(eventId)}`} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.76))]" />
          <div className="relative flex h-full min-h-[34rem] flex-col">
            <div className={`inline-flex w-fit items-center gap-3 border px-4 py-2 text-sm tracking-[0.24em] ${event.accentClass}`}>
              <Icon size={18} />
              {event.era}
            </div>
            <h2 className="mt-8 font-serif text-6xl leading-none text-[#f5ead2] text-shadow-soft">{event.title}</h2>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-zinc-100 text-shadow-soft">{event.subtitle}</p>
            <div className="mt-10 max-w-3xl border-l border-[#c79a58]/65 bg-black/[0.18] py-2 pl-5 font-serif text-2xl leading-10 text-[#f7f0df] backdrop-blur-[2px]">
              {event.quote}
            </div>
            <p className="mt-auto max-w-3xl bg-black/[0.26] p-4 text-base leading-8 text-zinc-200 backdrop-blur-sm">{event.scene}</p>
          </div>
        </section>

        <section className="flex min-h-0 flex-col gap-5">
          <PlayerGrid players={players} activePlayerId={allResolved ? undefined : currentPlayer?.id} />

          <div className="grid flex-1 grid-cols-1 gap-5 xl:grid-cols-[1fr_0.95fr]">
            <motion.div
              key={currentPlayer?.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="fog-panel p-6"
            >
              <div className="relative text-xs tracking-[0.3em] text-[#d8c8a4]/55">DECISION</div>
              <h3 className="relative mt-3 font-serif text-3xl text-[#f5ead2]">
                {allResolved ? "时代已经结算" : `${currentPlayer?.label} · ${identity?.name}`}
              </h3>
              <p className="relative mt-3 min-h-14 text-base leading-7 text-zinc-300">
                {allResolved
                  ? "主持人可以进入下一阶段。"
                  : eventId === "pandemic"
                    ? "白光从医院漫出，药品价格变成一道现实问题。"
                    : eventId === "internet"
                      ? "蓝光打开新入口，每个身份都要决定怎样面对移动互联网的重新定价。"
                      : "夜色电梯停在四十岁门口。先决定是否创业，再决定为了什么燃烧。"}
              </p>

              <div className={narrativeEvent || eventId === "startup" ? "mt-6" : "mt-6 grid grid-cols-1 gap-3 2xl:grid-cols-2"}>
                {isNarrativeEvent(eventId) ? (
                  <InnerVoicesPanel
                    lines={voiceLines}
                    choices={event.availableChoices}
                    selectedVoiceId={selectedVoiceId}
                    disabled={allResolved}
                    onSelect={(line) => setSelectedVoiceId(line.voiceId)}
                    onConfirm={handleVoiceConfirm}
                  />
                ) : null}

                {eventId === "startup" ? (
                  <StartupDecisionPanel
                    player={currentPlayer}
                    identityName={identity?.name}
                    lines={voiceLines}
                    choices={event.availableChoices}
                    selectedVoiceId={selectedVoiceId}
                    showMotives={startupMotivationOpen}
                    disabled={allResolved}
                    onLaunch={() => setStartupIntent("launch")}
                    onDecline={() => currentPlayer && chooseStartup(currentPlayer.id, false)}
                    onSelectVoice={(line) => setSelectedVoiceId(line.voiceId)}
                    onConfirm={handleVoiceConfirm}
                  />
                ) : null}
              </div>
            </motion.div>

            <div className="fog-panel space-y-3 overflow-hidden p-5">
              <div className="relative text-xs tracking-[0.3em] text-[#d8c8a4]/55">CHOICE LOG</div>
              <div className="max-h-[23rem] space-y-3 overflow-y-auto pr-1">
                <AnimatePresence initial={false}>
                  {players.map((player) => (
                    <ChoiceHistory key={player.id} player={player} eventId={eventId} />
                  ))}
                </AnimatePresence>
                {!Object.keys(choices).length ? (
                  <div className="border border-dashed border-white/20 px-4 py-10 text-center text-sm text-zinc-500">等待第一项选择</div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
      <SkillCheckModal
        open={Boolean(pendingCheck && currentPlayer)}
        character={currentPlayer}
        choice={pendingCheck?.choice}
        voiceLine={pendingCheck?.line}
        onClose={() => setPendingCheck(null)}
        onCommit={({ result, burnPlan, voiceId, choiceId }) => {
          if (!currentPlayer) return;
          resolveNarrativeChoice(currentPlayer.id, choiceId, burnPlan, result, voiceId);
          setPendingCheck(null);
        }}
      />
    </StageFrame>
  );
}

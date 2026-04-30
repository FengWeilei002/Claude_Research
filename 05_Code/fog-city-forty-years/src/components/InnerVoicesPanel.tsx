import type { NarrativeEventChoice } from "../types/game";
import type { VoiceLineWithProfile } from "../data/voiceLines";
import { ChoiceConfirmPanel } from "./ChoiceConfirmPanel";
import { VoiceCard } from "./VoiceCard";
import { VoiceDebateText } from "./VoiceDebateText";

interface InnerVoicesPanelProps {
  lines: VoiceLineWithProfile[];
  choices: NarrativeEventChoice[];
  selectedVoiceId?: string;
  disabled?: boolean;
  onSelect: (line: VoiceLineWithProfile) => void;
  onConfirm: (line: VoiceLineWithProfile, choice: NarrativeEventChoice) => void;
}

export function InnerVoicesPanel({
  lines,
  choices,
  selectedVoiceId,
  disabled = false,
  onSelect,
  onConfirm,
}: InnerVoicesPanelProps) {
  const selectedLine = lines.find((line) => line.voiceId === selectedVoiceId);
  const selectedChoice = selectedLine ? choices.find((choice) => choice.id === selectedLine.choiceId) : undefined;

  if (!lines.length) {
    return (
      <div className="border border-white/10 bg-black/30 px-5 py-8 text-center text-sm text-zinc-500">
        这个身份的内心声音还没有写入档案。
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-[#c79a58]/25 bg-[#080d0c]/78 p-5 shadow-[0_0_42px_rgba(8,47,73,0.16)]">
      <div className="absolute inset-0 voice-ink-wash opacity-60" />
      <div className="relative">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] text-[#d8c8a4]/55">INNER VOICES</div>
            <h3 className="mt-2 font-serif text-2xl text-[#f5ead2]">胸腔里的三方会议</h3>
          </div>
          <div className="hidden border border-[#c79a58]/25 px-3 py-2 text-xs text-[#9fb0ac] xl:block">
            点击一个声音，选择站队方向
          </div>
        </div>

        <VoiceDebateText lines={lines} selectedVoiceId={selectedVoiceId} />

        <div className="relative mt-5 grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#c79a58]/25 to-transparent xl:block" />
          {lines.map((line, index) => (
            <VoiceCard
              key={line.voiceId}
              line={line}
              index={index}
              selected={line.voiceId === selectedVoiceId}
              onSelect={disabled ? () => undefined : onSelect}
            />
          ))}
        </div>

        <div className="mt-5">
          <ChoiceConfirmPanel
            line={selectedLine}
            choice={selectedChoice}
            disabled={disabled || !selectedLine || !selectedChoice}
            onConfirm={() => {
              if (selectedLine && selectedChoice) onConfirm(selectedLine, selectedChoice);
            }}
          />
        </div>
      </div>
    </div>
  );
}

import { Check, Dice5 } from "lucide-react";
import type { NarrativeEventChoice } from "../types/game";
import type { VoiceLineWithProfile } from "../data/voiceLines";

const attributeLabels = {
  money: "金钱",
  cognition: "认知",
  health: "健康",
};

interface ChoiceConfirmPanelProps {
  line?: VoiceLineWithProfile;
  choice?: NarrativeEventChoice;
  disabled?: boolean;
  onConfirm: () => void;
}

export function ChoiceConfirmPanel({ line, choice, disabled = false, onConfirm }: ChoiceConfirmPanelProps) {
  if (!line || !choice) {
    return (
      <div className="border border-dashed border-[#c79a58]/25 bg-black/20 px-4 py-5 text-sm leading-7 text-[#9fb0ac]">
        选择一个声音。站队之后，系统会用 2d6 与相关属性进行检定。
      </div>
    );
  }

  return (
    <div className="border border-[#c79a58]/35 bg-[#0c1211]/80 p-4 shadow-[0_0_28px_rgba(10,40,38,0.24)]">
      <div className="text-xs tracking-[0.28em] text-[#d8c8a4]/60">CONFIRM</div>
      <h4 className="mt-2 font-serif text-xl text-[#f5ead2]">{choice.title}</h4>
      <p className="mt-2 text-sm leading-6 text-[#b8c6c2]">{choice.description}</p>
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
        <div className="border border-white/10 bg-white/5 px-3 py-2 text-[#d8c8a4]">
          <div className="text-[#8fa39f]">骰子</div>
          <div className="mt-1 font-mono">2d6</div>
        </div>
        <div className="border border-white/10 bg-white/5 px-3 py-2 text-[#d8c8a4]">
          <div className="text-[#8fa39f]">属性</div>
          <div className="mt-1">
            {choice.skillCheck.formula === "startupVenture" ? "创业总值" : attributeLabels[choice.skillCheck.relatedAttribute]}
          </div>
        </div>
        <div className="border border-white/10 bg-white/5 px-3 py-2 text-[#d8c8a4]">
          <div className="text-[#8fa39f]">难度</div>
          <div className="mt-1 font-mono">DC {choice.skillCheck.dc}</div>
        </div>
      </div>
      <button
        type="button"
        data-testid="voice-confirm"
        disabled={disabled}
        onClick={onConfirm}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 border border-[#d9b16d]/65 bg-[#e9dec2] px-4 text-sm font-medium text-[#111514] transition hover:bg-[#fff4d8] disabled:cursor-not-allowed disabled:opacity-55"
      >
        <Dice5 size={17} />
        站队并检定
        <Check size={17} />
      </button>
    </div>
  );
}

import { motion } from "framer-motion";
import { Brain, HeartPulse, Wallet } from "lucide-react";
import type { AttributeKey } from "../types/game";
import type { VoiceLineWithProfile } from "../data/voiceLines";

const attributeLabels: Record<AttributeKey, string> = {
  money: "金钱",
  cognition: "认知",
  health: "健康",
};

const attributeIcons: Record<AttributeKey, typeof Wallet> = {
  money: Wallet,
  cognition: Brain,
  health: HeartPulse,
};

interface VoiceCardProps {
  line: VoiceLineWithProfile;
  index: number;
  selected: boolean;
  onSelect: (line: VoiceLineWithProfile) => void;
}

export function VoiceCard({ line, index, selected, onSelect }: VoiceCardProps) {
  const AttributeIcon = attributeIcons[line.profile.preferredAttribute];
  const offsets = ["xl:-translate-y-3 xl:rotate-[-1.5deg]", "xl:translate-y-5 xl:rotate-[1deg]", "xl:-translate-y-1 xl:rotate-[-0.5deg]"];

  return (
    <motion.button
      type="button"
      data-testid={`voice-card-${line.voiceId}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.38 }}
      onClick={() => onSelect(line)}
      className={`group relative min-h-[12.5rem] overflow-hidden border p-4 text-left transition ${offsets[index] ?? ""} ${
        selected
          ? "border-[#c79a58] bg-[#f3ead5]/12 shadow-[0_0_34px_rgba(199,154,88,0.24)]"
          : "border-[#c79a58]/28 bg-[#101514]/72 hover:border-[#c79a58]/55 hover:bg-[#17211f]/82"
      }`}
    >
      <div className="absolute inset-0 opacity-35 mix-blend-soft-light voice-paper-texture" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#c79a58]/70 to-transparent" />
      <div className="absolute right-4 top-4 h-7 w-7 border border-[#c79a58]/35" />
      {selected ? <div className="absolute inset-x-0 top-0 h-0.5 bg-[#d9b16d]" /> : null}

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs tracking-[0.24em] text-[#d8c8a4]/60">VOICE {index + 1}</div>
            <h4 className="mt-2 font-serif text-2xl text-[#f2ead8]">{line.profile.name}</h4>
          </div>
          <div className="inline-flex items-center gap-1 border border-[#c79a58]/35 bg-black/20 px-2 py-1 text-xs text-[#e5d0a5]">
            <AttributeIcon size={14} />
            {attributeLabels[line.profile.preferredAttribute]}
          </div>
        </div>

        <p className="mt-4 font-serif text-lg leading-8 text-[#f7f0df]">{line.suggestion}</p>
        <div className="mt-4 border-t border-[#c79a58]/20 pt-3 text-sm leading-6 text-[#b8c6c2]">{line.profile.tone}</div>
      </div>
    </motion.button>
  );
}

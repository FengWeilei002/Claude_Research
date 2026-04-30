import { motion } from "framer-motion";
import type { VoiceLineWithProfile } from "../data/voiceLines";

interface VoiceDebateTextProps {
  lines: VoiceLineWithProfile[];
  selectedVoiceId?: string;
}

export function VoiceDebateText({ lines, selectedVoiceId }: VoiceDebateTextProps) {
  const selectedLine = lines.find((line) => line.voiceId === selectedVoiceId);

  return (
    <div className="relative overflow-hidden border border-[#c79a58]/25 bg-[#0b1110]/70 px-5 py-4">
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#c79a58]/60 to-transparent" />
      <div className="text-xs tracking-[0.28em] text-[#d8c8a4]/55">INNER DEBATE</div>
      <div className="mt-3 grid gap-2">
        {lines.map((line, index) => (
          <motion.p
            key={line.voiceId}
            initial={{ opacity: 0, x: index % 2 === 0 ? -8 : 8 }}
            animate={{ opacity: selectedVoiceId && line.voiceId !== selectedVoiceId ? 0.48 : 1, x: 0 }}
            className={`text-sm leading-6 ${
              selectedVoiceId === line.voiceId ? "text-[#f4dfb0]" : "text-[#b9c8c4]"
            }`}
          >
            <span className="font-serif text-[#e5d0a5]">{line.profile.name}</span>
            <span className="mx-2 text-[#c79a58]/50">/</span>
            {line.debateLine}
          </motion.p>
        ))}
      </div>
      <div className="mt-4 border-l border-[#c79a58]/45 pl-4 font-serif text-lg leading-8 text-[#f5ead2]">
        {selectedLine ? `你站到「${selectedLine.profile.name}」一边。其他声音没有消失，只是退到雾后。` : "三种声音从同一个胸腔里升起，互相抵消，也互相逼近。"}
      </div>
    </div>
  );
}

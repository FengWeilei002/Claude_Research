import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { identities } from "../data/identities";
import type { PlayerState } from "../types/game";
import { characterPortraits } from "../visualAssets";
import { AttributeBars } from "./AttributeBars";

interface PlayerPanelProps {
  player: PlayerState;
  active?: boolean;
  revealed?: boolean;
}

export function PlayerPanel({ player, active = false, revealed = true }: PlayerPanelProps) {
  const identity = player.identityId ? identities[player.identityId] : undefined;
  const ink = identity?.palette.ink ?? "#71717a";
  const portrait = identity ? characterPortraits[identity.id] : undefined;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="fog-panel relative overflow-hidden p-4 transition"
      style={{
        borderColor: active ? `${ink}dd` : undefined,
        boxShadow: active ? `0 0 38px ${ink}55` : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: identity ? `linear-gradient(90deg, ${identity.palette.ink}, transparent)` : undefined }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs tracking-[0.22em] text-[#d8c8a4]/55">{player.label}</div>
          <h3 className="mt-1 font-serif text-xl text-[#f5ead2]">{revealed && identity ? identity.name : "身份未揭示"}</h3>
          <p className="mt-1 min-h-5 text-sm text-zinc-400">{revealed && identity ? identity.subtitle : "等待抽取"}</p>
        </div>
        <div
          className="portrait-frame relative grid size-14 shrink-0 place-items-center text-sm font-semibold"
          style={{
            borderColor: `${ink}88`,
            color: ink,
            background: `${ink}18`,
          }}
        >
          <span className="relative z-0">{identity?.icon ?? "?"}</span>
          {revealed && portrait ? <img src={portrait} alt="" className="absolute inset-0 z-10 h-full w-full object-cover" /> : null}
          <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
        </div>
      </div>

      <div className="relative mt-5">
        <AttributeBars attributes={player.attributes} compact />
      </div>

      <div className="relative mt-4 flex items-center justify-between border-t border-[#c79a58]/20 pt-3 text-xs text-zinc-400">
        <span>命运裂痕</span>
        <span className="inline-flex items-center gap-1 font-mono text-orange-200">
          <AlertTriangle size={14} />
          {player.fateFractures}
        </span>
      </div>
    </motion.article>
  );
}

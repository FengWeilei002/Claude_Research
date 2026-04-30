import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { identities } from "../data/identities";
import type { PlayerState } from "../types/game";
import { AttributeBars } from "./AttributeBars";

interface PlayerPanelProps {
  player: PlayerState;
  active?: boolean;
  revealed?: boolean;
}

export function PlayerPanel({ player, active = false, revealed = true }: PlayerPanelProps) {
  const identity = player.identityId ? identities[player.identityId] : undefined;
  const ink = identity?.palette.ink ?? "#71717a";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden border bg-zinc-950/70 p-4 backdrop-blur-md transition ${
        active ? "border-white/70 shadow-glow" : "border-white/10"
      }`}
      style={{
        boxShadow: active ? `0 0 36px ${ink}55` : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: identity ? `linear-gradient(90deg, ${identity.palette.ink}, transparent)` : undefined }}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs tracking-[0.22em] text-zinc-500">{player.label}</div>
          <h3 className="mt-1 font-serif text-xl text-zinc-50">{revealed && identity ? identity.name : "身份未揭示"}</h3>
          <p className="mt-1 min-h-5 text-sm text-zinc-400">{revealed && identity ? identity.subtitle : "等待抽取"}</p>
        </div>
        <div
          className="grid size-11 place-items-center border text-sm font-semibold"
          style={{
            borderColor: `${ink}88`,
            color: ink,
            background: `${ink}18`,
          }}
        >
          {identity?.icon ?? "?"}
        </div>
      </div>

      <div className="mt-5">
        <AttributeBars attributes={player.attributes} compact />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-zinc-400">
        <span>命运裂痕</span>
        <span className="inline-flex items-center gap-1 font-mono text-orange-200">
          <AlertTriangle size={14} />
          {player.fateFractures}
        </span>
      </div>
    </motion.article>
  );
}

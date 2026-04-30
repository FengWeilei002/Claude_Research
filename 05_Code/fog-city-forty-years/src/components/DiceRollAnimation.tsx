import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { CheckResult } from "../types/game";

interface DiceRollAnimationProps {
  rolling: boolean;
  result?: CheckResult;
}

export function DiceRollAnimation({ rolling, result }: DiceRollAnimationProps) {
  const [preview, setPreview] = useState<[number, number]>([1, 1]);

  useEffect(() => {
    if (!rolling) return undefined;
    const interval = window.setInterval(() => {
      setPreview([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]);
    }, 90);
    return () => window.clearInterval(interval);
  }, [rolling]);

  const dice = result ? result.dice : preview;

  return (
    <div className="border border-[#c79a58]/25 bg-black/30 p-4">
      <div className="text-xs tracking-[0.26em] text-[#d8c8a4]/55">2D6 ROLL</div>
      <div className="mt-4 flex items-center justify-center gap-5">
        {dice.map((value, index) => (
          <motion.div
            key={`${index}-${value}`}
            animate={rolling ? { rotate: [0, 12, -10, 8, 0], scale: [1, 1.08, 0.98, 1.04, 1] } : { rotate: 0, scale: 1 }}
            transition={{ duration: rolling ? 0.28 : 0.2 }}
            className="grid size-20 place-items-center border border-[#d9b16d]/60 bg-[#efe3c7] font-mono text-4xl text-[#121615] shadow-[0_0_28px_rgba(217,177,109,0.18)]"
          >
            {value}
          </motion.div>
        ))}
      </div>
      <div className="mt-3 text-center font-mono text-sm text-[#d8c8a4]">
        {rolling ? "骰子正在雾里翻滚" : result ? `骰面合计 ${result.diceTotal}` : "等待投骰"}
      </div>
    </div>
  );
}

import { Brain, HeartPulse, Minus, Plus, Wallet } from "lucide-react";
import { burnBonusByAttribute } from "../utils/checks";
import type { AttributeKey, BurnPlan, PlayerState, SkillCheck } from "../types/game";

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

interface BurnAttributePanelProps {
  character: PlayerState;
  check: SkillCheck;
  burnPlan: BurnPlan;
  disabled?: boolean;
  onChange: (burnPlan: BurnPlan) => void;
}

export function BurnAttributePanel({ character, check, burnPlan, disabled = false, onChange }: BurnAttributePanelProps) {
  function changeBurn(attribute: AttributeKey, delta: number) {
    const current = burnPlan[attribute] ?? 0;
    const max = character[attribute];
    const next = Math.min(max, Math.max(0, current + delta));
    onChange({ ...burnPlan, [attribute]: next });
  }

  return (
    <div className="border border-[#c79a58]/25 bg-[#0a0f0e]/72 p-4">
      <div className="text-xs tracking-[0.26em] text-[#d8c8a4]/55">BURN ATTRIBUTE</div>
      <p className="mt-2 text-sm leading-6 text-[#aebfba]">
        投骰前可以燃烧属性换取加成。属性不会被燃烧到 0 以下。
        {check.formula === "startupVenture" ? "创业检定会在燃烧后重新计算金钱、认知与健康折半。" : ""}
      </p>
      <div className="mt-4 grid gap-3">
        {check.burnableAttributes.map((attribute) => {
          const Icon = attributeIcons[attribute];
          const value = burnPlan[attribute] ?? 0;
          const max = character[attribute];
          const bonus = value * burnBonusByAttribute[attribute];
          return (
            <div key={attribute} className="grid grid-cols-[1fr_auto] items-center gap-3 border border-white/10 bg-white/5 px-3 py-3">
              <div>
                <div className="flex items-center gap-2 text-sm text-[#f1e4c8]">
                  <Icon size={16} />
                  {attributeLabels[attribute]}
                  <span className="font-mono text-xs text-[#93aaa5]">当前 {max}</span>
                </div>
                <div className="mt-1 text-xs text-[#93aaa5]">
                  燃烧 {value} 点 · 加成 +{bonus}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={disabled || value <= 0}
                  onClick={() => changeBurn(attribute, -1)}
                  className="grid size-8 place-items-center border border-[#c79a58]/30 bg-black/20 text-[#e9dec2] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <Minus size={15} />
                </button>
                <span className="w-6 text-center font-mono text-sm text-[#f5ead2]">{value}</span>
                <button
                  type="button"
                  disabled={disabled || value >= max}
                  onClick={() => changeBurn(attribute, 1)}
                  className="grid size-8 place-items-center border border-[#c79a58]/45 bg-[#c79a58]/10 text-[#f5ead2] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

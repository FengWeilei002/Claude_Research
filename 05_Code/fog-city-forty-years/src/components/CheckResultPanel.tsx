import { CheckCircle2, XCircle } from "lucide-react";
import type { CheckResult, NarrativeOutcome } from "../types/game";

const attributeLabels = {
  money: "金钱",
  cognition: "认知",
  health: "健康",
};

interface CheckResultPanelProps {
  result: CheckResult;
  outcome: NarrativeOutcome;
}

export function CheckResultPanel({ result, outcome }: CheckResultPanelProps) {
  const Icon = result.success ? CheckCircle2 : XCircle;
  const attributeValue = result.formulaLabel
    ? `${result.formulaLabel} ${result.attributeValue}`
    : `${attributeLabels[result.relatedAttribute]} ${result.attributeValue}`;

  return (
    <div
      className={`border p-4 ${
        result.success ? "border-emerald-200/35 bg-emerald-300/10" : "border-orange-200/35 bg-orange-300/10"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-[#f5ead2]">
          <Icon size={18} />
          {result.success ? "CHECK SUCCESS" : "CHECK FAILURE"}
        </div>
        <div className="font-mono text-sm text-[#f5ead2]">
          {result.total} / DC {result.dc}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-2 text-xs">
        <ResultCell label="骰子" value={`${result.dice[0]} + ${result.dice[1]} = ${result.diceTotal}`} />
        <ResultCell label="底数" value={attributeValue} />
        <ResultCell label="燃烧" value={`+${result.burnBonus}`} />
        <ResultCell label="总值" value={`${result.total}`} />
        <ResultCell label="目标" value={`DC ${result.dc}`} />
      </div>

      {result.breakdown?.length ? (
        <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
          {result.breakdown.map((item) => (
            <ResultCell key={item.label} label={item.label} value={`${item.value >= 0 ? "+" : ""}${item.value}`} />
          ))}
        </div>
      ) : null}

      <div className="mt-4 border-l border-[#d9b16d]/45 pl-4">
        <div className="font-serif text-xl text-[#f5ead2]">{outcome.logTitle}</div>
        <p className="mt-2 text-sm leading-7 text-[#d7e0dc]">{outcome.logBody}</p>
      </div>
    </div>
  );
}

function ResultCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-black/20 px-3 py-2">
      <div className="text-[#93aaa5]">{label}</div>
      <div className="mt-1 font-mono text-[#f5ead2]">{value}</div>
    </div>
  );
}

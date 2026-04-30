import { ATTRIBUTE_MAX, type Attributes } from "../types/game";

const attributeLabels: Record<keyof Attributes, string> = {
  money: "金钱",
  cognition: "认知",
  health: "健康",
};

const attributeColors: Record<keyof Attributes, string> = {
  money: "from-amber-300 to-yellow-500",
  cognition: "from-cyan-300 to-blue-500",
  health: "from-emerald-300 to-teal-500",
};

interface AttributeBarsProps {
  attributes: Attributes;
  compact?: boolean;
}

export function AttributeBars({ attributes, compact = false }: AttributeBarsProps) {
  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      {(Object.keys(attributeLabels) as Array<keyof Attributes>).map((key) => {
        const value = attributes[key];
        const width = `${(value / ATTRIBUTE_MAX) * 100}%`;
        return (
          <div key={key} className="grid grid-cols-[3rem_1fr_2rem] items-center gap-3 text-sm">
            <span className="text-zinc-300">{attributeLabels[key]}</span>
            <div className="h-2.5 overflow-hidden rounded-sm bg-white/10 ring-1 ring-white/10">
              <div
                className={`h-full rounded-sm bg-gradient-to-r ${attributeColors[key]} transition-all duration-500`}
                style={{ width }}
              />
            </div>
            <span className="font-mono text-zinc-100">{value}</span>
          </div>
        );
      })}
    </div>
  );
}

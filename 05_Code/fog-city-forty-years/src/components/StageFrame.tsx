import type { ReactNode } from "react";
import { useGameStore } from "../store/gameStore";
import type { Stage } from "../types/game";
import { stageBackgrounds } from "../visualAssets";

const stageCopy: Record<Stage, string> = {
  start: "序章",
  gacha: "身份抽取",
  pandemic: "疫情冲击",
  internet: "互联网冲击",
  startup: "创业潮",
  ending: "AI 与全球化未来",
};

interface StageFrameProps {
  children: ReactNode;
  footer?: ReactNode;
  variant?: "default" | "silver";
  backgroundImage?: string;
}

export function StageFrame({ children, footer, variant = "default", backgroundImage }: StageFrameProps) {
  const stage = useGameStore((state) => state.stage);
  const visualBackground = backgroundImage ?? stageBackgrounds[stage];
  const silver = variant === "silver";

  return (
    <main
      className={`noise-layer relative min-h-screen overflow-hidden text-zinc-100 ${
        silver ? "bg-[#dbe4e6]" : "bg-[var(--fog-ink)]"
      }`}
    >
      {visualBackground ? (
        <img
          src={visualBackground}
          alt=""
          aria-hidden="true"
          className={`stage-image absolute inset-0 h-full w-full object-cover ${silver ? "opacity-[0.34]" : "opacity-70"}`}
        />
      ) : null}
      <div
        className={`absolute inset-0 ${
          silver
            ? "bg-[linear-gradient(180deg,rgba(219,228,230,0.40),rgba(7,11,12,0.72)),radial-gradient(circle_at_72%_12%,rgba(255,255,255,0.36),transparent_26rem)]"
            : "ink-scrim"
        }`}
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.80)),repeating-linear-gradient(90deg,rgba(238,228,206,0.09)_0_1px,transparent_1px_84px)]" />
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-[#c79a58]/25 bg-[#050807]/45 px-8 py-4 backdrop-blur-xl">
        <div className="font-serif text-xl tracking-[0.22em] text-[#f3ead5] text-shadow-soft">雾城四十年</div>
        <div className="text-sm tracking-[0.28em] text-[#d8c8a4]/70">{stageCopy[stage]}</div>
      </div>
      <div className="relative z-20 flex min-h-screen flex-col pt-[4.5rem]">
        <section className="flex flex-1 flex-col px-8 py-6 xl:px-12">{children}</section>
        {footer}
      </div>
    </main>
  );
}

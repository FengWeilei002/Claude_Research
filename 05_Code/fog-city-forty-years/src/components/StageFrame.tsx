import type { ReactNode } from "react";
import { useGameStore } from "../store/gameStore";
import type { Stage } from "../types/game";

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
}

export function StageFrame({ children, footer, variant = "default" }: StageFrameProps) {
  const stage = useGameStore((state) => state.stage);

  return (
    <main
      className={`noise-layer relative min-h-screen overflow-hidden text-zinc-100 ${
        variant === "silver" ? "bg-zinc-100" : "bg-zinc-950"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.3),rgba(8,8,10,0.92)),linear-gradient(120deg,rgba(34,211,238,0.10),transparent_36%),linear-gradient(240deg,rgba(245,158,11,0.10),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.82)),repeating-linear-gradient(90deg,rgba(255,255,255,0.10)_0_1px,transparent_1px_84px)]" />
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-black/25 px-8 py-4 backdrop-blur-xl">
        <div className="font-serif text-xl tracking-[0.22em] text-zinc-50">雾城四十年</div>
        <div className="text-sm tracking-[0.28em] text-zinc-400">{stageCopy[stage]}</div>
      </div>
      <div className="relative z-20 flex min-h-screen flex-col pt-[4.5rem]">
        <section className="flex flex-1 flex-col px-8 py-6 xl:px-12">{children}</section>
        {footer}
      </div>
    </main>
  );
}

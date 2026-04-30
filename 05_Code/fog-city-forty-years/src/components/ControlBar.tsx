import { Pause, Play, RotateCcw, SkipForward } from "lucide-react";
import type { ReactNode } from "react";
import { useGameStore } from "../store/gameStore";

interface ControlBarProps {
  canNext?: boolean;
  nextLabel?: string;
  onNext?: () => void;
  children?: ReactNode;
}

export function ControlBar({ canNext = true, nextLabel = "下一步", onNext, children }: ControlBarProps) {
  const autoMode = useGameStore((state) => state.autoMode);
  const toggleAutoMode = useGameStore((state) => state.toggleAutoMode);
  const resetGame = useGameStore((state) => state.resetGame);
  const advanceStage = useGameStore((state) => state.advanceStage);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">{children}</div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleAutoMode}
          className={`inline-flex h-11 items-center gap-2 border px-4 text-sm transition ${
            autoMode ? "border-cyan-200/60 bg-cyan-100/20 text-cyan-50" : "border-white/20 bg-white/5 text-zinc-200 hover:bg-white/10"
          }`}
        >
          {autoMode ? <Pause size={17} /> : <Play size={17} />}
          自动演示
        </button>
        <button
          type="button"
          onClick={resetGame}
          className="inline-flex h-11 items-center gap-2 border border-white/20 bg-white/5 px-4 text-sm text-zinc-200 transition hover:bg-white/10"
        >
          <RotateCcw size={17} />
          重置
        </button>
        <button
          type="button"
          disabled={!canNext}
          onClick={onNext ?? advanceStage}
          className="inline-flex h-11 items-center gap-2 border border-cyan-100/50 bg-cyan-50 px-5 text-sm font-medium text-zinc-950 transition hover:bg-white disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-zinc-500"
        >
          {nextLabel}
          <SkipForward size={17} />
        </button>
      </div>
    </div>
  );
}

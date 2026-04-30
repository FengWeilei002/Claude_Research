import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ControlBar } from "../components/ControlBar";
import { IdentityCard } from "../components/IdentityCard";
import { PlayerGrid } from "../components/PlayerGrid";
import { StageFrame } from "../components/StageFrame";
import { identities } from "../data/identities";
import { useGameStore } from "../store/gameStore";
import { characterPortraits } from "../visualAssets";

export function GachaDrawScreen() {
  const players = useGameStore((state) => state.players);
  const drawOrder = useGameStore((state) => state.drawOrder);
  const drawnCount = useGameStore((state) => state.drawnCount);
  const drawNextIdentity = useGameStore((state) => state.drawNextIdentity);
  const advanceStage = useGameStore((state) => state.advanceStage);
  const allDrawn = drawnCount >= players.length;
  const currentPlayer = players[Math.min(drawnCount, players.length - 1)];
  const latestIdentityId = drawnCount > 0 ? drawOrder[drawnCount - 1] : undefined;
  const cardIdentityId = drawnCount > 0 ? latestIdentityId : drawOrder[0];

  return (
    <StageFrame
      footer={
        <ControlBar canNext={allDrawn} nextLabel="进入疫情冲击" onNext={advanceStage}>
          <span className="text-sm text-zinc-400">{allDrawn ? "四份身份已归档" : `${currentPlayer.label}等待抽取`}</span>
        </ControlBar>
      }
    >
      <div className="grid flex-1 grid-cols-1 gap-8 xl:grid-cols-[28rem_1fr]">
        <section className="flex flex-col justify-center">
          <div className="mb-6">
            <div className="text-xs tracking-[0.35em] text-[#d8c8a4]/70">IDENTITY DRAW</div>
            <h2 className="mt-3 font-serif text-4xl text-[#f5ead2] text-shadow-soft">抽取身份</h2>
            <p className="mt-3 text-base leading-7 text-zinc-300">四名玩家依次翻开档案卡。身份会改变初始金钱、认知与健康。</p>
          </div>

          <div className="relative grid place-items-center py-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(217,70,239,0.16),transparent_34%),radial-gradient(circle_at_50%_52%,rgba(199,154,88,0.18),transparent_40%)]" />
            <IdentityCard
              key={`${drawnCount}-${cardIdentityId ?? "hidden"}`}
              identityId={cardIdentityId}
              flipped={drawnCount > 0 || allDrawn}
              label={allDrawn ? "抽取完成" : currentPlayer.label}
            />
          </div>

          <button
            type="button"
            disabled={allDrawn}
            onClick={drawNextIdentity}
            className="mt-4 inline-flex h-14 items-center justify-center gap-3 border border-[#e0bb78]/65 bg-[#eee4ce] px-7 text-base font-medium text-[#111514] shadow-[0_0_34px_rgba(199,154,88,0.18)] transition hover:bg-[#fff4d8] disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-zinc-500"
          >
            <Sparkles size={20} />
            {allDrawn ? "身份已全部揭示" : `为${currentPlayer.label}抽卡`}
          </button>
        </section>

        <section className="flex flex-col justify-center gap-5">
          <PlayerGrid players={players} revealed />
          <AnimatePresence mode="popLayout">
            {drawnCount > 0 && latestIdentityId ? (
              <motion.div
                key={drawnCount}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="fog-panel p-6"
              >
                <div className="relative text-xs tracking-[0.28em] text-[#d8c8a4]/55">最新揭示</div>
                <div className="relative mt-3 flex flex-wrap items-center gap-4">
                  <div className="portrait-frame size-16 shrink-0">
                    <img src={characterPortraits[latestIdentityId]} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-[#f5ead2]">{identities[latestIdentityId].name}</h3>
                    <span className="text-sm text-zinc-400">{players[drawnCount - 1]?.label}</span>
                  </div>
                </div>
                <p className="relative mt-4 max-w-3xl border-l border-[#c79a58]/45 pl-4 font-serif text-xl leading-9 text-zinc-200">
                  {identities[latestIdentityId].quote}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
      </div>
    </StageFrame>
  );
}

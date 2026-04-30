import { motion } from "framer-motion";
import { CloudRain, Play } from "lucide-react";
import { useGameStore } from "../store/gameStore";
import { ControlBar } from "../components/ControlBar";
import { DialogueBox } from "../components/DialogueBox";
import { StageFrame } from "../components/StageFrame";

export function StartScreen() {
  const startGame = useGameStore((state) => state.startGame);

  return (
    <StageFrame
      footer={
        <ControlBar nextLabel="开始抽取身份" onNext={startGame}>
          <span className="text-sm text-zinc-400">主持人推进：序章</span>
        </ControlBar>
      }
    >
      <div className="grid flex-1 grid-cols-1 items-center gap-10 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 border border-cyan-100/25 bg-cyan-100/10 px-4 py-2 text-sm tracking-[0.28em] text-cyan-50"
          >
            <CloudRain size={18} />
            21世纪初 · 中国大城市
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-8 font-serif text-7xl leading-[0.95] text-zinc-50 xl:text-8xl"
          >
            雾城四十年
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="mt-7 max-w-3xl text-xl leading-10 text-zinc-300"
          >
            四名参与者将在同一座城市中抽取身份。疫情、互联网、创业潮与 AI 未来依次穿过他们的身体、钱包和认知，最后留下不同的人生命运。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            type="button"
            onClick={startGame}
            className="mt-10 inline-flex h-14 items-center gap-3 border border-cyan-100/50 bg-cyan-50 px-7 text-base font-medium text-zinc-950 transition hover:bg-white"
          >
            <Play size={20} />
            进入档案室
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="relative min-h-[34rem] overflow-hidden border border-white/10 bg-black/40 p-8 shadow-glow backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10),transparent_42%),radial-gradient(circle_at_68%_26%,rgba(34,211,238,0.20),transparent_28%)]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.88)),repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0_2px,transparent_2px_74px)]" />
          <div className="relative h-full">
            <div className="text-xs tracking-[0.35em] text-zinc-400">RAIN CITY / LIFE FILE</div>
            <div className="mt-20 grid grid-cols-4 gap-3">
              {["医院白光", "网吧蓝光", "写字楼金光", "银白雾气"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ height: 80 }}
                  animate={{ height: [120, 220, 150, 260][index] }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  className="self-end border border-white/10 bg-white/10"
                >
                  <div className="h-full bg-gradient-to-t from-white/20 to-transparent" />
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <DialogueBox
                eyebrow="开场独白"
                title="城市不是背景，城市是第五名玩家。"
                body="它给某些人霓虹，给某些人白光；给某些人入口，也给某些人一张永远填不完的表。"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </StageFrame>
  );
}

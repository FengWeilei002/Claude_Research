import { motion } from "framer-motion";
import { CloudRain, Play } from "lucide-react";
import { useGameStore } from "../store/gameStore";
import { ControlBar } from "../components/ControlBar";
import { DialogueBox } from "../components/DialogueBox";
import { StageFrame } from "../components/StageFrame";
import { eventBackgrounds } from "../visualAssets";

const eraPanels = [
  { label: "医院白光", image: eventBackgrounds.pandemic },
  { label: "网吧蓝光", image: eventBackgrounds.internet },
  { label: "写字楼金光", image: eventBackgrounds.startup },
];

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
            className="inline-flex items-center gap-3 border border-[#c79a58]/35 bg-black/30 px-4 py-2 text-sm tracking-[0.28em] text-[#f3ead5] backdrop-blur-md"
          >
            <CloudRain size={18} />
            21世纪初 · 中国大城市
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-8 font-serif text-7xl leading-[0.95] text-[#f5ead2] text-shadow-soft xl:text-8xl"
          >
            雾城四十年
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="mt-7 max-w-3xl text-xl leading-10 text-zinc-200 text-shadow-soft"
          >
            四名参与者将在同一座城市中抽取身份。疫情、互联网、创业潮与 AI 未来依次穿过他们的身体、钱包和认知，最后留下不同的人生命运。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            type="button"
            onClick={startGame}
            className="mt-10 inline-flex h-14 items-center gap-3 border border-[#e0bb78]/65 bg-[#eee4ce] px-7 text-base font-medium text-[#111514] shadow-[0_0_34px_rgba(199,154,88,0.18)] transition hover:bg-[#fff4d8]"
          >
            <Play size={20} />
            进入档案室
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="fog-panel relative min-h-[34rem] p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,rgba(217,70,239,0.14),transparent_26%),linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />
          <div className="relative h-full">
            <div className="text-xs tracking-[0.35em] text-[#d8c8a4]/65">RAIN CITY / LIFE FILE</div>
            <div className="mt-12 grid h-[22rem] grid-cols-3 gap-3">
              {eraPanels.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  className="relative overflow-hidden border border-[#c79a58]/20 bg-black/35"
                >
                  <img src={item.image} alt="" className="h-full w-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.78))]" />
                  <div className="absolute inset-x-3 bottom-3 border-t border-[#c79a58]/30 pt-2 text-sm tracking-[0.18em] text-[#f3ead5]">
                    {item.label}
                  </div>
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

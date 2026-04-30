import { useMemo } from "react";
import { motion } from "framer-motion";
import { Cpu, Download, Globe2, RotateCcw } from "lucide-react";
import { AttributeBars } from "../components/AttributeBars";
import { StageFrame } from "../components/StageFrame";
import { identities } from "../data/identities";
import { useGameStore } from "../store/gameStore";
import { buildEnding, collectGlobalEndingFlags } from "../utils/endings";
import { characterPortraits } from "../visualAssets";
import type { Ending, PlayerState } from "../types/game";

interface EndingRecord {
  player: PlayerState;
  ending: Ending;
}

function buildExportText(records: EndingRecord[]): string {
  return [
    "《雾城四十年》结局档案",
    "",
    ...records.flatMap(({ player, ending }) => {
      const identity = player.identityId ? identities[player.identityId] : undefined;
      return [
        `${player.label} / ${identity?.name ?? "未知身份"} / ${ending.title}`,
        `金钱 ${player.attributes.money} · 认知 ${player.attributes.cognition} · 健康 ${player.attributes.health} · 命运裂痕 ${player.fateFractures}`,
        ...ending.poemLines,
        `独白：${ending.monologue}`,
        `未来方向：${ending.direction}`,
        `轨迹：${ending.trajectory.join("；")}`,
        "",
      ];
    }),
  ].join("\n");
}

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

export function EndingScreen() {
  const players = useGameStore((state) => state.players);
  const unlockedLinks = useGameStore((state) => state.unlockedLinks);
  const endingResults = useGameStore((state) => state.endingResults);
  const resetGame = useGameStore((state) => state.resetGame);

  const records = useMemo<EndingRecord[]>(() => {
    const globalFlags = collectGlobalEndingFlags(players, unlockedLinks);
    return players.map((player) => ({
      player,
      ending: endingResults[player.id] ?? buildEnding(player, globalFlags),
    }));
  }, [endingResults, players, unlockedLinks]);

  function handleExport() {
    downloadText("雾城四十年-结局档案.txt", buildExportText(records));
  }

  return (
    <StageFrame
      variant="silver"
      footer={
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c79a58]/25 bg-[#050807]/60 px-5 py-4 backdrop-blur-xl">
          <span className="text-sm text-[#d8c8a4]/70">程序化多结局诗系统已生成</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleExport}
              className="inline-flex h-11 items-center gap-2 border border-[#c79a58]/40 bg-white/[0.07] px-4 text-sm text-[#f5ead2] transition hover:bg-white/[0.12]"
            >
              <Download size={17} />
              导出结局文本
            </button>
            <button
              type="button"
              onClick={resetGame}
              className="inline-flex h-11 items-center gap-2 border border-[#e0bb78]/65 bg-[#eee4ce] px-4 text-sm font-medium text-[#111514] transition hover:bg-[#fff4d8]"
            >
              <RotateCcw size={17} />
              重新开始
            </button>
          </div>
        </div>
      }
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-3 border border-[#c79a58]/30 bg-black/35 px-4 py-2 text-sm tracking-[0.25em] text-[#f3ead5] backdrop-blur-md">
            <Cpu size={18} />
            PROGRAMMATIC ENDING POEMS
          </div>
          <h2 className="mt-5 font-serif text-5xl text-[#f5ead2] text-shadow-soft">银白雾气中的四首短诗</h2>
        </div>
        <div className="flex items-center gap-3 border border-[#c79a58]/25 bg-black/35 px-4 py-3 text-sm text-zinc-300 backdrop-blur-md">
          <Globe2 size={18} />
          未来没有总结，只有被算法重新排版的余生
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-4">
        {records.map(({ player, ending }, index) => {
          const identity = player.identityId ? identities[player.identityId] : undefined;
          const ink = identity?.palette.ink ?? "#e5e7eb";
          const portrait = identity ? characterPortraits[identity.id] : undefined;

          return (
            <motion.article
              key={player.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="fog-panel relative flex min-h-[38rem] flex-col p-5"
              style={{ borderColor: `${ink}55`, boxShadow: `0 0 48px ${ink}26` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${ink}, transparent 75%)` }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_10%,rgba(255,255,255,0.08),transparent_27%)]" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs tracking-[0.28em] text-[#d8c8a4]/55">{player.label}</div>
                    <h3 className="mt-2 font-serif text-2xl text-[#f5ead2]">{identity?.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{identity?.subtitle}</p>
                  </div>
                  <div className="portrait-frame relative grid size-20 shrink-0 place-items-center font-serif text-2xl" style={{ borderColor: `${ink}88`, color: ink }}>
                    <span>{identity?.icon}</span>
                    {portrait ? <img src={portrait} alt="" className="absolute inset-0 h-full w-full object-cover" /> : null}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.16))]" />
                  </div>
                </div>

                <div className="mt-4">
                  <AttributeBars attributes={player.attributes} compact />
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="border border-[#c79a58]/20 bg-white/5 px-3 py-2 text-zinc-300">
                      命运裂痕 <span className="font-mono text-orange-200">{player.fateFractures}</span>
                    </div>
                    <div className="border border-[#c79a58]/20 bg-white/5 px-3 py-2 text-zinc-300">
                      结局型 <span className="font-mono text-cyan-100">{ending.archetype}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-y border-[#c79a58]/20 py-5">
                  <h4 className="font-serif text-3xl text-[#f5ead2]">{ending.title}</h4>
                  <div className="mt-4 space-y-1 font-serif text-lg leading-8 text-zinc-100">
                    {ending.poemLines.map((line, lineIndex) => (
                      <p key={`${lineIndex}-${line}`}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs tracking-[0.28em] text-zinc-500">TRACE</div>
                  <div className="mt-3 grid gap-2">
                    {ending.trajectory.map((item, traceIndex) => (
                      <div key={`${traceIndex}-${item}`} className="border border-[#c79a58]/20 bg-black/20 px-3 py-2 text-sm leading-6 text-zinc-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <p className="border-l pl-4 font-serif text-lg leading-8 text-zinc-100" style={{ borderColor: `${ink}99` }}>
                    {ending.monologue}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-cyan-50/85">{ending.direction}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </StageFrame>
  );
}

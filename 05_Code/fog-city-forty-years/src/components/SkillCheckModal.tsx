import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dice5, X } from "lucide-react";
import { applyBurnBonus, calculateCheckResult, roll2d6 } from "../utils/checks";
import type { BurnPlan, CheckResult, NarrativeEventChoice, PlayerState } from "../types/game";
import type { VoiceLineWithProfile } from "../data/voiceLines";
import { BurnAttributePanel } from "./BurnAttributePanel";
import { CheckResultPanel } from "./CheckResultPanel";
import { DiceRollAnimation } from "./DiceRollAnimation";

interface SkillCheckModalProps {
  open: boolean;
  character?: PlayerState;
  choice?: NarrativeEventChoice;
  voiceLine?: VoiceLineWithProfile;
  onClose: () => void;
  onCommit: (payload: { result: CheckResult; burnPlan: BurnPlan; voiceId: string; choiceId: string }) => void;
}

type ModalPhase = "prepare" | "rolling" | "result";

function getCheckFormulaText(choice: NarrativeEventChoice): string {
  if (choice.skillCheck.formula === "startupVenture") {
    return "现在进行 2d6 + 金钱 + 认知 + floor(健康/2) + 身份加成 + 燃烧加成的创业检定。";
  }

  return "现在进行 2d6 + 属性 + 燃烧加成的检定。";
}

export function SkillCheckModal({ open, character, choice, voiceLine, onClose, onCommit }: SkillCheckModalProps) {
  const [burnPlan, setBurnPlan] = useState<BurnPlan>({});
  const [phase, setPhase] = useState<ModalPhase>("prepare");
  const [result, setResult] = useState<CheckResult | undefined>();

  const outcome = useMemo(() => {
    if (!choice || !result) return undefined;
    return result.success ? choice.successOutcome : choice.failureOutcome;
  }, [choice, result]);

  function resetAndClose() {
    setBurnPlan({});
    setPhase("prepare");
    setResult(undefined);
    onClose();
  }

  function rollCheck() {
    if (!character || !choice) return;
    setPhase("rolling");
    const burned = applyBurnBonus(character, choice.skillCheck, burnPlan);
    const roll = roll2d6();
    const nextResult = calculateCheckResult(burned.character, choice.skillCheck, burned.bonus, roll);
    window.setTimeout(() => {
      setResult(nextResult);
      setPhase("result");
    }, 900);
  }

  function commitResult() {
    if (!result || !voiceLine || !choice) return;
    onCommit({
      result,
      burnPlan,
      voiceId: voiceLine.voiceId,
      choiceId: choice.id,
    });
    setBurnPlan({});
    setPhase("prepare");
    setResult(undefined);
  }

  if (!open || !character || !choice || !voiceLine) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center bg-black/72 px-6 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          data-testid="skill-check-modal"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          className="relative max-h-[calc(100vh-2rem)] w-full max-w-5xl overflow-y-auto border border-[#c79a58]/35 bg-[#08100f] p-6 text-zinc-100 shadow-[0_0_60px_rgba(8,47,73,0.32)]"
        >
          <div className="absolute inset-0 voice-ink-wash opacity-70" />
          <div className="relative">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.3em] text-[#d8c8a4]/60">SKILL CHECK</div>
                <h3 className="mt-2 font-serif text-3xl text-[#f5ead2]">{choice.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#aebfba]">
                  {character.label}选择了「{voiceLine.profile.name}」。{getCheckFormulaText(choice)}
                </p>
              </div>
              <button
                type="button"
                onClick={resetAndClose}
                className="grid size-10 place-items-center border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-5">
                <BurnAttributePanel
                  character={character}
                  check={choice.skillCheck}
                  burnPlan={burnPlan}
                  disabled={phase !== "prepare"}
                  onChange={setBurnPlan}
                />
                <DiceRollAnimation rolling={phase === "rolling"} result={result} />
              </div>

              <div className="flex flex-col justify-between gap-5">
                <div className="border border-[#c79a58]/25 bg-black/25 p-5">
                  <div className="text-xs tracking-[0.26em] text-[#d8c8a4]/55">VOICE POSITION</div>
                  <div className="mt-3 font-serif text-2xl text-[#f5ead2]">{voiceLine.profile.name}</div>
                  <p className="mt-3 font-serif text-lg leading-8 text-[#f7f0df]">{voiceLine.suggestion}</p>
                  <p className="mt-4 text-sm leading-7 text-[#aebfba]">{choice.description}</p>
                </div>

                {result && outcome ? <CheckResultPanel result={result} outcome={outcome} /> : null}

                <div className="sticky bottom-0 flex justify-end gap-3 border-t border-[#c79a58]/20 bg-[#08100f]/95 pt-4 backdrop-blur">
                  {phase === "prepare" ? (
                    <button
                      type="button"
                      data-testid="roll-check"
                      onClick={rollCheck}
                      className="inline-flex h-12 items-center gap-2 border border-[#d9b16d]/65 bg-[#e9dec2] px-6 text-sm font-medium text-[#111514] transition hover:bg-[#fff4d8]"
                    >
                      <Dice5 size={18} />
                      投掷 2d6
                    </button>
                  ) : null}
                  {phase === "rolling" ? (
                    <button
                      type="button"
                      disabled
                      className="inline-flex h-12 items-center gap-2 border border-[#d9b16d]/35 bg-[#e9dec2]/40 px-6 text-sm font-medium text-[#111514]"
                    >
                      骰子正在落下
                    </button>
                  ) : null}
                  {phase === "result" ? (
                    <button
                      type="button"
                      data-testid="commit-check"
                      onClick={commitResult}
                      className="inline-flex h-12 items-center gap-2 border border-[#d9b16d]/65 bg-[#e9dec2] px-6 text-sm font-medium text-[#111514] transition hover:bg-[#fff4d8]"
                    >
                      写入剧情
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

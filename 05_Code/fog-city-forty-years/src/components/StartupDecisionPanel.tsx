import { BriefcaseBusiness, DoorOpen, Flame, Gauge } from "lucide-react";
import type { NarrativeEventChoice, PlayerState } from "../types/game";
import type { VoiceLineWithProfile } from "../data/voiceLines";
import { InnerVoicesPanel } from "./InnerVoicesPanel";

interface StartupDecisionPanelProps {
  player?: PlayerState;
  identityName?: string;
  lines: VoiceLineWithProfile[];
  choices: NarrativeEventChoice[];
  selectedVoiceId?: string;
  showMotives: boolean;
  disabled?: boolean;
  onLaunch: () => void;
  onDecline: () => void;
  onSelectVoice: (line: VoiceLineWithProfile) => void;
  onConfirm: (line: VoiceLineWithProfile, choice: NarrativeEventChoice) => void;
}

export function StartupDecisionPanel({
  player,
  identityName,
  lines,
  choices,
  selectedVoiceId,
  showMotives,
  disabled = false,
  onLaunch,
  onDecline,
  onSelectVoice,
  onConfirm,
}: StartupDecisionPanelProps) {
  if (!player) return null;

  if (showMotives) {
    return (
      <div className="relative overflow-hidden border border-fuchsia-200/25 bg-[#10090f]/86 p-5 shadow-[0_0_48px_rgba(217,70,239,0.18)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(245,158,11,0.18),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(217,70,239,0.16),transparent_30%)]" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs tracking-[0.32em] text-fuchsia-100/60">VENTURE CHECK</div>
              <h4 className="mt-2 font-serif text-2xl text-amber-50">选择创业动机</h4>
            </div>
            <div className="inline-flex items-center gap-2 border border-amber-200/30 bg-black/25 px-3 py-2 text-xs text-amber-100">
              <Gauge size={15} />
              2d6 + 金钱 + 认知 + 健康折半 + 身份加成
            </div>
          </div>
          <InnerVoicesPanel
            lines={lines}
            choices={choices}
            selectedVoiceId={selectedVoiceId}
            disabled={disabled}
            onSelect={onSelectVoice}
            onConfirm={onConfirm}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-amber-200/25 bg-[#120b08]/86 p-6 shadow-[0_0_52px_rgba(245,158,11,0.20)]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(250,204,21,0.13),transparent_38%),radial-gradient(circle_at_78%_20%,rgba(217,70,239,0.22),transparent_30%)]" />
      <div className="relative">
        <div className="text-xs tracking-[0.34em] text-amber-100/60">STARTUP PRELUDE</div>
        <h4 className="mt-3 font-serif text-3xl text-amber-50">是否走进创业电梯</h4>
        <p className="mt-3 text-sm leading-7 text-zinc-300">
          {player.label} · {identityName}站在四十岁的楼层。创业会进入动机选择、属性燃烧与创业检定；退出也会留下一个人生判断。
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 2xl:grid-cols-2">
          <button
            type="button"
            data-testid="startup-enter"
            disabled={disabled}
            onClick={onLaunch}
            className="group relative overflow-hidden border border-amber-200/55 bg-amber-300/12 px-5 py-5 text-left text-amber-50 transition hover:bg-amber-300/18 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-fuchsia-300/80 to-transparent" />
            <div className="flex items-center gap-3">
              <BriefcaseBusiness size={20} />
              <span className="font-serif text-2xl">选择创业</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-amber-100/78">进入三种动机，由内心声音决定这次上行的理由。</p>
          </button>

          <button
            type="button"
            data-testid="startup-decline"
            disabled={disabled}
            onClick={onDecline}
            className="group relative overflow-hidden border border-white/15 bg-white/7 px-5 py-5 text-left text-zinc-100 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <div className="flex items-center gap-3">
              <DoorOpen size={20} />
              <span className="font-serif text-2xl">不创业</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">退出风口叙事，保留身体、关系或稳定感。</p>
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-amber-100/80">
          <div className="border border-amber-100/15 bg-black/20 px-3 py-2">
            <Flame size={15} className="mb-1" />
            保守创业 DC 15
          </div>
          <div className="border border-fuchsia-100/20 bg-black/20 px-3 py-2">
            <Flame size={15} className="mb-1" />
            冒险创业 DC 18
          </div>
          <div className="border border-fuchsia-200/35 bg-black/20 px-3 py-2">
            <Flame size={15} className="mb-1" />
            孤注一掷 DC 21
          </div>
        </div>
      </div>
    </div>
  );
}

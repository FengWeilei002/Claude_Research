import { motion } from "framer-motion";
import { identities } from "../data/identities";
import type { IdentityId } from "../types/game";

interface IdentityCardProps {
  identityId?: IdentityId;
  flipped: boolean;
  label: string;
}

export function IdentityCard({ identityId, flipped, label }: IdentityCardProps) {
  const identity = identityId ? identities[identityId] : undefined;
  const ink = identity?.palette.ink ?? "#cbd5e1";

  return (
    <div className="card-perspective">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0, y: flipped ? -4 : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="preserve-3d relative h-[28rem] w-[20rem]"
      >
        <div className="backface-hidden absolute inset-0 overflow-hidden border border-cyan-100/25 bg-zinc-950 shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(125,211,252,0.25),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute inset-5 border border-white/10" />
          <div className="absolute inset-x-0 top-8 text-center text-xs tracking-[0.4em] text-cyan-100/70">雾城档案</div>
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              animate={{ opacity: [0.55, 1, 0.55], scale: [0.96, 1.02, 0.96] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
              className="grid size-32 place-items-center border border-cyan-200/40 bg-cyan-100/10 font-serif text-5xl text-cyan-50"
            >
              ?
            </motion.div>
          </div>
          <div className="absolute inset-x-8 bottom-8 text-center text-sm leading-6 text-zinc-300">
            {label}
            <br />
            请抽取一段时代允许的人生
          </div>
        </div>

        <div
          className="backface-hidden rotate-y-180 absolute inset-0 overflow-hidden border bg-zinc-950 p-7"
          style={{
            borderColor: `${ink}88`,
            boxShadow: `0 0 64px ${ink}44`,
          }}
        >
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background: identity
                ? `radial-gradient(circle at 35% 20%, ${identity.palette.ink}66, transparent 34%), linear-gradient(145deg, ${identity.palette.soft}18, transparent 58%)`
                : undefined,
            }}
          />
          <div className="relative flex h-full flex-col">
            <div className="text-xs tracking-[0.35em] text-zinc-400">身份卡</div>
            <div className="mt-9 grid size-20 place-items-center border font-serif text-3xl" style={{ color: ink, borderColor: `${ink}99` }}>
              {identity?.icon}
            </div>
            <h3 className="mt-8 font-serif text-4xl text-zinc-50">{identity?.name}</h3>
            <p className="mt-3 text-base text-zinc-300">{identity?.subtitle}</p>
            <p className="mt-8 border-l border-white/30 pl-4 font-serif text-xl leading-9 text-zinc-100">{identity?.quote}</p>
            <p className="mt-auto text-sm leading-7 text-zinc-400">{identity?.bio}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

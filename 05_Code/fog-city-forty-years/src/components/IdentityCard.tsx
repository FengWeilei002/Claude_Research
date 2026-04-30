import { motion } from "framer-motion";
import { identities } from "../data/identities";
import type { IdentityId } from "../types/game";
import { characterPortraits, fateCardBack } from "../visualAssets";

interface IdentityCardProps {
  identityId?: IdentityId;
  flipped: boolean;
  label: string;
}

export function IdentityCard({ identityId, flipped, label }: IdentityCardProps) {
  const identity = identityId ? identities[identityId] : undefined;
  const ink = identity?.palette.ink ?? "#cbd5e1";
  const portrait = identityId ? characterPortraits[identityId] : undefined;

  return (
    <div className="card-perspective">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0, y: flipped ? -4 : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="preserve-3d relative h-[28rem] w-[20rem]"
      >
        <div className="backface-hidden absolute inset-0 overflow-hidden border border-[#c79a58]/35 bg-[#070b0c] shadow-[0_0_58px_rgba(199,154,88,0.18)]">
          <img src={fateCardBack} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,12,0.16),rgba(7,11,12,0.78)),radial-gradient(circle_at_50%_18%,rgba(217,70,239,0.12),transparent_28%)]" />
          <div className="absolute inset-5 border border-[#c79a58]/25" />
          <div className="absolute inset-x-0 top-8 text-center text-xs tracking-[0.4em] text-[#e0bb78]/80">雾城档案</div>
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              animate={{ opacity: [0.55, 1, 0.55], scale: [0.96, 1.02, 0.96] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
              className="grid size-32 place-items-center border border-[#e0bb78]/45 bg-black/30 font-serif text-5xl text-[#f3ead5] backdrop-blur-sm"
            >
              ?
            </motion.div>
          </div>
          <div className="absolute inset-x-8 bottom-8 text-center text-sm leading-6 text-[#e9dec2] text-shadow-soft">
            {label}
            <br />
            请抽取一段时代允许的人生
          </div>
        </div>

        <div
          className="backface-hidden rotate-y-180 absolute inset-0 overflow-hidden border bg-[#070b0c] p-7"
          style={{
            borderColor: `${ink}88`,
            boxShadow: `0 0 64px ${ink}44`,
          }}
        >
          {portrait ? <img src={portrait} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" /> : null}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,12,0.04),rgba(7,11,12,0.58)_42%,rgba(7,11,12,0.94)),linear-gradient(90deg,rgba(0,0,0,0.72),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: identity
                ? `radial-gradient(circle at 35% 20%, ${identity.palette.ink}66, transparent 34%), linear-gradient(145deg, ${identity.palette.soft}18, transparent 58%)`
                : undefined,
            }}
          />
          <div className="relative flex h-full flex-col">
            <div className="text-xs tracking-[0.35em] text-[#d8c8a4]/65">身份卡</div>
            <div className="mt-9 grid size-20 place-items-center border bg-black/30 font-serif text-3xl backdrop-blur-sm" style={{ color: ink, borderColor: `${ink}99` }}>
              {identity?.icon}
            </div>
            <h3 className="mt-8 font-serif text-4xl text-[#f5ead2] text-shadow-soft">{identity?.name}</h3>
            <p className="mt-3 text-base text-[#d8c8a4]">{identity?.subtitle}</p>
            <p className="mt-8 border-l pl-4 font-serif text-xl leading-9 text-[#f7f0df] text-shadow-soft" style={{ borderColor: `${ink}99` }}>
              {identity?.quote}
            </p>
            <p className="mt-auto rounded-sm bg-black/35 p-3 text-sm leading-7 text-[#d4d4d8] backdrop-blur-sm">{identity?.bio}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

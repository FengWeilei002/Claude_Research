import { motion } from "framer-motion";

interface DialogueBoxProps {
  eyebrow?: string;
  title: string;
  body: string;
}

export function DialogueBox({ eyebrow, title, body }: DialogueBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="fog-panel border-l-2 border-l-[#c79a58]/70 px-6 py-5"
    >
      {eyebrow ? <div className="relative mb-2 text-xs uppercase tracking-[0.28em] text-[#d8c8a4]/70">{eyebrow}</div> : null}
      <h2 className="relative font-serif text-2xl text-[#f5ead2] text-shadow-soft md:text-3xl">{title}</h2>
      <p className="relative mt-3 max-w-4xl text-base leading-8 text-zinc-200 md:text-lg">{body}</p>
    </motion.div>
  );
}

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
      className="border-l-2 border-white/40 bg-black/30 px-6 py-5 backdrop-blur-md"
    >
      {eyebrow ? <div className="mb-2 text-xs uppercase tracking-[0.28em] text-cyan-100/70">{eyebrow}</div> : null}
      <h2 className="font-serif text-2xl text-zinc-50 md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-200 md:text-lg">{body}</p>
    </motion.div>
  );
}

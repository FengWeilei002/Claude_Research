import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "Microsoft YaHei", "system-ui", "sans-serif"],
        serif: ["Noto Serif SC", "Songti SC", "SimSun", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(125, 211, 252, 0.18)",
        ember: "0 0 36px rgba(249, 115, 22, 0.18)",
        gold: "0 0 36px rgba(245, 158, 11, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paper / cream tones
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "paper-deep": "rgb(var(--color-paper-deep) / <alpha-value>)",
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        // Navy primary
        navy: "rgb(var(--color-navy) / <alpha-value>)",
        "navy-deep": "rgb(var(--color-navy-deep) / <alpha-value>)",
        "navy-soft": "rgb(var(--color-navy-soft) / <alpha-value>)",
        // Brass / gold accent
        brass: "rgb(var(--color-brass) / <alpha-value>)",
        "brass-light": "rgb(var(--color-brass-light) / <alpha-value>)",
        // Ink + muted
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        slate: "rgb(var(--color-slate) / <alpha-value>)",
        // Alias
        primary: "rgb(var(--color-navy) / <alpha-value>)",
        "primary-soft": "rgb(var(--color-navy-soft) / <alpha-value>)",
        gold: "rgb(var(--color-brass) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        sub: ["var(--font-sub)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "84rem",
        measure: "62ch",
        "measure-wide": "46rem",
      },
      boxShadow: {
        lift: "0 1px 0 rgba(0,0,0,0.04), 0 28px 60px -28px rgba(0,0,0,0.20)",
        "lift-hover": "0 1px 0 rgba(0,0,0,0.06), 0 38px 70px -28px rgba(0,0,0,0.28)",
        surface: "0 1px 0 rgba(0,0,0,0.04), 0 18px 48px -20px rgba(0,0,0,0.16)",
        "surface-hover": "0 1px 0 rgba(0,0,0,0.05), 0 26px 56px -20px rgba(0,0,0,0.20)",
        gold: "0 0 0 1px rgba(196,151,42,0.18), 0 24px 56px -20px rgba(196,151,42,0.24)",
        navy: "0 0 0 1px rgba(26,39,68,0.18), 0 28px 60px -28px rgba(26,39,68,0.30)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        cinema: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        editorial: "720ms",
        cinema: "900ms",
      },
      letterSpacing: {
        editorial: "0.22em",
        wide: "0.14em",
        tight: "-0.02em",
      },
      spacing: {
        "section-y-sm": "4.5rem",
        "section-y": "6.5rem",
        "section-y-md": "8.5rem",
        "section-y-lg": "11rem",
      },
    },
  },
  plugins: [],
};

export default config;

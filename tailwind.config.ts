import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        cyan: "rgb(var(--color-cyan) / <alpha-value>)",
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        display: [
          "Newsreader",
          "Iowan Old Style",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif"
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      boxShadow: {
        "soft-glow": "0 0 55px rgb(74 222 255 / 0.13)",
        "gold-glow": "0 0 42px rgb(214 175 96 / 0.12)"
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(circle at 12% 18%, rgb(74 222 255 / 0.13), transparent 30%), radial-gradient(circle at 82% 10%, rgb(214 175 96 / 0.10), transparent 28%), linear-gradient(135deg, rgb(6 10 15), rgb(14 18 24) 45%, rgb(9 14 20))",
        "mesh-light":
          "radial-gradient(circle at 12% 18%, rgb(0 110 150 / 0.10), transparent 30%), radial-gradient(circle at 82% 10%, rgb(180 126 35 / 0.12), transparent 28%), linear-gradient(135deg, rgb(247 248 245), rgb(239 243 244) 50%, rgb(250 247 240))"
      },
      transitionTimingFunction: {
        instrument: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;

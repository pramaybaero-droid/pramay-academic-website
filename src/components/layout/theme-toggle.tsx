"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-line/50 bg-panel/50 text-foreground transition duration-300 ease-instrument hover:border-cyan/60 hover:bg-panel"
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? <Moon aria-hidden="true" className="h-4 w-4" /> : <Sun aria-hidden="true" className="h-4 w-4" />}
    </button>
  );
}

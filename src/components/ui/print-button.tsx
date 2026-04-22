"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line/50 bg-panel/40 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-cyan/50"
    >
      <Printer aria-hidden="true" className="h-4 w-4" />
      Print version
    </button>
  );
}

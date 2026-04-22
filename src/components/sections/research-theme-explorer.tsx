"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ResearchTheme } from "@/content/research";
import { cn } from "@/lib/utils";

export function ResearchThemeExplorer({ themes }: { themes: ResearchTheme[] }) {
  const [activeId, setActiveId] = useState(themes[0]?.id ?? "");
  const activeTheme = themes.find((theme) => theme.id === activeId) ?? themes[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="grid gap-3">
        {themes.map((theme) => {
          const active = theme.id === activeId;
          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => setActiveId(theme.id)}
              className={cn(
                "focus-ring instrument-card group flex items-start justify-between gap-4 p-4 text-left",
                active && "border-cyan/70 bg-cyan/10"
              )}
              aria-pressed={active}
            >
              <span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  {theme.eyebrow}
                </span>
                <span className="mt-2 block text-lg font-semibold text-foreground">{theme.title}</span>
                <span className="mt-2 block text-sm leading-6 text-muted">{theme.summary}</span>
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn("mt-1 h-5 w-5 shrink-0 text-muted transition", active && "rotate-180 text-cyan")}
              />
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={activeTheme.id}
          id={activeTheme.id}
          className="research-gradient-border overflow-hidden rounded-[10px] bg-panel/60"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28 }}
        >
          <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8">
              <p className="eyebrow mb-4">{activeTheme.eyebrow}</p>
              <h3 className="font-display text-3xl text-foreground">{activeTheme.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted">{activeTheme.summary}</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ResearchList title="Key questions" items={activeTheme.keyQuestions} />
                <ResearchList title="Methods used" items={activeTheme.methods} />
                <ResearchList title="Representative outputs" items={activeTheme.outputs} />
                <ResearchList title="Related work" items={activeTheme.related} />
              </div>
            </div>
            <div className="relative min-h-[320px] border-t border-line/50 bg-background/30 xl:border-l xl:border-t-0">
              <Image
                src={activeTheme.visual}
                alt={`${activeTheme.title} representative placeholder`}
                fill
                sizes="(min-width: 1280px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

function ResearchList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

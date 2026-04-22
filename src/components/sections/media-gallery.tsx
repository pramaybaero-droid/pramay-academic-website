"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, Play, X } from "lucide-react";
import type { MediaItem } from "@/content/media";
import { mediaCategories } from "@/content/media";
import { cn } from "@/lib/utils";

export function MediaGallery({ items }: { items: MediaItem[] }) {
  const [category, setCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);
  const filtered = useMemo(
    () => (category === "All" ? items : items.filter((item) => item.category === category)),
    [category, items]
  );

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-2">
        {mediaCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "focus-ring rounded-full border px-3 py-2 text-sm font-semibold transition",
              category === item
                ? "border-cyan/70 bg-cyan/10 text-cyan"
                : "border-line/50 bg-panel/40 text-muted hover:border-cyan/50 hover:text-foreground"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className={cn(
              "focus-ring instrument-card group overflow-hidden text-left",
              index === 0 && "md:col-span-2"
            )}
          >
            <div className="relative aspect-[1.35] overflow-hidden border-b border-line/40">
              <Image
                src={item.thumb}
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 ease-instrument group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {item.type === "video" ? (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan/50 bg-background/70 text-cyan">
                    <Play aria-hidden="true" className="h-4 w-4" />
                  </span>
                ) : null}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/50 bg-background/70 text-foreground">
                  <Maximize2 aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                  {item.category}
                </span>
                {item.placeholder ? (
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    Placeholder
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[95] bg-background/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onMouseDown={() => setActiveItem(null)}
          >
            <motion.div
              className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[10px] border border-line/50 bg-panel shadow-soft-glow"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line/40 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{activeItem.category}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{activeItem.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[8px] text-muted hover:text-foreground"
                  aria-label="Close media viewer"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
              <div className="relative aspect-video bg-background">
                <Image src={activeItem.thumb} alt={activeItem.title} fill sizes="100vw" className="object-contain" />
              </div>
              <p className="px-5 py-4 text-sm leading-7 text-muted">{activeItem.caption}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

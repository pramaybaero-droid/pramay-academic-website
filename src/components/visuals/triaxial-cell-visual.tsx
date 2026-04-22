"use client";

import { motion, useReducedMotion } from "framer-motion";

const grains = [
  [42, 18, 10],
  [58, 17, 8],
  [49, 29, 12],
  [38, 36, 9],
  [62, 39, 11],
  [48, 50, 8],
  [36, 61, 12],
  [60, 64, 9],
  [50, 75, 11]
];

export function TriaxialCellVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] min-h-[360px] overflow-hidden rounded-[10px] border border-line/50 bg-panel/60 p-6 shadow-soft-glow">
      <div className="absolute inset-x-10 top-8 h-12 rounded-full border border-cyan/30" />
      <div className="absolute inset-x-10 bottom-8 h-12 rounded-full border border-cyan/30" />
      <motion.div
        className="absolute left-1/2 top-14 h-[72%] w-[46%] -translate-x-1/2 rounded-full border-2 border-cyan/50 bg-background/30"
        animate={reduceMotion ? undefined : { scaleY: [1, 0.985, 1], scaleX: [1, 1.018, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {grains.map(([x, y, r], index) => (
          <motion.span
            key={`${x}-${y}`}
            className="absolute rounded-full bg-foreground shadow-[0_0_18px_rgb(91_230_255_/_0.18)]"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${r * 2}px`,
              height: `${r * 2}px`,
              marginLeft: `${-r}px`,
              marginTop: `${-r}px`,
              opacity: index % 3 === 0 ? 0.96 : 0.78
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, index % 2 ? 2 : -2, 0],
                    y: [0, index % 2 ? -3 : 3, 0]
                  }
            }
            transition={{ duration: 5 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-2 h-16 w-1.5 -translate-x-1/2 rounded-full bg-gold"
        animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-2 left-1/2 h-16 w-1.5 -translate-x-1/2 rounded-full bg-gold"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 text-center text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="rounded-[6px] border border-line/40 bg-background/40 py-2">sigma3</span>
        <span className="rounded-[6px] border border-line/40 bg-background/40 py-2">epsilon1</span>
        <span className="rounded-[6px] border border-line/40 bg-background/40 py-2">e</span>
      </div>
    </div>
  );
}

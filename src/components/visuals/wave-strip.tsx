"use client";

import { useEffect, useRef } from "react";

function colorVar(name: string, alpha: number) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return `rgb(${value} / ${alpha})`;
}

export function WaveStrip() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0.55, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawWave = (offset: number, amplitude: number, color: string, widthLine: number) => {
      context.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const distanceToPointer = Math.abs(x / width - pointerRef.current.x);
        const localBoost = pointerRef.current.active ? Math.max(0, 1 - distanceToPointer * 3.2) : 0;
        const y =
          height / 2 +
          Math.sin(x * 0.018 + frame * 0.035 + offset) * (amplitude + localBoost * 20) +
          Math.sin(x * 0.044 - frame * 0.018 + offset) * 6;
        if (x === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }
      context.strokeStyle = color;
      context.lineWidth = widthLine;
      context.stroke();
    };

    const render = () => {
      frame += reduced ? 0 : 1;
      context.clearRect(0, 0, width, height);
      context.fillStyle = colorVar("--color-panel", 0.36);
      context.fillRect(0, 0, width, height);
      drawWave(0, 16, colorVar("--color-cyan", 0.72), 1.8);
      drawWave(1.8, 10, colorVar("--color-gold", 0.56), 1.2);
      drawWave(3.2, 7, colorVar("--color-foreground", 0.22), 0.9);
      if (!reduced) {
        raf = window.requestAnimationFrame(render);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
        active: true
      };
    };
    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    render();

    return () => {
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-32 w-full rounded-[8px] border border-line/50"
      aria-label="Interactive stress-wave motif"
    />
  );
}

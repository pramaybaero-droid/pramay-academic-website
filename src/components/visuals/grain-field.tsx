"use client";

import { useEffect, useRef } from "react";

type Grain = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

function colorVar(name: string, alpha: number) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return `rgb(${value} / ${alpha})`;
}

export function GrainField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    const grains: Grain[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;

    const createGrains = () => {
      grains.length = 0;
      const count = Math.min(105, Math.max(42, Math.floor(width / 18)));
      for (let index = 0; index < count; index += 1) {
        grains.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.18,
          radius: 1.8 + Math.random() * 3.4
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createGrains();
    };

    const render = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      const cyan = colorVar("--color-cyan", 0.52);
      const cyanSoft = colorVar("--color-cyan", 0.16);
      const gold = colorVar("--color-gold", 0.62);
      const foreground = colorVar("--color-foreground", 0.68);

      for (let i = 0; i < grains.length; i += 1) {
        const grain = grains[i];
        if (!reduced) {
          grain.x += grain.vx + Math.sin(frame * 0.004 + grain.y * 0.01) * 0.045;
          grain.y += grain.vy + Math.cos(frame * 0.004 + grain.x * 0.008) * 0.035;
        }
        if (grain.x < -20) grain.x = width + 20;
        if (grain.x > width + 20) grain.x = -20;
        if (grain.y < -20) grain.y = height + 20;
        if (grain.y > height + 20) grain.y = -20;
      }

      for (let i = 0; i < grains.length; i += 1) {
        for (let j = i + 1; j < grains.length; j += 1) {
          const a = grains[i];
          const b = grains[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 95) {
            context.strokeStyle = distance < 54 ? gold : cyanSoft;
            context.lineWidth = distance < 54 ? 1.4 : 0.8;
            context.globalAlpha = Math.max(0, 1 - distance / 95);
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      context.globalAlpha = 1;
      grains.forEach((grain, index) => {
        context.beginPath();
        context.arc(grain.x, grain.y, grain.radius, 0, Math.PI * 2);
        context.fillStyle = index % 7 === 0 ? gold : index % 4 === 0 ? cyan : foreground;
        context.fill();
      });

      if (!reduced) {
        raf = window.requestAnimationFrame(render);
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    render();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

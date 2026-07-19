"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function PortraitFrame() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px * 12);
    y.set(py * 12);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-[4/5] w-full max-w-md"
    >
      <div
        className="absolute -inset-4 rounded-[var(--radius-xl)] border border-border-subtle"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,165,116,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,165,116,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        style={reduced ? undefined : { x: springX, y: springY }}
        className="relative h-full overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1 shadow-[var(--shadow-lg)]"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 35%, rgba(212,165,116,0.22), transparent 55%), linear-gradient(160deg, #14161c 0%, #0a0b0e 55%, #121820 100%)",
          }}
          role="img"
          aria-label="Abstract portrait placeholder for Gaurav Kadam"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/70 to-transparent p-6 pt-24">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
            Portfolio
          </p>
          <p className="mt-1 text-lg text-text-primary">Gaurav Kadam</p>
          <p className="text-sm text-text-secondary">Full-Stack Developer</p>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] ring-1 ring-inset ring-accent/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-8 top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
      </motion.div>

      <div className="absolute -bottom-3 -left-3 rounded-[var(--radius-md)] border border-border-default bg-surface-1/90 px-3 py-2 font-mono text-[0.65rem] tracking-wide text-secondary backdrop-blur">
        React · TypeScript · Full-stack
      </div>
    </div>
  );
}

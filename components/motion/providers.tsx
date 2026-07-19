"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { KonamiListener } from "@/components/delight/konami";
import { ConsoleMessage } from "@/components/delight/console-message";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { CommandPalette } from "@/components/command/command-palette";

export function Providers({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return (
    <ThemeProvider>
      <ConsoleMessage />
      <KonamiListener />
      <CommandPalette />
      {children}
    </ThemeProvider>
  );
}

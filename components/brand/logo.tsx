"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  interactive?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: 28,
  md: 36,
  lg: 48,
};

const PORTRAIT_SRC = "/portrait.svg";

export function Logo({
  className,
  showWordmark = true,
  interactive = true,
  size = "md",
}: LogoProps) {
  const dim = sizes[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-text-primary",
        interactive && "group",
        className,
      )}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-[#f7f4ee]",
          "ring-1 ring-border-default transition-shadow duration-300",
          interactive && "group-hover:ring-accent/40",
        )}
        style={{ width: dim, height: dim }}
      >
        <Image
          src={PORTRAIT_SRC}
          alt=""
          width={dim}
          height={dim}
          unoptimized
          className="h-full w-full object-cover object-[center_20%]"
          aria-hidden
        />
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="text-[0.7rem] font-medium tracking-[0.14em] uppercase text-text-primary">
            Gaurav Kadam
          </span>
          <span className="mt-1 text-[0.62rem] tracking-[0.12em] text-text-muted">
            Full-Stack Developer
          </span>
        </span>
      ) : null}
      <span className="sr-only">Gaurav Kadam — Home</span>
    </span>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-block h-10 w-10 shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-[#f7f4ee] ring-1 ring-border-default",
        className,
      )}
    >
      <Image
        src={PORTRAIT_SRC}
        alt=""
        width={40}
        height={40}
        unoptimized
        className="h-full w-full object-cover object-[center_20%]"
        aria-hidden
      />
    </span>
  );
}

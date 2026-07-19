"use client";

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
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="10"
          className="stroke-border-strong transition-colors duration-300 group-hover:stroke-accent/50"
          strokeWidth="1"
        />
        {/* G */}
        <path
          d="M18.5 14.2c-1.1-.7-2.4-1-3.7-1-3.6 0-6.3 2.6-6.3 6.8s2.7 6.8 6.3 6.8c1.4 0 2.8-.4 3.8-1.2v-3.6h-3.5v-2.3h6.2v7.2c-1.5 1.4-3.6 2.2-6.5 2.2-5.2 0-9-3.7-9-9.1s3.8-9.1 9-9.1c2.7 0 4.8.8 6.4 2.2l-1.7 1.9z"
          className="fill-text-primary"
        />
        {/* K */}
        <path
          d="M24 12h2.6v6.1l5.2-6.1H35l-5.5 6.3L35.2 28H32l-4.1-6.2-1.3 1.5V28H24V12z"
          className="fill-text-primary"
        />
        <path
          d="M10 32h20"
          className="stroke-accent origin-left transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-110"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
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
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path
        d="M18.5 14.2c-1.1-.7-2.4-1-3.7-1-3.6 0-6.3 2.6-6.3 6.8s2.7 6.8 6.3 6.8c1.4 0 2.8-.4 3.8-1.2v-3.6h-3.5v-2.3h6.2v7.2c-1.5 1.4-3.6 2.2-6.5 2.2-5.2 0-9-3.7-9-9.1s3.8-9.1 9-9.1c2.7 0 4.8.8 6.4 2.2l-1.7 1.9z"
        fill="currentColor"
      />
      <path
        d="M24 12h2.6v6.1l5.2-6.1H35l-5.5 6.3L35.2 28H32l-4.1-6.2-1.3 1.5V28H24V12z"
        fill="currentColor"
      />
      <path
        d="M10 32h20"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

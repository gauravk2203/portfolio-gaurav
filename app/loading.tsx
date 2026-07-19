import { Monogram } from "@/components/brand/logo";

export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center pt-[var(--header-height)]"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <Monogram className="animate-pulse text-text-primary" />
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">
          Loading
        </span>
      </div>
    </div>
  );
}

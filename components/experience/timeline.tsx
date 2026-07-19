"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Experience } from "@/content/experience";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative space-y-0 border-l border-border-default pl-0 md:ml-3">
      {items.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.05} as="li" className="list-none">
          <TimelineItem item={item} defaultOpen={index === 0} />
        </Reveal>
      ))}
    </ol>
  );
}

function TimelineItem({
  item,
  defaultOpen,
}: {
  item: Experience;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const panelId = `exp-panel-${item.id}`;

  return (
    <div className="relative pb-10 pl-8 md:pl-12">
      <span
        className={cn(
          "absolute left-0 top-2 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-void",
          open ? "bg-accent shadow-[0_0_0_4px_var(--accent-muted)]" : "bg-surface-3",
        )}
        aria-hidden
      />

      <button
        type="button"
        className="w-full rounded-[var(--radius-lg)] border border-border-default bg-surface-1 p-5 text-left transition-colors hover:border-accent/30 md:p-6"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-accent">
              {item.start} — {item.end}
            </p>
            <h3 className="mt-1 text-lg text-text-primary md:text-xl">
              {item.role}
            </h3>
            <p className="text-sm text-text-secondary">
              {item.company} · {item.location}
            </p>
          </div>
          <ChevronDown
            className={cn(
              "mt-1 h-5 w-5 shrink-0 text-text-muted transition-transform duration-300",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </div>
        <p className="mt-3 text-sm text-text-secondary">{item.summary}</p>
      </button>

      <div
        id={panelId}
        role="region"
        hidden={!open}
        className={cn(
          "overflow-hidden transition-all",
          open ? "mt-4" : "mt-0",
        )}
      >
        {open ? (
          <div className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-0 p-5 md:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
              Impact
            </p>
            <ul className="mt-3 space-y-2">
              {item.achievements.map((a) => (
                <li
                  key={a}
                  className="relative pl-4 text-sm text-text-secondary before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2 before:bg-accent"
                >
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary-muted px-2 py-1 font-mono text-[0.7rem] text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

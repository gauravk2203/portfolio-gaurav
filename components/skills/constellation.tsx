"use client";

import { useId, useMemo, useState } from "react";
import {
  skillClusters,
  skillNodes,
  type SkillClusterId,
  type SkillNode,
} from "@/content/skills";
import { cn } from "@/lib/utils";

const clusterColors: Record<SkillClusterId, string> = {
  frontend: "#d4a574",
  backend: "#7a9ead",
  systems: "#5faf82",
  design: "#c9a0dc",
  leadership: "#d4a24c",
};

/** Deterministic layout positions for desktop constellation */
function layoutPositions(nodes: SkillNode[]) {
  const byCluster = skillClusters.map((c) => ({
    cluster: c,
    nodes: nodes.filter((n) => n.cluster === c.id),
  }));

  const positions: Record<
    string,
    { x: number; y: number; color: string }
  > = {};

  const cx = 400;
  const cy = 280;
  const ring = 180;

  byCluster.forEach((group, gi) => {
    const angle0 = (gi / byCluster.length) * Math.PI * 2 - Math.PI / 2;
    const gx = cx + Math.cos(angle0) * ring;
    const gy = cy + Math.sin(angle0) * ring * 0.85;
    group.nodes.forEach((node, ni) => {
      const local = (ni / Math.max(group.nodes.length, 1)) * Math.PI * 2;
      const r = 48 + (ni % 3) * 18;
      positions[node.id] = {
        x: gx + Math.cos(local) * r,
        y: gy + Math.sin(local) * r * 0.75,
        color: clusterColors[node.cluster],
      };
    });
  });

  return positions;
}

export function Constellation() {
  const [activeId, setActiveId] = useState<string | null>(skillNodes[0]?.id ?? null);
  const [activeCluster, setActiveCluster] = useState<SkillClusterId | "all">(
    "all",
  );
  const reactId = useId();
  const positions = useMemo(() => layoutPositions(skillNodes), []);

  const active = skillNodes.find((n) => n.id === activeId) ?? null;
  const visibleNodes =
    activeCluster === "all"
      ? skillNodes
      : skillNodes.filter((n) => n.cluster === activeCluster);

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div
          className="mb-4 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Skill clusters"
        >
          <ClusterTab
            selected={activeCluster === "all"}
            onClick={() => setActiveCluster("all")}
            label="All"
          />
          {skillClusters.map((c) => (
            <ClusterTab
              key={c.id}
              selected={activeCluster === c.id}
              onClick={() => setActiveCluster(c.id)}
              label={c.label}
              color={clusterColors[c.id]}
            />
          ))}
        </div>

        {/* Desktop SVG constellation */}
        <div className="relative hidden overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1 md:block">
          <svg
            viewBox="0 0 800 560"
            className="h-auto w-full"
            role="img"
            aria-labelledby={`${reactId}-title`}
          >
            <title id={`${reactId}-title`}>
              Capability constellation of technologies and skills
            </title>
            <defs>
              <radialGradient id={`${reactId}-glow`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(212,165,116,0.12)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="800" height="560" fill={`url(#${reactId}-glow)`} />

            {/* Links within clusters */}
            {skillClusters.map((cluster) => {
              const nodes = visibleNodes.filter((n) => n.cluster === cluster.id);
              return nodes.map((node, i) => {
                const next = nodes[i + 1];
                if (!next) return null;
                const a = positions[node.id];
                const b = positions[next.id];
                if (!a || !b) return null;
                return (
                  <line
                    key={`${node.id}-${next.id}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={clusterColors[cluster.id]}
                    strokeOpacity="0.25"
                    strokeWidth="1"
                  />
                );
              });
            })}

            {visibleNodes.map((node) => {
              const p = positions[node.id];
              if (!p) return null;
              const selected = activeId === node.id;
              return (
                <g key={node.id}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={selected ? 10 : 6}
                    fill={p.color}
                    fillOpacity={selected ? 1 : 0.75}
                    className="cursor-pointer transition-all"
                    tabIndex={0}
                    role="button"
                    aria-label={`${node.label}: ${node.detail}`}
                    aria-pressed={selected}
                    onClick={() => setActiveId(node.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId(node.id);
                      }
                    }}
                  />
                  <text
                    x={p.x}
                    y={p.y + 22}
                    textAnchor="middle"
                    className="fill-text-secondary text-[11px]"
                    style={{ fill: "var(--text-secondary)" }}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile stacked clusters */}
        <div className="space-y-4 md:hidden">
          {skillClusters
            .filter((c) => activeCluster === "all" || activeCluster === c.id)
            .map((cluster) => (
              <div
                key={cluster.id}
                className="rounded-[var(--radius-lg)] border border-border-default bg-surface-1 p-4"
              >
                <h3 className="text-sm font-medium text-text-primary">
                  {cluster.label}
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  {cluster.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillNodes
                    .filter((n) => n.cluster === cluster.id)
                    .map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setActiveId(node.id)}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs transition-colors",
                          activeId === node.id
                            ? "border-accent/50 bg-accent-muted text-accent"
                            : "border-border-default text-text-secondary",
                        )}
                      >
                        {node.label}
                      </button>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <aside className="lg:col-span-4">
        <div className="sticky top-28 rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
            Focus
          </p>
          {active ? (
            <>
              <h3 className="mt-3 text-xl text-text-primary">{active.label}</h3>
              <p
                className="mt-1 text-xs uppercase tracking-[0.12em]"
                style={{ color: clusterColors[active.cluster] }}
              >
                {skillClusters.find((c) => c.id === active.cluster)?.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {active.detail}
              </p>
              <p className="mt-6 text-xs text-text-muted">
                Not a progress bar — a map of where craft shows up in shipped
                work.
              </p>
            </>
          ) : (
            <p className="mt-3 text-sm text-text-secondary">
              Select a capability node.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}

function ClusterTab({
  selected,
  onClick,
  label,
  color,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  color?: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs transition-colors",
        selected
          ? "border-accent/50 bg-accent-muted text-accent"
          : "border-border-default text-text-secondary hover:text-text-primary",
      )}
    >
      {color ? (
        <span
          className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: color }}
          aria-hidden
        />
      ) : null}
      {label}
    </button>
  );
}

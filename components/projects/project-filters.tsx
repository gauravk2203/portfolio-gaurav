"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectDomain } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

const filters: { id: "all" | ProjectDomain; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "design-system", label: "UI" },
  { id: "research", label: "Research" },
  { id: "oss", label: "Open Source" },
];

export function ProjectFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.domains.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              active === f.id
                ? "border-accent/50 bg-accent-muted text-accent"
                : "border-border-default text-text-secondary hover:border-border-strong hover:text-text-primary",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-secondary">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}

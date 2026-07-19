import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Container } from "@/components/layout/container";
import { ProjectFilters } from "@/components/projects/project-filters";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Gaurav Kadam — full-stack apps, UI practice, and research.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Work
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            Selected projects
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            Depth over volume. Each case study covers problem, architecture,
            craft decisions, and impact.
          </p>
        </Reveal>
        <div className="mt-12">
          <ProjectFilters projects={projects} />
        </div>
      </Container>
    </div>
  );
}

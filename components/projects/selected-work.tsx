import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

/**
 * Home "Selected work" — only projects with `featured: true`.
 * Order follows the order in content/projects.ts.
 * Non-featured projects stay on /projects only.
 */
export function SelectedWork() {
  const featured = getFeaturedProjects();
  const primary = featured[0];
  const secondary = featured.slice(1, 3);

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Selected work."
      description="Personal apps, UI practice, and research — described with facts from my resume and repos."
      headerAction={
        <Button asChild variant="outline" size="sm">
          <Link href="/projects">
            All projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      }
    >
      {featured.length === 0 ? (
        <p className="text-text-secondary">
          Mark projects with <code className="text-secondary">featured: true</code>{" "}
          in <code className="text-secondary">content/projects.ts</code> to show
          them here.
        </p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-12">
          {primary ? (
            <Reveal className="lg:col-span-7">
              <ProjectCard project={primary} featured />
            </Reveal>
          ) : null}
          {secondary.length > 0 ? (
            <div className="flex flex-col gap-6 lg:col-span-5">
              {secondary.map((project, i) => (
                <Reveal key={project.slug} delay={0.08 * (i + 1)}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </Section>
  );
}

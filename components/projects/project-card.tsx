import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  featured = false,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1 transition-all duration-300 hover:border-accent/35 hover:shadow-[var(--shadow-md)]",
        featured ? "md:min-h-[420px]" : "min-h-[320px]",
        className,
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div
          className={cn(
            "relative overflow-hidden border-b border-border-subtle",
            featured ? "h-56 md:h-64" : "h-44",
          )}
          style={
            project.coverImage
              ? undefined
              : { background: project.cover.gradient }
          }
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 58vw"
                  : "(max-width: 768px) 100vw, 40vw"
              }
            />
          ) : (
            <div
              className="absolute inset-0 opacity-40 transition-transform duration-500 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(244,241,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />
          )}
          {/* Label sits on solid bar under media — not on the image */}
        </div>
        <div className="flex items-center justify-between border-b border-border-subtle bg-surface-0 px-4 py-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-text-muted">
            {project.cover.label}
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-text-muted transition-colors group-hover:text-accent"
            aria-hidden
          />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[0.7rem] text-text-muted">
                {project.year} · {project.role}
              </p>
              <h3 className="mt-2 text-xl text-text-primary transition-colors group-hover:text-accent md:text-2xl">
                {project.title}
              </h3>
            </div>
          </div>
          <p className="mt-3 line-clamp-3 text-sm text-text-secondary md:text-[0.95rem]">
            {project.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.metrics.slice(0, 3).map((m) => (
              <span
                key={m.label}
                className="rounded-full border border-border-subtle bg-surface-2 px-2.5 py-1 text-xs text-text-secondary"
              >
                <span className="font-medium text-accent">{m.value}</span>{" "}
                {m.label}
              </span>
            ))}
          </div>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-secondary-muted px-2 py-0.5 font-mono text-[0.65rem] text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}

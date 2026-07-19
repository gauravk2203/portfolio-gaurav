import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { siteConfig } from "@/content/site";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillClusters, skillNodes } from "@/content/skills";
import { education, certifications } from "@/content/achievements";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function ResumePage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container narrow>
        <div className="no-print mb-8 flex flex-wrap gap-3">
          <Button asChild variant="outline" size="sm">
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
          <p className="w-full text-xs text-text-muted">
            PDF is served from{" "}
            <code className="text-secondary">public/resume.pdf</code> when
            present. You can also use the browser print dialog on this page.
          </p>
        </div>

        <article className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6 print:border-0 print:bg-white print:p-0 md:p-10">
          <header className="border-b border-border-subtle pb-6">
            <h1 className="text-display text-3xl text-text-primary print:text-black md:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-text-secondary print:text-neutral-700">
              {siteConfig.role}
            </p>
            <p className="mt-3 text-sm text-text-muted print:text-neutral-600">
              {siteConfig.location} · {siteConfig.email} ·{" "}
              <a
                href="https://linkedin.com/in/gauravk2205"
                className="text-accent print:text-black"
              >
                linkedin.com/in/gauravk2205
              </a>
            </p>
            <p className="mt-4 max-w-2xl text-sm text-text-secondary print:text-neutral-700">
              {siteConfig.tagline}
            </p>
          </header>

          <section className="mt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent print:text-black">
              Experience
            </h2>
            <ul className="mt-4 space-y-6">
              {experiences.map((exp) => (
                <li key={exp.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-medium text-text-primary print:text-black">
                      {exp.role} · {exp.company}
                    </h3>
                    <p className="font-mono text-xs text-text-muted print:text-neutral-600">
                      {exp.start} — {exp.end}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary print:text-neutral-700">
                    {exp.summary}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-text-secondary print:text-neutral-700"
                      >
                        · {a}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent print:text-black">
              Selected work
            </h2>
            <ul className="mt-4 space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <p className="font-medium text-text-primary print:text-black">
                    {p.title}{" "}
                    <span className="font-normal text-text-muted">
                      ({p.year})
                    </span>
                  </p>
                  <p className="text-sm text-text-secondary print:text-neutral-700">
                    {p.summary}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent print:text-black">
              Education
            </h2>
            <ul className="mt-4 space-y-2">
              {education.map((e) => (
                <li key={e.title} className="text-sm text-text-secondary print:text-neutral-700">
                  <span className="font-medium text-text-primary print:text-black">
                    {e.title}
                  </span>
                  <br />
                  {e.institution} · {e.year}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent print:text-black">
              Certifications
            </h2>
            <ul className="mt-4 space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="text-sm text-text-secondary print:text-neutral-700">
                  {c.name} — {c.issuer}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent print:text-black">
              Skills
            </h2>
            <div className="mt-4 space-y-3">
              {skillClusters.map((c) => (
                <p
                  key={c.id}
                  className="text-sm text-text-secondary print:text-neutral-700"
                >
                  <span className="font-medium text-text-primary print:text-black">
                    {c.label}:
                  </span>{" "}
                  {skillNodes
                    .filter((n) => n.cluster === c.id)
                    .map((n) => n.label)
                    .join(", ")}
                </p>
              ))}
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}

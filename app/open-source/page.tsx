import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { openSourceProjects, ossPhilosophy } from "@/content/open-source";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Open Source",
  description: `Public repositories by ${siteConfig.name} — no vanity metrics.`,
};

export default function OpenSourcePage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Open source
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            Public repositories
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">{ossPhilosophy}</p>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {openSourceProjects.map((repo, i) => (
            <li key={repo.name}>
              <Reveal delay={i * 0.05}>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.65rem] text-text-muted">
                        {repo.owner}
                      </p>
                      <h2 className="font-mono text-lg text-text-primary group-hover:text-accent">
                        {repo.name}
                      </h2>
                    </div>
                    <ExternalLink
                      className="h-4 w-4 shrink-0 text-text-muted transition-colors group-hover:text-accent"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-3 flex-1 text-sm text-text-secondary">
                    {repo.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                    <span className="font-mono text-secondary">
                      {repo.language}
                    </span>
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-surface-2 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

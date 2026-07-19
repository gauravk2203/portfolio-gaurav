import type { Metadata } from "next";
import {
  achievements,
  certifications,
  education,
  talks,
} from "@/content/achievements";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Achievements",
  description: `Awards, community work, education, and certifications — ${siteConfig.name}.`,
};

export default function AchievementsPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Achievements
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            Recognition & education
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            Real outcomes only — awards, community work, credentials, and degree.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <section className="lg:col-span-7">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              Highlights
            </h2>
            <ol className="mt-6 space-y-0 border-l border-border-default">
              {achievements.map((item, i) => (
                <li key={item.title} className="relative pb-8 pl-8">
                  <Reveal delay={i * 0.04}>
                    <span
                      className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent"
                      aria-hidden
                    />
                    <p className="font-mono text-xs text-accent">{item.year}</p>
                    <h3 className="mt-1 text-lg text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {item.detail}
                    </p>
                    <span className="mt-2 inline-block rounded-full border border-border-default px-2 py-0.5 text-[0.65rem] text-text-muted">
                      {item.category}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          <aside className="space-y-8 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                  Education
                </h2>
                <ul className="mt-4 space-y-4">
                  {education.map((e) => (
                    <li key={e.title}>
                      <p className="text-text-primary">{e.title}</p>
                      <p className="text-sm text-text-secondary">
                        {e.institution} · {e.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                  Certifications
                </h2>
                <ul className="mt-4 space-y-4">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      <p className="text-text-primary">{c.name}</p>
                      <p className="text-sm text-text-secondary">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                  Community
                </h2>
                <ul className="mt-4 space-y-4">
                  {talks.map((t) => (
                    <li key={t.title}>
                      <p className="text-text-primary">{t.title}</p>
                      <p className="text-sm text-text-secondary">
                        {t.venue} · {t.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </div>
  );
}

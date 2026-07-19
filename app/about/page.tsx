import type { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — journey, values, and craft philosophy.`,
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h1 className="text-display mt-3 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] text-text-primary">
            {aboutContent.intro}
          </h1>
          <blockquote className="mt-10 max-w-2xl border-l-2 border-accent pl-5 font-display text-xl italic text-text-primary md:text-2xl">
            {aboutContent.pullQuote}
          </blockquote>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            {aboutContent.chapters.map((chapter, i) => (
              <Reveal key={chapter.title} delay={i * 0.04}>
                <article>
                  <h2 className="text-display text-2xl text-text-primary md:text-3xl">
                    {chapter.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                    {chapter.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="space-y-8 lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                  Values
                </h2>
                <ul className="mt-4 space-y-4">
                  {aboutContent.values.map((v) => (
                    <li key={v.title}>
                      <p className="text-accent">{v.title}</p>
                      <p className="mt-1 text-sm text-text-secondary">
                        {v.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                  Fun facts
                </h2>
                <ul className="mt-4 space-y-2">
                  {aboutContent.funFacts.map((f) => (
                    <li
                      key={f}
                      className="relative pl-4 text-sm text-text-secondary before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2 before:bg-accent"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                  Interests
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {aboutContent.interests.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border-default px-3 py-1 text-xs text-text-secondary"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </div>
  );
}

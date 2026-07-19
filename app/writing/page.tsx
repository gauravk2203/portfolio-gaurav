import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/writing";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing by Gaurav Kadam — notes will appear here when published.",
};

export default function WritingPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Writing
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            Notes
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            No public essays yet. This section is reserved for future writing —
            nothing fictional is listed here.
          </p>
        </Reveal>

        {articles.length === 0 ? (
          <Reveal delay={0.05}>
            <div className="mt-12 rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-8 md:p-10">
              <p className="text-text-secondary">
                Check back later, or explore projects and experience in the
                meantime.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/projects">View work</Link>
              </Button>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-12 divide-y divide-border-subtle border-y border-border-subtle">
            {articles.map((article, i) => (
              <li key={article.slug}>
                <Reveal delay={i * 0.04}>
                  <Link
                    href={`/writing/${article.slug}`}
                    className="group flex flex-col gap-3 py-8 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div className="max-w-2xl">
                      <h2 className="text-xl text-text-primary transition-colors group-hover:text-accent md:text-2xl">
                        {article.title}
                      </h2>
                      <p className="mt-2 text-sm text-text-secondary">
                        {article.description}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-text-muted">
                      {article.date} · {article.readingTime}
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}

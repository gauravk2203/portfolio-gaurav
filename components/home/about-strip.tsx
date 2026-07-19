import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutContent } from "@/content/about";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function AboutStrip() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A systems mind with editorial taste."
      className="border-y border-border-subtle bg-surface-0/60"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
            {aboutContent.intro}
          </p>
          <blockquote className="mt-8 border-l-2 border-accent pl-5 font-display text-xl italic text-text-primary md:text-2xl">
            {aboutContent.pullQuote}
          </blockquote>
          <Button asChild variant="outline" className="mt-8">
            <Link href="/about">
              Full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutContent.values.map((v) => (
              <li
                key={v.title}
                className="rounded-[var(--radius-lg)] border border-border-default bg-surface-1 p-5"
              >
                <h3 className="text-sm font-medium text-accent">{v.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

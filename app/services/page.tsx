import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { engagementNotes, services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description: `What ${siteConfig.name} can contribute — frontend, full-stack, and LLM-assisted features.`,
};

export default function ServicesPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Capabilities
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            What I bring
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            Honest skills and delivery areas based on work and projects — not a
            fictional agency menu.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <article className="flex h-full flex-col rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6 md:p-8">
                <h2 className="text-xl text-text-primary md:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-text-secondary">
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="relative pl-4 text-sm text-text-secondary before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2 before:bg-accent"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-[var(--radius-xl)] border border-border-default bg-surface-0 p-6 md:p-8">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              Context
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {engagementNotes.map((note) => (
                <li key={note} className="text-sm text-text-secondary">
                  · {note}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

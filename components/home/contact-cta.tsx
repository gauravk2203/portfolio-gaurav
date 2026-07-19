import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <Section className="pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1 px-6 py-12 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.2),transparent_70%)]"
            aria-hidden
          />
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <h2 className="text-display mt-3 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] text-text-primary">
            Looking for a full-stack developer?
          </h2>
          <p className="mt-4 max-w-lg text-text-secondary">
            {siteConfig.availability.label}. Reach out about roles or
            collaborations — I respond by email.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume">View resume</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

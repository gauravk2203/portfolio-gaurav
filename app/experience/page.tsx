import type { Metadata } from "next";
import { experiences } from "@/content/experience";
import { Container } from "@/components/layout/container";
import { Timeline } from "@/components/experience/timeline";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career timeline of Gaurav Kadam — roles, impact, and technologies.",
};

export default function ExperiencePage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Experience
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            Timeline
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            Expand each role for impact and stack. Crafted for keyboard and
            screen readers.
          </p>
        </Reveal>
        <div className="mt-12">
          <Timeline items={experiences} />
        </div>
      </Container>
    </div>
  );
}

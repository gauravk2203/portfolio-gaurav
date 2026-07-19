import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Constellation } from "@/components/skills/constellation";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Capability constellation — frontend, backend, systems, design, and leadership.",
};

export default function SkillsPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Skills
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            Capability constellation
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            No fake percentages. Nodes describe where craft shows up in real
            work — filter by cluster or explore the map.
          </p>
        </Reveal>
        <div className="mt-12">
          <Constellation />
        </div>
      </Container>
    </div>
  );
}

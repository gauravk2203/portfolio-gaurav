import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Constellation } from "@/components/skills/constellation";
import { Button } from "@/components/ui/button";

export function SkillsPreview() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="A constellation, not a scoreboard."
      description="Explore clusters of craft — hover or focus a node for context."
      headerAction={
        <Button asChild variant="outline" size="sm">
          <Link href="/skills">
            Open map
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      }
      className="border-y border-border-subtle bg-surface-0/40"
    >
      <Constellation />
    </Section>
  );
}

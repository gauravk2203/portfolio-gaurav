import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/content/experience";
import { Section } from "@/components/layout/section";
import { Timeline } from "@/components/experience/timeline";
import { Button } from "@/components/ui/button";

export function ExperiencePreview() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Roles that compounded."
      description="Impact over title inflation — expandable by design."
      headerAction={
        <Button asChild variant="outline" size="sm">
          <Link href="/experience">
            Full timeline
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <Timeline items={experiences.slice(0, 3)} />
    </Section>
  );
}

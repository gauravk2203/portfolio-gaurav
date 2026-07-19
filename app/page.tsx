import { Hero } from "@/components/hero/hero";
import { SelectedWork } from "@/components/projects/selected-work";
import { AboutStrip } from "@/components/home/about-strip";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { SkillsPreview } from "@/components/home/skills-preview";
import { ProcessStrip } from "@/components/home/process-strip";
import { ContactCta } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutStrip />
      <ExperiencePreview />
      <SkillsPreview />
      <ProcessStrip />
      <ContactCta />
    </>
  );
}

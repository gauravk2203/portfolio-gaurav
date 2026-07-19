import { Compass, DraftingCompass, Hammer, LineChart } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const steps = [
  {
    title: "Discover",
    body: "Map users, constraints, and the decisions that matter.",
    icon: Compass,
  },
  {
    title: "Model",
    body: "Shape architecture and interface flows before code freezes intent.",
    icon: DraftingCompass,
  },
  {
    title: "Build",
    body: "Ship incremental vertical slices with accessibility by default.",
    icon: Hammer,
  },
  {
    title: "Instrument",
    body: "Measure outcomes, refine the system, document the why.",
    icon: LineChart,
  },
];

export function ProcessStrip() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="How work gets clear."
      description="A repeatable rhythm — not a waterfall costume."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <StaggerItem key={step.title}>
            <article className="h-full rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
              <div className="flex items-center justify-between">
                <step.icon className="h-5 w-5 text-accent" aria-hidden />
                <span className="font-mono text-xs text-text-muted">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{step.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

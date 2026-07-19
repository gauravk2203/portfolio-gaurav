import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactAside } from "@/components/contact/contact-aside";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} — ${siteConfig.availability.label}.`,
};

export default function ContactPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <h1 className="text-display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] text-text-primary">
            Let&apos;s talk product.
          </h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            Share context, constraints, and timing. I will respond with honesty
            about fit — not a sales script.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactAside />
          </div>
        </div>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy notes for ${siteConfig.name}'s portfolio site.`,
};

export default function PrivacyPage() {
  return (
    <div className="pb-24 pt-[calc(var(--header-height)+3rem)]">
      <Container narrow>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Privacy
        </p>
        <h1 className="text-display mt-3 text-[clamp(2rem,4vw,3rem)] text-text-primary">
          A short, honest note
        </h1>
        <div className="prose-ledger mt-8 space-y-4">
          <p>
            This portfolio is a static marketing site. It does not require an
            account and does not intentionally track you for advertising.
          </p>
          <p>
            If you submit the contact form, the information you provide (name,
            email, message, and optional fields) is used only to respond to
            your inquiry. With Resend configured, messages are emailed to{" "}
            {siteConfig.email}; otherwise they are validated and logged in
            development only.
          </p>
          <p>
            Hosting (e.g. Vercel) may collect standard server logs and analytics
            if enabled. Review your host&apos;s privacy policy for details.
          </p>
          <p>
            Questions:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent hover:text-accent-hover"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

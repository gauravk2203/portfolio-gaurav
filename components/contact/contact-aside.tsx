import Link from "next/link";
import { Download, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";

export function ContactAside() {
  return (
    <aside className="space-y-6">
      <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
          Availability
        </p>
        <p className="mt-3 flex items-center gap-2 text-sm text-text-primary">
          <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
          {siteConfig.availability.label}
        </p>
        <p className="mt-4 flex items-start gap-2 text-sm text-text-secondary">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
          {siteConfig.location}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-3 flex items-center gap-2 text-sm text-accent hover:text-accent-hover"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          {siteConfig.email}
        </a>
        <p className="mt-3 text-xs text-text-muted">
          Prefer email? Write directly — or use the form and I&apos;ll reply to
          the address you provide.
        </p>
      </div>

      <div className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
          Resume
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <Button asChild variant="outline" className="w-full">
            <Link href="/resume">
              <Download className="h-4 w-4" aria-hidden />
              View resume
            </Link>
          </Button>
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
}

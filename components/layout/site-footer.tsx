"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Logo } from "@/components/brand/logo";
import { SocialLinks } from "@/components/shared/social-links";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const [egg, setEgg] = useState(0);

  return (
    <footer className="no-print relative border-t border-border-subtle bg-surface-0">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <button
              type="button"
              className="rounded-[var(--radius-sm)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => {
                setEgg((n) => n + 1);
              }}
              aria-label="Gaurav Kadam monogram"
            >
              <Logo size="md" />
            </button>
            <p className="mt-4 max-w-sm text-sm text-text-secondary">
              {siteConfig.slogan} {siteConfig.tagline}
            </p>
            {egg >= 5 ? (
              <p
                className="mt-3 font-mono text-xs text-secondary"
                role="status"
              >
                Ledger line verified. You found the quiet easter egg.
              </p>
            ) : null}
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {siteConfig.secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
              Status
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
              {siteConfig.availability.label}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialLinks />
              <ThemeToggle />
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Press{" "}
              <kbd className="rounded border border-border-default px-1 font-mono">
                ⌘K
              </kbd>{" "}
              for command palette
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "mt-6 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent",
              )}
            >
              <ArrowUp className="h-4 w-4" aria-hidden />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Crafted with
            intent.
          </p>
          <p className="font-mono tracking-wide">Mumbai · Full-Stack</p>
        </div>
      </div>
    </footer>
  );
}

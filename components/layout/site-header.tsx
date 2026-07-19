"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { CommandPaletteTrigger } from "@/components/command/command-palette";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "no-print fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border-subtle bg-void/75 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
        <Link
          href="/"
          className="rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Gaurav Kadam home"
        >
          <Logo showWordmark className="hidden sm:inline-flex" size="sm" />
          <Logo showWordmark={false} className="sm:hidden" size="sm" />
        </Link>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[var(--radius-sm)] px-2.5 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="mt-1 block h-px w-full bg-accent" aria-hidden />
              ) : (
                <span className="mt-1 block h-px w-full bg-transparent" aria-hidden />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CommandPaletteTrigger className="hidden lg:inline-flex" />
          <ThemeToggle className="hidden sm:inline-flex" />
          <div className="hidden items-center gap-3 lg:flex">
            <span className="hidden items-center gap-2 text-xs text-text-muted 2xl:flex">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {siteConfig.availability.label}
            </span>
            <Button asChild size="sm" className="hidden xl:inline-flex">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border-default text-text-primary xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border-subtle bg-void/95 backdrop-blur-xl xl:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:px-6"
          aria-label="Mobile"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[var(--radius-md)] px-4 py-3 text-base",
                isActive(item.href)
                  ? "bg-surface-1 text-text-primary"
                  : "text-text-secondary",
              )}
            >
              {item.label}
            </Link>
          ))}
          {siteConfig.secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[var(--radius-md)] px-4 py-3 text-base",
                isActive(item.href)
                  ? "bg-surface-1 text-text-primary"
                  : "text-text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <span className="text-xs text-text-muted">Theme</span>
          </div>
          <Button asChild className="mt-4">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

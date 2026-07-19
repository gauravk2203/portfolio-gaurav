"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { Container } from "@/components/layout/container";
import { PortraitFrame } from "@/components/hero/portrait-frame";

export function Hero() {
  const reduced = useReducedMotion();

  const line = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden pb-16 pt-[calc(var(--header-height)+2rem)] md:pb-24 md:pt-[calc(var(--header-height)+3.5rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute -left-20 bottom-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(122,158,173,0.12),transparent_65%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,241,234,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 70% 40%, black, transparent)",
          }}
        />
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
          }}
        >
          <motion.div variants={line} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface-1/80 px-3 py-1.5 text-xs text-text-secondary backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="sr-only">Availability: </span>
              {siteConfig.availability.label}
            </span>
          </motion.div>

          <motion.p
            variants={line}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent"
          >
            {siteConfig.role} · {siteConfig.location}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={line}
            className="text-display text-[clamp(2.6rem,7vw,5.25rem)] text-text-primary"
          >
            <span className="block">Gaurav Kadam</span>
            <span className="mt-1 block text-gradient">
              Full-stack products, clear UI.
            </span>
          </motion.h1>

          <motion.p
            variants={line}
            className="mt-6 max-w-xl text-base text-text-secondary md:text-lg"
          >
            I build React and TypeScript interfaces, wire them to real APIs, and
            ship full-stack apps — from manufacturing dashboards to AI-assisted
            habit tools.
          </motion.p>

          <motion.div
            variants={line}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg">
              <Link href="/#work">
                View selected work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </motion.div>

          <motion.div variants={line} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:col-span-5"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <PortraitFrame />
        </motion.div>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <a
          href="#work"
          className="group flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-accent"
        >
          Scroll
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

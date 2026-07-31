"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { Container } from "@/components/layout/container";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
const PORTRAIT_SRC = "/portrait.svg";

/**
 * Hero — dark theme + staggered motion.
 * Portrait: public/portrait.webp — right column frame (no text over image).
 */
export function Hero() {
  const reduced = useReducedMotion();
  const [staggerDelay, setStaggerDelay] = useState(0.1);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setStaggerDelay(mq.matches ? 0.06 : 0.1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const containerVariants: Variants = reduced
    ? {
        hidden: {},
        visible: { transition: { staggerChildren: 0 } },
      }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      };

  const itemVariants: Variants = reduced
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: EASE_EXPO },
        },
      };

  const portraitVariants: Variants = reduced
    ? {
        hidden: { opacity: 1, y: 0, scale: 1 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }
    : {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.65,
            delay: 0.25,
            ease: EASE_EXPO,
          },
        },
      };

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden pb-16 pt-[calc(var(--header-height)+2rem)] md:pb-24 md:pt-[calc(var(--header-height)+3rem)]"
      aria-labelledby="hero-heading"
    >
      {/* Ambient glows — copper behind copy, soft pool behind portrait */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <motion.div
          className="absolute left-1/2 top-[18%] h-[min(480px,70vw)] w-[min(480px,70vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.18),transparent_65%)] blur-[80px] md:left-[22%] md:translate-x-0"
          animate={
            reduced
              ? undefined
              : { x: [0, 18, -10, 0], y: [0, -14, 10, 0] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 19, ease: "easeInOut", repeat: Infinity }
          }
        />
        <div className="absolute -right-16 top-1/3 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.12),transparent_70%)] blur-[64px] lg:block" />
        <div className="absolute -left-20 bottom-10 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(122,158,173,0.08),transparent_65%)] blur-2xl" />
      </div>

      <Container className="relative z-[1]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Copy column */}
          <motion.div
            className="max-w-2xl lg:col-span-7"
            variants={containerVariants}
            initial={reduced ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent"
            >
              {siteConfig.role} · {siteConfig.location}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-display text-[clamp(2.35rem,5.5vw,4.5rem)] leading-[1.05] text-text-primary"
            >
              <span className="block">Engineer who designs.</span>
              <span className="mt-1 block text-gradient">
                Designer who ships.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[480px] text-base leading-relaxed text-text-secondary md:text-lg"
            >
              I build React and TypeScript interfaces, wire them to real APIs,
              and ship full-stack apps — treating design as a skill, not a
              checkbox.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/#work">
                  View selected work
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/*
            Portrait plate is theme-aware:
            - Dark: warm paper fill so light SVG doesn’t float on void
            - Light: transparent + border only (paper plate would collide)
          */}
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:max-w-none"
            variants={portraitVariants}
            initial={reduced ? "visible" : "hidden"}
            animate="visible"
          >
            <div className="hero-portrait-plate relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)] border">
              <Image
                src={PORTRAIT_SRC}
                alt={`${siteConfig.name}, ${siteConfig.role}`}
                fill
                priority
                unoptimized
                className="object-contain object-center"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

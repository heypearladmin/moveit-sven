"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  useParallaxY,
} from "./motion";

export function HomeHero() {
  const reduce = useReducedMotion();
  const t      = reduce ? { duration: 0 } : transitionBase;
  const tFast  = reduce ? { duration: 0 } : transitionFast;
  const sectionRef = useRef<HTMLElement>(null);
  const imageY     = useParallaxY(sectionRef, [-40, 80]);
  const haloY      = useParallaxY(sectionRef, [0, -40]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate min-h-[92vh] min-h-[92svh] overflow-hidden bg-navy-deep text-paper"
    >
      {/* Hero image with parallax */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: reduce ? 0 : imageY }}
      >
        <Image
          src="/images/movewithsven-hero-silver-spring-downtown.webp"
          alt="Silver Spring, Maryland downtown skyline — Move With Sven real estate advisor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Base darkening wash — enough to cut harsh highlights */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-navy-deep/30" />
      {/* Bottom-up gradient: dense at foot (text area), fades to clear at top */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/55 to-transparent" />
      {/* Top scrim — light touch so sky stays visible */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/3 bg-gradient-to-b from-navy-deep/50 to-transparent" />
      {/* Left wash behind text column — keeps right side of image alive */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-0 w-3/4 bg-gradient-to-r from-navy-deep/80 via-navy-deep/40 to-transparent" />

      {/* Gold halo atmosphere */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: reduce ? 0 : haloY }}
      >
        <div className="absolute -top-20 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brass/[0.10] blur-[140px]" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-navy-soft/[0.20] blur-[160px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[92vh] min-h-[92svh] flex-col">
        <div className="flex-1" />

        <div className="section-wrap pb-16 pt-24 sm:pb-20 sm:pt-28 md:pb-28 lg:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={editorialStagger(0.08, 0.12)}
            className="max-w-[60rem]"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              transition={tFast}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-brass/70" aria-hidden />
              <span className="eyebrow-light" style={{ textShadow: "0 1px 4px rgba(14,22,44,0.95), 0 2px 16px rgba(14,22,44,0.7)" }}>
                Silver Spring · Bowie · DMV Real Estate Advisor
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              transition={t}
              className="display-xl mt-7 text-paper"
              style={{ textShadow: "0 2px 8px rgba(14,22,44,0.9), 0 4px 40px rgba(14,22,44,0.7)" }}
            >
              Strategic Clarity
              <br className="hidden sm:block" />{" "}
              <em className="not-italic text-brass">for Every Move.</em>
            </motion.h1>

            {/* Dek */}
            <motion.p
              variants={fadeUp}
              transition={t}
              className="mt-7 max-w-[38rem] text-[1.0625rem] leading-[1.78] text-paper/85 md:text-[1.125rem]"
              style={{ textShadow: "0 1px 4px rgba(14,22,44,0.95), 0 2px 20px rgba(14,22,44,0.7)" }}
            >
              Most agents focus on transactions. Sven focuses on helping you make
              confident, informed decisions — whether you're buying, selling, or
              just figuring out your next move in the DMV.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fade}
              transition={t}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a href="#market-snapshot" className="btn-gold-on-dark">
                Book A Strategy Call
                <span aria-hidden className="text-sm">→</span>
              </a>
              <a
                href="#communities"
                className="editorial-link editorial-link-light text-[0.8rem] font-semibold uppercase tracking-[0.18em]"
              >
                Explore Communities
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="section-wrap relative pb-8 pt-6">
          <div className="flex items-end justify-between gap-6">
            <span
              className="caption !text-paper/55 hidden sm:block"
              style={{ textShadow: "0 1px 10px rgba(14,22,44,0.4)" }}
            >
              Silver Spring · Bowie · Bethesda · Rockville · DMV
            </span>
            <div className="flex items-center gap-3 text-paper/60">
              <span className="caption !text-paper/55">Scroll</span>
              <span aria-hidden className="block h-9 w-px bg-paper/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

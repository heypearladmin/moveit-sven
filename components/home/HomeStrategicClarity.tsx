"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  viewportOnce, useParallaxY,
} from "./motion";

const pillars = [
  {
    num: "01",
    title: "Advisor First",
    body: "Every conversation starts with your goals, your timeline, and your life — not a transaction.",
  },
  {
    num: "02",
    title: "Educator Always",
    body: "You'll understand every step. No jargon, no pressure — just clear guidance so you can decide with confidence.",
  },
  {
    num: "03",
    title: "Strategist at Heart",
    body: "Sven builds a custom plan for each move — pricing, timing, negotiation — all engineered around your outcome.",
  },
];

export function HomeStrategicClarity() {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const imgY   = useParallaxY(imgRef as React.RefObject<HTMLElement>, [-20, 30]);

  return (
    <section id="philosophy" className="bg-paper py-[6.5rem]">
      <div className="section-wrap">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">

          {/* Image col */}
          <motion.div
            ref={imgRef}
            className="relative lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fade}
            transition={transitionBase}
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] shadow-navy">
              <motion.div style={{ y: reduce ? 0 : imgY }} className="absolute inset-0">
                <Image
                  src="/images/movewithsven-strategic-clarity.webp"
                  alt="Sven Skarie reviewing a real estate strategy with a client"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center"
                />
              </motion.div>
              {/* Gold frame accent */}
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-brass/20" />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4, ...transitionBase }}
              className="absolute -bottom-8 -right-4 max-w-[17rem] rounded-2xl border border-navy/10 bg-paper/95 p-5 shadow-lift backdrop-blur-sm md:-right-10"
            >
              <p className="font-display text-[1.05rem] italic leading-snug text-navy">
                "Most agents focus on transactions. Sven focuses on decisions."
              </p>
              <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brass">
                The Move With Sven Difference
              </p>
            </motion.div>
          </motion.div>

          {/* Text col */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.06, 0.12)}
          >
            <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow">
              Philosophy
            </motion.p>
            <motion.span variants={fade} transition={transitionFast} className="gold-rule mt-4 block" />

            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-navy">
              A quieter, more deliberate{" "}
              <em>way to move</em> in the DMV.
            </motion.h2>

            <motion.p variants={fadeUp} transition={transitionBase} className="dek mt-6 !text-charcoal">
              Real estate isn't just a transaction — it's one of the most significant
              financial and lifestyle decisions you'll ever make. Sven built his entire
              practice around one conviction: you deserve a guide who helps you
              understand every option before you commit to any of them.
            </motion.p>

            <motion.p variants={fadeUp} transition={transitionBase} className="dek mt-4 !text-charcoal">
              Whether you're upsizing in Silver Spring, simplifying your life in Bowie,
              or building a portfolio across Prince George's County — the approach is
              the same: strategic, calm, and decisively in your favor.
            </motion.p>

            {/* Pillars */}
            <motion.div
              variants={editorialStagger(0.2, 0.12)}
              className="mt-10 grid gap-6 sm:grid-cols-3"
            >
              {pillars.map((p) => (
                <motion.div
                  key={p.num}
                  variants={fadeUp}
                  transition={transitionBase}
                  className="border-t border-navy/12 pt-5"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
                    {p.num}
                  </div>
                  <h3 className="mt-2 font-sub text-[0.9rem] font-semibold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-charcoal/75">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

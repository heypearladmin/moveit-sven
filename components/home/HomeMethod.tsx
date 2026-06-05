"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  viewportOnce, useParallaxY,
} from "./motion";

const steps = [
  {
    num: "01",
    title: "The Clarity Conversation",
    body: "Before anything else, Sven listens. Your goals, constraints, fears, and vision. No pitch. No pressure. Just strategic listening.",
  },
  {
    num: "02",
    title: "Market Intelligence Brief",
    body: "A custom analysis of your specific community — pricing trends, inventory, competition, and timing windows you won't get from Zillow.",
  },
  {
    num: "03",
    title: "Your Move Strategy",
    body: "A written plan built around your outcome: offer strategy, pricing position, negotiation leverage, and contingency scenarios.",
  },
  {
    num: "04",
    title: "Guided Execution",
    body: "Sven stays beside you from contract to close — coordinating every party, anticipating every obstacle, and keeping you calm and informed.",
  },
  {
    num: "05",
    title: "Post-Move Partnership",
    body: "The relationship doesn't end at closing. Sven stays connected — for market questions, referrals, or your next move whenever it comes.",
  },
];

export function HomeMethod() {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const imgY   = useParallaxY(imgRef as React.RefObject<HTMLElement>, [-20, 30]);

  return (
    <section id="method" className="bg-paper py-[6.5rem]">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.06, 0.10)}
          className="grid gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow">
              The Framework
            </motion.p>
            <motion.span variants={fade} className="gold-rule mt-4 block" />
            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-navy">
              The Move With Sven{" "}
              <em>Method.</em>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            transition={transitionBase}
            className="dek lg:col-span-6 lg:col-start-7 lg:pt-[4.5rem]"
          >
            Every successful move starts with a plan — not just a listing or an offer.
            Sven's five-step framework has been refined across hundreds of transactions
            in the DMV to give you strategic clarity at every stage of the process.
          </motion.p>
        </motion.div>

        {/* Method grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.08, 0.10)}
            className="space-y-8 lg:col-span-6"
          >
            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                transition={transitionBase}
                className="group flex gap-6 border-t border-navy/10 pt-6"
              >
                <div className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass pt-1">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-sub text-[0.95rem] font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-charcoal/75">{s.body}</p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={fade} transition={transitionBase} className="pt-4">
              <a href="#market-snapshot" className="btn-primary">
                Start the Conversation →
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            ref={imgRef}
            className="lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fade}
            transition={transitionBase}
          >
            <div className="sticky top-28 aspect-[3/2] overflow-hidden rounded-[24px] shadow-navy">
              <motion.div style={{ y: reduce ? 0 : imgY }} className="absolute inset-0">
                <Image
                  src="/images/movewithsven-method-framework.webp"
                  alt="The Move With Sven Method — strategic real estate framework for the DMV"
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover object-center"
                />
              </motion.div>
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-brass/15" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

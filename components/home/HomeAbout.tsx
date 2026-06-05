"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  viewportOnce, useParallaxY,
} from "./motion";

export function HomeAbout() {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const imgY   = useParallaxY(imgRef as React.RefObject<HTMLElement>, [-15, 25]);

  return (
    <section id="about" className="bg-paper-deep py-[6.5rem]">
      <div className="section-wrap">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">

          {/* Text col — left on desktop, wider */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.06, 0.12)}
          >
            <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow">
              About Sven
            </motion.p>
            <motion.span variants={fade} className="gold-rule mt-4 block" />

            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-navy">
              Your guide to the DMV —{" "}
              <em>not just your agent.</em>
            </motion.h2>

            <motion.div variants={fadeUp} transition={transitionBase} className="mt-6 space-y-5 text-[1.0rem] leading-[1.82] text-charcoal/80">
              <p>
                Sven Skarie didn't stumble into real estate. He built a career around a
                single belief: that every person deserves a trusted guide — someone who
                puts their interests first and their confusion to rest before the first
                offer is ever written.
              </p>
              <p>
                With deep roots across Silver Spring, Bowie, and the broader DMV corridor,
                Sven brings a rare combination of hyperlocal market knowledge and genuine
                strategic thinking. He's worked with move-up buyers navigating school
                districts, empty nesters simplifying their lives, investors evaluating
                long-term returns, and sellers trying to maximize value in a shifting market.
              </p>
              <p>
                The common thread? Every client leaves with clarity. Not just a signed
                contract — but a confident understanding of the decision they made
                and why it was right for them.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div variants={fadeUp} transition={transitionBase} className="mt-10 grid grid-cols-2 gap-6 border-t border-navy/10 pt-8">
              {[
                { label: "Primary Focus", value: "Silver Spring & Bowie" },
                { label: "Coverage", value: "Full DMV Corridor" },
                { label: "Brokerage", value: "LPT Realty" },
                { label: "License", value: "Maryland" },
              ].map((c) => (
                <div key={c.label}>
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass">{c.label}</div>
                  <div className="mt-1 text-[0.9rem] font-semibold text-navy">{c.value}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fade} transition={transitionBase} className="mt-8 flex flex-wrap gap-4">
              <a href="#market-snapshot" className="btn-primary">Book A Strategy Call</a>
              <a href={`tel:${3148032406}`} className="btn-ghost">{`314-803-2406`}</a>
            </motion.div>
          </motion.div>

          {/* Image col — right on desktop, smaller accent */}
          <motion.div
            ref={imgRef}
            className="order-1 lg:order-2 lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fade}
            transition={transitionBase}
          >
            <div className="relative mx-auto max-w-[300px] lg:max-w-none">
              {/* Decorative offset frame */}
              <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full rounded-[20px] border border-brass/25" />
              <div className="relative aspect-square overflow-hidden rounded-[20px] shadow-navy">
                <motion.div style={{ y: reduce ? 0 : imgY }} className="absolute inset-0">
                  <Image
                    src="/images/movewithsven-about-sven.webp"
                    alt="Sven Skarie — Silver Spring and Bowie real estate advisor"
                    fill
                    sizes="(min-width: 1024px) 28vw, 300px"
                    className="object-cover object-[center_15%]"
                  />
                </motion.div>
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-navy/10" />
              </div>

              {/* Stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.45, ...transitionBase }}
                className="mt-4 rounded-2xl bg-navy px-5 py-3.5 shadow-navy"
              >
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass">Serving</div>
                <div className="mt-0.5 text-[0.85rem] font-semibold text-paper leading-snug">Silver Spring · Bowie · Full DMV</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

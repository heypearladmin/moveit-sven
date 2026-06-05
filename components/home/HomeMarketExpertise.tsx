"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  viewportOnce, useParallaxY,
} from "./motion";

const markets = [
  {
    name: "Silver Spring",
    type: "Primary Market",
    desc: "A vibrant, transit-rich community with some of the DMV's strongest appreciation fundamentals. From historic neighborhoods near downtown to newer developments along the Purple Line corridor.",
  },
  {
    name: "Bowie",
    type: "Primary Market",
    desc: "Prince George's County's largest city — spacious, family-friendly, and quietly one of the best value stories in Maryland. Strong school options and easy access to DC and Annapolis.",
  },
  {
    name: "Bethesda",
    type: "Secondary Market",
    desc: "Upscale urban energy meets suburban calm. Premium pricing, walkable neighborhoods, and consistently high demand from federal professionals and healthcare executives.",
  },
  {
    name: "Rockville",
    type: "Secondary Market",
    desc: "A Montgomery County hub with excellent infrastructure, diverse housing stock, and growing demand from biotech and life science professionals.",
  },
  {
    name: "Hyattsville",
    type: "Secondary Market",
    desc: "Arts District energy and strong appreciation near Metro access. A favorite among first-time buyers and investors seeking proximity to DC without the price tag.",
  },
  {
    name: "Laurel",
    type: "Secondary Market",
    desc: "Perfectly positioned between DC, Baltimore, and Annapolis — Laurel offers exceptional commuter value and a diverse, growing community.",
  },
  {
    name: "College Park",
    type: "Secondary Market",
    desc: "Home to the University of Maryland and rising fast. Strong rental demand, smart infrastructure investment, and a young professional demographic reshaping the market.",
  },
  {
    name: "Upper Marlboro",
    type: "Secondary Market",
    desc: "Prince George's County seat — expanding infrastructure, diverse price points, and room to grow. A smart play for buyers and investors with a long horizon.",
  },
];

export function HomeMarketExpertise() {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const imgY   = useParallaxY(imgRef as React.RefObject<HTMLElement>, [-20, 30]);

  return (
    <section id="expertise" className="bg-paper-deep py-[6.5rem]">
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
              Local Intelligence
            </motion.p>
            <motion.span variants={fade} className="gold-rule mt-4 block" />
            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-navy">
              Deep roots across the{" "}
              <em>entire DMV corridor.</em>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            transition={transitionBase}
            className="dek lg:col-span-6 lg:col-start-7 lg:pt-[4.5rem]"
          >
            Sven's knowledge isn't surface-level. He tracks inventory, price per square
            foot, absorption rates, and neighborhood-level trends across every community
            he serves — so your strategy is built on real data, not guesswork.
          </motion.p>
        </motion.div>

        {/* Image + markets grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Image */}
          <motion.div
            ref={imgRef}
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fade}
            transition={transitionBase}
          >
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[24px] shadow-navy">
              <motion.div style={{ y: reduce ? 0 : imgY }} className="absolute inset-[-8%]">
                <Image
                  src="/images/movewithsven-dmv-market-expertise.webp"
                  alt="DMV real estate market expertise — Silver Spring, Bowie, Maryland"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-brass/15" />
            </div>
          </motion.div>

          {/* Markets list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.06, 0.08)}
            className="lg:col-span-7"
          >
            <div className="grid gap-0 sm:grid-cols-2">
              {markets.map((m) => (
                <motion.div
                  key={m.name}
                  variants={fadeUp}
                  transition={transitionBase}
                  className="border-t border-navy/10 p-5 transition-colors duration-300 hover:bg-paper/60"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sub text-[1rem] font-semibold text-navy">{m.name}</h3>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${
                      m.type === "Primary Market"
                        ? "bg-brass/15 text-brass"
                        : "bg-navy/10 text-navy/60"
                    }`}>
                      {m.type === "Primary Market" ? "Primary" : "Secondary"}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.8375rem] leading-relaxed text-charcoal/70">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

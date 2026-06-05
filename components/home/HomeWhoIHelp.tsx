"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  viewportOnce,
} from "./motion";

const segments = [
  {
    title: "Move-Up Buyers",
    subtitle: "From your starter home to the one that fits your life.",
    body: "You've outgrown your current home and you know what you want next — but the math is complex. Sven helps move-up buyers understand exactly how to sequence the sale and purchase to maximize equity and minimize stress.",
    image: "/images/movewithsven-move-up-buyers.webp",
    alt: "Move-up buyers in the DMV — strategic real estate guidance from Sven Skarie",
    bullets: [
      "Simultaneous buy-sell coordination",
      "Bridge financing strategy",
      "School district and lifestyle analysis",
      "Offer timing to maximize leverage",
    ],
  },
  {
    title: "Empty Nesters",
    subtitle: "The kids are gone. The house is too much. It's time.",
    body: "Downsizing is one of the most emotionally complex moves there is — and the most financially significant. Sven helps empty nesters simplify with confidence, capturing maximum value from their current home while landing in exactly the right next chapter.",
    image: "/images/movewithsven-empty-nesters.webp",
    alt: "Empty nesters downsizing in Maryland — strategic real estate guidance",
    bullets: [
      "Lifestyle-first community matching",
      "Maximum equity extraction strategy",
      "Low-maintenance housing options",
      "Timeline built around your pace",
    ],
  },
  {
    title: "Investors",
    subtitle: "Data-driven acquisition strategy for the DMV market.",
    body: "Sven works with investors at every level — from first-time rental buyers to experienced portfolio builders expanding across Prince George's and Montgomery Counties. Every acquisition recommendation is grounded in return analysis, not just enthusiasm.",
    image: "/images/movewithsven-investor-strategy.webp",
    alt: "Real estate investors in Silver Spring and Bowie, Maryland — Sven Skarie advisor",
    bullets: [
      "Cash flow and cap rate analysis",
      "Neighborhood appreciation forecasts",
      "Off-market opportunity sourcing",
      "Portfolio scaling strategy",
    ],
  },
  {
    title: "Sellers",
    subtitle: "Positioned to win. Priced to perform.",
    body: "Sven's seller strategy starts weeks before your home goes on market — with a preparation plan, pricing analysis, and marketing approach that positions your home at the top of its category and generates competitive offers.",
    image: "/images/movewithsven-seller-strategy.webp",
    alt: "Home sellers in Silver Spring and Bowie — Sven Skarie listing strategy",
    bullets: [
      "Pre-listing preparation roadmap",
      "Strategic pricing and comp analysis",
      "Professional photography & presentation",
      "Offer review and negotiation strategy",
    ],
  },
  {
    title: "Negotiation Strategy",
    subtitle: "Every term. Every clause. Strategically structured.",
    body: "In the DMV market, the difference between a good deal and a great one is often the negotiation. Sven brings a structured, data-backed approach to every offer — on both sides of the transaction — so you never leave money or terms on the table.",
    image: "/images/movewithsven-negotiation-strategy.webp",
    alt: "Real estate negotiation strategy in Maryland — Move With Sven",
    bullets: [
      "Offer architecture and structuring",
      "Escalation clause strategy",
      "Contingency leverage analysis",
      "Seller concession positioning",
    ],
  },
];

export function HomeWhoIHelp() {
  return (
    <section id="who-i-help" className="bg-paper-deep py-[6.5rem]">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.06, 0.10)}
          className="mb-14 grid gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow">
              Who Sven Helps
            </motion.p>
            <motion.span variants={fade} className="gold-rule mt-4 block" />
            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-navy">
              Built around outcomes —{" "}
              <em>not transactions.</em>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            transition={transitionBase}
            className="dek self-end lg:col-span-6 lg:col-start-7"
          >
            Every client situation is different. Sven's practice is structured around
            five distinct client types — each with a tailored strategy, not a one-size-fits-all approach.
          </motion.p>
        </motion.div>

        {/* Service cards — alternating layout */}
        <div className="space-y-10">
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={editorialStagger(0.06, 0.10)}
              className={`grid items-center gap-12 overflow-hidden rounded-[28px] border border-navy/08 bg-paper shadow-surface lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                variants={fade}
                transition={transitionBase}
                className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]"
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
              </motion.div>

              {/* Content */}
              <motion.div variants={editorialStagger(0.1, 0.10)} className="p-8 md:p-10 lg:py-12">
                <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow">
                  {s.subtitle}
                </motion.p>
                <motion.h3 variants={fadeUp} transition={transitionBase} className="display-md mt-4 text-navy">
                  {s.title}
                </motion.h3>
                <motion.p variants={fadeUp} transition={transitionBase} className="mt-4 text-[0.9375rem] leading-[1.78] text-charcoal/80">
                  {s.body}
                </motion.p>
                <motion.ul variants={editorialStagger(0.3, 0.08)} className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <motion.li
                      key={b}
                      variants={fadeUp}
                      transition={transitionBase}
                      className="flex items-start gap-2.5 text-[0.85rem] text-charcoal/75"
                    >
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fade} transition={transitionBase} className="mt-8">
                  <a href="#market-snapshot" className="btn-primary">
                    Talk to Sven →
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

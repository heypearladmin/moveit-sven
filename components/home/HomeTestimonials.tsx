"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  viewportOnce,
} from "./motion";

const testimonials = [
  {
    quote: "Sven didn't just help us find a house — he helped us understand exactly what we were getting into. The level of preparation and strategy he brought to our search was unlike anything we'd experienced before.",
    name: "Marcus & Alicia T.",
    context: "Move-Up Buyers · Silver Spring",
    initials: "MA",
  },
  {
    quote: "We were nervous about downsizing after 22 years in our home. Sven made the entire process feel calm and deliberate. He treated it like the life decision it was — not just a transaction.",
    name: "Robert H.",
    context: "Empty Nester · Bowie",
    initials: "RH",
  },
  {
    quote: "I've worked with several agents over the years and Sven is the first one who actually came to me with data. He knew the Hyattsville market better than anyone, and my investment has already appreciated 14% in 18 months.",
    name: "Priya N.",
    context: "Investor · Hyattsville",
    initials: "PN",
  },
  {
    quote: "We listed with Sven in a softening market and still got 103% of asking price. His pre-listing strategy and pricing analysis were spot-on. We had four offers in five days.",
    name: "David & Keisha W.",
    context: "Sellers · Rockville",
    initials: "DW",
  },
  {
    quote: "The negotiation alone saved us $18,000 and got us closing costs covered. Sven knows exactly how to structure an offer and when to push. I felt completely taken care of.",
    name: "Stephanie O.",
    context: "Buyer · Bethesda",
    initials: "SO",
  },
  {
    quote: "Responsive, honest, and genuinely strategic. Sven answered every question before I even knew I had it. If you're buying or selling in the DMV, this is your guy.",
    name: "James P.",
    context: "Buyer · Laurel",
    initials: "JP",
  },
];

export function HomeTestimonials() {
  return (
    <section id="testimonials" className="bg-navy py-[6.5rem]">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brass/[0.07] blur-[160px]" />

      <div className="section-wrap relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.06, 0.10)}
          className="grid gap-10 lg:grid-cols-12 lg:gap-16 mb-14"
        >
          <div className="lg:col-span-5">
            <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow-light">
              Client Stories
            </motion.p>
            <motion.span variants={fade} className="mx-0 mt-4 block h-px w-14 bg-brass" />
            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-paper">
              Confidence at{" "}
              <em className="italic text-brass">every closing.</em>
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="lg:col-span-5 lg:col-start-7 lg:pt-[4.5rem]"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] shadow-gold">
              <Image
                src="/images/movewithsven-client-success.webp"
                alt="Happy clients who worked with Sven Skarie — Move With Sven real estate"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 rounded-[20px] ring-1 ring-brass/20" />
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.04, 0.08)}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              transition={transitionBase}
              className="rounded-[20px] border border-paper/10 bg-navy-deep/50 p-6 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-brass" aria-hidden>
                    <path d="M8 1l1.545 4.755H15l-4.045 2.94 1.545 4.755L8 10.51l-4.5 2.94 1.545-4.755L1 5.755h5.455z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-[1.05rem] italic leading-[1.6] text-paper/90">
                "{t.quote}"
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-paper/10 pt-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brass/20 text-[0.72rem] font-bold text-brass">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.82rem] font-semibold text-paper">{t.name}</div>
                  <div className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-paper/50">{t.context}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

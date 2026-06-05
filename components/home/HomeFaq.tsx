"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { editorialStagger, fadeUp, fade, transitionBase, transitionFast, viewportOnce } from "./motion";

const faqs = [
  {
    q: "What areas does Sven specialize in?",
    a: "Sven's primary markets are Silver Spring and Bowie, Maryland. He also serves Bethesda, Rockville, Hyattsville, Laurel, College Park, and Upper Marlboro — covering the full DMV corridor across both Montgomery and Prince George's Counties.",
  },
  {
    q: "What makes Move With Sven different from other agents?",
    a: "Most agents focus on closing transactions. Sven focuses on helping you make confident decisions. Every engagement starts with a clarity conversation — understanding your goals, constraints, and timeline — before any strategy is presented. You'll always understand your options before committing to any of them.",
  },
  {
    q: "How does the free DMV Market Snapshot work?",
    a: "When you request a Market Snapshot, Sven personally analyzes the current conditions in your specific community — pricing trends, days on market, absorption rate, and inventory levels — and delivers a custom briefing tailored to your situation. There's no obligation and no pitch.",
  },
  {
    q: "Do you work with first-time buyers?",
    a: "Absolutely. Sven has worked with buyers across all experience levels. First-time buyers benefit especially from his educational approach — every step is explained clearly, every document reviewed together, and every option presented without pressure.",
  },
  {
    q: "Can you help me buy and sell at the same time?",
    a: "Yes — and this is one of Sven's specialties. Coordinating a simultaneous buy-sell transaction requires careful sequencing, financial strategy, and tight timeline management. Sven builds a written plan for every move-up scenario so you never feel like you're guessing.",
  },
  {
    q: "Do you work with real estate investors?",
    a: "Yes. Sven works with investors from first-time rental buyers to experienced portfolio builders. Every acquisition recommendation includes a cash flow analysis, neighborhood appreciation forecast, and return projection — not just enthusiasm.",
  },
  {
    q: "What brokerage does Sven work with?",
    a: "Sven Skarie is a licensed Maryland real estate agent with LPT Realty, operating under Move With Sven. His office is located at 257 West St, Annapolis, MD 21401.",
  },
  {
    q: "How do I get started?",
    a: "The easiest way is to book a strategy call or request your free DMV Market Snapshot above. Sven will reach out personally within one business day to start the conversation.",
  },
];

function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy/10">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sub text-[0.9375rem] font-semibold text-navy leading-snug">
          {faq.q}
        </span>
        <span
          aria-hidden
          className={`mt-0.5 shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-navy/15 text-navy transition-transform duration-400 ${open ? "rotate-45" : ""}`}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3 w-3">
            <path strokeLinecap="round" d="M8 3v10M3 8h10"/>
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[0.9rem] leading-[1.78] text-charcoal/75">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HomeFaq() {
  return (
    <section id="faq" className="bg-paper py-[6.5rem]">
      <div className="section-wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.06, 0.10)}
            className="lg:col-span-4"
          >
            <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow">
              FAQ
            </motion.p>
            <motion.span variants={fade} className="gold-rule mt-4 block" />
            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-md mt-6 text-navy">
              Common questions about working with Sven.
            </motion.h2>
            <motion.p variants={fadeUp} transition={transitionBase} className="mt-5 text-[0.9rem] leading-relaxed text-charcoal/70">
              Still have questions? Reach out directly — Sven responds personally to
              every inquiry.
            </motion.p>
            <motion.div variants={fade} transition={transitionBase} className="mt-8">
              <a href="#market-snapshot" className="btn-primary">
                Talk to Sven →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, ...transitionBase }}
            className="lg:col-span-8"
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

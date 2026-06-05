"use client";

import { motion } from "framer-motion";
import { fadeUp, editorialStagger, viewportOnce, transitionBase } from "./motion";

const stats = [
  { stat: "15+",       label: "Years DMV Experience" },
  { stat: "Silver Spring", label: "& Bowie Market Expert" },
  { stat: "Strategic", label: "Advisor — Not Just an Agent" },
  { stat: "LPT",       label: "Realty · Licensed in Maryland" },
];

export function HomeTrust() {
  return (
    <section className="border-y border-navy/10 bg-paper-deep">
      <div className="section-wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.04, 0.08)}
          className="grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              transition={transitionBase}
              className="px-4"
            >
              <div className="font-display text-[2rem] font-600 leading-tight text-navy md:text-[2.25rem]">{s.stat}</div>
              <div className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

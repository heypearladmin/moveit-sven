"use client";

import { motion } from "framer-motion";
import { editorialStagger, fadeUp, fade, transitionBase, transitionFast, viewportOnce } from "./motion";
import { site } from "@/lib/site";

export function HomeFinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-deep py-[7rem]">
      {/* Atmospheric halos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy/60 via-transparent to-navy-soft/20" />
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-[36rem] w-[36rem] rounded-full bg-brass/[0.10] blur-[160px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-navy-soft/[0.25] blur-[140px]" />

      <div className="section-wrap relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.08, 0.12)}
          className="mx-auto max-w-[52rem] text-center"
        >
          <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow-light">
            Let's Talk
          </motion.p>
          <motion.span variants={fade} className="mx-auto mt-4 block h-px w-14 bg-brass" />

          <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-paper">
            Let's build your{" "}
            <em className="italic text-brass">real estate strategy.</em>
          </motion.h2>

          <motion.p variants={fadeUp} transition={transitionBase} className="dek mx-auto mt-6 text-center !text-paper/72">
            The earliest conversations are the most valuable. Whether you're ready to
            move now or just starting to think about it — reach out. No pressure, no
            pitch. Just strategic guidance from someone who genuinely knows the DMV.
          </motion.p>

          <motion.div
            variants={fade}
            transition={transitionBase}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
          >
            <a href="#market-snapshot" className="btn-gold-on-dark text-base px-8 py-4">
              Book A Strategy Call →
            </a>
            <a
              href={site.phoneHref}
              className="editorial-link editorial-link-light font-semibold uppercase tracking-[0.18em] text-[0.8rem]"
            >
              {site.phone}
            </a>
          </motion.div>

          {/* Contact details row */}
          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="mt-16 grid grid-cols-1 gap-6 border-t border-paper/10 pt-10 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass mb-2">Phone</div>
              <a href={site.phoneHref} className="text-[0.9rem] font-medium text-paper/80 hover:text-paper transition-colors">
                {site.phone}
              </a>
            </div>
            <div className="text-center">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass mb-2">Email</div>
              <a href={site.emailHref} className="text-[0.9rem] font-medium text-paper/80 hover:text-paper transition-colors break-all">
                {site.email}
              </a>
            </div>
            <div className="text-center">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass mb-2">Office</div>
              <address className="not-italic text-[0.9rem] font-medium text-paper/80 leading-snug">
                {site.office.street}<br />
                {site.office.city}, {site.office.state} {site.office.zip}
              </address>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fade}
            transition={transitionBase}
            className="mt-8 flex items-center justify-center gap-4"
          >
            {[
              {
                href: site.social.facebook,
                label: "Facebook",
                paths: ["M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"],
              },
              {
                href: site.social.instagram,
                label: "Instagram",
                // rounded square + inner circle + corner dot
                paths: [
                  "M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z",
                  "M12 16a4 4 0 100-8 4 4 0 000 8z",
                  "M17.5 6.5h.01",
                ],
              },
              {
                href: site.social.linkedin,
                label: "LinkedIn",
                // "in" lettermark — vertical bar + arc + horizontal bar
                paths: [
                  "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z",
                  "M2 9h4v12H2z",
                  "M4 6a2 2 0 100-4 2 2 0 000 4z",
                ],
              },
              {
                href: site.social.youtube,
                label: "YouTube",
                // rounded rect + play triangle
                paths: [
                  "M22.54 6.42a2.78 2.78 0 00-1.96-1.96C18.88 4 12 4 12 4s-6.88 0-8.58.46a2.78 2.78 0 00-1.96 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.42 19.54C5.12 20 12 20 12 20s6.88 0 8.58-.46a2.78 2.78 0 001.96-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z",
                  "M9.75 15.02V8.98L15.5 12l-5.75 3.02z",
                ],
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/60 transition-colors duration-300 hover:border-brass/50 hover:text-brass"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  {s.paths.map((d, i) => <path key={i} d={d} />)}
                </svg>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

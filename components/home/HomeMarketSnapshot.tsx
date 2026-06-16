"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { editorialStagger, fadeUp, fade, transitionBase, transitionFast, viewportOnce } from "./motion";
import { site } from "@/lib/site";

const communities = [
  "Silver Spring",
  "Bowie",
  "Bethesda",
  "Rockville",
  "Hyattsville",
  "Laurel",
  "College Park",
  "Upper Marlboro",
];

const TCPA = `I consent to receive non-marketing text messages from Chuck and Sven Team LLC about appointment confirmations, appointment reminders, account notifications, customer support updates, and service-related communications at the phone number provided. Message frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out. I consent to receive marketing text messages from Chuck and Sven Team LLC about special offers, discounts, promotions, marketing updates, and service announcements at the phone number provided. Message frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out. By submitting this form, you agree to our Terms & Conditions and Privacy Policy. SMS consent is optional and not required to submit this form.`;

// Form POSTs to our secure server-side API route → GHL Contacts API
const SNAPSHOT_ENDPOINT = "/api/snapshot";

export function HomeMarketSnapshot() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name:      (form.elements.namedItem("name")      as HTMLInputElement).value,
      email:     (form.elements.namedItem("email")     as HTMLInputElement).value,
      phone:     (form.elements.namedItem("phone")     as HTMLInputElement).value,
      community: (form.elements.namedItem("community") as HTMLSelectElement).value,
      source:    "Move With Sven — DMV Market Snapshot Form",
      tcpa:      "Consented via website form",
    };

    try {
      const res = await fetch(SNAPSHOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `Request failed (${res.status})`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong — please try again or call us directly at 314-803-2406.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setError("");
  }

  return (
    <section id="market-snapshot" className="relative overflow-hidden bg-navy py-[6.5rem]">
      {/* Background texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-deep/60 via-transparent to-navy-soft/20" />
      <div aria-hidden className="pointer-events-none absolute -top-32 right-[-10rem] h-[40rem] w-[40rem] rounded-full bg-brass/[0.08] blur-[160px]" />

      <div className="section-wrap relative z-10">
        <div className="mx-auto max-w-[52rem]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.06, 0.12)}
            className="text-center"
          >
            <motion.p variants={fadeUp} transition={transitionFast} className="eyebrow-light">
              Free Market Intelligence
            </motion.p>
            <motion.span variants={fade} className="mx-auto mt-4 block h-px w-14 bg-brass" />
            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-paper">
              Get Your DMV{" "}
              <em className="italic text-brass">Market Snapshot</em>
            </motion.h2>
            <motion.p variants={fadeUp} transition={transitionBase} className="dek mx-auto mt-5 text-center !text-paper/75">
              Know exactly what's happening in your community — current pricing,
              days on market, inventory levels, and what it means for your next move.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3, ...transitionBase }}
            className="mt-12 rounded-[28px] border border-paper/10 bg-navy-deep/60 p-8 shadow-navy backdrop-blur-sm md:p-10"
          >
            {submitted ? (
              /* ── Success state ── */
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brass/15 text-brass">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="display-sm text-paper">Request received.</h3>
                <p className="dek mx-auto mt-3 text-center !text-paper/70">
                  Sven will personally reach out within one business day with your
                  custom DMV market snapshot. Check your email and phone for his message.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a href={site.phoneHref} className="btn-gold-on-dark">
                    Call Sven Now — {site.phone}
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-paper/50 underline-offset-4 hover:text-paper/80 hover:underline transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="snap-name" className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-paper/60">
                      Full Name
                    </label>
                    <input
                      id="snap-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="field-on-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="snap-email" className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-paper/60">
                      Email Address
                    </label>
                    <input
                      id="snap-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="field-on-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="snap-phone" className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-paper/60">
                      Phone Number
                    </label>
                    <input
                      id="snap-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(301) 555-0100"
                      className="field-on-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="snap-community" className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-paper/60">
                      Community
                    </label>
                    <select
                      id="snap-community"
                      name="community"
                      required
                      className="field-on-dark"
                    >
                      <option value="">Select a community…</option>
                      {communities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-[0.85rem] text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold-on-dark w-full justify-center py-4 text-[0.8rem] disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Sending…
                    </span>
                  ) : "Get My Market Snapshot →"}
                </button>

                <p className="text-[0.68rem] leading-relaxed text-paper/40">
                  {TCPA}{" "}
                  <a href={site.privacyPath} className="underline hover:text-paper/70">Privacy Policy</a>
                  {" · "}
                  <a href={site.termsPath} className="underline hover:text-paper/70">Terms &amp; Conditions</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

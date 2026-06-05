"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  editorialStagger, fadeUp, fade,
  transitionBase, transitionFast,
  viewportOnce,
} from "./motion";

const communities = [
  {
    name: "Silver Spring",
    image: "/images/silver-spring-md-community-overview.webp",
    landmark: "/images/silver-spring-veterans-plaza.webp",
    tag: "Primary Market",
    overview: "Where urban energy meets neighborhood character. Silver Spring is one of Maryland's most dynamic communities — walkable, diverse, and rich with arts, dining, and culture.",
    lifestyle: "Metro access · Fenton Village · Veterans Plaza · Wayne Ave corridor",
    whyMove: "Buyers choose Silver Spring for its strong appreciation, proximity to DC, and vibrant community energy without downtown prices.",
  },
  {
    name: "Bowie",
    image: "/images/bowie-md-community-overview.webp",
    landmark: "/images/bowie-allen-pond-park.webp",
    tag: "Primary Market",
    overview: "Prince George's County's largest city — a spacious, family-focused community with tree-lined streets, excellent parks, and a reputation for strong, stable value.",
    lifestyle: "Allen Pond Park · Old Town Bowie · Top-rated schools · Proximity to DC & Annapolis",
    whyMove: "Sellers consistently achieve strong prices here. Buyers love the space, schools, and the quiet that's increasingly rare this close to the capital.",
  },
  {
    name: "Bethesda",
    image: "/images/bethesda-md-community-overview.webp",
    landmark: "/images/bethesda-row.webp",
    tag: "Secondary Market",
    overview: "Upscale, walkable, and perpetually in demand — Bethesda is Montgomery County's crown jewel. Bethesda Row, the NIH corridor, and premium transit access make it a perennial top performer.",
    lifestyle: "Bethesda Row · Capital Crescent Trail · Metro Red Line · Woodmont Triangle",
    whyMove: "For buyers seeking premium investment. For sellers, demand rarely softens — preparation and pricing strategy matter more than luck.",
  },
  {
    name: "Rockville",
    image: "/images/rockville-md-community-overview.webp",
    landmark: null,
    tag: "Secondary Market",
    overview: "A thriving Montgomery County hub with a genuine downtown, excellent transit, and a diverse mix of housing types that appeal across every life stage.",
    lifestyle: "Town Center · Metro Red Line · Pike & Rose · Strong biotech employment",
    whyMove: "Strong mid-market opportunity with consistent appreciation. Great entry point into Montgomery County's desirable school corridors.",
  },
  {
    name: "Hyattsville",
    image: "/images/hyattsville-md-community-overview.webp",
    landmark: null,
    tag: "Secondary Market",
    overview: "Arts District energy, rapid appreciation, and easy Metro access make Hyattsville one of the most exciting value stories in the entire DMV.",
    lifestyle: "Arts District · Prince George's Plaza Metro · Gateway Arts District · University Hills",
    whyMove: "First-time buyers and investors are discovering Hyattsville fast. Move early — the window on sub-$500K with strong upside is closing.",
  },
  {
    name: "Laurel",
    image: "/images/laurel-md-community-overview.webp",
    landmark: null,
    tag: "Secondary Market",
    overview: "Perfectly positioned between DC, Baltimore, and Annapolis. Laurel delivers exceptional commuter value, a growing restaurant scene, and diverse housing stock.",
    lifestyle: "MARC Train · I-95 & Route 1 corridors · Diverse neighborhoods · Regional parks",
    whyMove: "Among the best value for commuters in the entire DMV. Consistent appreciation with room to run.",
  },
  {
    name: "College Park",
    image: "/images/college-park-md-community-overview.webp",
    landmark: "/images/college-park-university-of-maryland.webp",
    tag: "Secondary Market",
    overview: "Home to the University of Maryland and one of the fastest-evolving communities in Maryland. Heavy infrastructure investment and a growing young professional demographic.",
    lifestyle: "UMD Campus · Route 1 redevelopment · Green Line Metro · College Park Aviation Museum",
    whyMove: "Strong rental demand and long-term appreciation driven by institutional investment. An ideal market for buy-and-hold investors.",
  },
  {
    name: "Upper Marlboro",
    image: "/images/upper-marlboro-md-community-overview.webp",
    landmark: null,
    tag: "Secondary Market",
    overview: "The Prince George's County seat — a quieter, more spacious community with expanding infrastructure, diverse price points, and substantial room to grow.",
    lifestyle: "Show Place Arena · Watkins Regional Park · Route 4 corridor · Rural character near metro access",
    whyMove: "For buyers seeking space and value with a long horizon. Upper Marlboro's infrastructure investment story is just beginning.",
  },
];

export function HomeCommunities() {
  return (
    <section id="communities" className="bg-paper py-[6.5rem]">
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
              Communities
            </motion.p>
            <motion.span variants={fade} className="gold-rule mt-4 block" />
            <motion.h2 variants={fadeUp} transition={transitionBase} className="display-lg mt-6 text-navy">
              Every community.{" "}
              <em>Deep expertise.</em>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            transition={transitionBase}
            className="dek self-end lg:col-span-6 lg:col-start-7"
          >
            Sven lives and works in these communities. The local knowledge you get isn't
            from a database — it's from years of showing homes, writing offers, and tracking
            every micro-neighborhood across the DMV corridor.
          </motion.p>
        </motion.div>

        {/* Community cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.04, 0.07)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {communities.map((c) => (
            <motion.article
              key={c.name}
              variants={fadeUp}
              transition={transitionBase}
              className="group card-surface card-surface-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.name}, Maryland — real estate community overview`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-cinema group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                {/* Tag */}
                <div className="absolute left-3 top-3">
                  <span className={`rounded-full px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm ${
                    c.tag === "Primary Market"
                      ? "bg-brass text-navy"
                      : "bg-navy/70 text-paper/90"
                  }`}>
                    {c.tag}
                  </span>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-[1.25rem] font-600 text-paper leading-tight">{c.name}</h3>
                  <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-paper/70">Maryland</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-[0.825rem] leading-relaxed text-charcoal/75">{c.overview}</p>

                <div className="mt-4 border-t border-navy/08 pt-4">
                  <div className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brass mb-1.5">
                    Lifestyle
                  </div>
                  <p className="text-[0.775rem] text-charcoal/65 leading-relaxed">{c.lifestyle}</p>
                </div>

                <div className="mt-3 border-t border-navy/08 pt-3">
                  <div className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-navy/50 mb-1.5">
                    Why people move here
                  </div>
                  <p className="text-[0.775rem] text-charcoal/65 leading-relaxed">{c.whyMove}</p>
                </div>

                <a
                  href="#market-snapshot"
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brass transition-colors duration-300 hover:text-navy"
                >
                  Get {c.name} Market Data
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

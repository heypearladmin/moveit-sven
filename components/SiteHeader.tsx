"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#communities", label: "Communities" },
  { href: "#who-i-help",  label: "Who I Help" },
  { href: "#method",      label: "My Method" },
  { href: "#about",       label: "About Sven" },
  { href: "#contact",     label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-700 ease-in-out ${
        scrolled
          ? "border-b border-navy/10 bg-paper/92 backdrop-blur-md shadow-[0_18px_40px_-30px_rgba(26,39,68,0.16)]"
          : "border-b border-transparent bg-paper/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-wrap flex items-center justify-between gap-6 py-4 md:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity duration-500 hover:opacity-80"
          onClick={() => setMenuOpen(false)}
          aria-label="Move With Sven — Home"
        >
          <span className="relative block h-10 w-auto shrink-0">
            <Image
              src={site.logoSrc}
              alt={site.logoAlt}
              height={40}
              width={160}
              priority
              className="h-10 w-auto object-contain"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.73rem] font-semibold uppercase tracking-[0.2em] text-ink/65 transition-colors duration-300 ease-editorial hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden whitespace-nowrap text-[0.78rem] font-medium tracking-wide text-ink/60 transition-colors duration-300 hover:text-navy xl:inline"
          >
            {site.phone}
          </a>
          <a
            href="#market-snapshot"
            className="btn-primary hidden whitespace-nowrap !px-5 !py-2.5 sm:inline-flex"
          >
            Book A Strategy Call
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((s) => !s)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-ink transition-colors duration-300 lg:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span aria-hidden className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-500 ease-editorial ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-500 ease-editorial ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-navy/[0.06] bg-paper/97 backdrop-blur-md transition-[max-height,opacity] duration-700 ease-editorial lg:hidden ${
          menuOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-wrap flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-ink/80 transition-colors duration-300 hover:bg-paper-deep hover:text-navy"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-navy/[0.06] px-4 pt-4">
            <a href={site.phoneHref} className="text-[0.875rem] text-ink/60 hover:text-navy">
              {site.phone}
            </a>
            <a href={site.emailHref} className="text-[0.875rem] text-ink/60 hover:text-navy">
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

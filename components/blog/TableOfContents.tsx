"use client";

import { useState } from "react";

interface TocItem {
  id: string;
  heading: string;
}

interface Props {
  items: TocItem[];
  variant?: "mobile" | "desktop" | "both";
}

export function TableOfContents({ items, variant = "both" }: Props) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  const showMobile = variant === "mobile" || variant === "both";
  const showDesktop = variant === "desktop" || variant === "both";

  return (
    <>
      {/* ── Mobile collapsible ── */}
      {showMobile && (
        <div className="lg:hidden mb-8 rounded-2xl border border-navy/[0.08] bg-paper-deep overflow-hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-navy/60">
              In This Article
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className={`h-4 w-4 text-navy/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
            </svg>
          </button>
          {open && (
            <nav aria-label="Table of contents" className="px-6 pb-5 border-t border-navy/[0.06]">
              <ol className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="text-[0.875rem] text-charcoal/70 hover:text-brass transition-colors duration-200 leading-snug block"
                    >
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      )}

      {/* ── Desktop sticky sidebar ── */}
      {showDesktop && (
        <aside
          aria-label="Table of contents"
          className="hidden lg:block sticky top-8 self-start rounded-2xl border border-navy/[0.08] bg-paper-deep p-6"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-navy/50 mb-4">
            In This Article
          </p>
          <nav>
            <ol className="space-y-2.5">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-[0.84rem] leading-snug text-charcoal/65 hover:text-brass transition-colors duration-200"
                  >
                    {item.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      )}
    </>
  );
}

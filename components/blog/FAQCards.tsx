import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import { faqToSlug } from "@/lib/blogUtils";

interface Props {
  faqs: BlogFaq[];
}

export function FAQCards({ faqs }: Props) {
  if (!faqs.length) return null;

  return (
    <section aria-labelledby="faq-heading" className="mt-16">
      <h2 id="faq-heading" className="display-sm text-navy mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => {
          const slug = faqToSlug(faq.question);
          return (
            <Link
              key={slug}
              href={`/faq/${slug}`}
              className="group flex items-center justify-between rounded-2xl border border-navy/[0.08] bg-paper-deep px-6 py-5 transition-all duration-300 hover:border-brass/30 hover:bg-brass/[0.04] hover:shadow-surface"
            >
              <span className="text-[0.9375rem] font-medium text-navy leading-snug pr-4">
                {faq.question}
              </span>
              <span className="shrink-0 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brass opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Read answer →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

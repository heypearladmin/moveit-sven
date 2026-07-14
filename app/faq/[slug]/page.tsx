import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllFaqs, getFaqBySlug, getRelatedFaqs, getRelatedPosts, categoryFromSlug, faqToSlug } from "@/lib/blogUtils";
import { blogPosts } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFaqs().map((f) => ({ slug: f.faqSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);
  if (!faq) return {};
  return {
    title: `${faq.question} | Move With Sven`,
    description: faq.answer.slice(0, 155),
    alternates: { canonical: `https://movewithsven.com/faq/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${faq.question} | Move With Sven`,
      description: faq.answer.slice(0, 155),
      type: "article",
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function FaqPage({ params }: Props) {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);
  if (!faq) notFound();

  const relatedFaqs = getRelatedFaqs(faq, 4);

  // Related articles: from the same source post first, then other posts in same category
  const sourcePost = blogPosts.find((p) => p.slug === faq.postSlug);
  const relatedArticles = sourcePost
    ? getRelatedPosts(sourcePost, 3)
    : [];

  const hasArticle = faq.article && faq.article.length > 0;
  const hasTakeaways = faq.takeaways && faq.takeaways.length > 0;
  const hasTable = !!faq.table;
  const hasSources = faq.sources && faq.sources.length > 0;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: faq.question,
    description: faq.answer,
    author: {
      "@type": "Person",
      name: "Sven Skarie",
      url: "https://movewithsven.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Move With Sven",
      url: "https://movewithsven.com",
    },
    dateModified: faq.updatedMonth ?? new Date().toISOString().slice(0, 7),
    mainEntityOfPage: `https://movewithsven.com/faq/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://movewithsven.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://movewithsven.com/blog" },
      { "@type": "ListItem", position: 3, name: faq.postTitle, item: `https://movewithsven.com/blog/${faq.postSlug}` },
      { "@type": "ListItem", position: 4, name: faq.question, item: `https://movewithsven.com/faq/${slug}` },
    ],
  };

  return (
    <>
      <JsonLd schema={schema as Record<string, unknown>} />
      <JsonLd schema={articleSchema as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema as Record<string, unknown>} />

      <main id="main" className="bg-paper">

        {/* ── 1. HERO ── */}
        <div className="bg-navy-deep py-14 lg:py-20">
          <div className="section-wrap-narrow">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] text-paper/35 font-medium uppercase tracking-[0.18em]">
                <li><Link href="/" className="hover:text-brass transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog" className="hover:text-brass transition-colors">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href={`/blog/${faq.postSlug}`}
                    title={faq.postTitle}
                    className="hover:text-brass transition-colors"
                  >
                    Article
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-paper/55">FAQ</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brass bg-brass/[0.15] px-3 py-1 rounded-full">
                {faq.postCategory}
              </span>
              <span className="text-[0.7rem] text-paper/40 uppercase tracking-[0.16em]">
                Frequently Asked Question
              </span>
            </div>

            <h1 className="display-lg max-w-3xl text-paper leading-[1.12]">{faq.question}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[0.78rem] text-paper/40">
              <span>By <span className="text-paper/60 font-medium">Sven Skarie</span></span>
              {faq.updatedMonth && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Last Updated: <time className="text-paper/60 font-medium">{faq.updatedMonth}</time></span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="section-wrap-narrow py-12 lg:py-18">

          {/* ── 2. QUICK ANSWER ── */}
          <section aria-label="Quick Answer" className="mb-10">
            <div className="rounded-2xl border-l-4 border-brass bg-brass/[0.07] px-7 py-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-brass mb-3">
                Quick Answer
              </p>
              <p className="text-[1rem] leading-[1.82] text-navy font-medium">{faq.answer}</p>
            </div>
          </section>

          {/* ── 3. KEY TAKEAWAYS ── */}
          {hasTakeaways && (
            <section aria-labelledby="takeaways-heading" className="mb-12">
              <h2 id="takeaways-heading" className="display-sm text-navy mb-5">
                Key Takeaways
              </h2>
              <ul className="space-y-3" role="list">
                {faq.takeaways!.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-navy/[0.07] bg-paper-deep px-5 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/[0.12] text-brass"
                    >
                      <svg viewBox="0 0 14 14" fill="none" className="h-3 w-3">
                        <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[0.9375rem] leading-snug text-charcoal/80">{t.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── 4. EXPANDED ARTICLE ── */}
          {hasArticle && (
            <section aria-labelledby="article-heading" className="mb-12">
              <h2 id="article-heading" className="display-sm text-navy mb-6">
                In Depth
              </h2>
              <div className="prose-blog space-y-8">
                {faq.article!.map((section, i) => (
                  <div key={i}>
                    {section.heading && (
                      <h3 className="text-[1.125rem] font-semibold text-navy mb-3 mt-8 first:mt-0 scroll-mt-8">
                        {section.heading}
                      </h3>
                    )}
                    {section.body.map((para, j) => (
                      <p key={j} className="text-[0.9375rem] leading-[1.82] text-charcoal/80 mb-4">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── 5. COMPARISON TABLE ── */}
          {hasTable && (
            <section aria-labelledby="table-heading" className="mb-12">
              <h2 id="table-heading" className="display-sm text-navy mb-5">
                At a Glance
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-navy/[0.08]">
                <table className="w-full min-w-[320px] text-[0.875rem]">
                  <thead>
                    <tr className="bg-navy-deep">
                      <th className="px-6 py-4 text-left text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brass/80">
                        {faq.table!.colA}
                      </th>
                      <th className="px-6 py-4 text-left text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brass/80">
                        {faq.table!.colB}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {faq.table!.rows.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-paper" : "bg-paper-deep"}
                      >
                        <td className="px-6 py-4 font-medium text-navy">{row.a}</td>
                        <td className="px-6 py-4 text-charcoal/70">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ── 6. RELATED QUESTIONS ── */}
          {relatedFaqs.length > 0 && (
            <section aria-labelledby="related-q-heading" className="mb-12">
              <h2 id="related-q-heading" className="display-sm text-navy mb-5">
                Related Questions
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedFaqs.map((f) => (
                  <Link
                    key={f.faqSlug}
                    href={`/faq/${f.faqSlug}`}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-navy/[0.08] bg-paper-deep px-6 py-5 transition-all duration-300 hover:border-brass/30 hover:bg-brass/[0.04] hover:shadow-surface"
                  >
                    <span className="text-[0.9375rem] font-medium text-navy leading-snug group-hover:text-navy-soft transition-colors duration-200">
                      {f.question}
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brass opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── 7. SOURCES ── */}
          {hasSources && (
            <section aria-labelledby="sources-heading" className="mb-12">
              <h2 id="sources-heading" className="display-sm text-navy mb-4">
                Sources
              </h2>
              <ul className="space-y-2.5" role="list">
                {faq.sources!.map((src, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brass shrink-0" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.875rem] text-navy hover:text-brass transition-colors duration-200 underline underline-offset-2 decoration-navy/20 hover:decoration-brass"
                    >
                      {src.label}
                    </a>
                    <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 shrink-0 text-slate/50">
                      <path d="M5 2H2v8h8V7M7 2h3v3M10 2L6 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Back-link to source article ── */}
          <div className="border-t border-navy/[0.06] pt-8 pb-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <p className="text-[0.75rem] text-slate mb-1 uppercase tracking-[0.14em]">This answer is from:</p>
              <Link
                href={`/blog/${faq.postSlug}`}
                className="text-[0.9375rem] font-semibold text-navy hover:text-brass transition-colors duration-200"
              >
                {faq.postTitle}
              </Link>
            </div>
            <Link href={`/blog/${faq.postSlug}`} className="btn-navy shrink-0">
              Read Full Article →
            </Link>
          </div>
        </div>

        {/* ── 9. RELATED ARTICLES ── */}
        {relatedArticles.length > 0 && (
          <section aria-labelledby="related-articles-heading" className="bg-paper-deep py-16">
            <div className="section-wrap">
              <p
                id="related-articles-heading"
                className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-navy/50 mb-8"
              >
                Related Articles
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-paper hover:shadow-lift transition-shadow duration-500"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.heroImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brass mb-2">
                        {categoryFromSlug(p.slug)}
                      </p>
                      <h3 className="display-xs text-navy group-hover:text-navy-soft transition-colors duration-300 line-clamp-2 flex-1">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[0.8125rem] text-slate line-clamp-2">{p.excerpt}</p>
                      <p className="mt-3 text-[0.75rem] text-slate/60">{formatDate(p.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 10. CTA (once, at the bottom) ── */}
        <div className="section-wrap-narrow py-16">
          <div className="rounded-3xl bg-navy-deep px-8 py-12 text-center">
            <p className="eyebrow mb-3 text-brass/70">Ready to Move?</p>
            <h2 className="display-md text-paper max-w-lg mx-auto">
              Get Your Free Strategic Clarity Consultation
            </h2>
            <p className="mt-4 text-paper/60 max-w-md mx-auto text-[0.9375rem]">
              Sven delivers a custom market briefing within one business day — no pressure, no pitch.
            </p>
            <Link href="/#market-snapshot" className="btn-gold-on-dark mt-8 inline-flex">
              Book a Consultation →
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}

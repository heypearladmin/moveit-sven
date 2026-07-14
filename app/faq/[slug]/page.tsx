import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllFaqs, getFaqBySlug } from "@/lib/blogUtils";
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
  };
}

export default async function FaqPage({ params }: Props) {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);
  if (!faq) notFound();

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

  return (
    <>
      <JsonLd schema={schema as Record<string, unknown>} />
      <main id="main" className="bg-paper min-h-[70vh]">
        <div className="bg-navy-deep py-16">
          <div className="section-wrap-narrow">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[0.72rem] text-paper/40 font-medium uppercase tracking-[0.18em]">
                <li><Link href="/" className="hover:text-brass transition-colors">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/blog" className="hover:text-brass transition-colors">Blog</Link></li>
                <li aria-hidden>/</li>
                <li><Link href={`/blog/${faq.postSlug}`} className="hover:text-brass transition-colors line-clamp-1 max-w-[200px]">Article</Link></li>
                <li aria-hidden>/</li>
                <li className="text-paper/60">FAQ</li>
              </ol>
            </nav>
            <p className="eyebrow mb-4 text-brass/70">Frequently Asked Question</p>
            <h1 className="display-lg max-w-3xl text-paper">{faq.question}</h1>
          </div>
        </div>

        <div className="section-wrap-narrow py-14 lg:py-20">
          <div className="rounded-2xl border border-navy/[0.08] bg-paper-deep px-8 py-8 mb-12">
            <p className="text-[1rem] leading-[1.82] text-charcoal/80">{faq.answer}</p>
          </div>

          <div className="border-t border-navy/[0.06] pt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <p className="text-[0.78rem] text-slate mb-1">This answer is from:</p>
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

          <div className="mt-16 rounded-3xl bg-navy-deep px-8 py-10 text-center">
            <p className="eyebrow mb-3 text-brass/70">Have More Questions?</p>
            <h2 className="display-md text-paper max-w-lg mx-auto">
              Get a Free Strategic Clarity Consultation
            </h2>
            <p className="mt-4 text-paper/60 max-w-md mx-auto text-[0.9375rem]">
              Sven delivers a custom market briefing within one business day — no pressure, no pitch.
            </p>
            <Link href="/#market-snapshot" className="btn-gold-on-dark mt-8 inline-flex">
              Request Your Free Snapshot
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

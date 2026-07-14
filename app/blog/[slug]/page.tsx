import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo/schemas";
import { readingTime, categoryFromSlug, getRelatedPosts } from "@/lib/blogUtils";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { FAQCards } from "@/components/blog/FAQCards";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://movewithsven.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }],
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

function headingToId(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const mins = readingTime(post);
  const category = categoryFromSlug(post.slug);
  const related = getRelatedPosts(post, 4);

  const tocItems = post.sections
    .filter((s) => s.heading)
    .map((s) => ({ id: headingToId(s.heading!), heading: s.heading! }));

  return (
    <>
      <JsonLd schema={blogPostingSchema(post) as Record<string, unknown>} />
      <JsonLd schema={webPageSchema({ name: post.title, url: `https://movewithsven.com/blog/${post.slug}`, description: post.excerpt }) as Record<string, unknown>} />
      {post.faq && post.faq.length > 0 && (
        <JsonLd schema={faqSchema(post.faq) as Record<string, unknown>} />
      )}
      <JsonLd schema={breadcrumbSchema([
        { name: "Home", url: "https://movewithsven.com" },
        { name: "Blog", url: "https://movewithsven.com/blog" },
        { name: post.title, url: `https://movewithsven.com/blog/${post.slug}` },
      ]) as Record<string, unknown>} />

      <main id="main" className="bg-paper">
        {/* Hero */}
        <div className="relative h-[54vh] min-h-[380px] w-full overflow-hidden bg-navy-deep">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 section-wrap pb-10 pt-6">
            <Link
              href="/blog"
              className="mb-5 inline-flex items-center gap-2 text-[0.73rem] font-semibold uppercase tracking-[0.2em] text-paper/60 hover:text-brass transition-colors duration-300"
            >
              ← All Articles
            </Link>
            {/* Category + meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brass bg-brass/[0.15] px-3 py-1 rounded-full">
                {category}
              </span>
              <span className="text-[0.75rem] text-paper/50">{mins} min read</span>
              <span className="text-[0.75rem] text-paper/35">·</span>
              <span className="text-[0.75rem] text-paper/50">{formatDate(post.date)}</span>
            </div>
            <h1 className="display-lg max-w-3xl text-paper">{post.title}</h1>
          </div>
        </div>

        {/* Two-column body */}
        <div className="section-wrap py-14 lg:py-20">
          <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-14 lg:items-start">

            {/* ── Left: article content ── */}
            <div className="min-w-0">
              {/* Mobile ToC */}
              <TableOfContents items={tocItems} variant="mobile" />

              {/* Quick Answer */}
              <QuickAnswer answer={post.excerpt} />

              <article className="prose-blog">
                {post.sections.map((section, i) => (
                  <section key={i} className="mb-10">
                    {section.heading && (
                      <h2
                        id={headingToId(section.heading)}
                        className="display-sm text-navy mb-4 mt-10 first:mt-0 scroll-mt-8"
                      >
                        {section.heading}
                      </h2>
                    )}
                    {section.content.map((para, j) => (
                      <p
                        key={j}
                        className="text-[0.9375rem] leading-[1.82] text-charcoal/80 mb-4"
                      >
                        {para}
                      </p>
                    ))}
                  </section>
                ))}
              </article>

              {/* FAQ cards */}
              {post.faq && post.faq.length > 0 && (
                <FAQCards faqs={post.faq} />
              )}

              {/* CTA */}
              <div className="mt-16 rounded-3xl bg-navy-deep px-8 py-12 text-center">
                <p className="eyebrow mb-3 text-brass/70">Ready to Move?</p>
                <h2 className="display-md text-paper max-w-lg mx-auto">
                  Get Your Free Strategic Clarity Consultation
                </h2>
                <p className="mt-4 text-paper/60 max-w-md mx-auto text-[0.9375rem]">
                  Sven delivers a custom market briefing within one business day — no pressure, no pitch.
                </p>
                <Link href="/#market-snapshot" className="btn-gold-on-dark mt-8 inline-flex">
                  Request Your Free Snapshot
                </Link>
              </div>
            </div>

            {/* ── Right: sticky ToC (desktop only) ── */}
            <TableOfContents items={tocItems} variant="desktop" />
          </div>
        </div>

        {/* Related articles */}
        <RelatedArticles posts={related} />
      </main>
    </>
  );
}

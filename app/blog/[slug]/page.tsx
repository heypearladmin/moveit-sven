import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/seo/schemas";

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
    <JsonLd schema={blogPostingSchema(post) as Record<string, unknown>} />
    <JsonLd schema={breadcrumbSchema([
      { name: "Home", url: "https://movewithsven.com" },
      { name: "Blog", url: "https://movewithsven.com/blog" },
      { name: post.title, url: `https://movewithsven.com/blog/${post.slug}` },
    ]) as Record<string, unknown>} />
    <main id="main" className="bg-paper">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden bg-navy-deep">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 section-wrap pb-10 pt-6">
          <Link
            href="/blog"
            className="mb-5 inline-flex items-center gap-2 text-[0.73rem] font-semibold uppercase tracking-[0.2em] text-paper/60 hover:text-brass transition-colors duration-300"
          >
            ← All Articles
          </Link>
          <h1 className="display-lg max-w-3xl text-paper">{post.title}</h1>
          <p className="mt-3 text-[0.875rem] text-paper/50">{formatDate(post.date)}</p>
        </div>
      </div>

      {/* Article body */}
      <div className="section-wrap-narrow py-14 lg:py-20">
        <article className="prose-blog">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              {section.heading && (
                <h2 className="display-sm text-navy mb-4 mt-10 first:mt-0">
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

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="bg-paper-deep py-16">
          <div className="section-wrap">
            <p className="eyebrow-navy mb-8">More Articles</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((p) => (
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
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="display-xs text-navy group-hover:text-navy-soft transition-colors duration-300 line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[0.8125rem] text-slate">{formatDate(p.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
    </>
  );
}

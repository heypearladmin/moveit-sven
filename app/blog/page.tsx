import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Real Estate Blog | Move With Sven",
  description:
    "Expert real estate insights for Maryland buyers and sellers. Strategic guidance on pricing, the DMV market, Sven's 5-step method, and hyperlocal community intelligence.",
  alternates: { canonical: "https://movewithsven.com/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
    <JsonLd schema={breadcrumbSchema([
      { name: "Home", url: "https://movewithsven.com" },
      { name: "Blog", url: "https://movewithsven.com/blog" },
    ]) as Record<string, unknown>} />
    <JsonLd schema={webPageSchema({ name: "Real Estate Blog | Move With Sven", url: "https://movewithsven.com/blog", description: "Expert real estate insights for Maryland buyers and sellers. Strategic guidance on pricing, the DMV market, Sven's 5-step method, and hyperlocal community intelligence." }) as Record<string, unknown>} />
    <main id="main" className="bg-paper">
      {/* Page header */}
      <section className="bg-navy-deep py-20 text-paper">
        <div className="section-wrap">
          <p className="eyebrow mb-4 text-brass/70">Insights &amp; Strategy</p>
          <h1 className="display-xl max-w-2xl">
            Real Estate Intelligence for the DMV
          </h1>
          <p className="dek mt-5 max-w-xl text-paper/60">
            Expert perspectives on pricing, market strategy, and Sven&apos;s proven 5-step method — written for Maryland buyers and sellers.
          </p>
        </div>
      </section>

      <div className="section-wrap py-16 lg:py-24">
        {/* Featured post */}
        <div className="mb-16">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid gap-8 overflow-hidden rounded-3xl bg-paper-deep lg:grid-cols-2">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={featured.heroImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 lg:py-14 lg:pr-12">
                <p className="eyebrow-navy mb-3">Featured</p>
                <h2 className="display-md text-navy group-hover:text-navy-soft transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-charcoal/70 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-[0.78rem] font-medium text-slate">
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brass group-hover:gap-3 transition-all duration-300">
                    Read Article <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid of remaining posts */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-paper-deep hover:shadow-lift-hover transition-shadow duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="display-sm text-navy group-hover:text-navy-soft transition-colors duration-300 line-clamp-3">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-charcoal/65 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-navy/[0.06] pt-4">
                  <span className="text-[0.75rem] text-slate">{formatDate(post.date)}</span>
                  <span className="text-[0.73rem] font-semibold uppercase tracking-[0.18em] text-brass group-hover:tracking-[0.24em] transition-all duration-300">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}

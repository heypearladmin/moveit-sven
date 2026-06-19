import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function HomeLatestPosts() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="latest-articles" className="bg-paper py-20 lg:py-28">
      <div className="section-wrap">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow-navy mb-3">Insights &amp; Strategy</p>
            <h2 className="display-lg text-navy">Latest Articles</h2>
          </div>
          <Link
            href="/blog"
            className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-brass hover:text-navy transition-colors duration-300 whitespace-nowrap"
          >
            View All Articles →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
                <h3 className="display-sm text-navy group-hover:text-navy-soft transition-colors duration-300 line-clamp-3">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-charcoal/65 line-clamp-2">
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
    </section>
  );
}

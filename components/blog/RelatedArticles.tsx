import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { categoryFromSlug } from "@/lib/blogUtils";

interface Props {
  posts: BlogPost[];
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function RelatedArticles({ posts }: Props) {
  if (!posts.length) return null;

  return (
    <section aria-labelledby="related-heading" className="bg-paper-deep py-16">
      <div className="section-wrap">
        <p id="related-heading" className="eyebrow-navy mb-8">Related Articles</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((p) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                <p className="mt-3 text-[0.78rem] text-slate">{formatDate(p.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

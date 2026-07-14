import type { BlogPost, BlogFaq } from "./blog";
import { blogPosts } from "./blog";

export function readingTime(post: BlogPost): number {
  const words = post.sections
    .flatMap((s) => [...s.content, s.heading])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function categoryFromSlug(slug: string): string {
  if (slug.includes("5-step") || slug.includes("pricing-lanes")) return "Method & Strategy";
  if (slug.includes("sell") || slug.includes("staging")) return "Seller Resources";
  if (slug.includes("buyer") || slug.includes("buying") || slug.includes("rent-vs-buy")) return "Buyer Resources";
  if (slug.includes("closing") || slug.includes("cost")) return "Finance & Costs";
  if (
    slug.includes("silver-spring") ||
    slug.includes("bowie") ||
    slug.includes("rockville") ||
    slug.includes("bethesda") ||
    slug.includes("college-park") ||
    slug.includes("relocat")
  ) return "Community Guides";
  return "Market Intelligence";
}

export function faqToSlug(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export interface FaqEntry extends BlogFaq {
  postSlug: string;
  postTitle: string;
  faqSlug: string;
}

export function getAllFaqs(): FaqEntry[] {
  return blogPosts.flatMap((post) =>
    (post.faq ?? []).map((faq) => ({
      ...faq,
      postSlug: post.slug,
      postTitle: post.title,
      faqSlug: faqToSlug(faq.question),
    }))
  );
}

export function getFaqBySlug(slug: string): FaqEntry | undefined {
  return getAllFaqs().find((f) => f.faqSlug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 4): BlogPost[] {
  const cat = categoryFromSlug(post.slug);
  const keywords = post.slug.split("-").filter((w) => w.length > 3);
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      let score = 0;
      if (categoryFromSlug(p.slug) === cat) score += 3;
      keywords.forEach((kw) => { if (p.slug.includes(kw)) score += 1; });
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

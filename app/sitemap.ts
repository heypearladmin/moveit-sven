import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const BASE = "https://www.movewithsven.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blog`,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    ...blogEntries,
    { url: `${BASE}/privacy-policy`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}

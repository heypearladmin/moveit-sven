import type { MetadataRoute } from "next";

const BASE = "https://www.movewithsven.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/privacy-policy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}

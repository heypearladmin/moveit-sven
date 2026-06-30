import { site } from "@/lib/site";

const BASE_URL = site.websiteUrl;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    name: site.legalName,
    url: BASE_URL,
    telephone: site.phone,
    email: site.email,
    image: `${BASE_URL}${site.ogImage}`,
    logo: `${BASE_URL}${site.logoSrc}`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.office.street,
      addressLocality: site.office.city,
      addressRegion: site.office.state,
      postalCode: site.office.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.9897",
      longitude: "-76.9378",
    },
    areaServed: [
      "Silver Spring, MD",
      "Bowie, MD",
      "Bethesda, MD",
      "Rockville, MD",
      "Hyattsville, MD",
      "Laurel, MD",
      "College Park, MD",
      "Upper Marlboro, MD",
      "Montgomery County, MD",
      "Prince George's County, MD",
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
      site.social.gbp,
    ],
    priceRange: "$$$$",
    openingHours: "Mo-Su 08:00-20:00",
  };
}

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.agentName,
    jobTitle: "Real Estate Advisor",
    url: BASE_URL,
    telephone: site.phone,
    email: site.email,
    image: `${BASE_URL}${site.agentPortraitSrc}`,
    worksFor: {
      "@type": "Organization",
      name: site.brokerage.name,
    },
    knowsAbout: [
      "Real Estate",
      "Maryland Real Estate",
      "Silver Spring Real Estate",
      "Bowie Real Estate",
      "DMV Real Estate Market",
      "Home Buying Strategy",
      "Home Selling Strategy",
      "Investment Property",
      "Negotiation Strategy",
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
      site.social.gbp,
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    url: BASE_URL,
    description: site.description,
    publisher: {
      "@type": "Person",
      name: site.agentName,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${site.agentName} — Real Estate Advisor`,
    url: BASE_URL,
    mainEntity: {
      "@type": "Person",
      name: site.agentName,
      jobTitle: "Real Estate Advisor",
      description: site.description,
      url: BASE_URL,
      telephone: site.phone,
      email: site.email,
      image: `${BASE_URL}${site.agentPortraitSrc}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.office.street,
        addressLocality: site.office.city,
        addressRegion: site.office.state,
        postalCode: site.office.zip,
        addressCountry: "US",
      },
      worksFor: {
        "@type": "Organization",
        name: site.brokerage.name,
        url: BASE_URL,
      },
      knowsAbout: [
        "Real Estate Advisory",
        "Maryland Real Estate",
        "Silver Spring MD Real Estate",
        "Bowie MD Real Estate",
        "DMV Real Estate Market",
        "Home Buying Strategy",
        "Home Selling Strategy",
        "Real Estate Negotiation",
        "Prince George's County Real Estate",
        "Montgomery County Real Estate",
      ],
      sameAs: [
        site.social.facebook,
        site.social.instagram,
        site.social.linkedin,
        site.social.youtube,
      ],
    },
  };
}

export function webPageSchema({ name, url, description }: { name: string; url: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    description,
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: site.brand },
    breadcrumb: { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb` },
  };
}

export function blogPostingSchema(post: {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  heroImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    image: `${BASE_URL}${post.heroImage}`,
    author: {
      "@type": "Person",
      name: site.agentName,
      url: BASE_URL,
      jobTitle: "Real Estate Advisor",
      sameAs: [
        site.social.facebook,
        site.social.instagram,
        site.social.linkedin,
      ],
    },
    publisher: {
      "@type": "Organization",
      name: site.brand,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${site.logoSrc}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h2", "article p"],
    },
  };
}

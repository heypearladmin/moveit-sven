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

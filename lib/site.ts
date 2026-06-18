export const site = {
  brand: "Move With Sven",
  legalName: "Move With Sven",
  agentName: "Sven Skarie",
  tagline: "Strategic Clarity for Every Move.",
  description:
    "Sven Skarie — your trusted real estate advisor for Silver Spring, Bowie, and the greater DMV. Strategic guidance, confident decisions, and hyperlocal expertise across Maryland.",

  phone: "314-803-2406",
  phoneHref: "tel:+13148032406",
  email: "sven@movewithsven.com",
  emailHref: "mailto:sven@movewithsven.com",
  websiteUrl: "https://www.movewithsven.com",

  office: {
    street: "257 West St",
    city: "Annapolis",
    state: "MD",
    zip: "21401",
    full: "257 West St, Annapolis, MD 21401",
  },

  brokerage: {
    name: "LPT Realty",
    licenseLine: "Licensed in Maryland",
  },

  logoSrc: "/images/movewithsven-logo.png",
  logoAlt: "Move With Sven logo",
  ogImage: "/images/movewithsven-hero-silver-spring-downtown.webp",

  agentPortraitSrc: "/images/movewithsven-about-sven.webp",
  agentPortraitAlt: "Sven Skarie, real estate advisor and local market expert in Silver Spring and Bowie, Maryland.",

  social: {
    facebook: "https://www.facebook.com/svenskarie",
    instagram: "https://www.instagram.com/youragentsven/",
    linkedin: "http://linkedin.com/in/svenskarie/",
    youtube: "http://youtube.com/@youragentsven",
  },

  primaryMarkets: ["Silver Spring", "Bowie"],
  secondaryMarkets: ["Bethesda", "Rockville", "Hyattsville", "Laurel", "College Park", "Upper Marlboro"],

  contactPath: "/contact",
  privacyPath: "/privacy-policy",
  termsPath: "/terms-and-conditions",

  complianceCompanyName: "Chuck And Sven Team LLC dba Premiere Group",
} as const;

export type SiteConfig = typeof site;

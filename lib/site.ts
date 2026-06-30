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
  websiteUrl: "https://movewithsven.com",

  office: {
    street: "257 West St",
    city: "Annapolis",
    state: "MD",
    zip: "21401",
    full: "257 West St, Annapolis, MD 21401",
  },

  brokerage: {
    name: "Real Broker",
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
    gbp: "https://www.google.com/maps/place/Sven+Skarie+Real+Estate+Consultant/@38.804821,-77.2369665,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7c41b69ca0897:0x4380508082486279!8m2!3d38.804821!4d-77.2369665!16s%2Fg%2F11bw784_y1",
  },

  primaryMarkets: ["Silver Spring", "Bowie"],
  secondaryMarkets: ["Bethesda", "Rockville", "Hyattsville", "Laurel", "College Park", "Upper Marlboro"],

  contactPath: "/contact",
  privacyPath: "/privacy-policy",
  termsPath: "/terms-and-conditions",

  complianceCompanyName: "Chuck And Sven Team LLC dba Premiere Group",
} as const;

export type SiteConfig = typeof site;

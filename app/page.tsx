import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  localBusinessSchema,
  realEstateAgentSchema,
  faqSchema,
  breadcrumbSchema,
  websiteSchema,
  profilePageSchema,
  webPageSchema,
} from "@/lib/seo/schemas";
import { HomeHero }             from "@/components/home/HomeHero";
import { HomeTrust }            from "@/components/home/HomeTrust";
import { HomeStrategicClarity } from "@/components/home/HomeStrategicClarity";
import { HomeMarketSnapshot }   from "@/components/home/HomeMarketSnapshot";
import { HomeAbout }            from "@/components/home/HomeAbout";
import { HomeMethod }           from "@/components/home/HomeMethod";
import { HomeMarketExpertise }  from "@/components/home/HomeMarketExpertise";
import { HomeCommunities }      from "@/components/home/HomeCommunities";
import { HomeWhoIHelp }         from "@/components/home/HomeWhoIHelp";
import { HomeTestimonials }     from "@/components/home/HomeTestimonials";
import { HomeFaq }              from "@/components/home/HomeFaq";
import { HomeFinalCta }         from "@/components/home/HomeFinalCta";
import { HomeLatestPosts }      from "@/components/home/HomeLatestPosts";

export const metadata: Metadata = {
  title: "Move With Sven | Silver Spring & Bowie Realtor",
  description:
    "Sven Skarie is a trusted real estate advisor serving Silver Spring, Bowie, and the greater DMV. Strategic guidance, confident decisions, and hyperlocal expertise across Maryland.",
  alternates: { canonical: "https://movewithsven.com" },
};

const pageFaqs = [
  {
    question: "What areas does Sven Skarie specialize in?",
    answer: "Sven's primary markets are Silver Spring and Bowie, Maryland. He also serves Bethesda, Rockville, Hyattsville, Laurel, College Park, and Upper Marlboro across the full DMV corridor.",
  },
  {
    question: "What makes Move With Sven different from other real estate agents?",
    answer: "Most agents focus on closing transactions. Sven focuses on helping clients make confident, informed decisions. Every engagement starts with a strategic clarity conversation before any plan is presented.",
  },
  {
    question: "Does Sven Skarie work with first-time buyers in Silver Spring and Bowie?",
    answer: "Yes. Sven works with buyers at all experience levels across the DMV, including first-time buyers in Silver Spring, Bowie, and surrounding Maryland communities.",
  },
  {
    question: "Can Move With Sven help with simultaneous buy-sell transactions in Maryland?",
    answer: "Yes — this is one of Sven's specialties. Coordinating a simultaneous buy-sell requires careful sequencing and financial strategy, and Sven builds a written plan for every move-up scenario.",
  },
  {
    question: "How do I get a free DMV Market Snapshot from Sven Skarie?",
    answer: "Submit the form on this page to request your free Market Snapshot. Sven personally analyzes your community's current conditions and delivers a custom briefing within one business day.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema() as Record<string, unknown>} />
      <JsonLd schema={realEstateAgentSchema() as Record<string, unknown>} />
      <JsonLd schema={faqSchema(pageFaqs) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "https://movewithsven.com" }]) as Record<string, unknown>} />
      <JsonLd schema={websiteSchema() as Record<string, unknown>} />
      <JsonLd schema={profilePageSchema() as Record<string, unknown>} />
      <JsonLd schema={webPageSchema({ name: "Move With Sven | Silver Spring & Bowie Realtor", url: "https://movewithsven.com", description: "Sven Skarie is a trusted real estate advisor serving Silver Spring, Bowie, and the greater DMV. Strategic guidance, confident decisions, and hyperlocal expertise across Maryland." }) as Record<string, unknown>} />

      <main id="main">
        <HomeHero />
        <HomeTrust />
        <HomeStrategicClarity />
        <HomeMarketSnapshot />
        <HomeAbout />
        <HomeMethod />
        <HomeMarketExpertise />
        <HomeCommunities />
        <HomeWhoIHelp />
        <HomeTestimonials />
        <HomeLatestPosts />
        <HomeFaq />
        <HomeFinalCta />
      </main>
    </>
  );
}

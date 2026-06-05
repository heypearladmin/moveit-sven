import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sub = Inter({
  subsets: ["latin"],
  variable: "--font-sub",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.movewithsven.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Move With Sven — Strategic Clarity for Every Move | Silver Spring & Bowie Realtor",
    template: "%s · Move With Sven",
  },
  description: site.description,
  keywords: [
    "Silver Spring Realtor",
    "Bowie Realtor",
    "Maryland Real Estate Advisor",
    "Montgomery County Real Estate",
    "Prince George's County Real Estate",
    "DMV Real Estate",
    "Silver Spring homes for sale",
    "Bowie homes for sale",
    "Bethesda real estate agent",
    "Rockville real estate agent",
    "Sven Skarie",
    "Move With Sven",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Move With Sven — Strategic Clarity for Every Move",
    description: site.description,
    url: siteUrl,
    siteName: site.brand,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Move With Sven — Silver Spring and Bowie Maryland real estate advisor.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move With Sven — Strategic Clarity for Every Move",
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sub.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var script=document.createElement("script");script.setAttribute("nowprocket","");script.setAttribute("nitro-exclude","");script.src="https://reports.heypearl.io/scripts/dynamic_optimization.js";script.dataset.uuid="9e9d97e3-c824-496c-a715-b66a05507e69";script.id="sa-dynamic-optimization";document.head.appendChild(script);`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

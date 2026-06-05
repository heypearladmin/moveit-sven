import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Move With Sven.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main id="main" className="bg-paper py-20">
      <div className="section-wrap-narrow prose prose-neutral mx-auto">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brass hover:text-navy transition-colors">
          ← Back to Home
        </Link>

        <h1 className="display-lg text-navy mt-4">Terms &amp; Conditions</h1>
        <p className="dek mt-4">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="mt-10 space-y-8 text-[0.9375rem] leading-[1.78] text-charcoal/80">
          <section>
            <h2 className="display-sm text-navy mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">2. Real Estate Services</h2>
            <p>{site.agentName} is a licensed real estate professional in Maryland, affiliated with {site.brokerage.name}. Information on this website is for general informational purposes and does not constitute legal, financial, or professional real estate advice specific to your situation.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">3. Communications Consent</h2>
            <p>By submitting any form on this website and providing your phone number, you consent to receive calls and text messages, including automated messages and AI-assisted communications, from {site.complianceCompanyName} regarding real estate inquiries, market updates, property information, and related services. Message and data rates may apply. Reply STOP to opt out of SMS communications.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">4. Accuracy of Information</h2>
            <p>While we strive to provide accurate and up-to-date information, real estate market data, property information, and market conditions change frequently. We make no warranties regarding the accuracy or completeness of information on this site.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">5. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and design, is the property of {site.legalName} or its licensors. Unauthorized use is prohibited.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, {site.legalName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">7. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Maryland. Any disputes shall be resolved in the courts of Maryland.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">8. Contact</h2>
            <p>Questions about these Terms? Contact us:<br />
            {site.agentName} / {site.legalName}<br />
            {site.office.full}<br />
            <a href={site.phoneHref} className="text-brass hover:text-navy">{site.phone}</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

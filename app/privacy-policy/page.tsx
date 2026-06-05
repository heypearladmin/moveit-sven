import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Move With Sven — how we collect, use, and protect your personal information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className="bg-paper py-20">
      <div className="section-wrap-narrow prose prose-neutral mx-auto">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brass hover:text-navy transition-colors">
          ← Back to Home
        </Link>

        <h1 className="display-lg text-navy mt-4">Privacy Policy</h1>
        <p className="dek mt-4">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="mt-10 space-y-8 text-[0.9375rem] leading-[1.78] text-charcoal/80">
          <section>
            <h2 className="display-sm text-navy mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly, including your name, email address, phone number, and real estate inquiry details when you submit forms on this website. We may also collect usage data through analytics tools.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">2. How We Use Your Information</h2>
            <p>Information you provide is used to respond to your inquiries, provide real estate services, send market updates and relevant communications you have consented to, and improve our services.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">3. SMS and Phone Communications</h2>
            <p>By providing your phone number on our forms, you consent to receive SMS text messages and phone calls from {site.complianceCompanyName} regarding real estate inquiries, market updates, and related services. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe from text messages. Reply HELP for assistance.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations, subject to confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">6. Cookies and Analytics</h2>
            <p>This website may use cookies and third-party analytics tools (such as Google Analytics) to understand how visitors use our site. You may disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">7. Your Rights</h2>
            <p>You have the right to access, update, or request deletion of your personal information. Contact us at <a href={site.emailHref} className="text-brass hover:text-navy">{site.email}</a> to exercise these rights.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">8. Contact</h2>
            <p>For privacy-related questions, contact us at:<br />
            {site.agentName} / {site.legalName}<br />
            {site.office.full}<br />
            <a href={site.phoneHref} className="text-brass hover:text-navy">{site.phone}</a><br />
            <a href={site.emailHref} className="text-brass hover:text-navy">{site.email}</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

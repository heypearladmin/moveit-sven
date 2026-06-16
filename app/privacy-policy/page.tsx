import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Chuck and Sven Team LLC collects, uses, and protects your information — including SMS opt-in data.",
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
        <p className="dek mt-4">Effective January 2026</p>

        <div className="mt-10 space-y-8 text-[0.9375rem] leading-[1.78] text-charcoal/80">

          <section>
            <h2 className="display-sm text-navy mb-3">Overview</h2>
            <p>{site.complianceCompanyName} (&ldquo;{site.complianceCompanyName},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides real estate advisory services across the DMV. This Privacy Policy describes how we collect and use information across our website at <a href={site.websiteUrl} className="text-brass hover:text-navy">{site.websiteUrl}</a> and our client engagements.</p>
            <p className="mt-3">We aim to collect the least information necessary to deliver our services, and we never sell personal information.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your first name, last name, email address, phone number, and message contents when you submit a form, schedule a strategy call, or become a client.</p>
            <p className="mt-3">We also collect limited technical information automatically, such as device, browser, IP address, and usage data, to improve site performance and security.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide to respond to your inquiries, schedule and deliver services, send transactional communications, and — when you have given consent — to send marketing communications by email, SMS, or phone (including AI-assisted calls).</p>
            <p className="mt-3">We do not sell personal information to third parties.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">3. SMS &amp; Phone Communications</h2>
            <p>By providing your phone number and checking the consent box on our contact form, you expressly consent to receive recurring text messages and phone calls from {site.complianceCompanyName}, including automated calls and AI-assisted communications, at the phone number you provided.</p>
            <p className="mt-3">Message frequency varies. Message and data rates may apply. You can opt out of SMS at any time by replying <strong>STOP</strong> to any text message. Reply <strong>HELP</strong> for help, or contact us at <a href={site.emailHref} className="text-brass hover:text-navy">{site.email}</a>.</p>
            <p className="mt-3"><strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations, subject to confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">5. Cookies and Analytics</h2>
            <p>Our website uses essential cookies and privacy-respecting analytics to understand site performance. You can configure your browser to refuse cookies, though this may affect site functionality.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">6. How We Protect Information</h2>
            <p>We use industry-standard administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is 100% secure, but we continually work to maintain reasonable safeguards.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">7. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time. To opt out of SMS, reply <strong>STOP</strong> to any text message. To opt out of marketing email, use the unsubscribe link in any marketing message. For any other request, contact us at <a href={site.emailHref} className="text-brass hover:text-navy">{site.email}</a> and we will respond promptly.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">8. Children&rsquo;s Privacy</h2>
            <p>{site.complianceCompanyName}&rsquo;s services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be reflected by updating the &ldquo;Effective&rdquo; date above and, where appropriate, by additional notice.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">10. Contact</h2>
            <p>Questions about this Privacy Policy can be directed to:</p>
            <p className="mt-3">
              {site.complianceCompanyName}<br />
              {site.office.full}<br />
              Email: <a href={site.emailHref} className="text-brass hover:text-navy">{site.email}</a><br />
              Phone: <a href={site.phoneHref} className="text-brass hover:text-navy">{site.phone}</a><br />
              Website: <a href={site.websiteUrl} className="text-brass hover:text-navy">{site.websiteUrl}</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

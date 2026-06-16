import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Move With Sven website, services, and SMS messaging program.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main id="main" className="bg-paper py-20">
      <div className="section-wrap-narrow prose prose-neutral mx-auto">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brass hover:text-navy transition-colors">
          ← Back to Home
        </Link>

        <h1 className="display-lg text-navy mt-4">Terms of Service</h1>
        <p className="dek mt-4">Effective June 2026</p>

        <div className="mt-10 space-y-8 text-[0.9375rem] leading-[1.78] text-charcoal/80">

          <section>
            <h2 className="display-sm text-navy mb-3">1. Program Description</h2>
            <p>{site.complianceCompanyName} (&ldquo;{site.complianceCompanyName},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates an SMS messaging program to communicate with clients and prospective clients regarding our services. By opting in, you may receive two categories of messages:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li><strong>Transactional SMS:</strong> Appointment confirmations, appointment reminders, account notifications, customer support updates, and service-related communications.</li>
              <li><strong>Marketing SMS:</strong> Special offers, discounts, promotions, marketing updates, and service announcements.</li>
            </ul>
            <p className="mt-3">Consent to receive either category of SMS messages is entirely optional and is not required to purchase or use our services. Message frequency may vary. Message &amp; data rates may apply.</p>
            <p className="mt-3">Our website is located at <a href={site.websiteUrl} className="text-brass hover:text-navy">{site.websiteUrl}</a>.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">2. Cancellation / Opt-Out Instructions</h2>
            <p>You may cancel SMS messages at any time. To stop receiving text messages, reply <strong>STOP</strong> to any SMS message from {site.complianceCompanyName}. After you send &ldquo;STOP,&rdquo; we will send you a final message confirming that you have been unsubscribed. You will not receive any further SMS messages unless you opt back in.</p>
            <p className="mt-3">To resume messages after opting out, reply <strong>START</strong> to any prior message or re-submit the opt-in form on our website.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">3. Support Information</h2>
            <p>If you need assistance with our SMS program or have any questions, reply <strong>HELP</strong> to any text message we send. You can also contact us directly:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Email: <a href={site.emailHref} className="text-brass hover:text-navy">{site.email}</a></li>
              <li>Phone: <a href={site.phoneHref} className="text-brass hover:text-navy">{site.phone}</a></li>
              <li>Website: <a href={site.websiteUrl} className="text-brass hover:text-navy">{site.websiteUrl}</a></li>
            </ul>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">4. Carrier Liability Disclaimer</h2>
            <p>Carriers (including AT&amp;T, T-Mobile, Verizon, and others) are not liable for delayed or undelivered messages. {site.complianceCompanyName} is not responsible for any delays or failures in SMS delivery caused by your wireless carrier or network conditions.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">5. Message &amp; Data Rates Disclosure</h2>
            <p>Message and data rates may apply to all SMS messages sent to or received from {site.complianceCompanyName}. Standard messaging and data rates from your wireless carrier apply. {site.complianceCompanyName} is not responsible for any charges incurred from your wireless carrier related to SMS communications.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">6. Supported Carriers</h2>
            <p>Our SMS program is supported by all major U.S. wireless carriers, including but not limited to AT&amp;T, T-Mobile, Verizon, Sprint, Boost Mobile, US Cellular, MetroPCS, and other regional and MVNO carriers. Carrier support is subject to change.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">7. Age Restriction</h2>
            <p>You must be 18 years or older to participate in our SMS program. By opting in to receive SMS messages from {site.complianceCompanyName}, you represent and warrant that you are at least 18 years of age. If you are under 18, you may not opt in to or use our SMS program.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">8. Privacy Policy</h2>
            <p>Your use of our website and services, including our SMS program, is also governed by our <Link href={site.privacyPath} className="text-brass hover:text-navy">Privacy Policy</Link>, which describes how {site.complianceCompanyName} collects, uses, stores, and protects your personal information, including SMS opt-in data. We will not share your opt-in data or consent information with third parties for their own marketing purposes.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">9. General Terms</h2>
            <p>By accessing or using the {site.complianceCompanyName} website at <a href={site.websiteUrl} className="text-brass hover:text-navy">{site.websiteUrl}</a> and its associated services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, please do not use the site or services.</p>
            <p className="mt-3">{site.agentName} is a licensed real estate professional in Maryland, affiliated with {site.brokerage.name}. Specific deliverables, timelines, and fees are governed by the agreement signed at engagement.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">10. Intellectual Property Rights</h2>
            <p>All {site.complianceCompanyName} branding, copy, designs, systems, and underlying technology are the exclusive property of {site.complianceCompanyName}. You may not reproduce, distribute, modify, or create derivative works from any {site.complianceCompanyName} content without prior written permission.</p>
            <p className="mt-3">Client deliverables are licensed or assigned to the client according to the terms of the applicable engagement agreement.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">11. Disclaimers</h2>
            <p>The {site.complianceCompanyName} website and services are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind, express or implied. We make no guarantees regarding specific search rankings, lead volume, or business results. Real estate market conditions are influenced by many factors outside our control.</p>
            <p className="mt-3">To the fullest extent permitted by applicable law, {site.complianceCompanyName} disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, {site.complianceCompanyName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">13. Registration &amp; Passwords</h2>
            <p>If you are provided with or create account credentials to access any {site.complianceCompanyName} platform, portal, or client system, you are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. You agree to notify {site.complianceCompanyName} immediately at <a href={site.emailHref} className="text-brass hover:text-navy">{site.email}</a> of any unauthorized access or suspected security breach.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">14. Termination</h2>
            <p>{site.complianceCompanyName} reserves the right to suspend or terminate your access to our website, services, or SMS program at any time for any reason, including violation of these Terms of Service. Upon termination, your right to use our services ceases immediately. Provisions of these terms that by their nature should survive termination (including intellectual property, disclaimers, and limitation of liability) will do so.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">15. Governing Law</h2>
            <p>These Terms of Service are governed by and construed in accordance with the laws of the State of Maryland, without regard to its conflict of law provisions. Any dispute arising from or relating to these terms or your use of {site.complianceCompanyName} services shall be subject to the exclusive jurisdiction of the state and federal courts located in Maryland.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">16. Changes to Terms</h2>
            <p>{site.complianceCompanyName} reserves the right to modify these Terms of Service at any time. Changes will be posted to <a href={`${site.websiteUrl}/terms-and-conditions`} className="text-brass hover:text-navy">{site.websiteUrl}/terms-and-conditions</a> with an updated effective date. Your continued use of our website or services after changes are posted constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="display-sm text-navy mb-3">17. Contact Information</h2>
            <p>Questions, concerns, or requests regarding these Terms of Service may be directed to:</p>
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

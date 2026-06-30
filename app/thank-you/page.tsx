import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Received | Move With Sven",
  description: "Your market snapshot request has been received. Sven will be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center justify-center bg-paper px-4">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brass/10 text-brass">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-9 w-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="display-lg text-navy">Request received.</h1>
        <p className="dek mx-auto mt-4 text-charcoal/65">
          Sven will personally reach out within one business day with your custom DMV market snapshot.
          Check your email and phone for his message.
        </p>
        <Link href="/" className="btn-gold mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

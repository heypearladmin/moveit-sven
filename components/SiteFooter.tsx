import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#communities", label: "Communities" },
  { href: "#who-i-help",  label: "Who I Help" },
  { href: "#method",      label: "My Method" },
  { href: "#about",       label: "About Sven" },
  { href: "#contact",     label: "Contact" },
];

const communities = [
  "Silver Spring", "Bowie", "Bethesda", "Rockville",
  "Hyattsville", "Laurel", "College Park", "Upper Marlboro",
];

const socials = [
  { href: site.social.facebook,  label: "Facebook" },
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.linkedin,  label: "LinkedIn" },
  { href: site.social.youtube,   label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-paper-deep">
      <div className="section-wrap py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={site.logoSrc}
                alt={site.logoAlt}
                height={36}
                width={140}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-[0.83rem] leading-relaxed text-charcoal/65">
              {site.tagline}
            </p>
            <div className="mt-5 space-y-1.5 text-[0.82rem] text-charcoal/60">
              <div><a href={site.phoneHref} className="hover:text-navy transition-colors">{site.phone}</a></div>
              <div><a href={site.emailHref} className="hover:text-navy transition-colors">{site.email}</a></div>
              <div>{site.office.street}, {site.office.city}, {site.office.state} {site.office.zip}</div>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass">Navigate</div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.83rem] text-charcoal/65 transition-colors hover:text-navy">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <div className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass">Communities</div>
            <ul className="space-y-2.5">
              {communities.map((c) => (
                <li key={c}>
                  <a href="#communities" className="text-[0.83rem] text-charcoal/65 transition-colors hover:text-navy">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-brass">Connect</div>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.83rem] text-charcoal/65 transition-colors hover:text-navy"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2.5">
              <Link href={site.privacyPath} className="block text-[0.83rem] text-charcoal/65 hover:text-navy transition-colors">
                Privacy Policy
              </Link>
              <Link href={site.termsPath} className="block text-[0.83rem] text-charcoal/65 hover:text-navy transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy/08">
        <div className="section-wrap flex flex-col gap-3 py-5 text-[0.68rem] text-charcoal/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
            <span>{site.brokerage.name} · {site.brokerage.licenseLine}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Equal Housing */}
            <svg viewBox="0 0 32 32" fill="currentColor" className="h-4 w-4 opacity-50" aria-label="Equal Housing Opportunity" role="img">
              <path d="M16 2L2 14h4v16h8v-9h4v9h8V14h4L16 2zm0 3.04L27 14.6V28h-6v-9H11v9H5V14.6L16 5.04z"/>
            </svg>
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

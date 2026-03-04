import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Climate Tech Grant Consultants | UK & Europe | GreenFundr",
  description:
    "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. From funding scans to full bid leadership. Book a free review.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/greenfundr-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Climate Tech Grant Consultants | UK & Europe | GreenFundr",
    description:
      "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. Book a free review.",
    url: "https://greenfundr.com",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climate Tech Grant Consultants | UK & Europe | GreenFundr",
    description:
      "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. Book a free review.",
  },
};

const primaryNavigation = [
  { href: "/services/grantmatch-scan", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalNavigation = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GreenFundr",
  description:
    "Climate tech grant advisory helping UK and European SMEs win government and innovation funding including Innovate UK, Horizon Europe, and sector-specific programmes.",
  url: "https://greenfundr.com",
  logo: {
    "@type": "ImageObject",
    url: "https://greenfundr.com/greenfundr-logo.svg",
    width: 220,
    height: 48,
  },
  image: "https://greenfundr.com/greenfundr-logo.svg",
  areaServed: ["United Kingdom", "Europe"],
  serviceType: ["Grant Writing", "Bid Management", "Funding Advisory", "Consortium Leadership"],
  founder: {
    "@type": "Person",
    name: "Ben Silver",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/greenfundr-favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
      </head>
      <body
        className="antialiased bg-slate-950 text-slate-100"
      >
        <div className="flex min-h-screen flex-col">
          {/* Urgency banner */}
          <div className="border-b border-emerald-500/20 bg-emerald-500/5 px-6 py-2.5 text-center text-sm text-emerald-200">
            Next Innovate UK window opens soon.{" "}
            <a
              href="https://calendly.com/greenfundr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 hover:text-emerald-100"
            >
              book your funding scan
            </a>{" "}
            to assess fit before the deadline.
          </div>

          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/greenfundr-logo.svg"
                  alt="GreenFundr"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-200">
                {primaryNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-emerald-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Pre-footer CTA */}
          <div className="border-t border-slate-800 bg-slate-900/40">
            <div className="mx-auto w-full max-w-6xl px-6 py-16">
              <h2 className="text-2xl font-semibold text-slate-50">
                Not ready to book a call?
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                    Read the funding landscape
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    See which Innovate UK and Horizon Europe calls are open this
                    week, with deadlines and eligibility notes.
                  </p>
                  <Link
                    href="/funding-calls"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-200 underline-offset-4 hover:underline"
                  >
                    View live funding calls →
                  </Link>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                    Understand your options first
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    Our Insights section covers how different programmes work,
                    what assessors look for, and how to prepare.
                  </p>
                  <Link
                    href="/insights"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-200 underline-offset-4 hover:underline"
                  >
                    Read the insights →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <footer className="border-t border-slate-900 bg-slate-950/90">
            <div className="mx-auto w-full max-w-6xl px-6 py-8">
              <div className="flex flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <p className="font-semibold text-slate-200">GreenFundr</p>
                  <p>Climate tech grant consultants, UK and Europe</p>
                  <p>© {year} GreenFundr. All rights reserved.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-slate-200">Services</p>
                  <Link href="/services/grantmatch-scan" className="transition-colors hover:text-emerald-300">
                    GrantMatch Scan
                  </Link>
                  <Link href="/services/consortium-leadership" className="transition-colors hover:text-emerald-300">
                    Consortium Leadership
                  </Link>
                  <Link href="/services/grant-readiness" className="transition-colors hover:text-emerald-300">
                    Grant-Readiness Roadmapping
                  </Link>
                  <Link href="/services/advisory" className="transition-colors hover:text-emerald-300">
                    Funding Advisory
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-slate-200">Company</p>
                  <Link href="/about" className="transition-colors hover:text-emerald-300">
                    About
                  </Link>
                  <Link href="/insights" className="transition-colors hover:text-emerald-300">
                    Insights
                  </Link>
                  <Link href="/contact" className="transition-colors hover:text-emerald-300">
                    Contact
                  </Link>
                </div>
                <nav className="flex flex-col gap-3">
                  <p className="font-semibold text-slate-200">Legal</p>
                  {legalNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition-colors hover:text-emerald-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Climate Funding Insights | GreenFundr",
  description:
    "Climate tech funding insights from GreenFundr. Guides, analysis and practical advice on Innovate UK, Horizon Europe and UK government grant programmes.",
  openGraph: {
    title: "Climate Funding Insights | GreenFundr",
    description:
      "Climate tech funding insights from GreenFundr. Guides, analysis and practical advice on Innovate UK, Horizon Europe and UK government grant programmes.",
    url: "https://greenfundr.com/insights",
    siteName: "GreenFundr",
    type: "website",
    images: [{ url: "https://greenfundr.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Climate Funding Insights | GreenFundr",
    description:
      "Climate tech funding insights from GreenFundr. Guides, analysis and practical advice on Innovate UK, Horizon Europe and UK government grant programmes.",
  },
  alternates: {
    canonical: "https://greenfundr.com/insights",
  },
};

const articles = [
  {
    title: "How to Apply for Innovate UK Smart Grants (2026 Guide)",
    description:
      "Everything you need to know about Smart Grants — eligibility, timeline, success tips, and common mistakes to avoid.",
    href: "/insights/innovate-uk-smart-grants-guide",
    tag: "Guide",
  },
  {
    title: "Horizon Europe Funding for UK Climate Tech Companies",
    description:
      "How UK companies can access Horizon Europe funding, typical grant sizes, and how to build a winning consortium.",
    href: "/insights/horizon-europe-climate-funding-uk",
    tag: "Guide",
  },
  {
    title: "Grant Readiness Checklist for Climate SMEs",
    description:
      "A practical checklist covering TRL, IP, commercial traction, team, and finances — everything assessors evaluate.",
    href: "/insights/grant-readiness-checklist",
    tag: "Checklist",
  },
  {
    title: "Hydrogen Grant Funding in the UK: Complete Guide",
    description:
      "A comprehensive map of every relevant hydrogen funding source in the UK, from NZHF to Innovate UK sector calls.",
    href: "/insights/hydrogen-grant-funding-uk",
    tag: "Guide",
  },
  {
    title: "What Is the Success Rate for Climate Tech Grants?",
    description:
      "Industry win rates for Innovate UK, Horizon Europe, and sector programmes — and how to improve your odds.",
    href: "/insights/climate-tech-grant-success-rate",
    tag: "Analysis",
  },
];

export default function InsightsPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-[320px] -z-10 blur-3xl" aria-hidden>
        <div className="mx-auto h-[540px] w-[540px] rounded-full bg-emerald-500/30" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-slate-50 sm:text-5xl">
            Climate Funding Insights
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Practical guides, checklists, and analysis to help climate tech
            companies navigate the UK and European grant landscape.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-colors hover:border-emerald-500/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs text-emerald-200">
                    {article.tag}
                  </span>
                  <h2 className="mt-3 text-xl font-semibold text-slate-100 group-hover:text-emerald-300">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Need personalised funding advice?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Our guides cover the fundamentals. For advice tailored to your
            specific technology and stage, book a free 30-minute funding review.
          </p>
          <a
            href="https://calendly.com/greenfundr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Book a Free Funding Review
          </a>
        </div>
      </section>
    </div>
  );
}

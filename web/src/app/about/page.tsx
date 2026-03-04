import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About GreenFundr | Climate Tech Grant Advisory",
  description:
    "GreenFundr is a specialist climate tech grant consultancy founded by Ben Silver. £45M+ in proposals shaped across hydrogen, aviation, and infrastructure.",
  openGraph: {
    title: "About GreenFundr | Climate Tech Grant Advisory",
    description:
      "Specialist climate tech grant consultancy. £45M+ in proposals shaped across hydrogen, aviation, and infrastructure.",
    url: "https://greenfundr.com/about",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GreenFundr | Climate Tech Grant Advisory",
    description:
      "Specialist climate tech grant consultancy. £45M+ in proposals shaped.",
  },
  alternates: {
    canonical: "https://greenfundr.com/about",
  },
};

const sectorBreakdown = [
  { sector: "Hydrogen & Fuel Cells", examples: "LH-SIFT, Hydrogen Highways, AFCAD" },
  { sector: "Clean Aviation", examples: "ATI-funded programmes, sustainable aviation fuel R&D" },
  { sector: "Infrastructure & Transport", examples: "Regional decarbonisation, EV charging, rail electrification" },
  { sector: "Carbon Capture & Storage", examples: "DACCS feasibility, industrial CCS clusters" },
  { sector: "Energy Storage", examples: "Battery innovation, grid-scale storage, thermal storage" },
];

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-[320px] -z-10 blur-3xl" aria-hidden>
        <div className="mx-auto h-[540px] w-[540px] rounded-full bg-emerald-500/30" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
            About us
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
            Climate Tech Grant Specialists
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            GreenFundr exists for one reason: to help climate tech SMEs win the
            funding they need to scale. We are the only grant consultancy
            exclusively focused on climate technology — which means deeper sector
            knowledge, stronger assessor insight, and better outcomes.
          </p>
        </div>

        {/* Founder */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-10 md:flex-row md:items-start">
            <img
              src="/images/ben-silver.jpg"
              alt="Ben Silver, Founder of GreenFundr"
              className="h-36 w-36 shrink-0 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">Ben Silver</h2>
              <p className="mt-1 text-sm text-emerald-300">Founder</p>
              <p className="mt-4 text-sm text-slate-300">
                Ben founded GreenFundr after years of working at the intersection
                of climate innovation and public funding. He has shaped £45M+ in
                grant proposals across hydrogen, aviation, and infrastructure —
                and has seen first-hand how the right support at the right time
                can transform a climate company&apos;s trajectory.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                His approach is direct: understand the technology deeply,
                position it precisely for the funder, and build bids that
                assessors cannot ignore.
              </p>
            </div>
          </div>
        </div>

        {/* What sets us apart */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-3xl font-semibold text-slate-50">What Sets Us Apart</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Vertical Specialisation</h3>
              <p className="mt-2 text-sm text-slate-400">
                We work exclusively with climate tech companies. No generalist
                grant writing — every member of our team understands the climate
                innovation landscape, the funding bodies, and what assessors
                prioritise.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">End-to-End Delivery</h3>
              <p className="mt-2 text-sm text-slate-400">
                From initial funding scan through consortium building, technical
                writing, financial modelling, and submission management — we
                handle the full process so your team stays focused on R&D.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Compounding Assets</h3>
              <p className="mt-2 text-sm text-slate-400">
                Not every bid wins. But our materials, evidence packs, and
                partner relationships carry forward to the next round. Each
                application strengthens the next — we build assets that compound.
              </p>
            </div>
          </div>
        </div>

        {/* Sector breakdown */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-3xl font-semibold text-slate-50">Sectors We Serve</h2>
          <p className="mt-4 text-base text-slate-300">
            £45M+ in proposals shaped across these climate technology sectors:
          </p>
          <div className="mt-8 space-y-4">
            {sectorBreakdown.map((s) => (
              <div key={s.sector} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-base font-semibold text-slate-100">{s.sector}</h3>
                <p className="mt-1 text-sm text-slate-400">{s.examples}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Ready to explore your funding options?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review. We will assess your
            technology, stage, and the funding landscape.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/greenfundr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Book a Free Funding Review
            </a>
            <Link
              href="/contact"
              className="text-sm font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              Check your eligibility
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

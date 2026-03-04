import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GrantMatch Scan | GreenFundr",
  description:
    "Map every relevant Innovate UK and Horizon Europe funding opportunity to your technology and stage. Fixed-fee. Delivered by a climate tech grant specialist with £45M in awarded grants.",
  openGraph: {
    title: "GrantMatch Scan | GreenFundr",
    description:
      "Map every relevant Innovate UK and Horizon Europe funding opportunity to your technology and stage. Fixed-fee. Delivered by a climate tech grant specialist with £45M in awarded grants.",
    url: "https://greenfundr.com/services/grantmatch-scan",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrantMatch Scan | GreenFundr",
    description:
      "Map every relevant Innovate UK and Horizon Europe funding opportunity to your technology and stage. Fixed-fee. Delivered by a climate tech grant specialist with £45M in awarded grants.",
  },
  alternates: {
    canonical: "https://greenfundr.com/services/grantmatch-scan",
  },
};

const deliverables = [
  "Prioritised shortlist of relevant funding programmes with deadlines",
  "Eligibility assessment for each programme against your technology and stage",
  "Strategic recommendations on bid timing and sequencing",
  "Consortium requirements and partner landscape overview",
  "Estimated grant values and co-funding requirements",
  "Clear next steps and action plan",
];

const faqs = [
  {
    question: "How much does a GrantMatch Scan cost?",
    answer:
      "The GrantMatch Scan is a fixed-fee engagement. The exact cost depends on the complexity of your technology and the breadth of programmes you want assessed. Book a free funding review and we will provide a clear quote.",
  },
  {
    question: "How long does a GrantMatch Scan take?",
    answer:
      "Most scans are delivered within 2 weeks of our initial briefing call. For companies with complex multi-sector technologies, it may take slightly longer to ensure comprehensive coverage.",
  },
  {
    question: "What information do you need from us?",
    answer:
      "We need a clear understanding of your technology, its current readiness level (TRL), your commercial traction, target markets, and your team. A 30-minute briefing call plus any existing pitch decks or technical summaries is usually sufficient.",
  },
  {
    question: "Do you only cover UK programmes?",
    answer:
      "No. We cover both UK programmes (Innovate UK, UKRI, ATI, regional funds) and European programmes (Horizon Europe, EIC Accelerator, and national programmes in key partner countries).",
  },
  {
    question: "What happens after the scan?",
    answer:
      "You receive a detailed report with our recommendations. From there, you can proceed independently, engage us for bid leadership on specific calls, or set up ongoing advisory support.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GrantMatchScanPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-x-0 -top-[320px] -z-10 blur-3xl" aria-hidden>
        <div className="mx-auto h-[540px] w-[540px] rounded-full bg-emerald-500/30" />
      </div>

      <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-20">
        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
          Service
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
          GrantMatch Scan
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          A comprehensive mapping of every relevant UK and European funding
          programme to your climate technology, stage, and commercial goals. You
          get a prioritised shortlist with deadlines, eligibility notes, and
          strategic recommendations, so you know exactly where to focus.
        </p>

        {/* What you get */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-50">What You Get</h2>
          <ul className="mt-6 space-y-4">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm text-emerald-200">
                  ✓
                </span>
                <span className="text-sm text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who it's for */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-xl font-semibold text-slate-50">Who This Is For</h2>
          <p className="mt-3 text-sm text-slate-300">
            Early-stage and growth-stage climate tech companies who want a clear
            picture of their funding landscape before committing to a specific
            bid. Particularly valuable if you are new to grant funding or
            expanding into new programme areas.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Start with a Free Funding Review
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a 30-minute call. We will assess your technology and goals,
            then recommend whether a GrantMatch Scan is the right next step.
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
              href="/services/consortium-leadership"
              className="text-sm font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              Explore Consortium Leadership
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-50">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <p className="text-base font-semibold text-slate-100">{faq.question}</p>
                <p className="mt-2 text-sm text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other services */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-50">Other Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/services/consortium-leadership" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40">
              <p className="font-semibold text-slate-100">Consortium Leadership</p>
              <p className="mt-1 text-xs text-slate-400">Multi-partner bid coordination</p>
            </Link>
            <Link href="/services/grant-readiness" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40">
              <p className="font-semibold text-slate-100">Grant-Readiness</p>
              <p className="mt-1 text-xs text-slate-400">Get bid-ready faster</p>
            </Link>
            <Link href="/services/advisory" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40">
              <p className="font-semibold text-slate-100">Funding Advisory</p>
              <p className="mt-1 text-xs text-slate-400">Ongoing strategic support</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

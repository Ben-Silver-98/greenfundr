import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grant-Readiness Roadmapping | GreenFundr",
  description:
    "Assess your TRL, IP, commercial traction and team readiness for grant applications. Get a clear action plan to become grant-ready.",
  openGraph: {
    title: "Grant-Readiness Roadmapping | GreenFundr",
    description:
      "Structured assessment and action plan to make your climate tech company grant-ready.",
    url: "https://greenfundr.com/services/grant-readiness",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant-Readiness Roadmapping | GreenFundr",
    description:
      "Get a structured assessment and action plan to become grant-ready.",
  },
  alternates: {
    canonical: "https://greenfundr.com/services/grant-readiness",
  },
};

const assessmentAreas = [
  { area: "Technology Readiness Level (TRL)", desc: "Where your technology sits on the TRL scale and what evidence you need to demonstrate progress." },
  { area: "Intellectual Property", desc: "Your IP position, freedom to operate, and how to present your IP strategy to assessors." },
  { area: "Commercial Traction", desc: "Letters of intent, pilot agreements, market validation, and route-to-market evidence." },
  { area: "Team & Capability", desc: "Whether your team has the right mix of skills, track record, and capacity to deliver a funded project." },
  { area: "Financial Position", desc: "Match funding requirements, cash flow implications, and financial reporting readiness." },
  { area: "Impact & Dissemination", desc: "How to quantify and communicate your climate impact, jobs created, and knowledge sharing plans." },
];

const faqs = [
  {
    question: "What is a Grant-Readiness Roadmap?",
    answer:
      "A structured assessment of your company across six dimensions that grant assessors evaluate: technology readiness, IP, commercial traction, team, finances, and impact. You receive a clear action plan showing what to strengthen before applying.",
  },
  {
    question: "When should I get a readiness assessment?",
    answer:
      "Ideally 3–6 months before you plan to submit a major bid. This gives you time to address gaps, whether that means securing a letter of intent, filing a patent, or recruiting a key team member.",
  },
  {
    question: "Can I still apply for grants without being fully ready?",
    answer:
      "Yes, but your chances improve significantly when you address gaps in advance. Assessors look for evidence across all dimensions. A readiness roadmap helps you prioritise the most impactful improvements.",
  },
  {
    question: "How is this different from a GrantMatch Scan?",
    answer:
      "A GrantMatch Scan identifies which programmes to target. A Grant-Readiness Roadmap assesses whether you are prepared to win them. Many companies do both: the scan first to identify targets, then the roadmap to prepare.",
  },
  {
    question: "What stage companies benefit most from this?",
    answer:
      "Companies at TRL 3–6 who have a working prototype or early pilots but have not yet applied for significant grant funding. Also valuable for companies who have applied before and want to improve their success rate.",
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

export default function GrantReadinessPage() {
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
          Grant-Readiness Roadmapping
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          A structured assessment of your technology, IP, commercial traction,
          team, and finances, with a clear action plan to strengthen your
          position before you submit. Assessors score across all of these
          dimensions. We make sure you are ready.
        </p>

        {/* Assessment areas */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-50">What We Assess</h2>
          <div className="mt-6 space-y-4">
            {assessmentAreas.map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-base font-semibold text-slate-100">{item.area}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Find out if you are grant-ready
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review. We will give you an initial
            assessment and recommend whether a full roadmap is the right next
            step.
          </p>
          <a
            href="mailto:sales@greenfundr.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Get in Touch
          </a>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-50">Frequently Asked Questions</h2>
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
            <Link href="/services/grantmatch-scan" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40">
              <p className="font-semibold text-slate-100">GrantMatch Scan</p>
              <p className="mt-1 text-xs text-slate-400">Find your best-fit funding</p>
            </Link>
            <Link href="/services/consortium-leadership" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40">
              <p className="font-semibold text-slate-100">Consortium Leadership</p>
              <p className="mt-1 text-xs text-slate-400">Multi-partner bid coordination</p>
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

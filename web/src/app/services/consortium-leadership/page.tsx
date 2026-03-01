import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consortium Leadership | GreenFundr",
  description:
    "We build and lead grant consortiums for climate tech bids. Partner identification, coordination, and multi-partner proposal management.",
  openGraph: {
    title: "Consortium Leadership | GreenFundr",
    description:
      "We build and lead grant consortiums for climate tech bids across Innovate UK and Horizon Europe.",
    url: "https://greenfundr.com/services/consortium-leadership",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consortium Leadership | GreenFundr",
    description:
      "Multi-partner consortium building and bid leadership for climate tech grants.",
  },
  alternates: {
    canonical: "https://greenfundr.com/services/consortium-leadership",
  },
};

const faqs = [
  {
    question: "Do I need consortium partners for my bid?",
    answer:
      "It depends on the programme. Innovate UK Smart Grants can be single-applicant, but Horizon Europe and many collaborative R&D calls require consortium partners from multiple organisations, sectors, or countries.",
  },
  {
    question: "How do you find consortium partners?",
    answer:
      "We draw on our network across UK and European academia, industry, and the public sector. We identify partners based on technical complementarity, track record, and strategic fit with the funding call requirements.",
  },
  {
    question: "Can you help with Horizon Europe consortiums from the UK?",
    answer:
      "Yes. UK companies can participate in many Horizon Europe programmes as associated country partners. We help navigate the requirements and connect you with established European partners.",
  },
  {
    question: "What does consortium leadership involve day-to-day?",
    answer:
      "We manage partner onboarding, coordination calls, workpackage allocation, budget distribution, IP agreements, and submission logistics. Your team focuses on the technical content while we handle the consortium mechanics.",
  },
  {
    question: "How long does it take to build a consortium?",
    answer:
      "Typically 4–8 weeks depending on the programme requirements and how many partners are needed. We recommend starting as soon as a relevant call is identified — or even before it opens.",
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

export default function ConsortiumLeadershipPage() {
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
          Consortium Leadership
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Many of the largest climate tech grants require multi-partner
          consortiums. We identify, approach, and coordinate the right partners
          so you can lead credible collaborative bids without the administrative
          overhead.
        </p>

        {/* What we do */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-50">What We Handle</h2>
          {[
            { title: "Partner Identification", desc: "We map the partner landscape and identify organisations with complementary capabilities, relevant track records, and strategic alignment with the funding call." },
            { title: "Outreach & Onboarding", desc: "We approach potential partners, present the opportunity, negotiate roles, and manage the onboarding process — saving your team weeks of coordination." },
            { title: "Proposal Coordination", desc: "Workpackage allocation, budget distribution, Gantt charts, risk registers, IP frameworks — we handle the consortium mechanics while you focus on technical content." },
            { title: "Submission Management", desc: "We manage the submission portal, ensure all partner contributions are integrated, and handle the final quality assurance and compliance checks." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Case study reference */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-xl font-semibold text-slate-50">Track Record</h2>
          <p className="mt-3 text-sm text-slate-300">
            We have led consortium builds for projects including LH-SIFT
            (hydrogen aviation), AFCAD (advanced fuel cells), and Hydrogen
            Highways (transport infrastructure) — coordinating partners across
            academia, industry, and the public sector.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Need consortium partners for your next bid?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review. We will assess your bid
            requirements and recommend the right consortium approach.
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

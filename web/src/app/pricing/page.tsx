import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work | GreenFundr",
  description:
    "Flexible grant support models from one-off funding scans to full bid leadership. Most engagements start with a free 30-minute review.",
  openGraph: {
    title: "How We Work | GreenFundr",
    description:
      "Flexible grant support models from one-off funding scans to full bid leadership. Most engagements start with a free 30-minute review.",
    url: "https://greenfundr.com/pricing",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | GreenFundr",
    description:
      "Flexible grant support from funding scans to full bid leadership. Free 30-minute review to start.",
  },
  alternates: {
    canonical: "https://greenfundr.com/pricing",
  },
};

const engagementModels = [
  {
    title: "GrantMatch Scan",
    description:
      "A one-off assessment that maps every relevant funding programme to your technology, stage, and goals. You receive a prioritised shortlist with deadlines, eligibility notes, and strategic recommendations.",
    ideal: "Early-stage companies exploring their funding landscape",
  },
  {
    title: "Bid Leadership",
    description:
      "End-to-end proposal development from narrative to workplan, financial model to consortium coordination. We handle the heavy lifting so your team stays focused on R&D.",
    ideal: "Companies ready to submit to a specific call",
  },
  {
    title: "Consortium Building",
    description:
      "We identify, approach, and coordinate consortium partners across academia, industry, and the public sector. Ideal for multi-partner bids that require credible cross-sector collaboration.",
    ideal: "Companies pursuing Horizon Europe or large collaborative bids",
  },
  {
    title: "Ongoing Advisory",
    description:
      "Retained strategic advice on funding pipeline, bid timing, positioning, and grant-readiness. We keep your funding strategy current so you never miss a window.",
    ideal: "Scale-ups with ongoing funding needs across multiple programmes",
  },
];

const faqs = [
  {
    question: "How much does a GrantMatch Scan cost?",
    answer:
      "Our GrantMatch Scan is a fixed-fee engagement. The exact cost depends on the complexity of your technology and the breadth of programmes you want assessed. Book a free funding review and we will provide a clear quote.",
  },
  {
    question: "What is your success rate?",
    answer:
      "Innovate UK Smart Grants have a success rate under 3%. Our structured approach, which includes rigorous scoping, strong narratives, and credible consortium partners, significantly improves your odds. We are transparent about fit: if a programme is not right for you, we will say so upfront.",
  },
  {
    question: "Do I need consortium partners?",
    answer:
      "It depends on the programme. Innovate UK Smart Grants can be single-applicant, but Horizon Europe and many collaborative R&D calls require consortium partners. Our Consortium Leadership service handles the entire partner identification and coordination process.",
  },
  {
    question: "What happens if our bid is not successful?",
    answer:
      "Not every bid wins. But our structured approach means your materials, evidence packs, and partner relationships carry forward to the next round. Each application strengthens the next.",
  },
  {
    question: "How long does a typical bid take?",
    answer:
      "Most bids take 6–12 weeks from scoping to submission, depending on the programme and consortium complexity. We work backwards from the deadline to build a realistic timeline.",
  },
  {
    question: "Do you only work with climate tech companies?",
    answer:
      "Yes. We are exclusively focused on climate tech: hydrogen, clean aviation, carbon capture, energy storage, circular economy, and related sectors. This vertical focus means we understand the assessor landscape and what funders want to see.",
  },
  {
    question: "What stage should my company be at?",
    answer:
      "We work with companies from TRL 3 through to scale-up. The key requirement is that you have a genuine technology with demonstrable progress. We also offer Grant-Readiness Roadmapping for companies that need to strengthen their position before applying.",
  },
  {
    question: "Can you help with Horizon Europe from the UK?",
    answer:
      "Yes. UK companies can still participate in many Horizon Europe programmes as associated country partners. Our Consortium Leadership service helps you navigate the requirements and connect with European partners.",
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

export default function HowWeWorkPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="absolute inset-x-0 -top-[380px] -z-10 blur-3xl" aria-hidden>
        <div className="mx-auto h-[620px] w-[620px] rounded-full bg-emerald-500/20" />
      </div>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
            Flexible engagement models
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
            How We Work
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            We offer flexible models from fixed fees to hybrid arrangements with
            a success component. Most engagements start with a free 30-minute
            funding review.
          </p>
        </div>

        {/* Engagement models */}
        <div className="grid gap-6 sm:grid-cols-2">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-8"
            >
              <h2 className="text-xl font-semibold text-slate-50">
                {model.title}
              </h2>
              <p className="text-sm text-slate-300">{model.description}</p>
              <p className="mt-auto text-xs text-emerald-300">
                Ideal for: {model.ideal}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Not sure which model is right for you?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
            Book a free 30-minute funding review. We will assess your
            technology, stage, and the funding landscape, then recommend the
            right level of support.
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

        {/* FAQs */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
          <h2 className="text-2xl font-semibold text-slate-50">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-base font-semibold text-slate-100">
                  {faq.question}
                </p>
                <p className="mt-2 text-sm text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

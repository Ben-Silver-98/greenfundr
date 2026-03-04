import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funding Advisory | GreenFundr",
  description:
    "Ongoing strategic advice on funding pipeline, bid timing and positioning for Innovate UK and Horizon Europe. Never miss a window or submit underprepared. Fixed-fee engagements.",
  openGraph: {
    title: "Funding Advisory | GreenFundr",
    description:
      "Ongoing strategic advice on funding pipeline, bid timing and positioning for Innovate UK and Horizon Europe. Never miss a window or submit underprepared. Fixed-fee engagements.",
    url: "https://greenfundr.com/services/advisory",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funding Advisory | GreenFundr",
    description:
      "Ongoing strategic advice on funding pipeline, bid timing and positioning for Innovate UK and Horizon Europe. Never miss a window or submit underprepared. Fixed-fee engagements.",
  },
  alternates: {
    canonical: "https://greenfundr.com/services/advisory",
  },
};

const faqs = [
  {
    question: "What does ongoing advisory include?",
    answer:
      "Regular strategic reviews of your funding pipeline, monitoring of relevant calls and deadlines, positioning advice for upcoming programmes, and guidance on bid timing and sequencing. We keep your funding strategy current.",
  },
  {
    question: "How often do we meet?",
    answer:
      "Typically monthly or bi-monthly, depending on your funding pipeline activity. We also provide ad-hoc support when urgent opportunities arise or deadlines shift.",
  },
  {
    question: "Is this a retainer arrangement?",
    answer:
      "Yes. Advisory is structured as a retained engagement with a fixed monthly fee. This gives you priority access to our team and ensures continuity in your funding strategy.",
  },
  {
    question: "Can I combine advisory with other services?",
    answer:
      "Absolutely. Many clients start with a GrantMatch Scan, then move to ongoing advisory. When specific bids arise, we can provide full bid leadership as a separate engagement.",
  },
  {
    question: "What types of companies benefit from advisory?",
    answer:
      "Scale-ups with ongoing funding needs across multiple programmes, companies pursuing several bids per year, and teams that want strategic guidance without hiring a full-time grants manager.",
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

export default function AdvisoryPage() {
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
          Funding Advisory
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Ongoing strategic advice on your funding pipeline, bid timing, and
          positioning. We monitor relevant programmes, flag opportunities, and
          help you prioritise, so you never miss a window or submit
          underprepared.
        </p>

        {/* What's included */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-50">What You Get</h2>
          {[
            { title: "Pipeline Management", desc: "A maintained view of every relevant upcoming funding call, with deadlines, eligibility status, and strategic fit assessment." },
            { title: "Bid Timing & Sequencing", desc: "Strategic advice on which calls to pursue, when to apply, and how to sequence bids to maximise cumulative success." },
            { title: "Positioning Reviews", desc: "Regular reviews of how your technology, team, and traction position you against upcoming calls and competitor applicants." },
            { title: "Opportunity Alerts", desc: "Proactive notification when new programmes open, existing calls shift, or policy changes create new funding routes." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Want ongoing funding strategy support?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review. We will assess your pipeline
            and recommend whether ongoing advisory is the right fit.
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
            <Link href="/services/consortium-leadership" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40">
              <p className="font-semibold text-slate-100">Consortium Leadership</p>
              <p className="mt-1 text-xs text-slate-400">Multi-partner bid coordination</p>
            </Link>
            <Link href="/services/grant-readiness" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40">
              <p className="font-semibold text-slate-100">Grant-Readiness</p>
              <p className="mt-1 text-xs text-slate-400">Get bid-ready faster</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

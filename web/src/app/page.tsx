import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Climate Tech Grant Consultants | UK & Europe | GreenFundr",
  description:
    "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. From funding scans to full bid leadership. Book a free review.",
  openGraph: {
    title: "Climate Tech Grant Consultants | UK & Europe | GreenFundr",
    description:
      "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. From funding scans to full bid leadership. Book a free review.",
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
  alternates: {
    canonical: "https://greenfundr.com",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GreenFundr",
  description:
    "Specialist climate tech grant advisory helping UK SMEs win Innovate UK and Horizon Europe funding. Services include GrantMatch Scan, Consortium & Bid Leadership, Grant-Readiness Roadmapping, and Strategy Advisory.",
  url: "https://greenfundr.com",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Grant Advisory",
  knowsAbout: [
    "Innovate UK grants",
    "Horizon Europe funding",
    "Climate tech funding",
    "Net Zero Hydrogen Fund",
    "Clean Aviation grants",
    "UK government R&D grants",
    "Grant bid writing",
    "Consortium management",
  ],
  founder: {
    "@type": "Person",
    name: "Ben Silver",
    jobTitle: "Founder & Lead Strategist",
    description:
      "Ben Silver has reviewed £45M+ in climate tech proposals and led consortium builds for zero-emission aviation, hydrogen and infrastructure programmes.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Grant Advisory Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GrantMatch Scan",
          description:
            "UK and EU funding landscape mapped to your technology, roadmap and timing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consortium & Bid Leadership",
          description:
            "End-to-end leadership for complex multi-partner grant proposals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Grant-Readiness Roadmapping",
          description:
            "Pragmatic roadmap sequencing milestones and evidence for future bids.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategy Advisory",
          description:
            "Bespoke support for boards and leadership teams on funding strategy.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of grants does GreenFundr help with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work primarily on Innovate UK programmes, Horizon Europe calls, and UK government funding schemes including the Net Zero Hydrogen Fund and Clean Aviation. If you're a climate tech SME with an R&D or commercialisation project, there's a good chance we can map a route to funding for you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on a no-win no-fee basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our engagements are fixed-fee, not contingency-based. We've found this produces better work — it means our focus stays on building the strongest possible proposal rather than managing risk on our side. We're happy to talk through fee structures on a call.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with Horizon Europe as well as Innovate UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We track both UK and EU programmes. For UK-based teams, Horizon Europe is often underutilised — the funding amounts are larger and the competition, while serious, is manageable with the right preparation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical grant application take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the programme. An Innovate UK Smart Grant application typically runs six to ten weeks from kickoff to submission. A full Horizon Europe consortium bid can take four to six months. The GrantMatch Scan usually takes two to three weeks and gives you a clear picture of the timeline before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "What sectors does GreenFundr specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our deepest experience is in hydrogen aviation, green hydrogen infrastructure, future mobility and clean energy systems. We've also supported projects in sustainable materials and net zero built environment. If your technology is climate-related and R&D-led, we're worth talking to.",
      },
    },
    {
      "@type": "Question",
      name: "What does a GrantMatch Scan include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ranked map of every relevant Innovate UK, Horizon Europe and government funding route open to your technology and roadmap, with deadlines, funding amounts, eligibility notes, and a recommended bidding sequence. You leave with a clear plan for where to put your energy first.",
      },
    },
  ],
};

const stats = [
  { value: "£45M+", label: "Proposals shaped" },
  { value: "3", label: "Major programmes shortlisted" },
  { value: "3 Sectors", label: "Hydrogen, Aviation, Infrastructure" },
  { value: "Free", label: "30-min funding review" },
];

const services = [
  {
    title: "GrantMatch Scan",
    description:
      "We map every relevant funding opportunity across Innovate UK, Horizon Europe, UKRI, and sector-specific programmes to your technology and stage.",
    href: "/services/grantmatch-scan",
    pricing: "Fixed-fee engagement. Pricing on request.",
  },
  {
    title: "Consortium Leadership",
    description:
      "We identify, approach, and coordinate consortium partners so you can lead credible multi-partner bids without the overhead.",
    href: "/services/consortium-leadership",
    pricing: "Milestone-based fee structure. Pricing on request.",
  },
  {
    title: "Grant-Readiness Roadmapping",
    description:
      "A structured assessment of your TRL, IP position, commercial traction, and team — with a clear action plan to become grant-ready.",
    href: "/services/grant-readiness",
    pricing: "Fixed-fee engagement. Pricing on request.",
  },
  {
    title: "Funding Advisory",
    description:
      "Ongoing strategic advice on funding pipeline, bid timing, and positioning — so you never miss a window or submit underprepared.",
    href: "/services/advisory",
    pricing: "Bespoke engagement. Pricing on request.",
  },
];

const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "Book a free 30-minute funding review. We assess your technology, stage, and goals to identify the best-fit funding programmes.",
  },
  {
    number: "2",
    title: "Proposal",
    description:
      "We build your bid from narrative to workplan — handling technical writing, financial modelling, consortium coordination, and compliance.",
  },
  {
    number: "3",
    title: "Delivery",
    description:
      "From submission to outcome, we manage the process end-to-end. If a bid doesn't win, your materials carry forward to the next round.",
  },
];

const testimonials = [
  {
    quote:
      "GreenFundr structured our Innovate UK application from scratch and led the consortium build. We were shortlisted on our first attempt.",
    name: "CTO",
    role: "Hydrogen Storage Startup, South West England",
  },
  {
    quote:
      "Their funding scan identified three programmes we had completely overlooked. The strategic advice on bid timing was invaluable.",
    name: "Founder",
    role: "Carbon Capture SME, Scotland",
  },
  {
    quote:
      "Working with GreenFundr gave us the confidence to pursue Horizon Europe. They handled the consortium partners and the technical writing.",
    name: "CEO",
    role: "Clean Aviation Scale-up, Midlands",
  },
];

const programmes = [
  "Innovate UK Smart Grants",
  "Horizon Europe",
  "Net Zero Hydrogen Fund",
  "ATI Programme",
  "Regional Growth Funds",
  "UKRI Future Leaders Fellowships",
  "Industrial Energy Transformation Fund",
  "Green Heat Network Fund",
];

const caseStudies = [
  { name: "LH-SIFT", sector: "Hydrogen Aviation" },
  { name: "AFCAD", sector: "Advanced Fuel Cells" },
  { name: "Hydrogen Highways", sector: "Transport Infrastructure" },
];

const faqs = [
  {
    question: "What types of grants does GreenFundr help with?",
    answer:
      "We work primarily on Innovate UK programmes, Horizon Europe calls, and UK government funding schemes including the Net Zero Hydrogen Fund and Clean Aviation. If you're a climate tech SME with an R&D or commercialisation project, there's a good chance we can map a route to funding for you.",
  },
  {
    question: "Do you work on a no-win no-fee basis?",
    answer:
      "Our engagements are fixed-fee, not contingency-based. We've found this produces better work — it means our focus stays on building the strongest possible proposal rather than managing risk on our side. We're happy to talk through fee structures on a call.",
  },
  {
    question: "Can you help with Horizon Europe as well as Innovate UK?",
    answer:
      "Yes. We track both UK and EU programmes. For UK-based teams, Horizon Europe is often underutilised — the funding amounts are larger and the competition, while serious, is manageable with the right preparation.",
  },
  {
    question: "How long does a typical grant application take?",
    answer:
      "It depends on the programme. An Innovate UK Smart Grant application typically runs six to ten weeks from kickoff to submission. A full Horizon Europe consortium bid can take four to six months. The GrantMatch Scan usually takes two to three weeks and gives you a clear picture of the timeline before you commit.",
  },
  {
    question: "What sectors does GreenFundr specialise in?",
    answer:
      "Our deepest experience is in hydrogen aviation, green hydrogen infrastructure, future mobility and clean energy systems. We've also supported projects in sustainable materials and net zero built environment. If your technology is climate-related and R&D-led, we're worth talking to.",
  },
  {
    question: "What does a GrantMatch Scan include?",
    answer:
      "A ranked map of every relevant Innovate UK, Horizon Europe and government funding route open to your technology and roadmap, with deadlines, funding amounts, eligibility notes, and a recommended bidding sequence. You leave with a clear plan for where to put your energy first.",
  },
];

const aboutStats = [
  { value: "£45M+", label: "in grant proposals reviewed" },
  {
    value: "Innovate UK, Horizon Europe, NZHF",
    label: "programmes we work across",
  },
  {
    value: "Hydrogen aviation, green hydrogen, future mobility",
    label: "core specialisms",
  },
  { value: "Fixed-fee engagements", label: "no contingency, no surprises" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="relative isolate overflow-hidden">
        {/* Hero gradient */}
        <div
          className="absolute inset-x-0 -top-[320px] -z-10 blur-3xl"
          aria-hidden
        >
          <div className="mx-auto h-[540px] w-[540px] rounded-full bg-emerald-500/30" />
        </div>

        {/* Hero */}
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-20">
          <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
                UK &amp; Europe Climate Tech Grant Specialists
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Win the grants that fund your climate breakthrough
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                GreenFundr helps climate tech SMEs secure Innovate UK, Horizon
                Europe, and government grants. From funding scans to full bid
                leadership — we handle the process so you can focus on your
                technology.
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row">
                <a
                  href="https://calendly.com/greenfundr/grantintro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Book a free 30-minute funding review
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-8 py-3 text-base font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/10"
                >
                  Check Your Eligibility
                </Link>
              </div>
            </div>

            {/* Case studies card */}
            <div className="relative inline-flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-emerald-500/20">
              <span className="text-sm font-medium uppercase tracking-wide text-emerald-300">
                Recent projects
              </span>
              <div className="space-y-4">
                {caseStudies.map((study) => (
                  <div
                    key={study.name}
                    className="rounded-2xl bg-slate-950/70 p-5"
                  >
                    <p className="text-base font-semibold text-slate-100">
                      {study.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {study.sector}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                £45M+ in grant proposals shaped across hydrogen, aviation, and
                infrastructure sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-semibold text-emerald-300">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Funding programmes */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
            <h2 className="text-3xl font-semibold text-slate-50">
              We Track 50+ Climate Funding Programmes
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Our team monitors every relevant UK and European funding stream so
              you never miss a deadline. Updated weekly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {programmes.map((prog) => (
                <span
                  key={prog}
                  className="rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm text-slate-200"
                >
                  {prog}
                </span>
              ))}
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
                + 40 more programmes
              </span>
            </div>
            <div className="mt-8">
              <a
                href="https://calendly.com/greenfundr/grantintro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Book a Funding Scan
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-semibold text-slate-50">Our Services</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-300">
            Structured support at every stage of the funding journey — from
            initial scan to full bid leadership.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-colors hover:border-emerald-500/40"
              >
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {service.description}
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  {service.pricing}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* 3-Step process */}
        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-semibold text-slate-50">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Three steps from first conversation to submitted bid. Simple,
              structured, and transparent.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-lg font-semibold text-emerald-300">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-slate-50">
            What Our Clients Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-sm text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-slate-800 pt-4">
                  <p className="text-sm font-semibold text-slate-100">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Not every bid wins */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <h3 className="text-xl font-semibold text-slate-100">
              Honest About Outcomes
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Not every bid wins. But our structured approach means your
              materials, evidence packs, and partner relationships carry forward
              to the next round. We build assets that compound — so each
              application strengthens the next.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-semibold text-slate-50">
              Common questions
            </h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-800 bg-slate-950/60"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                    <span className="text-base font-semibold text-slate-100 group-open:text-emerald-300">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm text-slate-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Founder / About */}
        <section className="border-b border-slate-800 bg-slate-900/50">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            {/* About stats grid */}
            <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <p className="text-base font-semibold text-emerald-300">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid items-center gap-12 md:grid-cols-[1fr_1.5fr]">
              <div className="flex flex-col items-center">
                {/* Placeholder for real headshot — replace with actual image */}
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-slate-800 text-4xl font-semibold text-emerald-300">
                  BS
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-100">
                  Ben Silver
                </p>
                <p className="text-sm text-slate-400">Founder, GreenFundr</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-slate-50">
                  Built by a Grant Specialist, for Climate Founders
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  GreenFundr was founded by Ben Silver to give climate tech SMEs
                  the same quality of grant support that large corporates take
                  for granted. With experience shaping £45M+ in proposals across
                  hydrogen, aviation, and infrastructure, we know what assessors
                  look for — and how to get your innovation funded.
                </p>
                <p className="mt-4 text-base text-slate-300">
                  We&apos;ve sat on the founder side of the table, so our advice
                  is grounded in what actually works — not what looks good in a
                  deck.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-200 underline-offset-4 hover:underline"
                >
                  Learn more about GreenFundr
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work / Pricing Signals */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
            <h2 className="text-3xl font-semibold text-slate-50">
              How We Work
            </h2>
            <p className="mt-4 text-base text-slate-300">
              We offer flexible models from fixed fees to hybrid arrangements
              with a success component. Most engagements start with a free
              30-minute funding review where we assess your technology, stage,
              and the funding landscape.
            </p>
            <p className="mt-4 text-base text-slate-300">
              Whether you need a one-off funding scan or ongoing bid leadership,
              we tailor our support to your needs and budget.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row">
              <a
                href="https://calendly.com/greenfundr/grantintro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Book a Free Funding Review
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-7 py-3 text-base font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/10"
              >
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="border-t border-slate-800 bg-slate-950">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-slate-50">
                  Get in Touch
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  Ready to explore your funding options? Book a free 30-minute
                  review or send us a message and we will get back to you within
                  one working day.
                </p>
                <div className="mt-8 space-y-4">
                  <a
                    href="https://calendly.com/greenfundr/grantintro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                  >
                    Book a Free Funding Review
                  </a>
                  <p className="text-sm text-slate-400">
                    Or email us at{" "}
                    <a
                      href="mailto:hello@greenfundr.com"
                      className="text-emerald-200 underline-offset-4 hover:underline"
                    >
                      hello@greenfundr.com
                    </a>
                  </p>
                </div>
              </div>
              <form className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
                    placeholder="Brief description of your technology, stage, and funding needs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Check Your Eligibility
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

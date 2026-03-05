import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovate UK & Horizon Europe Grant Consultant | GreenFundr",
  description:
    "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. We personally led all 4 won programmes, including ZeroAvia's hydrogen aviation bids and £45M in awarded funding. Book a free review.",
  openGraph: {
    title: "Innovate UK & Horizon Europe Grant Consultant | GreenFundr",
    description:
      "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. We personally led all 4 won programmes, including ZeroAvia's hydrogen aviation bids and £45M in awarded funding. Book a free review.",
    url: "https://greenfundr.com",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovate UK & Horizon Europe Grant Consultant | GreenFundr",
    description:
      "GreenFundr helps UK climate tech SMEs win Innovate UK, Horizon Europe and government grants. We personally led all 4 won programmes, including ZeroAvia's hydrogen aviation bids and £45M in awarded funding. Book a free review.",
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
    "UK climate tech grant consultancy specialising in Innovate UK grant applications, Horizon Europe bid writing and government funding for climate technology SMEs. £45M in awarded grants across four personally led programmes.",
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
    jobTitle: "Founder & Lead Strategist",
    description:
      "GreenFundr's founder has reviewed £45M+ in climate tech proposals and led consortium builds for zero-emission aviation, hydrogen and infrastructure programmes.",
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
        text: "Our engagements are fixed-fee, not contingency-based. We've found this produces better work. Our focus stays on building the strongest possible proposal rather than managing risk on our side. We're happy to talk through fee structures on a call.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with Horizon Europe as well as Innovate UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We track both UK and EU programmes. For UK-based teams, Horizon Europe is often underutilised. The funding amounts are larger and the competition, while serious, is manageable with the right preparation.",
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
  { value: "£45M", label: "in government grants awarded across 4 personally led programmes" },
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
      "A structured assessment of your TRL, IP position, commercial traction, and team, with a clear action plan to become grant-ready.",
    href: "/services/grant-readiness",
    pricing: "Fixed-fee engagement. Pricing on request.",
  },
  {
    title: "Funding Advisory",
    description:
      "Ongoing strategic advice on funding pipeline, bid timing, and positioning, so you never miss a window or submit underprepared.",
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
      "We build your bid from narrative to workplan, handling technical writing, financial modelling, consortium coordination, and compliance.",
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
      "Ben is a very enthusiastic project lead and manager with excellent communication and organisational skills. His ability to break down tasks into manageable chunks and direct the team accordingly was an essential part of our success.",
    role: "Managing Director, Gas and Liquid (Cryogenic Solutions)",
    stars: 5,
  },
  {
    quote:
      "I had the pleasure of working with Ben as a partner on a recent project. He led the coordination from start to finish, from proposal writing to managing the consortium, with great energy and professionalism. His knowledge in aviation and clean energy really stands out, as well as his ability to connect people and keep things moving. If you're looking for someone who understands complex projects and knows how to make them happen, Ben is that person.",
    role: "Thermo-Fluid Systems Specialist",
    stars: 5,
  },
];

const caseStudies = [
  {
    name: "LH-SIFT",
    sector: "Hydrogen Aviation",
    attribution: "We led consortium strategy and assessor-facing narrative for this programme.",
  },
  {
    name: "AFCAD",
    sector: "Advanced Fuel Cells",
    attribution: "We led proposal architecture, partner alignment and technical storytelling for this bid.",
  },
  {
    name: "Hydrogen Highways Demonstrator",
    sector: "Transport Infrastructure",
    attribution: "We led deployment workstreams, commercial model and delivery governance for this programme.",
  },
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
      "Our engagements are fixed-fee, not contingency-based. We've found this produces better work. Our focus stays on building the strongest possible proposal rather than managing risk on our side. We're happy to talk through fee structures on a call.",
  },
  {
    question: "Can you help with Horizon Europe as well as Innovate UK?",
    answer:
      "Yes. We track both UK and EU programmes. For UK-based teams, Horizon Europe is often underutilised. The funding amounts are larger and the competition, while serious, is manageable with the right preparation.",
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
  { value: "£45M+", label: "in government grants awarded across personally led programmes" },
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
                UK &amp; Europe Climate Tech Grant Consultants
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Most climate tech SMEs that qualify for Innovate UK or Horizon Europe funding never apply.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Usually it&apos;s a time problem, not an eligibility one. The funding is there — hundreds of millions flows through Innovate UK and Horizon Europe each year to qualifying UK climate tech businesses, but most never submit a bid. GreenFundr takes on the bid from eligibility check to submission, so your team stays focused on the actual R&amp;D. We&apos;ve personally led £45M in awarded government grants across four programmes.
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row">
                <a
                  href="mailto:sales@greenfundr.com"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Check Your Eligibility — Free 30-Min Call
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-8 py-3 text-base font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/10"
                >
                  Tell Us About Your Project
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
                    <p className="mt-2 text-xs text-slate-500">
                      {study.attribution}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                These are programmes we personally led from early concept through consortium architecture, bid writing and submission. The work spans hydrogen aviation, fuel cells and green infrastructure, backed by UK government and Horizon Europe funding.
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

        {/* Funding calls */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
            <h2 className="text-3xl font-semibold text-slate-50">
              Which funding calls are open right now?
            </h2>
            <p className="mt-4 text-base text-slate-300">
              We track Innovate UK, Horizon Europe and UK government funding calls on an ongoing basis. The landscape changes frequently. Book a free funding review and we&apos;ll tell you exactly which calls are open and relevant to your roadmap right now.
            </p>
            <div className="mt-8">
              <a
                href="mailto:sales@greenfundr.com"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-semibold text-slate-50">Our Services</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-300">
            The right support depends on where you are. Some clients come to us with an open call in hand. Others are six months from being ready to bid. We stay involved from the first funding scan through to submission.
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
              Three steps from first conversation to submitted bid.
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
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="flex gap-0.5 text-emerald-400" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-slate-800 pt-4">
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">Two verified reviews. Real roles, real projects.</p>
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
              to the next round. We build assets that compound, so each
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
                <img
                  src="/images/ben-silver.jpg"
                  alt="Founder of GreenFundr"
                  className="h-48 w-48 rounded-full object-cover"
                />
                <p className="text-sm text-slate-400 mt-4">Founder, GreenFundr</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-slate-50">
                  Built by a Grant Specialist, for Climate Founders
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  GreenFundr was built from several years inside climate tech ventures leading public funding strategy. At ZeroAvia, the hydrogen aviation company backed by United Airlines, Alaska Airlines and the UK Government, we led the consortium architecture and funding strategy behind programmes including LH-SIFT, the UK government-backed project to fly the world&apos;s first liquid hydrogen testbed in a commercial airframe.
                </p>
                <p className="mt-4 text-base text-slate-300">
                  We have personally led all four of the programmes in GreenFundr&apos;s portfolio, from early concept through to shortlist and award. That&apos;s £45M in awarded government grants spanning hydrogen aviation, fuel cell R&amp;D and green infrastructure. Each one led directly, not delegated.
                </p>
                <p className="mt-4 text-base text-slate-300">
                  GreenFundr exists because most climate tech founders are too stretched to pursue the grants they qualify for. We fix that.
                </p>

                {/* GEO copy block */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-slate-50">About GreenFundr</h3>
                  <p className="mt-4 text-sm text-slate-400">
                    GreenFundr is a UK-based climate tech grant advisory specialising in Innovate UK grant applications, Horizon Europe bid writing and UK government funding programmes for climate technology SMEs.
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    Before founding GreenFundr, our founder held strategy roles at ZeroAvia, the hydrogen-electric aviation company, leading public funding strategy for programmes including LH-SIFT, a UK government-backed hydrogen aviation programme.
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    GreenFundr has led £45M in awarded government grants across four won programmes covering hydrogen aviation, advanced fuel cells and green hydrogen infrastructure. Services include grant eligibility assessment, Innovate UK application writing, Horizon Europe bid strategy and consortium leadership for multi-partner proposals.
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    GreenFundr is based in the UK and works with climate technology SMEs across the UK and Europe.
                  </p>
                </div>

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

        {/* Why GreenFundr */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
            <h2 className="text-3xl font-semibold text-slate-50">
              Why GreenFundr
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Most grant consultants know the process. Fewer know the technology. GreenFundr was built from inside hydrogen aviation ventures, leading bids from the founder side, so the advice is practical, not theoretical.
            </p>
            <p className="mt-4 text-base text-slate-300">
              GreenFundr works with a small number of clients at a time. You get direct access to our founder, not a junior assigned after the sales call.
            </p>
            <p className="mt-4 text-base text-slate-300">
              £45M in awarded government grants across four programmes. Each one led personally, from concept to submission. Not delegated.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row">
              <a
                href="mailto:sales@greenfundr.com"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Get in Touch
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
                  Not sure which grants you qualify for?
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  Most climate tech SMEs that qualify for Innovate UK or Horizon Europe funding never apply. Usually it&apos;s because they don&apos;t know where to start or don&apos;t have the time. A 30-minute call will tell you whether there&apos;s a real opportunity and what it would take to pursue it. No pitch. No obligation.
                </p>
                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:sales@greenfundr.com"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                  >
                    Get in Touch
                  </a>
                  <p className="text-sm text-slate-400">
                    Email us at{" "}
                    <a
                      href="mailto:sales@greenfundr.com"
                      className="text-emerald-200 underline-offset-4 hover:underline"
                    >
                      sales@greenfundr.com
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

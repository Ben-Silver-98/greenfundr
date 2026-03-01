import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grant Readiness Checklist for Climate SMEs",
  description:
    "Practical grant readiness checklist covering TRL, IP, commercial traction, team, finances, and impact. Prepare before you apply.",
  openGraph: {
    title: "Grant Readiness Checklist for Climate SMEs",
    description:
      "Practical grant readiness checklist covering TRL, IP, commercial traction, team, finances, and impact. Prepare before you apply.",
    url: "https://greenfundr.com/insights/grant-readiness-checklist",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Readiness Checklist for Climate SMEs",
    description:
      "Practical grant readiness checklist covering TRL, IP, commercial traction, team, finances, and impact. Prepare before you apply.",
  },
  alternates: {
    canonical: "https://greenfundr.com/insights/grant-readiness-checklist",
  },
};

const faqs = [
  {
    question: "How far in advance should I start preparing for a grant application?",
    answer:
      "Ideally, you should begin your grant-readiness work three to six months before a submission deadline. This gives you enough time to secure letters of intent from potential customers, file any necessary IP protection, recruit key team members or advisors, and arrange match funding. Starting earlier also allows you to apply for smaller grants first to build a track record before targeting larger programmes.",
  },
  {
    question: "What Technology Readiness Level do I need to apply for Innovate UK grants?",
    answer:
      "It depends on the specific programme. Innovate UK Smart Grants typically fund projects from TRL 3 to TRL 7, meaning you need at least a proof of concept. The Industrial Energy Transformation Fund and Net Zero Innovation Portfolio often target TRL 5 to TRL 8 for demonstration projects. Horizon Europe ranges widely depending on the call, from TRL 2 for early research through to TRL 8 for close-to-market innovation. Always check the specific call scope, as TRL requirements vary between competitions.",
  },
  {
    question: "Can I apply for a grant if I do not have a patent?",
    answer:
      "Yes. A patent is not a requirement for most grant programmes. What assessors look for is a credible intellectual property strategy. This might include trade secrets, copyright on software, design rights, or a plan to file patents at the appropriate stage. The key is demonstrating that you have thought about how you will protect and exploit your innovation, and that you have freedom to operate without infringing on others' IP.",
  },
  {
    question: "What counts as match funding for Innovate UK grants?",
    answer:
      "Match funding is the portion of the project cost that your organisation contributes. For Innovate UK, this is typically 30 to 50 percent for SMEs depending on the size of your company and the type of research. Match funding can come from your own cash reserves, revenue, loans, or equity investment. In-kind contributions such as staff time at commercial rates can also count. The funding body needs to see evidence that you can sustain the match throughout the project duration.",
  },
  {
    question: "How important are letters of intent from customers in a grant application?",
    answer:
      "Letters of intent are one of the strongest forms of evidence you can include. They demonstrate real market demand and commercial traction, which directly addresses the 'route to market' criterion that assessors score. A strong letter of intent names a specific use case, references a willingness to trial or purchase, and ideally quantifies the potential value. Even two or three well-written letters from credible organisations can significantly strengthen your application.",
  },
  {
    question: "What happens if I submit a grant application and it is rejected?",
    answer:
      "Most funding bodies provide written feedback explaining why your application was not successful. This feedback is extremely valuable. Common reasons for rejection include insufficient commercial evidence, unclear IP strategy, gaps in the project team, or weak impact projections. You can typically reapply in the next funding round after addressing the feedback. Many successful applicants were rejected on their first attempt and improved their score significantly the second time.",
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

export default function GrantReadinessChecklistPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        className="absolute inset-x-0 -top-[320px] -z-10 blur-3xl"
        aria-hidden
      >
        <div className="mx-auto h-[540px] w-[540px] rounded-full bg-emerald-500/30" />
      </div>

      <article className="mx-auto w-full max-w-4xl px-6 pb-24 pt-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-400">
          <Link
            href="/insights"
            className="transition-colors hover:text-emerald-300"
          >
            Insights
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">Grant Readiness Checklist</span>
        </nav>

        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
          Checklist
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
          Grant Readiness Checklist for Climate SMEs
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          A practical, section-by-section checklist to help climate technology
          companies assess whether they are truly ready to submit a competitive
          grant application — and what to fix before the deadline.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* Introduction */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-50">
            Why Grant Readiness Matters Before You Apply
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Too many climate tech companies rush into grant applications
              without first checking whether they have the evidence, team, and
              financial position that assessors expect. The result is predictable:
              a well-written bid that still scores poorly because the underlying
              substance is missing.
            </p>
            <p>
              Grant assessors at Innovate UK, Horizon Europe, and most UK
              government funding bodies evaluate applications across multiple
              dimensions. They look beyond the quality of your technology idea.
              They want to see that you can protect and commercialise it, that
              your team can deliver a complex funded project, that your finances
              can sustain the match-funding commitment, and that your work will
              generate measurable climate impact.
            </p>
            <p>
              Grant readiness is the discipline of preparing across all of these
              dimensions before you begin writing. It is the difference between
              submitting a strong application that scores in the top quartile
              and submitting one that receives polite feedback about "insufficient
              evidence of commercial traction" or "unclear route to market."
            </p>
            <p>
              This checklist covers the six areas that grant assessors evaluate
              most rigorously. Work through each section honestly. Where you
              find gaps, that is where you need to invest time before the next
              deadline opens. If you want structured help, our{" "}
              <Link
                href="/services/grant-readiness"
                className="text-emerald-300 underline underline-offset-4 transition-colors hover:text-emerald-200"
              >
                Grant-Readiness Roadmapping
              </Link>{" "}
              service walks you through every dimension and produces a prioritised
              action plan.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 1. Technology Readiness */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            1. Technology Readiness
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Technology Readiness Level (TRL) is the single most important
            framing concept in grant applications. Every competition defines a
            TRL range, and if your project falls outside it, your application
            will be rejected at the eligibility stage. But assessors also
            look deeper — they want evidence that you genuinely understand where
            your technology sits and what remains to be proven.
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Conduct a formal TRL assessment against the European Commission
                or Innovate UK definitions. Document which criteria you have met
                at your current level with specific evidence — test results, lab
                reports, prototype performance data.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Compile demonstration evidence. If you claim TRL 5, you need to
                show that your technology has been validated in a relevant
                environment. Photographs, test certificates, third-party
                validation reports, and measured performance data all strengthen
                your case.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Prepare a clear technology development roadmap showing the work
                packages in your grant project and how they advance your TRL.
                Assessors want to see a logical progression from your current
                state to a defined end-of-project TRL, with realistic milestones.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Identify the key technical risks and how you will mitigate them.
                Assessors do not expect zero risk — they expect you to have
                identified the major uncertainties and have credible plans to
                address them during the project.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                If your technology relies on critical components from suppliers
                or partners, document your supply chain readiness. Assessors may
                question whether you can source key materials or subsystems at
                the scale needed for your demonstration.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Intellectual Property */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            2. Intellectual Property
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Intellectual property is not just about patents. Assessors evaluate
            whether you have a considered strategy for protecting your
            innovation, whether you have the freedom to operate without
            infringing on existing rights, and whether you have a plan for
            managing IP generated during the funded project. A weak IP section
            is one of the most common reasons applications score below the
            threshold.
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Define your IP strategy. This should cover patents, trade
                secrets, copyright, design rights, or any combination that makes
                sense for your technology. Explain why you have chosen this
                approach and how it creates a defensible competitive advantage.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Conduct a freedom-to-operate analysis. This does not need to be
                a full legal opinion for most applications, but you should be
                able to demonstrate that you have searched for existing patents
                in your technology area and that your approach does not infringe
                on them.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Document your IP management plan for the project. If you are
                applying with partners, you need to define who owns what, how
                background IP is handled, and how foreground IP (created during
                the project) will be shared or licensed. Consortium agreements
                typically require these terms to be agreed before the project
                starts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                If you have filed patents, include the application numbers,
                filing dates, and status. Pending applications demonstrate
                intent. Granted patents demonstrate a higher level of
                protection. Either is better than no mention of IP at all.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Consider whether any university or previous employer has a claim
                on your technology. If your founders developed core IP while at
                a university or previous company, you need to have clear
                assignments or licences in place. Assessors will flag this risk
                if it is not addressed.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 3. Commercial Traction */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            3. Commercial Traction
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Commercial traction is where many technically strong applications
            fall short. Assessors want to see evidence that there is a real
            market for your technology, that potential customers have expressed
            genuine interest, and that you have a credible plan to generate
            revenue after the grant ends. The "route to market" criterion is
            weighted heavily in most Innovate UK scoring frameworks.
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Secure letters of intent from potential customers, end users, or
                channel partners. A good letter of intent names a specific
                application, references a willingness to trial or purchase, and
                comes from a recognisable organisation. Aim for at least two to
                three credible letters.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Establish pilot agreements or paid trial arrangements if your
                technology is at a stage where this is feasible. A pilot
                demonstrates commercial readiness far more effectively than
                market research. Even a small-scale paid engagement shows that
                someone values your technology enough to commit resources.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Document your market validation. This means defining your target
                market size (TAM, SAM, SOM), identifying specific customer
                segments, and providing evidence-based projections for adoption.
                Avoid vague claims about multi-billion-pound markets without
                showing how you capture a realistic share.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Articulate a clear route to market. How will you sell? Through
                direct sales, licensing, OEM partnerships, or distribution
                agreements? Assessors want to see specifics, not generalities.
                Name the channels, explain why they are appropriate for your
                technology, and reference any conversations or agreements
                already in place.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Prepare a post-project commercialisation plan. Assessors need to
                believe that the grant investment will lead to real economic
                activity. Show your projected timeline from end of project to
                first revenue, and from first revenue to breakeven.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Team & Capability */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            4. Team &amp; Capability
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Your team is not just a list of CVs at the back of an application.
            Assessors evaluate whether your organisation has the right people,
            with the right experience, and enough capacity to deliver a complex
            funded project alongside your normal operations. Gaps in the team
            are acceptable if you acknowledge them and have a plan to fill them.
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Conduct a skills gap analysis against your project plan. Map
                each work package to the people who will deliver it. Where you
                do not have the right skills in-house, identify whether you need
                a subcontractor, a recruitment, or a project partner.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Highlight your track record. Previous grant projects, successful
                product launches, published research, or relevant industry
                experience all demonstrate capability. If your company is new,
                reference the individual track records of your founders and
                senior team members.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Consider establishing an advisory board. Two or three credible
                advisors from your industry, relevant academic institutions, or
                the investment community can significantly strengthen your
                application. They demonstrate that you have access to expertise
                beyond your core team and that respected individuals believe in
                your approach.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Assess your delivery capacity honestly. A grant project is
                additional work on top of your existing operations. If your
                entire team is already fully committed, assessors will question
                whether you can deliver. Budget for dedicated project management
                time, and be realistic about resource allocation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                If you are applying as part of a consortium, ensure each
                partner's role is clearly defined and that they have confirmed
                their commitment. Assessors look for evidence of genuine
                collaboration, not a list of names assembled to meet a
                requirement.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 5. Financial Position */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            5. Financial Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Grants do not cover 100 percent of project costs. You will need to
            provide match funding, typically 30 to 50 percent for SMEs under
            Innovate UK programmes. Beyond that, assessors (and due diligence
            teams after you are offered funding) will scrutinise your financial
            health to ensure you can sustain the project.
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Confirm your match funding source. This might be cash reserves,
                committed investment, a bank facility, or anticipated revenue.
                The funding body needs to be satisfied that you can sustain the
                match throughout the entire project period, which can be 18 to
                36 months.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Model your cash flow carefully. Grant payments are typically
                made in arrears on a quarterly basis. This means you need enough
                working capital to cover project costs before reimbursement
                arrives. Many SMEs underestimate this cash flow requirement and
                struggle during the project.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Ensure your financial reporting is up to date. You will need to
                submit your most recent filed accounts as part of the due
                diligence process. If your accounts are overdue at Companies
                House, resolve this before applying. Late filings raise
                immediate red flags.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Check your SME status. Innovate UK uses the European Commission
                definition: fewer than 250 employees, and either annual turnover
                under 50 million euros or a balance sheet total under 43 million
                euros. Linked and partner enterprises can affect your status, so
                check carefully if you have investors or parent companies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Prepare realistic cost justifications. Every cost line in your
                budget will need to be justified. Labour rates, equipment costs,
                subcontractor quotes, and travel budgets should all be evidenced
                and reasonable. Inflated costs are a common reason for
                applications to be marked down during assessment.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 6. Impact & Dissemination */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            6. Impact &amp; Dissemination
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Climate tech grants exist because governments want to accelerate
            the transition to net zero. Assessors need to believe that your
            project will generate meaningful environmental and economic impact,
            and that the knowledge generated will benefit the wider ecosystem.
            This section is where many applications lose marks by being too
            vague.
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Quantify your carbon impact with a clear methodology. State
                your baseline, the expected reduction per unit or per deployment,
                and the projected total impact over five and ten years based on
                realistic adoption rates. Reference established frameworks like
                the Greenhouse Gas Protocol or PAS 2050 where applicable.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Estimate job creation and economic impact. Include direct jobs
                (new hires for the project and beyond), indirect jobs (supply
                chain, manufacturing), and the broader economic value of your
                technology reaching market. Use conservative, defensible
                numbers rather than aspirational figures.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Develop a knowledge sharing and dissemination plan. This should
                include academic publications, conference presentations,
                industry workshops, open data commitments, and engagement with
                standards bodies. Assessors want to see that publicly funded
                research will benefit more than just the applicant.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Consider wider societal impacts. Does your technology improve
                energy security, reduce fuel poverty, create opportunities in
                economically disadvantaged regions, or support energy justice?
                These broader impacts can differentiate your application from
                competitors with similar technical merits.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-base text-slate-100">
                <span className="mr-3 text-emerald-400">&#10003;</span>
                Align your impact narrative with current government priorities.
                In the UK, this means referencing the Net Zero Strategy, the
                Clean Growth Strategy, the Ten Point Plan for a Green Industrial
                Revolution, and relevant sector roadmaps. Demonstrating policy
                alignment shows assessors that your project serves national
                strategic objectives.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Common Gaps */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            Common Gaps That Cause Applications to Fail
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              After reviewing hundreds of grant applications across Innovate UK,
              Horizon Europe, and UK government programmes, certain patterns
              emerge consistently. Understanding these common failure points can
              help you avoid them.
            </p>
            <p>
              <strong className="text-slate-100">
                No customer evidence at all.
              </strong>{" "}
              The most common gap is submitting an application with zero letters
              of intent, no pilot agreements, and no documented customer
              conversations. Assessors interpret this as a technology looking
              for a problem, rather than a solution to a validated market need.
              Even early-stage projects should have evidence of customer
              discovery conversations.
            </p>
            <p>
              <strong className="text-slate-100">
                Vague IP strategy.
              </strong>{" "}
              Stating that you "plan to file patents in due course" without any
              specifics is insufficient. Assessors want to see which aspects of
              your technology are protectable, which mechanism you will use,
              and whether you have checked for existing IP that might block your
              freedom to operate.
            </p>
            <p>
              <strong className="text-slate-100">
                Overestimating TRL.
              </strong>{" "}
              Claiming TRL 6 when your technology has only been tested in a
              laboratory environment (TRL 4) immediately undermines your
              credibility. Assessors are experienced technologists. It is far
              better to accurately state TRL 4 and propose a project that
              advances to TRL 6 than to claim a level you cannot evidence.
            </p>
            <p>
              <strong className="text-slate-100">
                Insufficient team capacity.
              </strong>{" "}
              Proposing a 24-month project with three full-time work packages
              when your company has five employees who are all committed to
              existing product development raises serious deliverability
              concerns. Be honest about capacity and budget for additional
              recruitment or subcontracting.
            </p>
            <p>
              <strong className="text-slate-100">
                Unquantified impact claims.
              </strong>{" "}
              Stating that your technology "will significantly reduce carbon
              emissions" without numbers is not competitive. Assessors need
              tonnes of CO2 equivalent, a methodology for calculating it, and
              realistic assumptions about deployment rates.
            </p>
            <p>
              <strong className="text-slate-100">
                No match funding plan.
              </strong>{" "}
              Assuming that match funding will materialise during the project
              is a red flag. Due diligence teams at Innovate UK will ask for
              evidence before releasing any grant payments. Have your match
              funding confirmed and documented before you submit.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* How to Address Gaps Quickly */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            How to Address Gaps Quickly: A 3-6 Month Action Plan
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              If you have identified gaps in your grant readiness, the good news
              is that most of them can be addressed within three to six months
              with focused effort. Here is a practical timeline.
            </p>
            <p>
              <strong className="text-slate-100">
                Months 1-2: Evidence gathering and relationship building.
              </strong>{" "}
              Begin approaching potential customers and partners for letters of
              intent. Commission a landscape search for existing IP in your
              area. Start documenting your technology performance data more
              rigorously. Identify and approach potential advisory board
              members. These activities run in parallel and can begin
              immediately.
            </p>
            <p>
              <strong className="text-slate-100">
                Month 2-3: Financial and team preparation.
              </strong>{" "}
              Confirm your match funding source and obtain documentation (bank
              statements, investor commitment letters, or board resolutions).
              Begin recruiting for any critical team gaps, or identify and
              engage subcontractors who can fill those gaps. Ensure your
              Companies House filings are current.
            </p>
            <p>
              <strong className="text-slate-100">
                Month 3-4: IP and impact formalisation.
              </strong>{" "}
              File any patent applications that are ready. Complete your
              freedom-to-operate analysis. Develop your carbon impact model
              with a defensible methodology. Draft your dissemination plan,
              identifying specific conferences, journals, and industry events
              where you will share results.
            </p>
            <p>
              <strong className="text-slate-100">
                Month 4-5: Application development.
              </strong>{" "}
              With all your evidence assembled, begin drafting the application.
              This is where you convert your preparation into a compelling
              written narrative. Each section of the form should draw on the
              evidence you have gathered. Having the evidence in hand before
              you start writing makes the process dramatically faster and
              produces a stronger result.
            </p>
            <p>
              <strong className="text-slate-100">
                Month 5-6: Review and refinement.
              </strong>{" "}
              Allow time for internal review, external peer review, and
              revisions. If possible, have someone who has assessed grants
              review your draft. This is where a{" "}
              <Link
                href="/services/grantmatch-scan"
                className="text-emerald-300 underline underline-offset-4 transition-colors hover:text-emerald-200"
              >
                GrantMatch Scan
              </Link>{" "}
              can help confirm you are targeting the right programme, and where
              professional bid support can sharpen your narrative and ensure
              every assessor question is addressed.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* GreenFundr Service Section */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-50">
            How GreenFundr's Grant-Readiness Roadmapping Helps
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Working through this checklist on your own is valuable, but it is
              difficult to objectively assess your own weaknesses. Our{" "}
              <Link
                href="/services/grant-readiness"
                className="text-emerald-300 underline underline-offset-4 transition-colors hover:text-emerald-200"
              >
                Grant-Readiness Roadmapping
              </Link>{" "}
              service provides a structured, independent assessment of your
              position across all six dimensions by consultants who understand
              how assessors score applications.
            </p>
            <p>
              The process begins with a deep-dive workshop where we review your
              technology, IP position, commercial pipeline, team, finances, and
              impact case. We then produce a detailed report scoring your
              readiness in each area, identifying specific gaps, and
              recommending prioritised actions to address them before your
              target deadline.
            </p>
            <p>
              Companies that complete the roadmapping process before applying
              consistently achieve stronger scores. The value is not just in
              identifying gaps — it is in knowing which gaps matter most for
              your specific target programmes, and what the most efficient
              route to closing them is.
            </p>
            <p>
              For companies who also need help identifying the right
              programmes to target, our{" "}
              <Link
                href="/services/grantmatch-scan"
                className="text-emerald-300 underline underline-offset-4 transition-colors hover:text-emerald-200"
              >
                GrantMatch Scan
              </Link>{" "}
              maps every relevant funding opportunity to your technology,
              stage, and geography. Many companies complete the scan first to
              identify their top three to five target programmes, then use the
              readiness roadmap to prepare for the highest-priority one.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CTA */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-14 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Find out where you stand before you apply
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review. We will give you an honest
            assessment of your grant readiness and recommend the fastest path
            to a competitive application.
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

        {/* ---------------------------------------------------------------- */}
        {/* FAQs */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
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

        {/* ---------------------------------------------------------------- */}
        {/* Related content */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-slate-50">
            Continue Reading
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/services/grant-readiness"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">
                Grant-Readiness Roadmapping
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Structured assessment and action plan for your next application
              </p>
            </Link>
            <Link
              href="/services/grantmatch-scan"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">GrantMatch Scan</p>
              <p className="mt-1 text-xs text-slate-400">
                Find your best-fit funding programmes
              </p>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/insights"
              className="text-sm text-emerald-300 underline underline-offset-4 transition-colors hover:text-emerald-200"
            >
              Back to all Insights
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

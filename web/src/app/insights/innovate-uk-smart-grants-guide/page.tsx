import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Apply for Innovate UK Smart Grants (2026 Guide)",
  description:
    "Complete guide to Innovate UK Smart Grants: eligibility, funding amounts, application process, assessment criteria, and tips to improve your success rate.",
  openGraph: {
    title: "How to Apply for Innovate UK Smart Grants (2026 Guide)",
    description:
      "Complete guide to Innovate UK Smart Grants: eligibility, funding, application process, and tips to improve your success rate.",
    url: "https://greenfundr.com/insights/innovate-uk-smart-grants-guide",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for Innovate UK Smart Grants (2026 Guide)",
    description:
      "Complete guide to Innovate UK Smart Grants: eligibility, funding, application process, and tips to improve your success rate.",
  },
  alternates: {
    canonical:
      "https://greenfundr.com/insights/innovate-uk-smart-grants-guide",
  },
};

const faqs = [
  {
    question: "What are Innovate UK Smart Grants?",
    answer:
      "Smart Grants are Innovate UK's open, continuously competitive funding programme for game-changing and disruptive innovations. Unlike themed competitions, Smart Grants accept applications from any sector and any technology area, making them one of the most accessible routes to public R&D funding for UK businesses.",
  },
  {
    question: "How much funding can I get from a Smart Grant?",
    answer:
      "Single-company projects can apply for between £25,000 and £500,000. Collaborative projects involving multiple partners can apply for up to £2 million in total. Funding rates depend on company size and research category: micro and small enterprises can receive up to 70% of eligible costs for industrial research projects.",
  },
  {
    question: "How long does the Smart Grant application process take?",
    answer:
      "Smart Grants operate on a rolling basis with assessment rounds roughly every quarter. From submission to funding decision typically takes 3 to 5 months. However, preparing a competitive application usually requires 4 to 8 weeks of dedicated effort, so you should plan for a 6 to 9 month timeline from initial planning to receiving funds.",
  },
  {
    question:
      "Can startups and early-stage companies apply for Smart Grants?",
    answer:
      "Yes. Smart Grants are open to any UK-registered business regardless of size or age. Early-stage companies often perform well because the programme values novelty and disruptive potential. However, you must demonstrate that your project is beyond the pure research stage and that you have a credible plan to exploit the results commercially.",
  },
  {
    question: "What is the success rate for Innovate UK Smart Grants?",
    answer:
      "Innovate UK does not publish an official success rate for Smart Grants, but industry estimates suggest it sits between 10% and 15% in most rounds. For climate tech applications with strong commercial traction and clear impact metrics, well-prepared bids can achieve significantly higher success rates, particularly when supported by experienced grant writers.",
  },
  {
    question:
      "Do I need match funding to apply for an Innovate UK Smart Grant?",
    answer:
      "Yes. Smart Grants require the applicant to cover a proportion of eligible project costs. The exact match funding requirement depends on your company size and the type of research. Small enterprises need to cover at least 30% of industrial research costs and 55% of experimental development costs. The match can come from your own resources or other private funding. It does not have to be cash already in the bank, but you must demonstrate a credible plan to secure it.",
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

export default function InnovateUKSmartGrantsGuidePage() {
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
          <span className="text-slate-200">
            Innovate UK Smart Grants Guide
          </span>
        </nav>

        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
          Guide
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
          How to Apply for Innovate UK Smart Grants (2026 Guide)
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          A comprehensive, step-by-step guide to one of the UK&apos;s most
          important innovation funding programmes. Whether you are a climate
          tech startup preparing your first bid or an established SME looking
          to improve your success rate, this guide covers everything you need
          to know about Smart Grants in 2026.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* Introduction */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            What Are Innovate UK Smart Grants?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Smart Grants are Innovate UK&apos;s flagship open funding
              programme, designed to support game-changing and disruptive
              research and development projects across every sector of the UK
              economy. Unlike themed competitions that target specific
              industries or challenges, Smart Grants accept applications from
              any technology area and any business domain. This open scope
              makes them one of the most versatile and widely used routes to
              public R&amp;D funding for innovative UK companies.
            </p>
            <p>
              Administered by UK Research and Innovation (UKRI) through
              Innovate UK, Smart Grants have been running in various forms
              since 2017. They replaced the previous Open programme and have
              since become the single largest source of Innovate UK grant
              funding by total value awarded. In 2025 alone, Smart Grants
              funded over 800 projects with a combined value exceeding
              £350 million.
            </p>
            <p>
              For climate technology companies, Smart Grants are particularly
              valuable. The programme does not require you to fit into a
              predefined sector theme. Whether you are developing novel
              battery chemistries, carbon capture membranes, smart grid
              software, green hydrogen electrolysers, or sustainable building
              materials, your project can compete on its own merits. The
              assessment criteria reward innovation, commercial potential, and
              wider impact, areas where climate tech typically scores
              strongly.
            </p>
            <p>
              Smart Grants also serve as a credibility signal. Winning an
              Innovate UK grant is recognised by investors, corporate
              partners, and other funders as evidence that your technology and
              team have been independently validated. Many climate tech
              companies use a Smart Grant as a springboard to larger
              programmes such as Horizon Europe, the Net Zero Hydrogen Fund,
              or DESNZ energy innovation calls.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Eligibility */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            Eligibility: Who Can Apply?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Smart Grants are open to any UK-registered business. There are
              no restrictions on company size, age, or sector. Sole traders,
              micro enterprises, SMEs, and large companies can all apply.
              However, large companies must demonstrate that the public
              funding is necessary and that the project would not happen
              without it. In practice, the vast majority of successful
              applicants are SMEs.
            </p>
            <p>
              Your business must be registered at Companies House and have a
              UK operating base. The project work must be carried out
              predominantly in the UK, and the results must be exploited from
              the UK. International collaboration is permitted for
              collaborative projects, but the lead applicant must always be a
              UK-registered business.
            </p>
            <p>
              Research organisations (universities, RTOs, catapult centres)
              can participate as project partners in collaborative bids but
              cannot lead a Smart Grant application. Academic partners
              typically receive 80% funding for their project costs.
            </p>
            <p>
              The project itself must involve genuine industrial research or
              experimental development. Pure blue-sky research with no
              commercial route is not eligible, nor are projects that are
              essentially product development with no technical risk. Innovate
              UK typically looks for projects in the Technology Readiness
              Level (TRL) 3 to 7 range: beyond basic research but not yet at
              the point of commercial production.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="text-base font-semibold text-slate-100">
              Key Eligibility Requirements at a Glance
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                UK-registered business (Companies House)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                Project work carried out predominantly in the UK
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                Industrial research or experimental development (TRL 3-7)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                Clear commercial exploitation plan for the UK
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                Single-company or collaborative (2+ partners) projects
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                Match funding available for your share of project costs
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Funding Details */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            Funding Details: How Much Can You Get?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Smart Grants fund projects across two structures: single-company
              projects and collaborative projects. The funding amounts and
              rules differ between the two.
            </p>
            <p>
              <strong className="text-slate-100">
                Single-company projects
              </strong>{" "}
              can request between £25,000 and £500,000 in grant funding. The
              total project cost (grant plus your match funding) will
              therefore be higher. These projects must last between 6 and 18
              months and are led and delivered by a single business, though
              you can subcontract specialist work to third parties.
            </p>
            <p>
              <strong className="text-slate-100">
                Collaborative projects
              </strong>{" "}
              involve two or more partner organisations and can apply for
              total grant funding of up to £2 million across all partners.
              Collaborative projects can last between 6 and 36 months. At
              least one partner must be an SME, and the lead applicant must be
              a UK-registered business.
            </p>
            <p>
              The percentage of your eligible costs that Innovate UK will fund
              depends on two factors: the size of your company and the
              category of research activity. These rates are set by state aid
              rules and are non-negotiable.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-200">
                  <th className="pb-3 pr-4 font-semibold">Company Size</th>
                  <th className="pb-3 pr-4 font-semibold">
                    Industrial Research
                  </th>
                  <th className="pb-3 font-semibold">
                    Experimental Development
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800/50">
                  <td className="py-3 pr-4">Micro / Small</td>
                  <td className="py-3 pr-4 text-emerald-300">Up to 70%</td>
                  <td className="py-3">Up to 45%</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="py-3 pr-4">Medium</td>
                  <td className="py-3 pr-4 text-emerald-300">Up to 60%</td>
                  <td className="py-3">Up to 35%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Large</td>
                  <td className="py-3 pr-4">Up to 50%</td>
                  <td className="py-3">Up to 25%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Understanding the distinction between industrial research and
              experimental development is critical for your budget. Industrial
              research covers the acquisition of new knowledge and skills
              directed at developing new products, processes, or services.
              Experimental development is closer to market. It involves
              prototyping, testing, piloting, and validation of a new or
              improved product in a representative environment.
            </p>
            <p>
              Many climate tech projects contain elements of both. A project
              that develops a new catalyst formulation (industrial research)
              and then integrates it into a pilot reactor (experimental
              development) would split costs between the two categories. The
              blended funding rate will sit somewhere between the two
              percentages. Getting this split right in your finance form is
              important. Assessors will challenge applications where the
              categorisation does not match the described work.
            </p>
            <p>
              Eligible costs include labour, materials, capital equipment
              (depreciation over the project period), subcontracting, travel,
              and overheads. Innovate UK applies a flat 20% overhead rate to
              labour costs for businesses. You cannot claim costs that were
              incurred before the project start date.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Application Process */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            The Application Process: Step by Step
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Smart Grant applications are submitted through the Innovation
              Funding Service (IFS), Innovate UK&apos;s online portal. The
              process is entirely digital. There is no paper application and
              no physical submission. Here is a step-by-step walkthrough of
              the process from start to finish.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "1",
                title: "Register on the Innovation Funding Service",
                desc: "Create an account on the IFS portal if you do not already have one. Register your organisation and ensure your company details are up to date. For collaborative projects, every partner organisation needs its own IFS account.",
              },
              {
                step: "2",
                title: "Start Your Application",
                desc: "Navigate to the Smart Grants competition page and click 'Start new application.' You will be asked to provide a project title, select your project type (single company or collaborative), and add any partner organisations.",
              },
              {
                step: "3",
                title: "Complete the Application Form",
                desc: "The form contains several sections covering your project scope, approach, innovation, team, project management, risks, costs, wider impacts, and exploitation plan. Each section has a word limit, typically between 400 and 600 words. Write concisely and directly address the assessment criteria.",
              },
              {
                step: "4",
                title: "Complete the Finance Forms",
                desc: "Enter detailed project costs broken down by category (labour, overheads, materials, capital, subcontracting, travel, other) and by financial year. Each partner completes their own finance form. Costs must be justified and reasonable.",
              },
              {
                step: "5",
                title: "Submit Before the Deadline",
                desc: "Smart Grants operate on a rolling basis with periodic assessment rounds. Check the current competition page for the next deadline. Late submissions are not accepted under any circumstances. Submit at least 24 hours early to avoid technical issues.",
              },
              {
                step: "6",
                title: "Assessment and Interview",
                desc: "Applications are assessed by a panel of independent assessors with relevant domain expertise. Approximately 25-30% of applications are invited to an interview, which is typically a 30-minute video call with a 10-minute presentation followed by Q&A. Not all competitions include an interview stage.",
              },
              {
                step: "7",
                title: "Funding Decision and Grant Setup",
                desc: "Successful applicants receive a conditional offer letter. You then complete due diligence checks (subsidy control, financial viability) and negotiate a grant offer letter. Once signed, the project can start and you can begin claiming costs.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-300">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Assessment Criteria */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            Assessment Criteria: What Assessors Look For
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Innovate UK assessors evaluate Smart Grant applications across
              five scored sections. Each section is scored on a scale of 1 to
              10, and applications need to achieve a minimum threshold score
              (typically 7 out of 10 on each section) to be considered for
              funding. Understanding these criteria in depth is the single
              most important factor in writing a winning application.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-emerald-300">
                1. Scope: Your Vision and Innovation
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                This section evaluates the novelty and ambition of your
                project. Assessors want to understand what problem you are
                solving, why current solutions are inadequate, and what makes
                your approach genuinely innovative. For climate tech, clearly
                articulate the environmental problem, quantify the scale of
                the opportunity, and explain how your innovation represents a
                step change rather than an incremental improvement. Reference
                the current state of the art and position your innovation
                relative to competing approaches. Avoid generic claims about
                market size. Be specific about your target application and
                why your solution is better.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-emerald-300">
                2. Approach: Your Project Plan
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Describe what you will actually do during the project. Break
                the work into clearly defined work packages with specific
                deliverables, milestones, and timelines. Assessors want to
                see that you have thought carefully about the technical
                approach, that your methodology is sound, and that the work
                programme is realistic for the budget and timeframe. Include
                your risk register. Identify the key technical and
                commercial risks and explain your mitigation strategies.
                Climate tech projects should address scale-up risks, supply
                chain dependencies, and regulatory pathways.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-emerald-300">
                3. Team: Your Capability to Deliver
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                This section assesses whether your team has the skills, track
                record, and capacity to deliver the project. Name key
                individuals and describe their relevant experience. If you
                have previously delivered Innovate UK or other publicly funded
                projects, mention this. It demonstrates you understand the
                reporting and governance requirements. For collaborative
                projects, explain why each partner is essential and how the
                consortium brings together complementary skills. Identify any
                skills gaps and explain how you will fill them, whether
                through recruitment, subcontracting, or advisory board
                members.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-emerald-300">
                4. Funding and Value for Money
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Assessors examine whether your costs are realistic, justified,
                and represent good value for public money. Every cost line
                should be clearly linked to specific activities in your work
                plan. Labour costs should reflect actual salaries (not
                inflated day rates), subcontracting should be justified on the
                basis of specialist expertise you do not have in-house, and
                capital equipment costs should reflect genuine project needs.
                Explain why the project cannot proceed without public funding.
                This &quot;additionality&quot; argument is essential. Also
                demonstrate that you have secured or have a credible plan to
                secure your match funding contribution.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-emerald-300">
                5. Impact and Exploitation
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                This is often where climate tech applications can
                differentiate themselves. Describe the economic, social, and
                environmental impact of your project. Provide specific,
                quantified projections: revenue forecasts, jobs created,
                tonnes of CO2 avoided, energy savings, or waste diverted.
                Assessors want to see a credible route to market: who will
                buy your product, at what price, and through which channels?
                Include an IP strategy and explain how you will protect and
                exploit the results. For climate tech, link your impact to UK
                net zero targets and relevant policy frameworks. A strong
                dissemination plan showing how you will share knowledge beyond
                the project also scores well.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Timeline */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            Timeline: When to Apply and What to Expect
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Smart Grants operate on a rolling basis, meaning the competition
              is open continuously throughout the year. However, applications
              are assessed in periodic rounds, typically quarterly. Innovate
              UK publishes the dates for each assessment round on the
              competition page, and you need to submit before the round
              closing date for your application to be included in that
              batch.
            </p>
            <p>
              The typical timeline from submission to funding decision is
              approximately 3 to 5 months. After the assessment round closes,
              applications go through an initial eligibility check, then
              independent expert assessment, then panel moderation where
              scores are calibrated across all applications in the round.
              Shortlisted candidates may be invited to interview before final
              decisions are made.
            </p>
            <p>
              For the 2026 financial year, Innovate UK has confirmed that
              Smart Grants will continue with quarterly assessment rounds.
              Budget availability can fluctuate between rounds depending on
              overall UKRI allocations, so it is worth monitoring
              announcements from Innovate UK about available funding.
            </p>
            <p>
              If you are planning your application timeline, work backwards
              from the assessment round deadline. Allow at least 4 to 8 weeks
              for application preparation, or more for collaborative projects
              where you need to coordinate multiple partners. If this is your
              first grant application, allow additional time for getting
              registered on the IFS portal, understanding the finance forms,
              and gathering supporting evidence such as letters of support
              from potential customers.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="text-base font-semibold text-slate-100">
              Recommended Preparation Timeline
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="shrink-0 font-semibold text-emerald-300">
                  8 weeks before:
                </span>
                Define project scope, confirm partners, begin drafting
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 font-semibold text-emerald-300">
                  6 weeks before:
                </span>
                Complete first draft of all application sections
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 font-semibold text-emerald-300">
                  4 weeks before:
                </span>
                Internal review, refine costs, secure letters of support
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 font-semibold text-emerald-300">
                  2 weeks before:
                </span>
                External review (peer or professional), final revisions
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 font-semibold text-emerald-300">
                  1 week before:
                </span>
                Final proofread, check all sections and finance forms,
                submit
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Common Mistakes */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            Common Mistakes: Why Applications Fail
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Having reviewed hundreds of Smart Grant applications over the
              years, certain failure patterns appear repeatedly. Avoiding
              these common mistakes can significantly improve your chances of
              success.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Weak Innovation Narrative",
                desc: "The most common reason for low scores in the Scope section is failing to clearly articulate what is genuinely novel about your approach. Saying your product is 'better' or 'cheaper' is not enough. You must explain the specific technical advance, why it has not been achieved before, and what new knowledge your project will generate. Assessors are domain experts. They will know if your claimed innovation is actually the current state of the art.",
              },
              {
                title: "Vague Work Plan",
                desc: "Applicants often describe their project at a high level without sufficient detail about methodology, milestones, and deliverables. Assessors need to see that you have a concrete, executable plan. Break your work into 3 to 5 work packages, each with specific objectives, activities, outputs, and success criteria. Ensure the timeline is realistic and include decision gates where you will evaluate progress before committing to the next phase.",
              },
              {
                title: "Unjustified Costs",
                desc: "Submitting a budget without clear justification is a red flag. Every cost line should map directly to activities in your work plan. Assessors will question labour costs that seem inflated, subcontracting that could be done in-house, or capital equipment that is not essential to the project. Provide brief justifications for each significant cost item and ensure your total costs are proportionate to the project scope.",
              },
              {
                title: "Missing Additionality Argument",
                desc: "Innovate UK needs to know that public funding is necessary for the project to proceed. If it looks like you could fund the project yourself or attract private investment to do it, your application will score poorly on value for money. Explain the specific barriers, such as technical risk, long payback period, and market uncertainty, that make grant funding essential to de-risk the project.",
              },
              {
                title: "Generic Impact Claims",
                desc: "Stating that your project will 'help the UK reach net zero' without quantification is not enough. Assessors want specific, defensible numbers: how many tonnes of CO2 will your technology avoid per year at scale? What is the addressable market size? How many jobs will be created in the first 3 years? What revenue do you project? Back up your claims with references and clearly state your assumptions.",
              },
              {
                title: "Poor Presentation and Readability",
                desc: "Assessors review dozens of applications in each round. A poorly structured, jargon-heavy application with no clear headings or logical flow will frustrate assessors and lose marks. Use clear headings that mirror the assessment criteria, write in plain English, and use bullet points and tables where appropriate. Have someone outside your immediate team read the application before you submit. If they cannot understand it, neither will an assessor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* How GreenFundr Helps */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            How GreenFundr Can Help You Win
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              At GreenFundr, we specialise in helping climate technology
              companies secure grant funding. Our team has direct experience
              with Innovate UK assessment processes, and we have supported
              clients in winning over £40 million in combined grant funding
              across Smart Grants, themed competitions, and international
              programmes.
            </p>
            <p>
              Whether you are exploring whether Smart Grants are the right fit
              for your business, or you are ready to start writing your
              application, we offer services tailored to every stage of the
              journey.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/services/grantmatch-scan"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">GrantMatch Scan</p>
              <p className="mt-2 text-sm text-slate-400">
                Not sure if Smart Grants are your best option? Our GrantMatch
                Scan analyses your technology, stage, and goals to identify
                all eligible funding programmes, including Smart Grants,
                themed competitions, Horizon Europe, and sector-specific
                calls.
              </p>
            </Link>
            <Link
              href="/services/grant-readiness"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">
                Grant-Readiness Roadmap
              </p>
              <p className="mt-2 text-sm text-slate-400">
                A structured assessment of your TRL, IP, commercial traction,
                team, and finances, with a clear action plan to strengthen
                your position before you submit. Companies that go through
                readiness assessment before applying have significantly higher
                success rates.
              </p>
            </Link>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CTA */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Ready to Apply for a Smart Grant?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review with our team. We will
            assess your project, confirm eligibility, and advise on the
            strongest application strategy for your specific technology and
            stage.
          </p>
          <a
            href="mailto:sales@greenfundr.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Get in Touch
          </a>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* FAQs */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16">
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
        {/* Back to Insights */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <Link
            href="/insights"
            className="text-sm text-slate-400 transition-colors hover:text-emerald-300"
          >
            &larr; Back to all insights
          </Link>
        </div>
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Horizon Europe Funding for UK Climate Tech Companies",
  description:
    "How UK climate tech companies can access Horizon Europe grants post-Brexit. Grant sizes, consortium rules, application timelines, and UK-specific guidance.",
  openGraph: {
    title: "Horizon Europe Funding for UK Climate Tech Companies",
    description:
      "How UK climate tech companies can access Horizon Europe grants post-Brexit. Grant sizes, consortium rules, application timelines, and UK-specific guidance.",
    url: "https://greenfundr.com/insights/horizon-europe-climate-funding-uk",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Europe Funding for UK Climate Tech Companies",
    description:
      "How UK climate tech companies can access Horizon Europe grants post-Brexit. Grant sizes, consortium rules, and UK-specific guidance.",
  },
  alternates: {
    canonical:
      "https://greenfundr.com/insights/horizon-europe-climate-funding-uk",
  },
};

const faqs = [
  {
    question:
      "Can UK companies still apply for Horizon Europe funding after Brexit?",
    answer:
      "Yes. The UK formally associated to Horizon Europe in January 2024, which means UK-based organisations can participate in the vast majority of Horizon Europe calls on equivalent terms to EU member state participants. UK entities are eligible for direct EU funding and can coordinate consortiums. The only exceptions are a small number of security-sensitive calls and certain European Innovation Council equity instruments.",
  },
  {
    question:
      "What is the minimum consortium size for a Horizon Europe project?",
    answer:
      "Most collaborative Research and Innovation Actions (RIA) and Innovation Actions (IA) require a minimum of three independent legal entities from three different EU member states or associated countries. The UK counts as an associated country, so a consortium could include one UK partner and two EU partners, or any other qualifying combination. Some calls require larger consortiums or specific types of partners such as SMEs or academic institutions.",
  },
  {
    question:
      "How much funding can a UK SME receive from a Horizon Europe grant?",
    answer:
      "Funding rates depend on the action type. Research and Innovation Actions (RIA) fund up to 100% of eligible costs. Innovation Actions (IA) fund up to 70% of eligible costs, with SMEs receiving a top-up to 100%. Individual partner budgets typically range from EUR 200,000 to EUR 1.5 million within a collaborative project, depending on the scope of their work packages. Total project budgets under Cluster 5 often range from EUR 3 million to EUR 20 million.",
  },
  {
    question:
      "What is the Innovate UK Horizon Europe guarantee scheme?",
    answer:
      "The Innovate UK guarantee scheme was introduced to cover UK participants in Horizon Europe calls during the period before formal UK association was confirmed. Under the guarantee, UKRI committed to fund UK participants in successful Horizon Europe bids if the EU did not. Since the UK formally associated in January 2024, the guarantee is less relevant for new calls but still applies to certain legacy applications submitted during the transition period.",
  },
  {
    question:
      "How long does a typical Horizon Europe application process take?",
    answer:
      "From call publication to submission deadline, most Horizon Europe calls allow between three and five months. However, consortium building, partner negotiations, and technical planning ideally begin months before the call opens. After submission, evaluation typically takes five months, with grant agreement preparation taking another one to three months. In total, the journey from initial planning to project start often spans twelve to eighteen months.",
  },
  {
    question:
      "What TRL range does Horizon Europe Cluster 5 typically fund?",
    answer:
      "Cluster 5 (Climate, Energy and Mobility) funds a broad range of technology readiness levels. Research and Innovation Actions (RIA) typically target TRL 3 to 5, covering proof of concept through to validation in a relevant environment. Innovation Actions (IA) generally target TRL 5 to 8, covering demonstration through to first-of-a-kind deployment. Some calls specify exact TRL entry and exit points in the topic description.",
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

export default function HorizonEuropeClimateUKPage() {
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
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link
            href="/insights"
            className="transition-colors hover:text-emerald-300"
          >
            Insights
          </Link>
          <span>/</span>
          <span className="text-slate-200">Horizon Europe for UK Climate Tech</span>
        </nav>

        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
          Guide
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
          Horizon Europe Funding for UK Climate Tech Companies
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          A comprehensive guide to accessing Europe&apos;s largest research and
          innovation programme. Everything UK climate tech companies need to
          know about eligibility, grant sizes, consortium requirements, and how
          to build a winning bid.
        </p>

        {/* --------------------------------------------------------- */}
        {/* TABLE OF CONTENTS */}
        {/* --------------------------------------------------------- */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            In this guide
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>1. What is Horizon Europe?</li>
            <li>2. UK association status after Brexit</li>
            <li>3. How UK companies access Horizon Europe</li>
            <li>4. Climate-relevant pillars and Cluster 5</li>
            <li>5. Grant sizes and funding rates</li>
            <li>6. Consortium requirements</li>
            <li>7. Finding consortium partners</li>
            <li>8. Application process and timeline</li>
            <li>9. UK-specific considerations and the Innovate UK guarantee</li>
            <li>10. How GreenFundr helps</li>
            <li>11. Frequently asked questions</li>
          </ul>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 1. WHAT IS HORIZON EUROPE */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            1. What Is Horizon Europe?
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Horizon Europe is the European Union&apos;s flagship research and
              innovation framework programme, running from 2021 to 2027 with
              a total budget of approximately EUR 95.5 billion. It is the
              largest transnational research funding programme in the world
              and the successor to Horizon 2020, which ran from 2014 to 2020.
            </p>
            <p>
              The programme is designed to drive scientific excellence, tackle
              major societal challenges, and strengthen Europe&apos;s
              industrial competitiveness. For climate tech companies, Horizon
              Europe represents one of the most significant sources of
              non-dilutive funding available anywhere, with billions
              allocated specifically to clean energy, sustainable transport,
              and climate adaptation technologies.
            </p>
            <p>
              Horizon Europe is structured around three main pillars.{" "}
              <strong className="text-slate-100">Pillar I: Excellent Science</strong>{" "}
              funds frontier research through the European Research Council (ERC)
              and Marie Sklodowska-Curie Actions.{" "}
              <strong className="text-slate-100">
                Pillar II: Global Challenges and European Industrial
                Competitiveness
              </strong>{" "}
              organises applied research and innovation into six thematic
              clusters. And{" "}
              <strong className="text-slate-100">
                Pillar III: Innovative Europe
              </strong>{" "}
              supports market-creating innovation through the European
              Innovation Council (EIC) and the European Institute of
              Innovation and Technology (EIT).
            </p>
            <p>
              For most UK climate technology companies, the greatest
              opportunities lie within Pillar II, specifically Cluster 5:
              Climate, Energy and Mobility, and to some extent Cluster 4:
              Digital, Industry and Space, where cross-cutting themes like
              smart grids and digital twins for energy systems sit.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 2. UK ASSOCIATION STATUS */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            2. UK Association Status After Brexit
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              The UK&apos;s relationship with Horizon Europe was one of the
              most closely watched aspects of the post-Brexit science policy
              landscape. After prolonged negotiations linked to the Northern
              Ireland Protocol, the UK and the EU reached an agreement in
              September 2023 that confirmed the UK&apos;s association to
              Horizon Europe. The formal association took effect in January
              2024.
            </p>
            <p>
              As an associated country, the UK has near-equivalent status to
              EU member states within the programme. UK-based researchers,
              universities, businesses, and other organisations can
              participate in the vast majority of Horizon Europe calls. They
              can receive funding directly from the European Commission,
              coordinate projects, and count towards the minimum consortium
              requirements. This is a significant advantage over third-country
              status, where participation is possible but funding is not
              guaranteed and coordination roles are typically unavailable.
            </p>
            <p>
              There are a small number of exceptions. UK participants cannot
              access certain security-sensitive calls or specific European
              Innovation Council equity instruments. However, these exclusions
              affect a relatively small fraction of the total programme and
              are unlikely to be relevant for most climate tech companies.
            </p>
            <p>
              The association agreement covers the remainder of the Horizon
              Europe programme through to 2027, providing UK organisations
              with several years of continued access to European collaborative
              research funding. This makes long-term planning possible and
              gives climate tech companies the confidence to invest time in
              building European partnerships.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 3. HOW UK COMPANIES ACCESS HORIZON EUROPE */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            3. How UK Companies Access Horizon Europe Post-Brexit
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              UK companies access Horizon Europe through the same process as
              any EU-based participant. All open calls are published on the
              European Commission&apos;s Funding and Tenders Portal, which is
              the single entry point for finding opportunities, forming
              consortiums, submitting proposals, and managing grants.
            </p>
            <p>
              To participate, a UK organisation must first register on the
              portal and obtain a Participant Identification Code (PIC). This
              is a nine-digit code that uniquely identifies each legal entity
              in the EU&apos;s funding system. Registration is free and
              involves providing basic organisational and financial
              information. Once registered, an organisation can join
              consortiums, submit proposals, and receive funding.
            </p>
            <p>
              UK companies can participate in Horizon Europe in several
              roles. They can serve as the{" "}
              <strong className="text-slate-100">project coordinator</strong>,
              leading the entire consortium and managing the relationship
              with the European Commission. They can be a{" "}
              <strong className="text-slate-100">full partner</strong>,
              responsible for specific work packages and receiving a
              corresponding share of the budget. Or they can act as a{" "}
              <strong className="text-slate-100">
                linked third party or subcontractor
              </strong>
              , though this is less common for SMEs seeking significant
              funding.
            </p>
            <p>
              For UK climate tech SMEs in particular, joining as a full
              partner is the most common route. SMEs bring commercial
              orientation and exploitation potential that evaluators value
              highly in Innovation Actions. Many Horizon Europe topics
              explicitly encourage or require SME participation, and some
              calls even set minimum SME budget shares.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 4. CLUSTER 5 */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            4. Key Climate-Relevant Pillars: Cluster 5 and Beyond
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              The most directly relevant part of Horizon Europe for UK
              climate tech companies is{" "}
              <strong className="text-slate-100">
                Cluster 5: Climate, Energy and Mobility
              </strong>
              . This cluster has a budget of approximately EUR 15.1 billion
              across the programme period and covers six broad destination
              areas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Climate Sciences and Responses",
                desc: "Climate modelling, Earth observation, climate adaptation strategies, and nature-based solutions.",
              },
              {
                title: "Cross-Sectoral Solutions for the Climate Transition",
                desc: "Circular economy approaches, systemic innovation, and cross-cutting tools that support multiple sectors in their decarbonisation pathways.",
              },
              {
                title: "Sustainable, Secure and Competitive Energy Supply",
                desc: "Renewable energy technologies, energy storage, hydrogen production and distribution, carbon capture utilisation and storage, and grid integration.",
              },
              {
                title: "Efficient, Sustainable and Inclusive Energy Use",
                desc: "Building energy efficiency, industrial energy systems, heating and cooling, and smart energy management.",
              },
              {
                title: "Clean and Competitive Solutions for All Transport Modes",
                desc: "Zero-emission vehicles, sustainable aviation fuels, maritime decarbonisation, rail innovation, and connected autonomous transport.",
              },
              {
                title: "Safe, Resilient Transport and Smart Mobility Services",
                desc: "Intelligent transport systems, multimodal logistics, urban mobility, and infrastructure resilience.",
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

          <div className="mt-8 space-y-4 text-base text-slate-300">
            <p>
              Beyond Cluster 5, climate tech companies may also find relevant
              opportunities in{" "}
              <strong className="text-slate-100">
                Cluster 4: Digital, Industry and Space
              </strong>
              , which covers digital technologies for energy systems, smart
              manufacturing, and advanced materials.{" "}
              <strong className="text-slate-100">
                Cluster 6: Food, Bioeconomy, Natural Resources, Agriculture
                and Environment
              </strong>{" "}
              is relevant for companies working on nature-based carbon
              removal, sustainable agriculture technology, or water
              management. Additionally, the{" "}
              <strong className="text-slate-100">
                European Innovation Council (EIC) Accelerator
              </strong>{" "}
              under Pillar III provides blended finance (grant plus equity)
              for breakthrough innovations, including climate technologies,
              and is open to individual SMEs without consortium requirements.
            </p>
            <p>
              The EU also operates several{" "}
              <strong className="text-slate-100">
                Missions and Partnerships
              </strong>{" "}
              that channel Horizon Europe funding towards specific climate
              goals. The Mission on Climate Adaptation, the Clean Hydrogen
              Partnership, the Clean Aviation Partnership, and Batteries
              Europe are all examples that create focused funding streams
              relevant to UK climate tech companies.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 5. GRANT SIZES AND FUNDING RATES */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            5. Typical Grant Sizes and Funding Rates
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Horizon Europe grant sizes vary significantly depending on the
              type of action and the specific call topic. Understanding the
              different action types and their funding rates is essential for
              budgeting and deciding whether a particular call is worth
              pursuing.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Research and Innovation Actions (RIA)
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                RIAs fund activities that establish new knowledge or explore
                the feasibility of new or improved technologies, products,
                processes, services, or solutions. The EU funding rate is{" "}
                <strong className="text-slate-200">
                  100% of eligible costs
                </strong>{" "}
                for all participants. Total project budgets for Cluster 5
                RIAs typically range from EUR 3 million to EUR 10 million,
                with individual partner budgets commonly between EUR 200,000
                and EUR 800,000.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Innovation Actions (IA)
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                IAs focus on activities closer to market, including
                prototyping, testing, demonstrating, piloting, and
                scaling. The standard EU funding rate is{" "}
                <strong className="text-slate-200">
                  70% of eligible costs
                </strong>
                , but SMEs and non-profit organisations receive a top-up to{" "}
                <strong className="text-slate-200">100%</strong>. This makes
                IAs particularly attractive for climate tech SMEs. Total
                project budgets tend to be larger, ranging from EUR 5 million
                to EUR 20 million, reflecting the higher costs of
                demonstration and pilot activities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Coordination and Support Actions (CSA)
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                CSAs fund coordination, networking, and supporting
                activities such as standardisation, policy dialogue, and
                awareness-raising. Funded at{" "}
                <strong className="text-slate-200">100%</strong>, these
                typically have smaller budgets of EUR 1 million to EUR 3
                million. They are less relevant for companies developing
                hardware or software but can be valuable for platform-based
                businesses or industry conveners.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                EIC Accelerator
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                The EIC Accelerator provides up to{" "}
                <strong className="text-slate-200">
                  EUR 2.5 million in grant funding
                </strong>{" "}
                plus optional equity investment up to EUR 15 million for
                individual SMEs with breakthrough innovations. Unlike
                collaborative calls, the EIC Accelerator does not require a
                consortium. It is highly competitive, with success rates
                typically below 5%, but the combination of grant and equity
                can be transformative for scaling climate technologies.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base text-slate-300">
            <p>
              Eligible costs under Horizon Europe include direct personnel
              costs, subcontracting, equipment, travel, and other direct
              costs. Indirect costs are covered by a flat rate of 25% of
              eligible direct costs (excluding subcontracting). UK
              organisations should note that VAT is not an eligible cost
              under Horizon Europe, even if it is not recoverable.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 6. CONSORTIUM REQUIREMENTS */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            6. Consortium Requirements
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Most Horizon Europe collaborative calls require a minimum
              consortium of{" "}
              <strong className="text-slate-100">
                three independent legal entities from three different EU
                member states or associated countries
              </strong>
              . The UK, as an associated country, counts towards this
              requirement. So a consortium with one UK organisation, one
              German organisation, and one Spanish organisation would meet
              the minimum threshold.
            </p>
            <p>
              In practice, successful consortiums are almost always larger
              than the minimum. The typical Cluster 5 project has between
              six and fifteen partners, reflecting the multidisciplinary
              nature of climate innovation. A strong consortium generally
              includes a mix of partner types to demonstrate credibility
              across the research-to-market spectrum.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                type: "Research Organisations and Universities",
                role: "Provide scientific expertise, access to testing facilities, and credibility in fundamental research work packages. Evaluators expect to see strong academic partners in RIAs.",
              },
              {
                type: "Large Industrial Partners",
                role: "Bring manufacturing capability, supply chain access, and demonstration sites. Their involvement signals market pull and exploitation potential.",
              },
              {
                type: "SMEs and Start-ups",
                role: "Contribute innovative technologies and commercial agility. Many calls explicitly require or encourage SME participation, and evaluators value the innovation potential SMEs bring.",
              },
              {
                type: "Public Bodies and Regulators",
                role: "Offer regulatory insight, policy alignment, and access to public infrastructure or data. Particularly valued in demonstration projects that require permitting or public engagement.",
              },
              {
                type: "End Users and Demand-Side Partners",
                role: "Validate market need and provide real-world testing environments. Including end users strengthens the exploitation and impact sections of a proposal.",
              },
            ].map((partner) => (
              <div
                key={partner.type}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {partner.type}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{partner.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-base text-slate-300">
            <p>
              Geographic balance also matters. While not a formal
              requirement, evaluators look favourably on consortiums that
              include partners from multiple European regions, particularly
              widening countries in Central and Eastern Europe. Including
              partners from these countries can strengthen your proposal and
              is actively encouraged by the European Commission.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 7. FINDING PARTNERS */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            7. How to Find Consortium Partners
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Building a consortium is often the most time-consuming aspect
              of a Horizon Europe bid. Finding the right partners requires a
              combination of strategic thinking, networking, and practical
              outreach. Here are the main channels UK climate tech companies
              use.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-slate-100">
                Existing Professional Networks
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Start with organisations you already know. Previous
                collaborators, conference contacts, joint venture partners,
                and supply chain relationships can all be starting points.
                Partners with whom you have existing trust and working
                relationships make the strongest consortium members because
                evaluators can see evidence of prior collaboration.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-slate-100">
                The Funding and Tenders Portal Partner Search
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                The European Commission&apos;s portal includes a partner
                search tool where registered organisations can post their
                expertise and interest in specific calls. This is a free
                resource and can surface potential partners across Europe,
                though the quality and responsiveness of listings varies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-slate-100">
                National Contact Points (NCPs)
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Every EU member state and associated country has National
                Contact Points who provide free advice and can help connect
                you with potential partners in their country. The UK NCP
                network, managed by UKRI, offers guidance on specific
                programme areas and can facilitate introductions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-slate-100">
                European Technology Platforms and Partnerships
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Industry-led platforms like the European Clean Hydrogen
                Alliance, Batteries Europe, and ETIP Wind bring together
                organisations working in specific technology areas. These
                platforms regularly host brokerage events and matchmaking
                sessions aligned with upcoming Horizon Europe calls.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-base font-semibold text-slate-100">
                Specialist Consortium Builders
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Services like GreenFundr&apos;s{" "}
                <Link
                  href="/services/consortium-leadership"
                  className="text-emerald-300 underline-offset-4 hover:underline"
                >
                  Consortium Leadership
                </Link>{" "}
                offering can handle the entire partner identification and
                outreach process. This is particularly valuable for
                companies bidding into Horizon Europe for the first time, as
                specialist builders have established networks across European
                academia and industry and understand what partner profiles
                evaluators expect.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 8. APPLICATION PROCESS */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            8. Application Process and Timeline
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              The Horizon Europe application process is more structured and
              formal than most UK domestic grant programmes. Understanding
              the stages and timeline is critical for planning resource
              allocation across your team and consortium.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "Step 1: Identify the Right Call",
                detail:
                  "Calls are published in the Horizon Europe Work Programme, which is updated every two years. Each call topic specifies the scope, expected outcomes, budget, action type, and submission deadline. Calls open between three and five months before the deadline. The earlier you identify relevant calls, the more time you have for consortium building.",
              },
              {
                step: "Step 2: Build Your Consortium",
                detail:
                  "Ideally begin six to twelve months before the expected call opening. Define the technical vision, identify capability gaps, approach potential partners, and agree on roles and budget allocations. Consortium agreements should be drafted in parallel.",
              },
              {
                step: "Step 3: Write the Proposal",
                detail:
                  "Proposals are submitted through the Funding and Tenders Portal. Most collaborative proposals are evaluated on three criteria: Excellence (scientific and technical quality), Impact (expected outcomes and wider effects), and Quality and Efficiency of Implementation (work plan, management, and resources). Each section is scored out of five by independent expert evaluators. The threshold is typically three out of five per criterion and ten out of fifteen overall.",
              },
              {
                step: "Step 4: Submission and Evaluation",
                detail:
                  "After submission, proposals undergo independent expert evaluation over approximately five months. Some calls use a two-stage process where a short outline is evaluated first, and only successful outlines are invited to submit a full proposal. This is increasingly common for calls with high expected application volumes.",
              },
              {
                step: "Step 5: Grant Agreement Preparation",
                detail:
                  "Successful proposals enter Grant Agreement Preparation (GAP), a one-to-three-month process where the consortium and the European Commission finalise the legal, financial, and technical details. Work packages, deliverables, milestones, and budgets are confirmed. The project officially starts once the grant agreement is signed.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-base text-slate-300">
            <p>
              Overall, you should plan for a twelve-to-eighteen-month
              timeline from initial opportunity identification to project
              kickoff. This long lead time means that Horizon Europe is best
              suited for companies that can plan strategically and invest in
              relationship building before specific calls are published.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 9. UK-SPECIFIC CONSIDERATIONS */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            9. UK-Specific Considerations
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              While the UK&apos;s association to Horizon Europe means that
              UK participants are treated broadly the same as EU partners,
              there are several UK-specific factors that companies should be
              aware of.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                The Innovate UK Guarantee Scheme
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                During the period between Brexit and the formal confirmation
                of UK association, UKRI (through Innovate UK) operated a
                guarantee scheme. Under this arrangement, UK participants in
                successful Horizon Europe proposals would receive their
                funding from UKRI if the EU did not fund them. Since formal
                association was confirmed in January 2024, the guarantee is
                less relevant for new applications. However, it remains
                important for legacy applications submitted during the
                transition period. Companies with ongoing guarantee-funded
                projects should continue to liaise with Innovate UK for
                reporting and payment processes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                UKRI Support and National Contact Points
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                UKRI operates the UK National Contact Point network for
                Horizon Europe. NCPs provide free, confidential advice on
                programme areas, help identify relevant calls, review draft
                proposals, and connect UK applicants with potential partners
                in other countries. The energy and climate NCP is
                particularly active and well-connected. UKRI also runs
                information events, webinars, and workshops to help UK
                organisations navigate Horizon Europe.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Complementary UK Domestic Funding
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                UK climate tech companies should consider Horizon Europe as
                part of a broader funding strategy that includes domestic
                programmes. Innovate UK Smart Grants, the Net Zero Hydrogen
                Fund, the Industrial Energy Transformation Fund, and
                Catapult centre programmes can all complement or serve as
                stepping stones towards Horizon Europe bids. Successfully
                delivering a domestic grant project builds the track record
                and evidence base that Horizon Europe evaluators look for.
                Use our{" "}
                <Link
                  href="/services/grantmatch-scan"
                  className="text-emerald-300 underline-offset-4 hover:underline"
                >
                  GrantMatch Scan
                </Link>{" "}
                to map all relevant opportunities across UK and European
                programmes simultaneously.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Currency and Financial Reporting
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Horizon Europe budgets are denominated in euros. UK
                participants receive payments in euros and must manage
                currency risk accordingly. Financial reporting follows
                European Commission rules, which differ from Innovate UK
                reporting requirements. Companies should ensure their finance
                teams understand the eligible cost categories, timesheets
                requirements, and audit provisions specific to Horizon Europe
                grants.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* 10. HOW GREENFUNDR HELPS */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            10. How GreenFundr Helps UK Companies Win Horizon Europe Funding
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Horizon Europe represents a significant opportunity for UK
              climate tech companies, but the complexity of the programme,
              the consortium-building requirements, and the highly
              competitive evaluation process mean that expert support can
              make the difference between a funded project and a near miss.
            </p>
            <p>
              GreenFundr provides end-to-end support for UK climate tech
              companies pursuing Horizon Europe funding. Our team has
              experience shaping proposals worth over GBP 45 million across
              hydrogen, clean aviation, and infrastructure sectors.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Opportunity Identification",
                desc: "We continuously monitor the Horizon Europe Work Programme and upcoming calls to identify the best-fit topics for your technology and stage. Our GrantMatch Scan maps every relevant opportunity across both UK and European programmes.",
              },
              {
                title: "Consortium Building",
                desc: "Through our Consortium Leadership service, we identify, approach, and onboard the right partners from our network across European academia, industry, and the public sector. We manage the entire consortium coordination process.",
              },
              {
                title: "Proposal Writing",
                desc: "We develop the full proposal from technical narrative to impact section, work plan, and budget. Our writers understand what Horizon Europe evaluators look for and how to structure arguments that score highly against the Excellence, Impact, and Implementation criteria.",
              },
              {
                title: "Submission and Follow-Through",
                desc: "We manage the portal submission process, ensure compliance with all formatting and content requirements, and support the Grant Agreement Preparation phase if the proposal is successful.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-base font-semibold text-emerald-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-base text-slate-300">
            <p>
              Whether you are considering your first Horizon Europe bid or
              looking to improve on a previous near-miss, we can help you
              navigate the programme structure, build the right consortium,
              and submit a proposal that meets the evaluation threshold. Our
              approach is structured, transparent, and built on practical
              experience with the programme.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* CTA */}
        {/* --------------------------------------------------------- */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Ready to explore Horizon Europe funding?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review. We will assess your
            technology, stage, and the best-fit Horizon Europe calls for
            your company.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
              className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-7 py-3 text-base font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/10"
            >
              Consortium Leadership Service
            </Link>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 11. FAQ */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-50">
            11. Frequently Asked Questions
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

        {/* --------------------------------------------------------- */}
        {/* RELATED RESOURCES */}
        {/* --------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-slate-50">
            Related Resources
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/services/consortium-leadership"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">
                Consortium Leadership
              </p>
              <p className="mt-1 text-xs text-slate-400">
                End-to-end consortium building and bid management
              </p>
            </Link>
            <Link
              href="/services/grantmatch-scan"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">GrantMatch Scan</p>
              <p className="mt-1 text-xs text-slate-400">
                Map every relevant UK and European funding opportunity
              </p>
            </Link>
            <Link
              href="/insights"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">All Insights</p>
              <p className="mt-1 text-xs text-slate-400">
                Guides, checklists, and analysis for climate tech funding
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

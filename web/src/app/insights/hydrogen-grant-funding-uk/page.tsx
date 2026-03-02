import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hydrogen Grant Funding in the UK: Complete Guide",
  description:
    "Every UK hydrogen grant mapped: NZHF, Innovate UK, ATI, Horizon Europe and regional funds. Eligibility, grant sizes, and how to win.",
  openGraph: {
    title: "Hydrogen Grant Funding in the UK: Complete Guide",
    description:
      "Every UK hydrogen grant mapped: NZHF, Innovate UK, ATI, Horizon Europe and regional funds. Eligibility, grant sizes, and how to win.",
    url: "https://greenfundr.com/insights/hydrogen-grant-funding-uk",
    siteName: "GreenFundr",
    type: "website",
    images: [{ url: "https://greenfundr.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydrogen Grant Funding in the UK: Complete Guide",
    description:
      "Every UK hydrogen grant mapped: NZHF, Innovate UK, ATI, Horizon Europe and regional funds. Eligibility, grant sizes, and how to win.",
  },
  alternates: {
    canonical: "https://greenfundr.com/insights/hydrogen-grant-funding-uk",
  },
};

const faqs = [
  {
    question: "What is the largest hydrogen grant available in the UK?",
    answer:
      "The Net Zero Hydrogen Fund (NZHF) is the single largest dedicated hydrogen funding programme in the UK, with up to £240 million allocated across multiple rounds. Individual awards under the NZHF can reach tens of millions of pounds for large-scale production projects, particularly those at FEED (Front-End Engineering Design) stage or beyond. For smaller companies and earlier-stage technologies, Innovate UK Smart Grants and ISCF-style challenges typically offer between £100,000 and £2 million per project.",
  },
  {
    question: "Can startups apply for hydrogen grant funding in the UK?",
    answer:
      "Yes. Several funding streams are specifically designed for early-stage hydrogen companies. Innovate UK Smart Grants are open to innovative businesses of any size, and many UKRI calls actively encourage SME participation. The key requirement is demonstrating a genuinely novel technology or approach — not company size. Startups should be realistic about which programmes match their technology readiness level: TRL 3-5 technologies suit Innovate UK feasibility studies, while later-stage demonstrations require the NZHF or sector-specific deployment funds.",
  },
  {
    question: "Do I need a consortium to apply for hydrogen grants?",
    answer:
      "It depends on the programme. Innovate UK Smart Grants can be submitted by a single company, though collaborative applications often score higher because they demonstrate a credible route to deployment. Horizon Europe and most ISCF-style challenges require multi-partner consortia — typically with at least one academic partner and cross-sector industry representation. The NZHF can accept single-company applications for production projects, but feasibility and FEED studies often involve engineering consultancies and offtakers as partners.",
  },
  {
    question:
      "What Technology Readiness Level (TRL) do I need for hydrogen funding?",
    answer:
      "Different programmes target different TRL bands. Innovate UK feasibility studies typically require TRL 2-4 at the start of the project. Industrial research and Smart Grant projects usually target TRL 4-6. The NZHF primarily funds TRL 6-9 projects that are moving toward deployment and commercial operation. Horizon Europe Pillar II calls span TRL 3-7 depending on the specific topic. Matching your current TRL to the right programme is critical — applying at the wrong stage is one of the most common reasons hydrogen bids fail.",
  },
  {
    question: "How long does it take to receive hydrogen grant funding?",
    answer:
      "From submission to grant offer, most Innovate UK programmes take 3-5 months. Horizon Europe projects typically take 6-9 months from call deadline to grant agreement signature. The NZHF process varies by strand but generally takes 4-8 months including due diligence. You should plan for a further 4-6 weeks for contracting before funds are released. This means you need to start preparing your bid at least 6-8 weeks before the submission deadline — earlier for consortium bids that require partner alignment and letters of support.",
  },
  {
    question:
      "Can UK hydrogen companies still access Horizon Europe funding after Brexit?",
    answer:
      "Yes. The UK formally associated to Horizon Europe in January 2024, meaning UK-based organisations can participate in and lead Horizon Europe projects on the same terms as EU member state organisations. This is particularly valuable for hydrogen companies because many Horizon Europe Clean Hydrogen Joint Undertaking calls offer grants of EUR 2-5 million per partner. UK companies can also access the EIC Accelerator, which provides up to EUR 2.5 million in grant funding plus optional equity investment for breakthrough technologies.",
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

export default function HydrogenGrantFundingUKPage() {
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
          <span className="text-slate-200">Hydrogen Grant Funding UK</span>
        </nav>

        {/* Hero */}
        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
          Guide
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
          Hydrogen Grant Funding in the UK: Complete Guide
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          The UK has committed to becoming a global leader in hydrogen. With the
          UK Hydrogen Strategy targeting 10GW of low-carbon hydrogen production
          capacity by 2030, billions of pounds in public and private funding are
          flowing into hydrogen production, storage, distribution, and end-use
          technologies. This guide maps every major grant funding route
          available to UK hydrogen companies — from the Net Zero Hydrogen Fund
          through to Horizon Europe — and explains how to position your
          technology for maximum success.
        </p>

        {/* Introduction */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            The UK Hydrogen Strategy and Why Funding Is Available
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Hydrogen is central to the UK&apos;s net zero strategy. The
              government&apos;s 2021 UK Hydrogen Strategy, updated by the 2023
              Hydrogen Strategy Update, positions hydrogen as essential for
              decarbonising sectors that electricity alone cannot reach:
              heavy industry, long-distance transport, shipping, aviation, and
              high-temperature heat. The updated ambition of 10GW by 2030 — up
              from the original 5GW target — signals a doubling of government
              commitment to the sector.
            </p>
            <p>
              This political commitment translates directly into funding. The
              government has allocated over £1 billion specifically for hydrogen
              across DESNZ (Department for Energy Security and Net Zero), UKRI,
              and Innovate UK programmes. On top of that, hydrogen technologies
              are eligible for a range of broader clean energy and industrial
              decarbonisation funds that are not hydrogen-specific but where
              hydrogen projects compete strongly.
            </p>
            <p>
              For climate tech SMEs and mid-stage companies developing hydrogen
              technologies, this landscape represents a significant opportunity
              — but also a challenge. The number of overlapping programmes,
              differing eligibility criteria, and varying timelines can make it
              difficult to know where to focus. This guide breaks down each
              major funding source, explains who it is for, and provides
              practical advice on how to approach it.
            </p>
          </div>
        </section>

        {/* NZHF */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            Net Zero Hydrogen Fund (NZHF)
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              The Net Zero Hydrogen Fund is the UK government&apos;s flagship
              hydrogen funding programme, administered by DESNZ. With up to
              £240 million in capital funding, the NZHF supports the
              commercial deployment of low-carbon hydrogen production projects
              across the UK. It is the single most important funding programme
              for companies building hydrogen production capacity at scale.
            </p>
            <p>
              The NZHF operates across multiple strands, each targeting a
              different stage of project development:
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Strand 1: FEED Studies
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Front-End Engineering Design studies for projects that have
                completed initial feasibility. Grants typically cover up to 50%
                of FEED costs, with awards ranging from £100,000 to several
                million pounds depending on project scale. Applicants must
                demonstrate a credible route to deployment and a realistic
                timeline for reaching final investment decision (FID).
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Strand 2: Capital Co-Investment
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Devex and capex co-funding for hydrogen production projects
                approaching deployment. This strand provides the largest awards
                in the NZHF, with grants of up to £30 million or more for
                significant production facilities. Successful applicants need
                to demonstrate offtake arrangements, planning progress, and
                private sector co-investment commitment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Eligibility and Key Criteria
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                The NZHF targets low-carbon hydrogen production specifically —
                both electrolytic (green) and CCUS-enabled (blue) hydrogen.
                Projects must be based in the UK and demonstrate a clear
                emissions reduction pathway. Assessors evaluate technical
                maturity, commercial viability, scalability, deliverability,
                and value for public money. Companies with technologies at
                TRL 6-9 are the primary target, though earlier-stage
                production innovations may qualify for Strand 1 FEED funding.
              </p>
            </div>
          </div>
        </section>

        {/* Innovate UK */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            Innovate UK Hydrogen-Specific Calls
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Innovate UK — the UK&apos;s innovation agency, part of UKRI — runs
              several funding programmes that are directly relevant to hydrogen
              companies. Unlike the NZHF, which focuses on production
              deployment, Innovate UK programmes tend to support earlier-stage
              research, development, and demonstration across the entire
              hydrogen value chain: production, storage, distribution,
              and end-use applications.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Smart Grants
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Innovate UK Smart Grants are the most accessible entry point
                for hydrogen innovators. These are always-open, sector-agnostic
                competitions that fund disruptive R&D with strong commercial
                potential. Hydrogen technologies compete against innovations
                from all sectors, so your application must clearly articulate
                what is genuinely novel about your approach. Single-company
                projects can apply for £100,000 to £500,000, while
                collaborative projects involving multiple partners can access
                up to £2 million. Success rates typically sit between 10-15%,
                making a strong application essential. The key differentiator
                for successful hydrogen bids is demonstrating a clear
                improvement over the current state of the art — whether that is
                electrolyser efficiency, novel catalyst materials, cost
                reduction in balance of plant, or innovative storage solutions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                ISCF and Strategic Challenges
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                The Industrial Strategy Challenge Fund (ISCF) and its
                successors have run several hydrogen-specific calls. Past
                challenges have included the Hydrogen Supply Competition, the
                Industrial Fuel Switching programme, and various calls under
                the Transforming Foundation Industries challenge. While these
                tend to be time-limited, new strategic challenges with
                hydrogen relevance are announced regularly. Grants range from
                £250,000 for feasibility studies to £10 million or more for
                large collaborative demonstration projects. These calls
                typically require consortia with industry, academic, and
                sometimes public-sector partners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                CR&D and Collaborative R&D
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                UKRI Collaborative R&D competitions fund multi-partner
                projects that address specific technical challenges. Hydrogen
                technologies frequently feature in energy, transport, and
                manufacturing-focused calls. These projects typically last 18-36
                months with total budgets between £1 million and £10 million.
                Academic partners often provide complementary capabilities in
                materials science, catalysis, systems modelling, or
                techno-economic analysis that strengthen the bid.
              </p>
            </div>
          </div>

          <p className="mt-6 text-base text-slate-300">
            To stay ahead of upcoming hydrogen-relevant calls, consider
            running a{" "}
            <Link
              href="/services/grantmatch-scan"
              className="font-medium text-emerald-300 underline-offset-4 hover:underline"
            >
              GrantMatch Scan
            </Link>{" "}
            to map all live and anticipated funding opportunities to your
            specific technology and stage.
          </p>
        </section>

        {/* ATI */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            ATI Programme: Hydrogen in Aviation
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              The Aerospace Technology Institute (ATI) Programme is a joint
              government-industry initiative that provides grant funding for
              aerospace R&D in the UK. Hydrogen is now one of the ATI&apos;s
              highest-priority technology areas, reflecting the aviation
              industry&apos;s recognition that hydrogen — whether as a direct
              combustion fuel or as a feedstock for sustainable aviation fuel
              (SAF) — is critical to meeting net zero aviation targets.
            </p>
            <p>
              The ATI Programme has funded several landmark hydrogen-aviation
              projects, including liquid hydrogen fuel system development,
              hydrogen propulsion architectures, and hydrogen-powered aircraft
              subsystems. Projects range from fundamental research (TRL 2-3)
              through to full-scale demonstrators (TRL 6-7). Grant sizes vary
              considerably: smaller feasibility studies may receive £500,000 to
              £2 million, while major demonstrators and platform-level projects
              can attract £10 million to £50 million in public funding.
            </p>
            <p>
              Eligibility for the ATI Programme requires that the technology
              has a clear application in civil aerospace. However, the
              definition is broad enough to include hydrogen production for
              SAF, cryogenic storage systems, fuel cells for auxiliary power
              units, and ground-side hydrogen infrastructure for airports. If
              your hydrogen technology has an aviation pathway, the ATI
              Programme should be a primary target. Applications require a
              strong industrial partner, typically a Tier 1 aerospace company
              or airframer, as part of the consortium.
            </p>
          </div>
        </section>

        {/* Hydrogen BECCS */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            Hydrogen BECCS and Industrial Decarbonisation Funds
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Hydrogen plays a central role in the UK&apos;s industrial
              decarbonisation strategy. Several funding programmes target the
              intersection of hydrogen and heavy industry, including
              steelmaking, chemicals, cement, glass, and ceramics. These
              programmes recognise that many industrial processes require
              high-temperature heat that cannot be easily electrified, making
              hydrogen a critical decarbonisation pathway.
            </p>
            <p>
              The Industrial Energy Transformation Fund (IETF), administered
              by DESNZ, provides capital grants to help energy-intensive
              businesses switch to low-carbon fuels — including hydrogen. Phase
              3 of the IETF has allocated over £185 million in grant funding
              for industrial decarbonisation projects. Hydrogen fuel-switching
              projects are particularly well-suited to this programme,
              especially where they can demonstrate replicability across
              multiple industrial sites.
            </p>
            <p>
              Hydrogen BECCS (Bioenergy with Carbon Capture and Storage)
              represents a specific funding opportunity at the intersection of
              hydrogen production and negative emissions. The concept involves
              producing hydrogen from biomass while capturing and storing the
              resulting CO2, delivering both clean hydrogen and negative
              emissions. DESNZ and UKRI have funded feasibility studies and
              pilot projects in this area, and further funding is expected as
              the UK refines its greenhouse gas removal strategy. For companies
              working on gasification, pyrolysis, or reforming technologies
              that can process biogenic feedstocks, Hydrogen BECCS represents
              a strategically valuable funding angle.
            </p>
            <p>
              The Industrial Decarbonisation Challenge, part of UKRI&apos;s
              wider challenge portfolio, has funded large-scale hydrogen
              deployment projects in industrial clusters. These projects
              typically involve multiple industrial partners, hydrogen
              producers, infrastructure operators, and research organisations
              working together to demonstrate hydrogen at cluster scale.
              Individual partner grants within these large consortia can reach
              £5 million to £15 million.
            </p>
          </div>
        </section>

        {/* Regional */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            Regional Hydrogen Cluster Funding
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              The UK&apos;s hydrogen strategy has a strong regional dimension.
              The government has identified several industrial clusters as
              priority areas for hydrogen deployment, including Humber,
              Teesside, HyNet (North West), South Wales, Grangemouth
              (Scotland), and the Southampton-Solent corridor. Each of these
              regions has its own hydrogen ecosystem, funding mechanisms,
              and strategic priorities.
            </p>
            <p>
              Regional hydrogen funding takes several forms. Devolved
              administrations — particularly the Scottish Government and the
              Welsh Government — operate their own hydrogen-specific funding
              programmes. The Scottish Government&apos;s Hydrogen Action Plan
              is backed by dedicated funding for hydrogen production,
              distribution, and end-use demonstration projects. Scottish
              Enterprise and Highlands and Islands Enterprise also offer
              R&D grants that hydrogen companies can access.
            </p>
            <p>
              English regions benefit from the UK Shared Prosperity Fund, Town
              Deals, and Levelling Up Fund, all of which can support hydrogen
              infrastructure projects. Combined authorities and local
              enterprise partnerships (LEPs) in hydrogen cluster regions often
              provide additional match funding or letters of support that
              strengthen national-level bids. Being embedded in a recognised
              hydrogen cluster can significantly strengthen your application
              to the NZHF or Innovate UK calls, because assessors value
              projects that contribute to established cluster development
              plans and have clear routes to offtake.
            </p>
            <p>
              For companies that are not already located in a hydrogen cluster,
              the strategic question is whether to partner with
              cluster-based organisations or to target non-cluster funding
              routes. Both approaches can work, but the cluster pathway
              offers advantages in terms of shared infrastructure, regulatory
              support, and a pre-existing ecosystem of potential customers
              and partners.
            </p>
          </div>
        </section>

        {/* Horizon Europe */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            Horizon Europe Hydrogen Opportunities
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              With the UK&apos;s association to Horizon Europe confirmed, UK
              hydrogen companies now have full access to the largest research
              and innovation funding programme in the world. Horizon Europe
              allocates approximately EUR 95.5 billion across 2021-2027, and
              hydrogen features prominently in Cluster 5 (Climate, Energy and
              Mobility) of Pillar II.
            </p>
            <p>
              The Clean Hydrogen Joint Undertaking (Clean Hydrogen JU) is the
              most important Horizon Europe vehicle for hydrogen companies. It
              is a public-private partnership between the European Commission,
              Hydrogen Europe (the industry association), and Hydrogen Europe
              Research (the research association). The Clean Hydrogen JU
              publishes annual work programmes with specific call topics
              covering the entire hydrogen value chain — from advanced
              electrolysis and novel production methods through to hydrogen
              storage, transport, distribution, and applications in transport,
              industry, and the built environment.
            </p>
            <p>
              Typical Clean Hydrogen JU grants range from EUR 2 million to
              EUR 5 million per partner within consortia of 5-15 organisations
              from at least three different countries. The funding rate for
              research and innovation actions (RIA) is 100% of eligible costs,
              while innovation actions (IA) are funded at 70% for commercial
              partners and 100% for research organisations. UK companies can
              lead these consortia, which is a significant advantage in
              shaping the project scope and direction.
            </p>
            <p>
              Beyond the Clean Hydrogen JU, standard Horizon Europe calls
              under Cluster 5 regularly include topics relevant to hydrogen
              companies, such as integrated energy systems, sector coupling,
              and energy storage. The EIC Accelerator also funds breakthrough
              hydrogen technologies through its blended finance instrument
              (up to EUR 2.5 million grant plus up to EUR 15 million equity
              investment). Building a European consortium requires time and
              relationships — our{" "}
              <Link
                href="/services/consortium-leadership"
                className="font-medium text-emerald-300 underline-offset-4 hover:underline"
              >
                Consortium Leadership
              </Link>{" "}
              service helps UK hydrogen companies identify the right partners
              and structure competitive bids.
            </p>
          </div>
        </section>

        {/* Positioning */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            How to Position Your Hydrogen Technology for Maximum Success
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Winning hydrogen grant funding requires more than a strong
              technology. Assessors evaluate applications against specific
              criteria, and understanding what they prioritise is the
              difference between a funded project and a rejection. Based on
              our experience supporting hydrogen bids across every major UK
              programme, here are the factors that separate winning
              applications from the rest.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Quantify the Innovation Gap
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Every hydrogen bid must clearly articulate what exists today,
                why it is insufficient, and precisely what your innovation
                changes. Generic claims about &ldquo;improved efficiency&rdquo;
                are not enough. Assessors want specific, quantified comparisons:
                current electrolyser stacks operate at X kWh/kg, your technology
                targets Y kWh/kg, and this matters because it reduces
                production cost by Z%. Benchmark your technology against the
                state of the art using published literature, competitor
                specifications, and industry roadmaps.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Demonstrate Market Pull
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                The hydrogen economy is still nascent, which means assessors
                are particularly focused on whether real customers will buy
                your product. Letters of support from potential offtakers,
                Memoranda of Understanding with industrial end-users, and
                evidence of commercial conversations all strengthen your bid.
                If you are developing production technology, show who will buy
                the hydrogen and at what price. If you are developing end-use
                technology, show the total addressable market and why
                customers will switch from incumbent solutions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Build a Credible Consortium
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                For collaborative bids, your consortium composition tells
                assessors whether the project can actually deliver. Include
                partners that cover the full value chain: technology developers,
                component suppliers, systems integrators, end-users, and
                academic partners for underpinning research. Avoid consortia
                where every partner is doing the same thing — assessors want
                complementary capabilities with minimal overlap. Each partner
                should have a clear, justified role with defined deliverables.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Align with Policy Priorities
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Hydrogen funding is inherently political. Your application
                should explicitly connect to the UK Hydrogen Strategy, the
                Ten Point Plan for a Green Industrial Revolution, the Net Zero
                Strategy, and — where relevant — regional hydrogen cluster
                plans. Show how your project contributes to the
                government&apos;s 10GW target and how it creates UK jobs,
                builds UK supply chain capability, and supports export
                potential. Assessors working within DESNZ and UKRI are
                evaluated on how their portfolio delivers against these policy
                objectives.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Get the Financials Right
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Hydrogen projects often involve significant capital expenditure,
                which means your financial case needs to be robust. Include
                detailed cost breakdowns, realistic co-funding plans, and a
                credible path to commercial viability without ongoing subsidy.
                For production projects, your levelised cost of hydrogen (LCOH)
                analysis should be transparent and benchmarked against DESNZ
                and industry projections. Assessors will challenge unrealistic
                cost assumptions — it is better to be conservative and
                credible than optimistic and questionable.
              </p>
            </div>
          </div>
        </section>

        {/* GreenFundr experience */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
            GreenFundr&apos;s Hydrogen Sector Experience
          </h2>
          <div className="mt-6 space-y-4 text-base text-slate-300">
            <p>
              Hydrogen is one of GreenFundr&apos;s deepest sectors. Our
              founder and team have supported hydrogen bids across the full
              spectrum of UK and European programmes, from early-stage
              Innovate UK feasibility studies through to multi-million-pound
              NZHF production projects and Horizon Europe collaborative
              research.
            </p>
            <p>
              Our track record includes work on projects such as LH-SIFT
              (Liquid Hydrogen for Sustainable Intermodal Freight Transport),
              a cross-sector initiative developing liquid hydrogen supply
              chains for heavy-duty transport applications. We have also
              supported Hydrogen Highways projects focused on building
              hydrogen refuelling infrastructure corridors and distribution
              networks. These projects require deep technical understanding
              of hydrogen systems — from electrolysis and liquefaction through
              to storage, distribution, and dispensing — combined with the
              grant-writing expertise needed to present complex technical
              programmes in the format that assessors expect.
            </p>
            <p>
              What sets our hydrogen support apart is that we understand both
              the technology and the funding landscape. We know which
              programmes are coming, which have historically funded hydrogen
              projects, and what assessors in each programme prioritise. This
              means we can advise not just on how to write a strong bid, but
              on when to bid, which programme to target, and how to structure
              your consortium for maximum competitiveness.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-2xl font-semibold text-emerald-300">
                £45M+
              </p>
              <p className="mt-1 text-sm text-slate-400">
                in hydrogen and climate tech proposals shaped
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-2xl font-semibold text-emerald-300">
                Full Value Chain
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Production, storage, distribution, and end-use expertise
              </p>
            </div>
          </div>
        </section>

        {/* Mid-article CTA */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Exploring Hydrogen Funding?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free 30-minute funding review. We will assess your hydrogen
            technology against every relevant UK and European programme and
            recommend the strongest funding route.
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
              href="/services/grantmatch-scan"
              className="text-sm font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              Learn about our GrantMatch Scan
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-50">
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

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Ready to Secure Hydrogen Funding?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Whether you are preparing your first hydrogen grant application or
            looking to scale across multiple programmes, GreenFundr can help.
            Start with a free funding review — no commitment, just clarity on
            your next steps.
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
              href="/insights"
              className="text-sm font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              Back to all insights
            </Link>
          </div>
        </div>

        {/* Related services */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-slate-50">
            Related Services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/services/grantmatch-scan"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">GrantMatch Scan</p>
              <p className="mt-1 text-xs text-slate-400">
                Map every relevant funding programme to your hydrogen
                technology
              </p>
            </Link>
            <Link
              href="/services/consortium-leadership"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">
                Consortium Leadership
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Build and manage multi-partner hydrogen bids
              </p>
            </Link>
            <Link
              href="/insights"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-colors hover:border-emerald-500/40"
            >
              <p className="font-semibold text-slate-100">All Insights</p>
              <p className="mt-1 text-xs text-slate-400">
                More guides on climate tech funding
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

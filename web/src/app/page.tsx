import Link from "next/link";

const benefits = [
  {
    title: "Launch trusted climate campaigns",
    description:
      "Publish beautiful campaign pages with transparent impact metrics and supporter updates in minutes.",
  },
  {
    title: "Grow recurring supporter revenue",
    description:
      "Automate renewals, nurture high-value donors, and forecast runway with real-time analytics.",
  },
  {
    title: "Report measurable climate impact",
    description:
      "Share verified project milestones, emissions reductions, and community outcomes with every contribution.",
  },
];

const stats = [
  { value: "$12.4M", label: "directed to climate ventures" },
  { value: "47%", label: "average lift in recurring gifts" },
  { value: "48 hrs", label: "to launch a new fundraising campaign" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-[320px] -z-10 blur-3xl" aria-hidden>
        <div className="mx-auto h-[540px] w-[540px] rounded-full bg-emerald-500/30" />
      </div>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
              Climate funding made accountable
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Fund the next wave of climate breakthroughs with Greenfundr
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Greenfundr is the operating system for climate entrepreneurs, community finance leaders, and impact funds who need reliable capital and transparent communications with their supporters.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Explore pricing
              </Link>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-8 py-3 text-base font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/10"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="relative inline-flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-emerald-500/20">
            <span className="text-sm font-medium uppercase tracking-wide text-emerald-300">
              Platform snapshot
            </span>
            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-950/70 p-6">
                <p className="text-sm text-slate-400">Live campaign overview</p>
                <p className="mt-4 text-4xl font-semibold text-emerald-300">$86,420</p>
                <p className="mt-2 text-sm text-slate-400">raised this month toward Clean Coastlines Initiative</p>
              </div>
              <div className="rounded-2xl bg-slate-950/70 p-6">
                <p className="text-sm text-slate-400">Supporter satisfaction</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-2 w-full rounded-full bg-slate-800">
                    <div className="h-full w-[83%] rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">83%</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Personalized impact reports sent every quarter.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="benefits" className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-50">
              Why climate operators choose Greenfundr
            </h2>
            <p className="text-base text-slate-300">
              Purpose-built tooling that combines funding operations, supporter engagement, and impact reporting in one place.
            </p>
            <ul className="space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                  <h3 className="text-lg font-semibold text-slate-100">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Impact snapshot</p>
              <p className="mt-4 text-2xl font-semibold text-slate-50">
                A platform designed for regenerative finance teams and climate-first founders.
              </p>
            </div>
            <dl className="grid gap-8 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-emerald-300">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-sm text-slate-400">
              Teams use Greenfundr to coordinate funding, capture recurring support, and share verified climate outcomes with every contributor.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-50">
            Ready to fund more climate-positive work?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
            Move from scattered spreadsheets and generic donation tools to a purpose-built operating system that keeps climate supporters engaged for the long run.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View pricing and plans
            </Link>
            <a
              href="mailto:hello@greenfundr.com"
              className="text-sm font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              Talk with our team
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

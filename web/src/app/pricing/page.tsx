import type { Metadata } from "next";
import Link from "next/link";
import { CheckoutButton } from "@/components/checkout-button";
import { CheckoutStatusBanner } from "@/components/checkout-status-banner";

export const metadata: Metadata = {
  title: "Pricing | Greenfundr",
  description:
    "Review Greenfundr pricing, launch climate funding programs, and start Stripe Checkout in test mode for your workspace.",
};

const planFeatures = [
  "Unlimited public campaigns with impact storytelling blocks",
  "Automated supporter journeys with climate-focused templates",
  "Real-time analytics with emissions and co-benefit reporting",
  "Recurring contribution management and ACH support",
  "Collaboration for up to 15 teammates and stakeholder portals",
];

const faqs = [
  {
    question: "Is this pricing for production or a pilot?",
    answer:
      "The Greenfundr Scale plan is designed for organisations ready to onboard real supporters. Your account launches in Stripe test mode and can be upgraded to live mode once you are ready to process real payments.",
  },
  {
    question: "Do you support one-time and recurring contributions?",
    answer:
      "Yes. Campaigns can accept one-time gifts, monthly recurring commitments, and custom sponsorship tiers. Configure pricing inside your Stripe dashboard with your own products and prices.",
  },
  {
    question: "Can I cancel after starting the subscription?",
    answer:
      "Absolutely. Manage your subscription from the Greenfundr workspace or directly in Stripe. We also offer a 30-day refund window per our refund policy.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-[380px] -z-10 blur-3xl" aria-hidden>
        <div className="mx-auto h-[620px] w-[620px] rounded-full bg-emerald-500/20" />
      </div>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
            Simple, transparent pricing
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-slate-50 sm:text-5xl">
            Everything you need to launch climate funding programs
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Launch with free white-glove onboarding, purpose-built climate campaign templates, and analytics that keep your supporters confident in every outcome.
          </p>
        </div>

        <CheckoutStatusBanner />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-emerald-500/10">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Scale plan</p>
                <p className="mt-3 text-4xl font-semibold text-slate-50">$299 / month</p>
                <p className="mt-2 text-sm text-slate-400">
                  Includes up to $1M in annual contributions processed. 1.5% platform fee beyond that threshold.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 text-sm text-slate-300">
                <p>
                  Your workspace is created immediately. Stripe Checkout launches in test mode so you can validate campaign flows before going live.
                </p>
              </div>
            </div>

            <ul className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              {planFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-sm text-emerald-200">
                    •
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="divide-y divide-slate-800 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
              <div className="flex flex-col gap-2 px-6 py-5 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold">Includes onboarding concierge</p>
                  <p className="text-xs text-slate-500">
                    Migration of your active campaigns and import of existing supporters.
                  </p>
                </div>
                <p className="font-semibold text-emerald-300">No extra cost</p>
              </div>
              <div className="flex flex-col gap-2 px-6 py-5 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold">24/7 emergency support</p>
                  <p className="text-xs text-slate-500">
                    Access to our incident response team with 30 minute first response.
                  </p>
                </div>
                <p className="font-semibold text-emerald-300">Included</p>
              </div>
            </div>

            <CheckoutButton label="Start Stripe Checkout (test mode)" className="md:w-auto" />
            <p className="text-xs text-slate-500">
              By starting checkout you agree to our <Link href="/terms" className="text-emerald-200 underline-offset-4 hover:underline">Terms</Link> and <Link href="/privacy" className="text-emerald-200 underline-offset-4 hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <aside className="flex flex-col gap-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-sm text-emerald-50">
            <div>
              <h2 className="text-xl font-semibold text-emerald-100">Guarantee</h2>
              <p className="mt-2 text-emerald-200/90">
                If Greenfundr is not the right fit, request a refund within 30 days and we will return your subscription fee per our <Link href="/refund-policy" className="underline-offset-4 hover:underline">Refund Policy</Link>.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
              <p className="text-sm font-semibold text-emerald-100">Need an enterprise plan?</p>
              <p className="mt-2 text-emerald-200/80">
                Custom workflows, on-prem analytics, and dedicated success partnerships are available for large coalitions and multi-region funds.
              </p>
              <a
                href="mailto:hello@greenfundr.com"
                className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-50 underline-offset-4 hover:underline"
              >
                Contact sales →
              </a>
            </div>
          </aside>
        </div>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
          <h2 className="text-2xl font-semibold text-slate-50">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <p className="text-base font-semibold text-slate-100">{faq.question}</p>
                <p className="mt-2 text-sm text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

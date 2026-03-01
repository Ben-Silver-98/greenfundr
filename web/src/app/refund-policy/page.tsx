import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | GreenFundr",
  description:
    "GreenFundr refund terms for grant advisory services, subscriptions, and billing questions.",
  openGraph: {
    title: "Refund Policy | GreenFundr",
    description:
      "GreenFundr refund terms for grant advisory services and billing.",
    url: "https://greenfundr.com/refund-policy",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Refund Policy | GreenFundr",
    description:
      "GreenFundr refund terms for grant advisory services and billing.",
  },
  alternates: {
    canonical: "https://greenfundr.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-16">
      <h1 className="text-4xl font-semibold text-slate-50">Refund Policy</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: October 17, 2024</p>

      <div className="mt-10 space-y-8 text-sm text-slate-300">
        <p>
          We aim to ensure every Greenfundr customer has a confident experience building sustainable funding
          programs. If the platform is not the right fit, the following refund terms apply.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">1. Subscription refunds</h2>
          <p className="mt-3">
            Greenfundr subscriptions may be cancelled within the first 30 days of your initial charge for a
            full refund. After the first 30 days, prorated refunds are not offered, but you can cancel future
            billing cycles at any time from the billing settings page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">2. Professional services</h2>
          <p className="mt-3">
            Fees paid for custom onboarding, data migration, or other professional services are refundable only
            if the work has not yet commenced. Once services have been delivered, those fees are non-refundable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">3. How to request a refund</h2>
          <p className="mt-3">
            To request a refund, email our team at{" "}
            <a className="text-emerald-200 underline-offset-4 hover:underline" href="mailto:billing@greenfundr.com">
              billing@greenfundr.com
            </a>
            with your workspace URL, Stripe receipt, and a brief description of the issue. We will review and
            respond within two business days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">4. Chargebacks</h2>
          <p className="mt-3">
            If a chargeback is filed, Greenfundr reserves the right to suspend access to the Services until the
            matter is resolved. We encourage customers to work directly with our billing team before pursuing a
            chargeback with their financial institution.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">5. Changes to this policy</h2>
          <p className="mt-3">
            We may update this Refund Policy to reflect changes in our practices. Material updates will be
            communicated via email or through the dashboard. Continued use of the Services after an update
            constitutes acceptance of the revised policy.
          </p>
        </section>
      </div>
    </section>
  );
}

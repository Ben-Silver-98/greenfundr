import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Greenfundr",
  description: "Understand how Greenfundr collects, uses, and protects information for climate funding teams and supporters.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-16">
      <h1 className="text-4xl font-semibold text-slate-50">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: October 17, 2024</p>

      <div className="mt-10 space-y-8 text-sm text-slate-300">
        <p>
          Greenfundr respects your privacy and is committed to protecting the personal information that you
          share with us. This Privacy Policy explains what information we collect, why we collect it, and how
          we use, store, and disclose it when you access our website and Services.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">1. Information we collect</h2>
          <p className="mt-3">
            We collect information that you voluntarily provide, such as contact details, organisation details,
            and payment information when you sign up or communicate with us. We also collect usage data through
            cookies and similar technologies to improve our Services. Payment details are processed securely by
            Stripe and are not stored on Greenfundr servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">2. How we use your information</h2>
          <p className="mt-3">
            We use the information we collect to provide and maintain the Services, personalise your
            experience, process transactions, send important notices, and improve our offerings. We may also
            use your information to communicate upcoming product updates or marketing content, which you can
            opt out of at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">3. Sharing and disclosure</h2>
          <p className="mt-3">
            We do not sell your personal information. We may share information with trusted service providers,
            such as hosting partners and analytics providers, who assist in operating our Services. These
            partners are required to protect your information and use it only for the contracted purposes. We
            may also disclose information if required by law or to protect our rights.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">4. Data retention</h2>
          <p className="mt-3">
            We retain personal information for as long as necessary to provide the Services and fulfil the
            purposes outlined in this policy. You may request deletion of your information by contacting us at
            the email address below, subject to legal obligations that require retention.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">5. Your rights</h2>
          <p className="mt-3">
            Depending on your location, you may have rights to access, correct, delete, or restrict the use of
            your personal information. To exercise these rights, please contact Greenfundr and we will respond
            in accordance with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">6. Contact us</h2>
          <p className="mt-3">
            If you have questions about this Privacy Policy or our data practices, reach out to us at{" "}
            <a className="text-emerald-200 underline-offset-4 hover:underline" href="mailto:privacy@greenfundr.com">
              privacy@greenfundr.com
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}

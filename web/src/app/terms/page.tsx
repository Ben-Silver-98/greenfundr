import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GreenFundr",
  description:
    "GreenFundr terms of service for climate tech grant advisory clients. Understand how we work together.",
  openGraph: {
    title: "Terms of Service | GreenFundr",
    description:
      "GreenFundr terms of service for climate tech grant advisory clients.",
    url: "https://greenfundr.com/terms",
    siteName: "GreenFundr",
    type: "website",
    images: [{ url: "https://greenfundr.com/og-image.png" }],
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | GreenFundr",
    description:
      "GreenFundr terms of service for climate tech grant advisory clients.",
  },
  alternates: {
    canonical: "https://greenfundr.com/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-16">
      <h1 className="text-4xl font-semibold text-slate-50">Terms of Service</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: October 17, 2024</p>

      <div className="mt-10 space-y-8 text-sm text-slate-300">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the Greenfundr marketing
          site, platform, and related services (collectively, the "Services"). By accessing or using the
          Services you agree to be bound by these Terms. If you are using the Services on behalf of an
          organisation, you represent that you have authority to bind that organisation.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">1. Use of the services</h2>
          <p className="mt-3">
            You may use the Services only in compliance with these Terms and all applicable laws. You agree
            not to misuse the Services or help anyone else to do so. This includes, without limitation,
            attempting to gain unauthorised access to the platform, interfering with the normal operation of
            the Services, or using the Services to transmit any malicious code.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">2. Accounts and responsibilities</h2>
          <p className="mt-3">
            You are responsible for safeguarding your account credentials and for any activities conducted on
            your account. You must notify Greenfundr immediately upon becoming aware of any breach of
            security or unauthorised use of your account. We may suspend or terminate your access if we
            reasonably believe you have violated these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">3. Payment terms</h2>
          <p className="mt-3">
            Subscription and transaction fees are billed through Stripe. By initiating checkout you authorise
            Greenfundr to charge the payment method you provide for the applicable fees. Any taxes, duties, or
            levies associated with your use of the Services are your responsibility unless otherwise stated.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">4. Intellectual property</h2>
          <p className="mt-3">
            Greenfundr retains all rights, title, and interest in the Services. You retain rights to your
            content but grant us a limited licence to host, store, and display that content as necessary to
            operate the Services. You agree not to copy, modify, or create derivative works of the Services
            without our explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">5. Disclaimers and limitation of liability</h2>
          <p className="mt-3">
            The Services are provided on an "as is" basis without warranties of any kind. To the extent
            permitted by law, Greenfundr will not be liable for any indirect, incidental, special, or
            consequential damages, or loss of profits or revenues. Our total liability for any claim arising
            out of or relating to the Services is limited to the amount you paid to Greenfundr in the twelve
            months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">6. Changes</h2>
          <p className="mt-3">
            We may modify these Terms from time to time. Material changes will be communicated through the
            Services or via email. Continued use of the Services after the updated Terms become effective
            constitutes acceptance of the revisions.
          </p>
        </section>

        <p>
          For questions regarding these Terms, contact us at{" "}
          <a className="text-emerald-200 underline-offset-4 hover:underline" href="mailto:legal@greenfundr.com">
            legal@greenfundr.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

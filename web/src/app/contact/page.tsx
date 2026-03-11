import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact GreenFundr | Book a Funding Review",
  description:
    "Get in touch with GreenFundr. Book a free 30-minute funding review or send us a message about your climate tech grant needs.",
  openGraph: {
    title: "Contact GreenFundr | Book a Funding Review",
    description:
      "Book a free 30-minute funding review or send us a message about your climate tech grant needs.",
    url: "https://greenfundr.com/contact",
    siteName: "GreenFundr",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact GreenFundr | Book a Funding Review",
    description:
      "Book a free 30-minute funding review or get in touch about your grant needs.",
  },
  alternates: {
    canonical: "https://greenfundr.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-[320px] -z-10 blur-3xl" aria-hidden>
        <div className="mx-auto h-[540px] w-[540px] rounded-full bg-emerald-500/30" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-slate-50 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Ready to explore your funding options? Get in touch and we will get
            back to you within one working day.
          </p>
          <p className="mt-3 text-base text-slate-400">
            Share your details and we&apos;ll get back to you within 2 working
            days with next steps.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Get in Touch */}
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8">
            <h2 className="text-xl font-semibold text-slate-50">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Tell us about your technology, stage, and goals, and we will
              identify the best-fit funding programmes for you. No obligation.
            </p>
            <a
              href="mailto:sales@greenfundr.com"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Email Us
            </a>
          </div>

          {/* Email */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-xl font-semibold text-slate-50">Email Us</h2>
            <p className="mt-3 text-sm text-slate-300">
              Send us a message and we will respond within one working day.
            </p>
            <a
              href="mailto:sales@greenfundr.com"
              className="mt-6 inline-flex items-center text-base font-semibold text-emerald-200 underline-offset-4 hover:underline"
            >
              sales@greenfundr.com
            </a>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}

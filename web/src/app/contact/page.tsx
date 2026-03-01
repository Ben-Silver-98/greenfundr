import type { Metadata } from "next";

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
            Ready to explore your funding options? Book a free 30-minute review
            or send us a message and we will get back to you within one working
            day.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Book a call */}
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8">
            <h2 className="text-xl font-semibold text-slate-50">
              Book a Free Funding Review
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              A 30-minute call where we assess your technology, stage, and goals
              — and identify the best-fit funding programmes. No obligation.
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

          {/* Email */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-xl font-semibold text-slate-50">Email Us</h2>
            <p className="mt-3 text-sm text-slate-300">
              Prefer email? Send us a message and we will respond within one
              working day.
            </p>
            <a
              href="mailto:hello@greenfundr.com"
              className="mt-6 inline-flex items-center text-base font-semibold text-emerald-200 underline-offset-4 hover:underline"
            >
              hello@greenfundr.com
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-50">
            Send Us a Message
          </h2>
          <form className="mt-8 space-y-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-slate-200"
              >
                Email address
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="contact-company"
                className="block text-sm font-medium text-slate-200"
              >
                Company
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-slate-200"
              >
                Tell us about your project
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
                placeholder="Brief description of your technology, stage, and funding needs"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Check Your Eligibility
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

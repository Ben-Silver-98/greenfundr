"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-50">Send Us a Message</h2>
        <div className="mt-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
          <p className="text-xl font-semibold text-emerald-300">Message received!</p>
          <p className="mt-3 text-sm text-slate-300">
            Thanks for getting in touch. We&apos;ll get back to you within 2 working days with next
            steps and a booking link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-16 max-w-2xl">
      <h2 className="text-2xl font-semibold text-slate-50">Send Us a Message</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
      >
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-200">
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-200">
            Email address
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-slate-200">
            Company
          </label>
          <input
            type="text"
            id="contact-company"
            name="company"
            required
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200">
            Tell us about your project
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40"
            placeholder="Brief description of your technology, stage, and funding needs"
          />
        </div>
        {status === "error" && (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending…" : "Check Your Eligibility"}
        </button>
        <p className="text-xs text-slate-500">
          Share your details and we&apos;ll get back to you within 2 working days with next steps
          and a booking link.
        </p>
      </form>
    </div>
  );
}

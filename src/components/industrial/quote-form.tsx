"use client";

import { useState } from "react";

import { CheckCircle2, Send, ShieldCheck } from "lucide-react";

import { products } from "@/lib/industrial-data";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-[#f3a329]/40 bg-[#15191c] p-8 text-center sm:p-12 shadow-2xl">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#f3a329]/10 text-[#f3a329]">
          <CheckCircle2 className="size-10" />
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
          Inquiry &amp; RFQ Transmitted
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#a7adb3] max-w-md mx-auto">
          Thank you for reaching out to Pixelara Industrial Applications. An estimation engineer has been assigned to your specification and will email a formal response within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
        >
          SUBMIT ANOTHER INQUIRY
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-[#15191c] p-6 sm:p-8 text-white shadow-2xl space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="form-name" className="block text-xs font-bold tracking-[0.08em] text-[#c1c6ca] mb-2">
            FULL NAME *
          </label>
          <input
            id="form-name"
            required
            name="name"
            placeholder="e.g. John Doe"
            autoComplete="name"
            className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white outline-none focus:border-[#f3a329]"
          />
        </div>
        <div>
          <label htmlFor="form-email" className="block text-xs font-bold tracking-[0.08em] text-[#c1c6ca] mb-2">
            BUSINESS EMAIL *
          </label>
          <input
            id="form-email"
            required
            type="email"
            name="email"
            placeholder="e.g. j.doe@plant.com"
            autoComplete="email"
            className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-[#c1c6ca] outline-none focus:border-[#f3a329]"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="form-company" className="block text-xs font-bold tracking-[0.08em] text-[#c1c6ca] mb-2">
            COMPANY / PLANT NAME *
          </label>
          <input
            id="form-company"
            required
            name="company"
            placeholder="e.g. Pacific Cement Works"
            autoComplete="organization"
            className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white outline-none focus:border-[#f3a329]"
          />
        </div>
        <div>
          <label htmlFor="form-product" className="block text-xs font-bold tracking-[0.08em] text-[#c1c6ca] mb-2">
            PRODUCT / EQUIPMENT LINE
          </label>
          <select
            id="form-product"
            name="product"
            className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white outline-none focus:border-[#f3a329]"
          >
            <option value="">-- Select Product --</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="custom">Custom Power Drive Package</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="form-requirements" className="block text-xs font-bold tracking-[0.08em] text-[#c1c6ca] mb-2">
          PROJECT SPECIFICATIONS &amp; DUTY CYCLE *
        </label>
        <textarea
          id="form-requirements"
          required
          name="requirements"
          rows={4}
          placeholder="Please describe required ratio, motor kW, shaft size, ambient conditions, or timeline..."
          className="w-full rounded border border-white/15 bg-[#0b0d0e] p-4 text-sm text-white outline-none focus:border-[#f3a329]"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <span className="flex items-center gap-2 text-xs text-gray-400">
          <ShieldCheck className="size-4 text-[#f3a329]" /> Guaranteed 24-Hour Engineering Turnaround
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 bg-[#f3a329] px-7 py-3.5 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-colors hover:bg-[#ffc368] disabled:opacity-50 rounded-sm"
        >
          {isSubmitting ? "SENDING..." : "TRANSMIT INQUIRY"}
          <Send className="size-3.5" />
        </button>
      </div>
    </form>
  );
}

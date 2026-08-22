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
      <div className="tech-card p-8 text-center sm:p-12 shadow-2xl border-[#f3a329]/40">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#f3a329]/10 text-[#f3a329]">
          <CheckCircle2 className="size-10" />
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
          Inquiry &amp; RFQ Transmitted
        </h3>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3] max-w-md mx-auto">
          Thank you for reaching out to Pixelara Industrial Applications. An estimation engineer has been assigned to your specification and will email a formal response within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-md cursor-pointer"
        >
          SUBMIT ANOTHER INQUIRY
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="tech-card p-6 sm:p-8 text-white shadow-2xl space-y-4"
    >
      <div className="status-pill mb-2">
        <span className="indicator-pulse" />
        <span>DIRECT FACTORY RFQ PORTAL</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="form-name" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1.5">
            FULL NAME *
          </label>
          <input
            id="form-name"
            required
            name="name"
            placeholder="e.g. John Doe"
            autoComplete="name"
            className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-[#f3a329]"
          />
        </div>
        <div>
          <label htmlFor="form-email" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1.5">
            BUSINESS EMAIL *
          </label>
          <input
            id="form-email"
            required
            type="email"
            name="email"
            placeholder="e.g. j.doe@plant.com"
            autoComplete="email"
            className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-[#f3a329]"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="form-company" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1.5">
            COMPANY / PLANT NAME *
          </label>
          <input
            id="form-company"
            required
            name="company"
            placeholder="e.g. Pacific Cement Works"
            autoComplete="organization"
            className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-[#f3a329]"
          />
        </div>
        <div>
          <label htmlFor="form-product" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1.5">
            PRODUCT / EQUIPMENT LINE
          </label>
          <select
            id="form-product"
            name="product"
            className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-[#f3a329]"
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
        <label htmlFor="form-requirements" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1.5">
          PROJECT SPECIFICATIONS &amp; DUTY CYCLE *
        </label>
        <textarea
          id="form-requirements"
          required
          name="requirements"
          rows={4}
          placeholder="Please describe required ratio, motor kW, shaft size, ambient conditions, or timeline..."
          className="w-full rounded-md border border-white/15 bg-[#0b0d0e] p-3.5 text-xs sm:text-sm text-white outline-none focus:border-[#f3a329]"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <span className="flex items-center gap-2 text-[11px] text-gray-400">
          <ShieldCheck className="size-3.5 text-[#f3a329]" /> Guaranteed 24-Hour Engineering Turnaround
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 bg-[#f3a329] px-7 py-3 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-all hover:bg-[#ffc368] disabled:opacity-50 rounded-md cursor-pointer active:scale-95 shadow-md shadow-[#f3a329]/20"
        >
          {isSubmitting ? "SENDING..." : "TRANSMIT INQUIRY"}
          <Send className="size-3.5" />
        </button>
      </div>
    </form>
  );
}


"use client";

import React, { useState } from "react";

import { CheckCircle2, Send, ShieldAlert, X } from "lucide-react";

import { products } from "@/lib/industrial-data";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
};

export function QuoteModal({ isOpen, onClose, preselectedProduct }: QuoteModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(preselectedProduct || "");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    quantity: "1",
    specs: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="tech-card relative w-full max-w-2xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 grid size-9 place-items-center rounded-lg border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="size-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#f3a329]/10 text-[#f3a329]">
              <CheckCircle2 className="size-10" />
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight">RFQ Submitted Successfully</h3>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3] max-w-md mx-auto">
              Thank you for contacting Pixelara Industrial Solutions. Our engineering estimation team will review your application specifications and send a formal technical quote within 24 business hours.
            </p>
            <div className="mt-7">
              <button
                onClick={handleReset}
                className="bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-md cursor-pointer"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="status-pill mb-3">
              <span className="indicator-pulse" />
              <span>REQUEST FOR QUOTATION (RFQ)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Get an Immediate Technical Quote
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#a7adb3]">
              Specify your power transmission or conveyor application parameters to receive factory-direct pricing.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-product" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1">
                    PRODUCT LINE *
                  </label>
                  <select
                    id="modal-product"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#f3a329] focus:outline-none"
                    required
                  >
                    <option value="">-- Select Product --</option>
                    {products.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                    <option value="custom-solution">Custom Engineering / Heavy Drive Package</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="modal-quantity" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1">
                    QUANTITY REQUIRED *
                  </label>
                  <input
                    id="modal-quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#f3a329] focus:outline-none font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1">
                    FULL NAME *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    placeholder="e.g. Robert Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#f3a329] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1">
                    BUSINESS EMAIL *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="e.g. r.vance@miningcorp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#f3a329] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1">
                    COMPANY / FACILITY
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    placeholder="e.g. Apex Minerals Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#f3a329] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1">
                    PHONE / MOBILE
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#f3a329] focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-specs" className="block text-xs font-mono font-semibold text-[#c1c6ca] mb-1">
                  APPLICATION SPECS / RATIOS / TORQUE NOTES
                </label>
                <textarea
                  id="modal-specs"
                  rows={3}
                  placeholder="Include details such as motor kW, gear ratio required, ambient environment, duty cycle..."
                  value={formData.specs}
                  onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                  className="w-full rounded-md border border-white/15 bg-[#0b0d0e] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#f3a329] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <ShieldAlert className="size-3.5 text-[#f3a329]" />
                  <span>Strict technical confidentiality maintained</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] hover:bg-[#ffc368] transition-colors disabled:opacity-50 cursor-pointer active:scale-95 shadow-md shadow-[#f3a329]/20"
                >
                  {isSubmitting ? "TRANSMITTING..." : "SUBMIT RFQ"}
                  <Send className="size-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";

import { ArrowRight, ShieldCheck } from "lucide-react";

import { QuoteModal } from "@/components/industrial/quote-modal";

export function ProductDetailClient({
  productSlug,
  productName,
}: {
  productSlug: string;
  productName: string;
}) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="inline-flex items-center gap-3 bg-[#f3a329] px-7 py-4 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
        >
          REQUEST QUOTE FOR {productName.toUpperCase()} <ArrowRight className="size-4" />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-[#a7adb3]">
        <ShieldCheck className="size-4 text-[#f3a329]" />
        <span>Factory Direct Delivery &amp; Full Manufacturer Warranty</span>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={productSlug}
      />
    </>
  );
}

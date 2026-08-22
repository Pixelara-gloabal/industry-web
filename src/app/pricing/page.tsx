import Link from "next/link";

import { Check } from "lucide-react";

import { PageIntro } from "@/components/industrial/page-intro";

export const metadata = {
  title: "Commercial Pricing Models | Pixelara Industrial",
  description:
    "Factory-direct pricing models for standard SMSR gearboxes, custom heavy drive packages, and OEM bulk supply contracts.",
};

const pricingTiers = [
  {
    name: "Standard Component Supply",
    tagline: "Single or small-batch replacement units",
    description: "Ideal for plant maintenance teams replacing existing failed gearboxes or pulleys with direct drop-in units.",
    features: [
      "Standard SMSR Ratios (5:1, 13:1, 20:1, 25:1)",
      "Standard Taper Bush & Hub sizes included",
      "Factory-tested with EN 10204 3.1 certs",
      "Standard 2-Year Manufacturer Warranty",
      "Express 24-48 Hour Dispatch",
    ],
    cta: "REQUEST CATALOG PRICING",
    highlight: false,
  },
  {
    name: "Custom Drive Packages",
    tagline: "Turnkey engineered drive systems",
    description: "Complete engineered drive packages including bevel-helical gearboxes, high-gauss magnetic pulleys, backstops, and custom motor mounts.",
    features: [
      "Custom gear ratio machining & motor adapter plates",
      "ATEX Zone 22 Dust Ignition Proof certification",
      "High-temp Viton seals & synthetic lube pre-fill",
      "3D STEP CAD assembly files for plant engineering",
      "Dedicated Application Engineer assigned",
    ],
    cta: "REQUEST CUSTOM DRIVE QUOTE",
    highlight: true,
  },
  {
    name: "OEM & Fleet Supply Contract",
    tagline: "Volume supply agreements for equipment manufacturers",
    description: "Tailored for conveyor OEMs, mining system builders, and port equipment manufacturers requiring scheduled volume deliveries.",
    features: [
      "Tiered volume discount pricing structures",
      "Consignment inventory & safety stock warehousing",
      "Private-label branding & custom painted housings",
      "Extended 3-Year Operational Warranty",
      "Dedicated Account Manager & Priority Production",
    ],
    cta: "APPLY FOR OEM PARTNERSHIP",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="COMMERCIAL PRICING MODELS"
        title="Factory-Direct Pricing &amp; Flexible OEM Procurement"
        description="Pixelara provides transparent, factory-direct pricing for standard replacement units, custom-engineered drive packages, and annual volume supply contracts."
        action={{ label: "GET AN IMMEDIATE QUOTE", href: "/contact#quote" }}
      />

      <main className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`tech-card flex flex-col justify-between p-6 sm:p-8 relative ${
                tier.highlight ? "border-[#f3a329]/60 shadow-2xl shadow-[#f3a329]/10" : ""
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f3a329] px-3.5 py-1 text-[10px] font-extrabold tracking-widest text-[#0b0d0e] rounded-full uppercase shadow-md font-mono">
                  MOST POPULAR FOR PLANTS
                </span>
              )}

              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{tier.name}</h2>
                <p className="mt-1 text-xs font-semibold text-[#f3a329] font-mono">{tier.tagline}</p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">{tier.description}</p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-[11px] font-mono font-bold tracking-widest text-white uppercase mb-3">
                    WHAT IS INCLUDED
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#c1c6ca]">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="size-4 shrink-0 text-[#f3a329] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <Link
                  href="/contact#quote"
                  className={`block w-full py-3 text-center text-xs font-bold tracking-widest transition-all rounded-md active:scale-98 cursor-pointer ${
                    tier.highlight
                      ? "bg-[#f3a329] text-[#0b0d0e] hover:bg-[#ffc368] shadow-lg shadow-[#f3a329]/20"
                      : "border border-white/20 text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


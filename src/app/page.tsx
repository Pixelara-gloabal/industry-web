"use client";

import { useState } from "react";

import Link from "next/link";

import {
  ArrowRight,
  Award,
  Calculator,
  Check,
  ChevronRight,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { IndustrialDiagram } from "@/components/industrial/industrial-diagrams";
import { QuoteModal } from "@/components/industrial/quote-modal";
import { industriesData, productCategories } from "@/lib/industrial-data";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");

  // Interactive Torque & Ratio Calculator State
  const [powerKw, setPowerKw] = useState<number>(15);
  const [inputRpm, setInputRpm] = useState<number>(1440);
  const [ratio, setRatio] = useState<number>(20);

  const outputRpm = (inputRpm / ratio).toFixed(1);
  // Formula: Torque (Nm) = (Power (kW) * 9550) / Output RPM
  const calculatedTorque = Math.round((powerKw * 9550) / Number(outputRpm));

  const handleOpenQuote = (productSlug: string = "") => {
    setQuoteProduct(productSlug);
    setIsQuoteOpen(true);
  };

  return (
    <div className="overflow-hidden bg-[#0b0d0e] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#0b0d0e] text-white lg:min-h-[820px] border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(243,163,41,0.18),transparent_40%),linear-gradient(180deg,rgba(11,13,14,0.3)_0%,#0b0d0e_100%)] pointer-events-none" />

        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-12 px-5 pt-24 pb-16 sm:px-8 lg:min-h-[820px] lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#f3a329]/30 bg-[#f3a329]/10 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-[#f3a329]">
              <ShieldCheck className="size-4" /> ISO 9001:2015 REGISTERED MANUFACTURER
            </div>

            <h1 className="max-w-3xl text-5xl leading-[0.94] font-extrabold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              HEAVY TORQUE <span className="text-[#f3a329]">POWER TRANSMISSION</span> &amp; CONVEYOR DRIVES.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#a7adb3] sm:text-lg">
              Pixelara Industrial manufactures high-torque SMSR gearboxes, shaft-mounted speed reducers, taper-lock pulleys, and magnetic separators engineered for 24/7 continuous operation in harsh mining, cement, and steel processing plants.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleOpenQuote()}
                className="inline-flex items-center gap-3 bg-[#f3a329] px-7 py-4 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-colors hover:bg-[#ffc368] rounded-sm"
              >
                REQUEST FACTORY QUOTE <ArrowRight className="size-4" />
              </button>

              <Link
                href="/products"
                className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-xs font-bold tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/10 rounded-sm"
              >
                BROWSE CATALOG <Layers className="size-4 text-[#f3a329]" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-[#f3a329]">99.8%</p>
                <p className="mt-1 text-xs text-[#a7adb3]">Operational Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">15,000+</p>
                <p className="mt-1 text-xs text-[#a7adb3]">Units Deployed</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">40+</p>
                <p className="mt-1 text-xs text-[#a7adb3]">Export Countries</p>
              </div>
            </div>
          </div>

          {/* Right SVG Blueprint Illustration */}
          <div className="relative hidden h-[580px] lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/15 bg-[#15191c] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="text-xs font-bold tracking-widest text-[#f3a329]">
                  ENGINEERING SCHEMATIC
                </span>
                <span className="text-[10px] text-gray-400 font-mono">MODEL: PI-SMSR-20-C</span>
              </div>
              <IndustrialDiagram type="smsr" className="w-full" />
              <div className="mt-4 flex items-center justify-between text-xs text-[#a7adb3]">
                <span>Torque: Up to 18,500 Nm</span>
                <span>Efficiency: 98%</span>
                <span className="text-[#f3a329]">Cast Iron GG25</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CERTIFICATIONS BANNER */}
      <section className="border-b border-white/10 bg-[#15191c] py-8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Award className="size-6 text-[#f3a329]" />
              <div>
                <p className="text-xs font-bold tracking-wider text-white uppercase">Certified Quality Standards</p>
                <p className="text-xs text-[#a7adb3]">ISO 9001:2015 Quality Management | CE Compliant | ATEX Zone 22 Dust Ignition Proof</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-xs font-bold tracking-widest text-[#a7adb3]">
              <span className="flex items-center gap-1.5"><Check className="size-4 text-[#f3a329]" /> 100% CMM TESTED</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-[#f3a329]" /> HARDENED GEARING</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-[#f3a329]" /> 2-YEAR WARRANTY</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" id="products">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow !text-[#f3a329]">PRODUCT CATEGORIES</p>
            <h2 className="section-title mt-3 text-white">Engineered Systems for Heavy Industrial Drives</h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.11em] text-[#f3a329] hover:text-[#ffc368]"
          >
            VIEW FULL CATALOG <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col justify-between rounded-lg border border-white/10 bg-[#15191c] p-7 transition-all duration-200 hover:border-[#f3a329]/50 hover:bg-[#1b2024]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#f3a329] font-bold">
                    [{category.count} MODELS]
                  </span>
                  <Zap className="size-5 text-gray-600 group-hover:text-[#f3a329] transition-colors" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-[#f3a329] transition-colors">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#a7adb3]">{category.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/products#${category.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-white group-hover:text-[#f3a329]"
                >
                  EXPLORE <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCT HIGHLIGHT */}
      <section className="border-y border-white/10 bg-[#15191c] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 items-center">
          <div className="rounded-xl border border-white/15 bg-[#0b0d0e] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <span className="text-xs font-bold tracking-widest text-[#f3a329]">
                FLAGSHIP PRODUCT: SMSR GEARBOX
              </span>
              <span className="text-xs text-gray-400">DIRECT DRIVE SHAFT MOUNT</span>
            </div>
            <IndustrialDiagram type="smsr" className="w-full" />
          </div>

          <div>
            <p className="eyebrow !text-[#f3a329]">FLAGSHIP DRIVE UNIT</p>
            <h2 className="mt-4 text-4xl leading-[0.98] font-bold tracking-[-0.05em] sm:text-5xl">
              SMSR Speed Reducer
            </h2>
            <p className="mt-6 text-base leading-7 text-[#a7adb3]">
              The Pixelara Shaft-Mounted Speed Reducer mounts directly onto the driven shaft, eliminating foundations, alignment couplings, and structural baseplate expenses.
            </p>

            <ul className="mt-8 space-y-4 border-y border-white/10 py-6 text-sm text-[#c1c6ca]">
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-[#f3a329]" />
                Case-hardened and ground helical gearing delivers up to 98% efficiency
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-[#f3a329]" />
                Taper bush hub system for fast shaft mounting and easy removal
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-[#f3a329]" />
                Optional integrated mechanical anti-runback backstop for inclined conveyors
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => handleOpenQuote("smsr-gearbox")}
                className="inline-flex items-center gap-2 bg-[#f3a329] px-6 py-3.5 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
              >
                GET SMSR PRICE QUOTE <ArrowRight className="size-4" />
              </button>
              <Link
                href="/products/smsr-gearbox"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-xs font-bold tracking-[0.1em] text-white hover:border-white transition-colors rounded-sm"
              >
                FULL TECHNICAL SPECS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GEAR RATIO & TORQUE CALCULATOR */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="rounded-xl border border-[#f3a329]/30 bg-[#15191c] p-8 sm:p-12 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f3a329] uppercase">
                <Calculator className="size-4" /> TECHNICAL SELECTION TOOL
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Quick Gearbox Torque Calculator
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#a7adb3]">
                Select your required electric motor rating and gear ratio to estimate output shaft torque and verify suitability for your conveyor drive.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-xs text-[#c1c6ca] mb-2 font-medium">
                    <span>Motor Power (kW): {powerKw} kW</span>
                    <span>{Math.round(powerKw * 1.341)} HP</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="160"
                    value={powerKw}
                    onChange={(e) => setPowerKw(Number(e.target.value))}
                    className="w-full accent-[#f3a329]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#c1c6ca] mb-2 font-medium">
                    <span>Motor Input Speed: {inputRpm} RPM</span>
                  </div>
                  <select
                    value={inputRpm}
                    onChange={(e) => setInputRpm(Number(e.target.value))}
                    className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-2.5 text-sm text-white focus:border-[#f3a329] focus:outline-none"
                  >
                    <option value={960}>960 RPM (6-Pole Motor)</option>
                    <option value={1440}>1440 RPM (4-Pole Motor Standard)</option>
                    <option value={2880}>2880 RPM (2-Pole Motor)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#c1c6ca] mb-2 font-medium">
                    <span>Gear Ratio: {ratio}:1</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 13, 20, 25].map((r) => (
                      <button
                        key={r}
                        onClick={() => setRatio(r)}
                        className={`py-2 text-xs font-bold rounded border transition-colors ${
                          ratio === r
                            ? "bg-[#f3a329] text-[#0b0d0e] border-[#f3a329]"
                            : "border-white/15 bg-[#0b0d0e] text-white hover:border-white/40"
                        }`}
                      >
                        {r}:1
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0b0d0e] p-8">
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">ESTIMATED OUTPUT SPECIFICATIONS</p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-xs text-[#a7adb3]">Output Shaft Speed</span>
                    <p className="mt-1 text-3xl font-extrabold text-[#f3a329]">{outputRpm} <span className="text-sm font-normal text-white">RPM</span></p>
                  </div>
                  <div>
                    <span className="text-xs text-[#a7adb3]">Estimated Output Torque</span>
                    <p className="mt-1 text-3xl font-extrabold text-white">{calculatedTorque.toLocaleString()} <span className="text-sm font-normal text-[#f3a329]">Nm</span></p>
                  </div>
                </div>

                <div className="mt-8 rounded bg-[#15191c] p-4 text-xs leading-5 text-[#a7adb3] border-l-2 border-[#f3a329]">
                  <strong>Recommended Model:</strong> Based on {calculatedTorque} Nm torque, we recommend the <strong>Pixelara SMSR Model E or F</strong> with heavy-duty taper bushings.
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => handleOpenQuote()}
                  className="w-full bg-[#f3a329] py-3.5 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
                >
                  SUBMIT SPECS FOR VERIFIED SELECTION QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SELECTION */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" id="industries">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow !text-[#f3a329]">TARGET INDUSTRIES</p>
            <h2 className="section-title mt-4 text-white">Built for Demanding Harsh Environments</h2>
            <p className="mt-6 text-sm leading-7 text-[#a7adb3]">
              Whether operating under high ambient kiln heat in cement works or heavy impact shock loads in open-pit iron ore mines, Pixelara drive units deliver verified endurance.
            </p>
            <Link
              href="/industries"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.11em] text-[#f3a329] hover:text-[#ffc368]"
            >
              EXPLORE ALL SECTORS <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
            {industriesData.map((ind, index) => (
              <Link
                href={`/industries#${ind.id}`}
                key={ind.id}
                className="group flex min-h-36 flex-col justify-between border-r border-b border-white/10 bg-[#15191c] p-6 transition-colors hover:bg-[#f3a329] hover:text-[#0b0d0e]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 group-hover:text-[#0b0d0e]">0{index + 1}</span>
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:text-[#0b0d0e]" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-[#0b0d0e]">
                    {ind.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#a7adb3] group-hover:text-[#1b2024] line-clamp-1">
                    {ind.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#f3a329] py-20 text-[#0b0d0e] lg:py-24" id="quote">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0b0d0e]/80">
              FACTORY DIRECT PRICING &amp; SELECTION
            </p>
            <h2 className="mt-3 text-4xl leading-[0.94] font-extrabold tracking-[-0.055em] sm:text-6xl">
              Ready to upgrade your drive reliability?
            </h2>
            <p className="mt-4 text-base font-medium text-[#0b0d0e]/90">
              Our engineering team responds to all technical inquiries and RFQ submissions within 24 hours.
            </p>
          </div>
          <button
            onClick={() => handleOpenQuote()}
            className="inline-flex w-fit items-center gap-3 bg-[#0b0d0e] px-8 py-5 text-xs font-bold tracking-[0.1em] text-white transition-colors hover:bg-[#15191c] rounded-sm shrink-0"
          >
            START TECHNICAL INQUIRY <ArrowRight className="size-4 text-[#f3a329]" />
          </button>
        </div>
      </section>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={quoteProduct}
      />
    </div>
  );
}

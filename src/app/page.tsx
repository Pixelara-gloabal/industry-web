"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  Calculator,
  Check,
  ChevronRight,
  Gauge,
  Layers,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { IndustrialDiagram } from "@/components/industrial/industrial-diagrams";
import { QuoteModal } from "@/components/industrial/quote-modal";
import { industriesData, productCategories } from "@/lib/industrial-data";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");
  const [heroViewMode, setHeroViewMode] = useState<"photo" | "blueprint">("photo");

  // Interactive Torque & Ratio Calculator State
  const [powerKw, setPowerKw] = useState<number>(15);
  const [inputRpm, setInputRpm] = useState<number>(1440);
  const [ratio, setRatio] = useState<number>(20);

  const outputRpm = (inputRpm / ratio).toFixed(1);
  // Formula: Torque (Nm) = (Power (kW) * 9550) / Output RPM
  const calculatedTorque = Math.round((powerKw * 9550) / Number(outputRpm));

  // Determine recommended size based on calculated torque
  const getRecommendedModel = (torque: number) => {
    if (torque <= 800) return { model: "SMSR Size B", bore: "35 mm", bush: "1610" };
    if (torque <= 1500) return { model: "SMSR Size C", bore: "42 mm", bush: "2012" };
    if (torque <= 2800) return { model: "SMSR Size D", bore: "50 mm", bush: "2517" };
    if (torque <= 5200) return { model: "SMSR Size E", bore: "60 mm", bush: "3020" };
    if (torque <= 9500) return { model: "SMSR Size F", bore: "75 mm", bush: "3525" };
    if (torque <= 14000) return { model: "SMSR Size G", bore: "85 mm", bush: "4030" };
    return { model: "SMSR Size H / J Heavy Duty", bore: "100-125 mm", bush: "4535 / 5050" };
  };

  const recommendedGearbox = getRecommendedModel(calculatedTorque);

  const handleOpenQuote = (productSlug: string = "") => {
    setQuoteProduct(productSlug);
    setIsQuoteOpen(true);
  };

  return (
    <div className="overflow-hidden bg-[#0b0d0e] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[750px] overflow-hidden bg-[#0b0d0e] text-white lg:min-h-[850px] border-b border-white/10">
        {/* Real Industrial Facility Background with ambient gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industrial/hero-plant.jpg"
            alt="Pixelara Industrial Heavy Gearbox & Transmission Manufacturing Plant"
            fill
            priority
            className="object-cover object-center opacity-25 brightness-75 filter scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d0e] via-[#0b0d0e]/85 to-[#0b0d0e]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(243,163,41,0.15),transparent_60%)]" />
          <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[750px] max-w-[1440px] items-center gap-12 px-5 pt-20 pb-16 sm:px-8 lg:min-h-[850px] lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#f3a329]/40 bg-[#f3a329]/10 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-[#f3a329] shadow-lg shadow-[#f3a329]/5 backdrop-blur-md">
              <ShieldCheck className="size-4" /> ISO 9001:2015 REGISTERED HEAVY MANUFACTURER
            </div>

            <h1 className="max-w-3xl text-4xl leading-[1.0] font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              HEAVY TORQUE <span className="text-[#f3a329]">POWER TRANSMISSION</span> &amp; CONVEYOR DRIVES.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#a7adb3] sm:text-lg">
              Pixelara Industrial manufactures high-torque SMSR gearboxes, shaft-mounted speed reducers, taper-lock pulleys, and magnetic separators engineered for 24/7 continuous duty in mining, cement, and bulk material handling plants worldwide.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleOpenQuote()}
                className="inline-flex items-center gap-3 bg-[#f3a329] px-7 py-4 text-xs font-bold tracking-[0.12em] text-[#0b0d0e] transition-all hover:bg-[#ffc368] hover:shadow-lg hover:shadow-[#f3a329]/25 rounded-sm active:scale-95"
              >
                REQUEST FACTORY QUOTE <ArrowRight className="size-4" />
              </button>

              <Link
                href="/products"
                className="inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-4 text-xs font-bold tracking-[0.12em] text-white transition-all hover:border-[#f3a329] hover:bg-white/10 rounded-sm"
              >
                BROWSE 2026 CATALOG <Layers className="size-4 text-[#f3a329]" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
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

          {/* Right Interactive Showcase Box with Real Photo / CAD Blueprint Toggle */}
          <div className="relative hidden h-[580px] lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/15 bg-[#15191c]/95 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#f3a329] animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-[#f3a329]">
                    FLAGSHIP GEAR REDUCER
                  </span>
                </div>
                <div className="flex rounded border border-white/15 bg-[#0b0d0e] p-0.5 text-[10px] font-bold">
                  <button
                    onClick={() => setHeroViewMode("photo")}
                    className={`px-3 py-1 rounded transition-colors ${
                      heroViewMode === "photo"
                        ? "bg-[#f3a329] text-[#0b0d0e]"
                        : "text-[#a7adb3] hover:text-white"
                    }`}
                  >
                    REAL PHOTO
                  </button>
                  <button
                    onClick={() => setHeroViewMode("blueprint")}
                    className={`px-3 py-1 rounded transition-colors ${
                      heroViewMode === "blueprint"
                        ? "bg-[#f3a329] text-[#0b0d0e]"
                        : "text-[#a7adb3] hover:text-white"
                    }`}
                  >
                    CAD SCHEMATIC
                  </button>
                </div>
              </div>

              <div className="relative h-[320px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#0b0d0e]">
                {heroViewMode === "photo" ? (
                  <div className="relative h-full w-full group">
                    <Image
                      src="/images/industrial/smsr-gearbox.jpg"
                      alt="Pixelara SMSR Heavy Duty Shaft Mounted Speed Reducer Gearbox"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 bg-[#0b0d0e]/80 backdrop-blur px-3 py-1.5 rounded text-[11px] font-mono text-[#f3a329] border border-white/10">
                      GG25 Cast Iron Housing • Taper Bush Hub
                    </div>
                  </div>
                ) : (
                  <div className="p-4 h-full flex items-center justify-center">
                    <IndustrialDiagram type="smsr" className="w-full" />
                  </div>
                )}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center border-t border-white/10 pt-4 text-xs">
                <div className="rounded bg-[#0b0d0e] p-2 border border-white/5">
                  <span className="text-[10px] text-[#a7adb3] block">TORQUE DENSITY</span>
                  <strong className="text-[#f3a329]">Up to 18,500 Nm</strong>
                </div>
                <div className="rounded bg-[#0b0d0e] p-2 border border-white/5">
                  <span className="text-[10px] text-[#a7adb3] block">MECHANICAL EFFICIENCY</span>
                  <strong className="text-white">98% Helical</strong>
                </div>
                <div className="rounded bg-[#0b0d0e] p-2 border border-white/5">
                  <span className="text-[10px] text-[#a7adb3] block">MOUNTING</span>
                  <strong className="text-[#f3a329]">Direct Shaft</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CERTIFICATIONS BANNER */}
      <section className="border-b border-white/10 bg-[#15191c] py-6">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Award className="size-6 text-[#f3a329]" />
              <div>
                <p className="text-xs font-bold tracking-wider text-white uppercase">International Quality Standards</p>
                <p className="text-xs text-[#a7adb3]">ISO 9001:2015 Registered | CE Machinery Directive | ATEX Zone 22 Dust Ignition Proof</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-xs font-bold tracking-widest text-[#a7adb3]">
              <span className="flex items-center gap-1.5"><Check className="size-4 text-[#f3a329]" /> 100% CMM TESTED</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-[#f3a329]" /> VACUUM CARBURIZED</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-[#f3a329]" /> 2-YEAR WARRANTY</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES WITH PHOTOGRAPHY */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" id="products">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow !text-[#f3a329]">PRODUCT PORTFOLIO</p>
            <h2 className="section-title mt-3 text-white">Engineered Systems for Heavy Industrial Drives</h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.11em] text-[#f3a329] hover:text-[#ffc368]"
          >
            VIEW FULL 12-MODEL CATALOG <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#15191c] transition-all duration-300 hover:border-[#f3a329]/50 hover:shadow-2xl hover:shadow-[#f3a329]/10"
            >
              {/* Category Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-[#0b0d0e]">
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-[#15191c]/40 to-transparent" />
                <span className="absolute top-3 right-3 rounded bg-[#0b0d0e]/80 px-2.5 py-1 text-[10px] font-mono font-bold text-[#f3a329] border border-white/10 backdrop-blur">
                  {category.count} MODELS
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#f3a329] transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#a7adb3]">{category.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/products#${category.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-white group-hover:text-[#f3a329]"
                  >
                    EXPLORE CATEGORY <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLAGSHIP SHOWCASE: SMSR SPEED REDUCER */}
      <section className="border-y border-white/10 bg-[#15191c] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0b0d0e] p-2 shadow-2xl">
            <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/industrial/smsr-gearbox.jpg"
                alt="Pixelara Shaft-Mounted Speed Reducer SMSR Direct Drive"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-[#15191c]/90 backdrop-blur-md p-4 rounded-lg border border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#f3a329] uppercase">FLAGSHIP DRIVE ARCHITECTURE</span>
                  <p className="text-sm font-bold text-white">Direct Shaft Mounted Speed Reducer (SMSR)</p>
                </div>
                <Link
                  href="/products/smsr-gearbox"
                  className="rounded bg-[#f3a329] px-3.5 py-2 text-xs font-bold text-[#0b0d0e] hover:bg-[#ffc368] transition-colors"
                >
                  FULL SPECS
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow !text-[#f3a329]">FLAGSHIP DRIVE UNIT</p>
            <h2 className="mt-4 text-4xl leading-[0.98] font-bold tracking-[-0.05em] sm:text-5xl">
              SMSR Speed Reducer
            </h2>
            <p className="mt-6 text-base leading-7 text-[#a7adb3]">
              The Pixelara Shaft-Mounted Speed Reducer mounts directly onto the driven shaft, eliminating foundations, alignment couplings, and structural baseplate expenses while delivering up to 18,500 Nm torque.
            </p>

            <ul className="mt-8 space-y-4 border-y border-white/10 py-6 text-sm text-[#c1c6ca]">
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-[#f3a329]" />
                Case-hardened and ground helical gearing delivers up to 98% efficiency
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-[#f3a329]" />
                Standardized split taper bush hub system for fast shaft mounting and distortion-free removal
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-[#f3a329]" />
                Optional integrated mechanical anti-runback backstop sprag clutch for inclined conveyors
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
                VIEW CAD MODELS &amp; RATINGS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GEAR RATIO & TORQUE CALCULATOR */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="rounded-2xl border border-[#f3a329]/30 bg-[#15191c] p-8 sm:p-12 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f3a329] uppercase">
                <Calculator className="size-4" /> TECHNICAL SELECTION TOOL
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Quick Gearbox Torque Calculator
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#a7adb3]">
                Adjust motor rating and gear ratio to estimate output shaft torque and receive an instant gearbox sizing recommendation for your conveyor drive.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-xs text-[#c1c6ca] mb-2 font-medium">
                    <span>Motor Power (kW): <strong className="text-white">{powerKw} kW</strong></span>
                    <span className="text-[#f3a329] font-mono">({Math.round(powerKw * 1.341)} HP)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="160"
                    value={powerKw}
                    onChange={(e) => setPowerKw(Number(e.target.value))}
                    className="w-full accent-[#f3a329] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#c1c6ca] mb-2 font-medium">
                    <span>Motor Input Speed:</span>
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
            <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0b0d0e] p-8 shadow-xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">ESTIMATED OUTPUT SPECIFICATIONS</p>
                  <Gauge className="size-4 text-[#f3a329]" />
                </div>
                
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

                <div className="mt-8 rounded-lg bg-[#15191c] p-5 text-xs leading-5 text-[#a7adb3] border-l-4 border-[#f3a329]">
                  <p className="font-bold text-white mb-1">Recommended Gearbox Sizing:</p>
                  <p>
                    Based on <strong>{calculatedTorque.toLocaleString()} Nm</strong> torque output and <strong>{powerKw} kW</strong> input, we recommend the <span className="text-[#f3a329] font-bold">{recommendedGearbox.model}</span> (Output Bore: {recommendedGearbox.bore}, Taper Bush: {recommendedGearbox.bush}).
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => handleOpenQuote("smsr-gearbox")}
                  className="w-full bg-[#f3a329] py-4 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm active:scale-95"
                >
                  PREFILL SPECS IN RFQ QUOTE FORM <ArrowRight className="inline-block size-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED MATERIAL HANDLING & MAGNETIC SEPARATION */}
      <section className="border-t border-white/10 bg-[#15191c] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow !text-[#f3a329]">INTEGRATED PLANT SYSTEMS</p>
            <h2 className="section-title mt-3 text-white mx-auto">High-Performance Bulk Conveying &amp; Magnetic Extraction</h2>
            <p className="mt-4 text-sm text-[#a7adb3]">
              From heavy-duty overland transfer pulleys to continuous tramp iron magnetic separators, Pixelara supplies complete mechanical drive packages designed to eliminate downtime.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Conveyor Drive Package */}
            <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#0b0d0e] shadow-2xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/industrial/conveyor-drive.jpg"
                  alt="Overland Bulk Material Conveyor Drive & Pulley Station"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-[#0b0d0e]/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded bg-[#0b0d0e]/80 px-3 py-1 text-xs font-mono font-bold text-[#f3a329] border border-white/10">
                  CONVEYOR POWER TRANSMISSION
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">Overland Conveyor Drive &amp; Pulley Systems</h3>
                <p className="mt-3 text-sm leading-6 text-[#a7adb3]">
                  Precision-machined taper lock drive pulleys, take-up tensioners, and pillow block bearings engineered for high-tension overland conveyors with zero pulley slip.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <Link href="/products#conveyor-components" className="text-xs font-bold text-[#f3a329] hover:underline flex items-center gap-1">
                    VIEW CONVEYOR COMPONENTS <ArrowRight className="size-3.5" />
                  </Link>
                  <button
                    onClick={() => handleOpenQuote("taper-lock-pulley")}
                    className="rounded bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-bold text-white"
                  >
                    QUOTE PULLEYS
                  </button>
                </div>
              </div>
            </div>

            {/* Magnetic Separation Package */}
            <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#0b0d0e] shadow-2xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/industrial/magnetic-separator.jpg"
                  alt="Industrial Overband Cross-Belt Suspension Magnetic Separator"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-[#0b0d0e]/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded bg-[#0b0d0e]/80 px-3 py-1 text-xs font-mono font-bold text-[#f3a329] border border-white/10">
                  TRAMP IRON PROTECTION
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">Cross-Belt Suspension Magnetic Separators</h3>
                <p className="mt-3 text-sm leading-6 text-[#a7adb3]">
                  High-intensity permanent and electromagnetic overband separators that automatically extract ferrous contaminants, protecting downstream crushers, shredders, and gearboxes.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <Link href="/products#magnetic-separation" className="text-xs font-bold text-[#f3a329] hover:underline flex items-center gap-1">
                    VIEW MAGNETIC SEPARATORS <ArrowRight className="size-3.5" />
                  </Link>
                  <button
                    onClick={() => handleOpenQuote("suspension-magnet")}
                    className="rounded bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-bold text-white"
                  >
                    QUOTE SEPARATOR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & METROLOGY SECTION */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f3a329] uppercase">
              <SearchCheck className="size-4" /> ZERO-DEFECT QUALITY ASSURANCE
            </div>
            <h2 className="section-title mt-3 text-white">Carl Zeiss 3D CMM Gear Metrology &amp; NDT Testing</h2>
            <p className="mt-6 text-sm leading-7 text-[#a7adb3]">
              Every gear tooth geometry, involute profile, and shaft tolerance is verified using automated Carl Zeiss coordinate measuring machines (CMM) to ISO 1328 Class 6 precision standards.
            </p>

            <div className="mt-8 space-y-4 text-xs text-[#c1c6ca]">
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#15191c] p-4">
                <Sparkles className="size-4 text-[#f3a329] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">Vacuum Carburizing &amp; Case Hardening</strong>
                  High alloy 20MnCr5 steel gears hardened to 58-62 HRC for maximum core toughness and wear resistance.
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#15191c] p-4">
                <ShieldCheck className="size-4 text-[#f3a329] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">100% Full-Load Dynamometer Spin Testing</strong>
                  Every assembled speed reducer is spin-tested for vibration velocity (mm/s), thermal rise, and backstop clutch lock.
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f3a329] hover:text-[#ffc368]"
              >
                EXPLORE OUR ISO QUALITY PROTOCOLS <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#15191c] p-2 shadow-2xl">
            <div className="relative h-[380px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/industrial/quality-cmm.jpg"
                alt="Carl Zeiss 3D CMM Metrology Quality Inspection of Industrial Gear"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#15191c]/90 backdrop-blur p-3 rounded text-xs text-white border border-white/10 flex justify-between items-center">
                <span>Carl Zeiss PRISMO 3D CMM Metrology Lab</span>
                <span className="text-[#f3a329] font-mono">ISO 1328 Class 6</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET INDUSTRIES SHOWCASE */}
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
              Ready to upgrade your conveyor drivetrain reliability?
            </h2>
            <p className="mt-4 text-base font-medium text-[#0b0d0e]/90">
              Our engineering team responds to all technical inquiries, CAD requests, and RFQ submissions within 24 hours.
            </p>
          </div>
          <button
            onClick={() => handleOpenQuote()}
            className="inline-flex w-fit items-center gap-3 bg-[#0b0d0e] px-8 py-5 text-xs font-bold tracking-[0.1em] text-white transition-colors hover:bg-[#15191c] rounded-sm shrink-0 shadow-2xl active:scale-95"
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

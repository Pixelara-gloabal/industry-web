"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ChevronRight,
  Layers,
} from "lucide-react";

import { Logos } from "@/components/blocks/logos";
import { EngineeringWorkbench } from "@/components/industrial/engineering-workbench";
import { IndustrialDiagram } from "@/components/industrial/industrial-diagrams";
import { QuoteModal } from "@/components/industrial/quote-modal";
import { industriesData, productCategories } from "@/lib/industrial-data";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");
  const [heroViewMode, setHeroViewMode] = useState<"photo" | "blueprint">("photo");

  const handleOpenQuote = (productSlug: string = "") => {
    setQuoteProduct(productSlug);
    setIsQuoteOpen(true);
  };

  return (
    <div className="overflow-hidden bg-[#0b0d0e] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[680px] overflow-hidden bg-[#0b0d0e] text-white border-b border-white/10 flex items-center">
        {/* Real Industrial Facility Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industrial/hero-plant.jpg"
            alt="Pixelara Industrial Heavy Gearbox & Transmission Plant"
            fill
            priority
            className="object-cover object-center opacity-20 brightness-75 filter scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d0e] via-[#0b0d0e]/90 to-[#0b0d0e]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(243,163,41,0.18),transparent_60%)]" />
          <div className="hero-grid absolute inset-0 opacity-25 pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div>
            <div className="mb-4 status-pill">
              <span className="indicator-pulse" />
              <span>ISO 9001:2015 REGISTERED HEAVY MANUFACTURER</span>
            </div>

            <h1 className="max-w-3xl text-2xl leading-[1.08] font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              HEAVY TORQUE <span className="text-[#f3a329] amber-text-glow">POWER TRANSMISSION</span> &amp; CONVEYOR DRIVES.
            </h1>

            <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#a7adb3]">
              Pixelara Industrial manufactures high-torque SMSR gearboxes, shaft-mounted speed reducers, taper-lock pulleys, and magnetic separators engineered for 24/7 continuous duty in bulk material handling plants worldwide.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={() => handleOpenQuote()}
                className="inline-flex items-center justify-center gap-2 bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-all hover:bg-[#ffc368] hover:shadow-lg hover:shadow-[#f3a329]/25 rounded-md active:scale-95 cursor-pointer"
              >
                REQUEST FACTORY QUOTE <ArrowRight className="size-3.5" />
              </button>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 text-xs font-bold tracking-[0.1em] text-white transition-all hover:border-[#f3a329] hover:bg-white/10 rounded-md"
              >
                BROWSE 2026 CATALOG <Layers className="size-3.5 text-[#f3a329]" />
              </Link>
            </div>

            {/* Metrics Bar */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 border-t border-white/10 pt-5">
              <div className="tech-corner rounded-lg border border-white/10 bg-[#15191c]/70 p-3">
                <p className="text-xl sm:text-2xl font-extrabold text-[#f3a329]">99.8%</p>
                <p className="mt-0.5 text-[10px] text-[#a7adb3]">Uptime Rating</p>
              </div>
              <div className="tech-corner rounded-lg border border-white/10 bg-[#15191c]/70 p-3">
                <p className="text-xl sm:text-2xl font-extrabold text-white">15,000+</p>
                <p className="mt-0.5 text-[10px] text-[#a7adb3]">Units Deployed</p>
              </div>
              <div className="tech-corner rounded-lg border border-white/10 bg-[#15191c]/70 p-3">
                <p className="text-xl sm:text-2xl font-extrabold text-white">40+</p>
                <p className="mt-0.5 text-[10px] text-[#a7adb3]">Export Nations</p>
              </div>
            </div>
          </div>

          {/* Right Interactive Showcase Box with Photo / CAD Blueprint Toggle */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="tech-card relative w-full max-w-md p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="indicator-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#f3a329]">
                    FLAGSHIP GEAR REDUCER
                  </span>
                </div>
                <div className="flex rounded-md border border-white/15 bg-[#0b0d0e] p-0.5 text-[10px] font-bold">
                  <button
                    onClick={() => setHeroViewMode("photo")}
                    className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                      heroViewMode === "photo" ? "bg-[#f3a329] text-[#0b0d0e]" : "text-[#a7adb3] hover:text-white"
                    }`}
                  >
                    PHOTO
                  </button>
                  <button
                    onClick={() => setHeroViewMode("blueprint")}
                    className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                      heroViewMode === "blueprint" ? "bg-[#f3a329] text-[#0b0d0e]" : "text-[#a7adb3] hover:text-white"
                    }`}
                  >
                    CAD
                  </button>
                </div>
              </div>

              <div className="relative h-[230px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#0b0d0e]">
                {heroViewMode === "photo" ? (
                  <div className="relative h-full w-full group">
                    <Image
                      src="/images/industrial/smsr-gearbox.jpg"
                      alt="Pixelara SMSR Gearbox"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2.5 left-2.5 bg-[#0b0d0e]/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-[#f3a329] border border-white/10">
                      GG25 Iron Housing • Taper Bush Hub
                    </div>
                  </div>
                ) : (
                  <div className="p-3 h-full flex items-center justify-center">
                    <IndustrialDiagram type="smsr" className="w-full" />
                  </div>
                )}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-center border-t border-white/10 pt-3 text-xs font-mono">
                <div className="rounded bg-[#0b0d0e] p-1.5 border border-white/5">
                  <span className="text-[8px] text-[#a7adb3] block">TORQUE</span>
                  <strong className="text-[#f3a329] text-[10px]">18,500 Nm</strong>
                </div>
                <div className="rounded bg-[#0b0d0e] p-1.5 border border-white/5">
                  <span className="text-[8px] text-[#a7adb3] block">EFFICIENCY</span>
                  <strong className="text-white text-[10px]">98% Helical</strong>
                </div>
                <div className="rounded bg-[#0b0d0e] p-1.5 border border-white/5">
                  <span className="text-[8px] text-[#a7adb3] block">MOUNTING</span>
                  <strong className="text-[#f3a329] text-[10px]">Direct Shaft</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL STANDARDS MARQUEE */}
      <Logos />

      {/* PRODUCT CATEGORIES MATRIX */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:py-14 sm:px-8 lg:px-12" id="products">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">PRODUCT PORTFOLIO</p>
            <h2 className="section-title mt-2 text-white">Engineered Systems for Heavy Industrial Drives</h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.1em] text-[#f3a329] hover:text-[#ffc368] transition-colors"
          >
            VIEW FULL 12-MODEL CATALOG <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="tech-card group flex flex-col justify-between overflow-hidden"
            >
              <div className="relative h-40 w-full overflow-hidden bg-[#0b0d0e]">
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-[#15191c]/30 to-transparent" />
                <span className="absolute top-2.5 right-2.5 rounded bg-[#0b0d0e]/85 px-2 py-0.5 text-[9px] font-mono font-bold text-[#f3a329] border border-white/10">
                  {category.count} MODELS
                </span>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold tracking-tight text-white group-hover:text-[#f3a329] transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-[#a7adb3] line-clamp-2">{category.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/products#${category.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#f3a329]"
                  >
                    EXPLORE <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIFIED INTERACTIVE ENGINEERING WORKBENCH */}
      <EngineeringWorkbench />

      {/* TARGET INDUSTRIES SHOWCASE */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:py-14 sm:px-8 lg:px-12" id="industries">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div>
            <p className="eyebrow">TARGET INDUSTRIES</p>
            <h2 className="section-title mt-2 text-white">Built for Demanding Harsh Environments</h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">
              Whether operating under high ambient kiln heat in cement works or heavy impact shock loads in open-pit iron ore mines, Pixelara drive units deliver verified endurance.
            </p>
            <Link
              href="/industries"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.11em] text-[#f3a329] hover:text-[#ffc368] transition-colors"
            >
              EXPLORE ALL SECTORS <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 rounded-xl overflow-hidden shadow-2xl">
            {industriesData.slice(0, 4).map((ind, index) => (
              <Link
                href={`/industries#${ind.id}`}
                key={ind.id}
                className="group flex min-h-24 flex-col justify-between border-r border-b border-white/10 bg-[#15191c] p-4 transition-all hover:bg-[#f3a329] hover:text-[#0b0d0e]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-500 group-hover:text-[#0b0d0e]">0{index + 1}</span>
                  <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:text-[#0b0d0e]" />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm sm:text-base font-bold tracking-tight group-hover:text-[#0b0d0e]">
                    {ind.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-[#a7adb3] group-hover:text-[#1b2024] line-clamp-1">
                    {ind.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT CALL TO ACTION */}
      <section className="bg-[#f3a329] py-10 sm:py-12 text-[#0b0d0e]" id="quote">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0b0d0e]/80 font-mono">
              FACTORY DIRECT PRICING &amp; SELECTION
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight">
              Ready to upgrade your conveyor drivetrain reliability?
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#0b0d0e]/90">
              Our engineering team responds to all technical inquiries, CAD requests, and RFQ submissions within 24 hours.
            </p>
          </div>
          <button
            onClick={() => handleOpenQuote()}
            className="inline-flex w-fit items-center gap-2 bg-[#0b0d0e] px-6 py-3 text-xs font-bold tracking-[0.1em] text-white transition-all hover:bg-[#1b2024] rounded-md shrink-0 active:scale-95 cursor-pointer"
          >
            START TECHNICAL INQUIRY <ArrowRight className="size-3.5 text-[#f3a329]" />
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


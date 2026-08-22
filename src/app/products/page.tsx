"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Cpu,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { IndustrialDiagram } from "@/components/industrial/industrial-diagrams";
import { QuoteModal } from "@/components/industrial/quote-modal";
import { productCategories, products } from "@/lib/industrial-data";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductSlug, setSelectedProductSlug] = useState("");
  const [viewMode, setViewMode] = useState<"photo" | "blueprint">("photo");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuoteClick = (slug: string) => {
    setSelectedProductSlug(slug);
    setIsQuoteOpen(true);
  };

  const isFiltered = searchQuery.trim() !== "" || selectedCategory !== "all";

  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d0e] pt-12 pb-8 sm:pt-16 sm:pb-10">
        <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="status-pill mb-3">
            <span className="indicator-pulse" />
            <span>PIXELARA PRODUCT CATALOG 2026</span>
          </div>
          <h1 className="text-2xl leading-[1.05] font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl max-w-4xl text-white">
            Heavy Power Transmission &amp; Conveyor Equipment
          </h1>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#a7adb3]">
            Browse our full range of ISO 9001:2015 certified shaft-mounted speed reducers, conveyor drive pulleys, bearing plummer blocks, and magnetic separation units.
          </p>

          {/* 2-TIER HIGH-TECH CATALOG CONTROL CONSOLE */}
          <div className="mt-8 rounded-xl border border-white/10 bg-[#121619] p-3 sm:p-4 shadow-xl">
            {/* TIER 1: SEARCH BAR & VIEW MODE SWITCH */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#f3a329]" />
                <input
                  type="text"
                  placeholder="Search 12 models by name, torque, ratio, bore size..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#0b0d0e] pl-10 pr-9 py-2.5 text-xs sm:text-sm text-white placeholder:text-[#8a9197] focus:border-[#f3a329] focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a7adb3] hover:text-white cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              {/* View Mode Segmented Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <div className="flex items-center rounded-lg border border-white/15 bg-[#0b0d0e] p-1 text-xs font-mono font-bold">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      viewMode === "photo"
                        ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                        : "text-[#a7adb3] hover:text-white"
                    }`}
                  >
                    <Camera className="size-3.5" />
                    <span>PHOTOS</span>
                  </button>
                  <button
                    onClick={() => setViewMode("blueprint")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      viewMode === "blueprint"
                        ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                        : "text-[#a7adb3] hover:text-white"
                    }`}
                  >
                    <Cpu className="size-3.5" />
                    <span>CAD BLUEPRINTS</span>
                  </button>
                </div>

                {/* Reset Filters Shortcut (if filtered) */}
                {isFiltered && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="flex items-center gap-1 text-[11px] font-mono text-[#f3a329] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="size-3" />
                    <span className="hidden sm:inline">RESET</span>
                  </button>
                )}
              </div>
            </div>

            {/* TIER 2: CATEGORY FILTER TABS (Clean horizontal pill bar with scroll) */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-mono text-[#8a9197] uppercase shrink-0 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="size-3 text-[#f3a329]" /> SECTOR:
              </span>

              {/* All Category Pill */}
              <button
                onClick={() => setSelectedCategory("all")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#f3a329] text-[#0b0d0e] shadow-sm shadow-[#f3a329]/30"
                    : "bg-[#0b0d0e] text-[#a7adb3] hover:text-white border border-white/10 hover:border-white/25"
                }`}
              >
                <span>ALL EQUIPMENT</span>
                <span className={`text-[10px] rounded px-1.5 py-0.2 ${selectedCategory === "all" ? "bg-[#0b0d0e]/20 text-[#0b0d0e]" : "bg-white/10 text-[#f3a329]"}`}>
                  {products.length}
                </span>
              </button>

              {/* Dynamic Category Pills */}
              {productCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#f3a329] text-[#0b0d0e] shadow-sm shadow-[#f3a329]/30"
                        : "bg-[#0b0d0e] text-[#a7adb3] hover:text-white border border-white/10 hover:border-white/25"
                    }`}
                  >
                    <span>{cat.title.toUpperCase()}</span>
                    <span className={`text-[10px] rounded px-1.5 py-0.2 ${isSelected ? "bg-[#0b0d0e]/20 text-[#0b0d0e]" : "bg-white/10 text-[#f3a329]"}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE STATUS BAR */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-[#a7adb3]">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#f3a329]" />
              <span>
                Showing <strong className="text-white">{filteredProducts.length}</strong> of {products.length} heavy industrial units
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[#8a9197]">
              <span className="flex items-center gap-1 text-white/80">
                <CheckCircle2 className="size-3 text-[#f3a329]" /> EN 10204 3.1 Traceable
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1 text-white/80">
                <CheckCircle2 className="size-3 text-[#f3a329]" /> 24-Month Warranty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <main className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
        {filteredProducts.length === 0 ? (
          <div className="tech-card py-16 text-center">
            <p className="text-base sm:text-lg font-bold text-white">No equipment found matching &quot;{searchQuery}&quot;</p>
            <p className="mt-2 text-xs sm:text-sm text-[#a7adb3]">Try adjusting your search terms or resetting the category filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-5 bg-[#f3a329] px-6 py-2.5 text-xs font-bold text-[#0b0d0e] rounded-md cursor-pointer hover:bg-[#ffc368]"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.slug}
                className="tech-card group flex flex-col justify-between"
              >

                <div>
                  {/* Visual Display */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0b0d0e] border-b border-white/10">
                    {viewMode === "photo" && product.image ? (
                      <>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-transparent to-transparent opacity-80" />
                      </>
                    ) : (
                      <div className="p-4 h-full flex items-center justify-center">
                        <IndustrialDiagram type={product.diagramType} className="w-full" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 rounded bg-[#0b0d0e]/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-[#f3a329] border border-white/10">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-[#f3a329] transition-colors">
                      {product.name}
                    </h2>
                    <p className="mt-1.5 text-xs leading-5 text-[#a7adb3] line-clamp-2">{product.tagline}</p>

                    {/* Highlights */}
                    <div className="mt-4 border-t border-white/10 pt-3 space-y-1.5 text-xs">
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex justify-between py-0.5 text-[11px] font-mono">
                          <span className="text-gray-400">{spec.label}:</span>
                          <span className="font-semibold text-white">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white hover:text-[#f3a329] transition-colors"
                  >
                    DETAILS &amp; SPECS <ArrowRight className="size-3.5" />
                  </Link>

                  <button
                    onClick={() => handleQuoteClick(product.slug)}
                    className="bg-[#f3a329] px-4 py-2 text-xs font-bold tracking-wider text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-md cursor-pointer"
                  >
                    GET QUOTE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={selectedProductSlug}
      />
    </div>
  );
}


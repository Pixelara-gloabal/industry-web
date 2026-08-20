"use client";

import { useState } from "react";

import Link from "next/link";

import { ArrowRight, Search } from "lucide-react";

import { IndustrialDiagram } from "@/components/industrial/industrial-diagrams";
import { QuoteModal } from "@/components/industrial/quote-modal";
import { productCategories, products } from "@/lib/industrial-data";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductSlug, setSelectedProductSlug] = useState("");

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

  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d0e] py-16 lg:py-24">
        <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 relative z-10">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#f3a329]">
            <span className="h-px w-10 bg-[#f3a329]" />
            PIXELARA PRODUCT CATALOG
          </p>
          <h1 className="mt-4 text-4xl leading-[0.95] font-extrabold tracking-[-0.05em] sm:text-6xl max-w-3xl">
            Heavy Power Transmission &amp; Conveyor Equipment
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#a7adb3]">
            Browse our full range of ISO 9001:2015 certified shaft-mounted speed reducers, conveyor pulleys, bearing blocks, and magnetic separation units.
          </p>

          {/* SEARCH & FILTER CONTROLS */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by product name, category or spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-white/15 bg-[#15191c] pl-10 pr-4 py-3 text-sm text-white focus:border-[#f3a329] focus:outline-none"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2.5 text-xs font-bold rounded transition-colors ${
                  selectedCategory === "all"
                    ? "bg-[#f3a329] text-[#0b0d0e]"
                    : "bg-[#15191c] text-[#a7adb3] hover:text-white border border-white/10"
                }`}
              >
                ALL PRODUCTS ({products.length})
              </button>
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs font-bold rounded transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-[#f3a329] text-[#0b0d0e]"
                      : "bg-[#15191c] text-[#a7adb3] hover:text-white border border-white/10"
                  }`}
                >
                  {cat.title.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center border border-white/10 rounded-lg bg-[#15191c]">
            <p className="text-lg font-bold text-white">No products found matching "{searchQuery}"</p>
            <p className="mt-2 text-sm text-[#a7adb3]">Try adjusting your search terms or clearing selected category filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-6 bg-[#f3a329] px-5 py-2.5 text-xs font-bold text-[#0b0d0e] rounded"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.slug}
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#15191c] p-6 transition-all duration-200 hover:border-[#f3a329]/50 hover:bg-[#1b2024] shadow-xl"
              >
                <div>
                  {/* Visual Diagram */}
                  <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0b0d0e] mb-5">
                    <IndustrialDiagram type={product.diagramType} />
                  </div>

                  <span className="text-[11px] font-bold tracking-widest text-[#f3a329] uppercase">
                    {product.category}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white group-hover:text-[#f3a329] transition-colors">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-[#a7adb3] line-clamp-2">{product.tagline}</p>

                  {/* Highlights */}
                  <div className="mt-4 border-t border-white/10 pt-4 space-y-2 text-xs text-gray-300">
                    {product.specifications.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-gray-400">{spec.label}:</span>
                        <span className="font-medium text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white hover:text-[#f3a329] transition-colors"
                  >
                    DETAILS &amp; SPECS <ArrowRight className="size-3.5" />
                  </Link>

                  <button
                    onClick={() => handleQuoteClick(product.slug)}
                    className="bg-[#f3a329] px-3.5 py-2 text-[11px] font-bold tracking-wider text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded"
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

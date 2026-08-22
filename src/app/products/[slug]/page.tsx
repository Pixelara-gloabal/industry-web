import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  Check,
  Download,
  FileText,
  Layers,
  Wrench,
} from "lucide-react";

import { ProductDetailClient } from "./product-detail-client";

import { IndustrialDiagram } from "@/components/industrial/industrial-diagrams";
import { products } from "@/lib/industrial-data";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Pixelara Industrial`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d0e] py-12 lg:py-20">
        <div className="hero-grid absolute inset-0 opacity-25 pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-[#a7adb3] hover:text-[#f3a329] transition-colors mb-6"
          >
            <ArrowLeft className="size-4" /> BACK TO ALL PRODUCTS
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="status-pill">
                  <span className="indicator-pulse" />
                  <span>{product.category}</span>
                </span>
                <span className="text-[11px] text-gray-400 font-mono">ISO 9001:2015 REGISTERED</span>
              </div>

              <h1 className="mt-4 text-3xl leading-[1.0] font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl text-white">
                {product.name}
              </h1>

              <p className="mt-3 text-base sm:text-lg font-medium text-[#f3a329]">{product.tagline}</p>

              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-[#a7adb3] max-w-xl">
                {product.description}
              </p>

              <ProductDetailClient productSlug={product.slug} productName={product.name} />
            </div>

            {/* Visual Engineering Card with Real Photo & CAD Display */}
            <div className="tech-card relative p-2.5 shadow-2xl">
              <div className="relative h-[300px] sm:h-[360px] w-full overflow-hidden rounded-lg bg-[#0b0d0e]">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="p-6 h-full flex items-center justify-center">
                    <IndustrialDiagram type={product.diagramType} className="w-full" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#15191c]/90 backdrop-blur-md p-3 rounded-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{product.name}</span>
                  <span className="text-[#f3a329] font-mono font-bold">100% CMM Inspected</span>
                </div>
              </div>

              <div className="mt-2.5 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="rounded bg-[#0b0d0e] p-2.5 border border-white/5">
                  <span className="text-[9px] text-[#a7adb3] block uppercase">Warranty</span>
                  <strong className="text-[#f3a329] text-[11px]">24 Months Full</strong>
                </div>
                <div className="rounded bg-[#0b0d0e] p-2.5 border border-white/5">
                  <span className="text-[9px] text-[#a7adb3] block uppercase">Dispatch</span>
                  <strong className="text-white text-[11px]">24-48h Express</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SPECS & FEATURES */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Key Features */}
          <div className="tech-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <Wrench className="size-5 sm:size-6 text-[#f3a329]" /> Mechanical Engineering &amp; Design
            </h2>
            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-[#c1c6ca]">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="size-4 shrink-0 text-[#f3a329] mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-white/10 pt-5">
              <h3 className="text-[11px] font-mono font-bold tracking-widest text-[#f3a329] uppercase">
                Target Industries &amp; Applications
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="rounded border border-white/15 bg-[#0b0d0e] px-3 py-1 text-xs font-medium text-white"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="tech-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <Layers className="size-5 sm:size-6 text-[#f3a329]" /> Technical Specifications
            </h2>

            <div className="mt-5 border-t border-white/10 divide-y divide-white/10">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="py-3 flex justify-between text-xs sm:text-sm font-mono">
                  <span className="text-gray-400 font-medium">{spec.label}</span>
                  <span className="text-white font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAD VECTOR SCHEMATIC BOX */}
        <div className="tech-card mt-8 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#f3a329] uppercase">
                MECHANICAL VECTOR SCHEMATIC
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">CAD Dimensional Geometry &amp; Hub Profile</h3>
            </div>
            <span className="text-xs text-[#a7adb3] font-mono mt-2 sm:mt-0">TOLERANCE: ISO 2768-m</span>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-4 sm:p-6">
            <IndustrialDiagram type={product.diagramType} className="w-full max-h-[300px]" />
          </div>
        </div>

        {/* DOWNLOADABLE DOCUMENTS */}
        <div className="tech-card mt-8 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <FileText className="size-5 text-[#f3a329]" /> Engineering Downloads &amp; 3D STEP Models
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.downloads.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0b0d0e] p-4 text-xs"
              >
                <div>
                  <p className="font-bold text-white line-clamp-1">{doc.title}</p>
                  <span className="text-gray-400 text-[11px] font-mono">
                    {doc.type} • {doc.size}
                  </span>
                </div>
                <Link
                  href="/contact#quote"
                  className="p-2.5 rounded bg-[#f3a329]/10 text-[#f3a329] hover:bg-[#f3a329] hover:text-[#0b0d0e] transition-colors"
                  title="Download File"
                >
                  <Download className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


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
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d0e] py-16 lg:py-24">
        <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-[#a7adb3] hover:text-[#f3a329] transition-colors mb-8"
          >
            <ArrowLeft className="size-4" /> BACK TO ALL PRODUCTS
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded bg-[#f3a329]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#f3a329] uppercase">
                {product.category}
              </span>

              <h1 className="mt-4 text-4xl leading-[0.94] font-extrabold tracking-[-0.05em] sm:text-6xl text-white">
                {product.name}
              </h1>

              <p className="mt-5 text-lg font-medium text-[#f3a329]">{product.tagline}</p>

              <p className="mt-6 text-base leading-7 text-[#a7adb3] max-w-xl">
                {product.description}
              </p>

              <ProductDetailClient productSlug={product.slug} productName={product.name} />
            </div>

            {/* SVG Engineering Blueprint */}
            <div className="rounded-xl border border-white/15 bg-[#15191c] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="text-xs font-bold tracking-widest text-[#f3a329]">
                  ENGINEERING VECTOR SCHEMATIC
                </span>
                <span className="text-[10px] text-gray-400 font-mono">CAD SPEC REV-3</span>
              </div>
              <IndustrialDiagram type={product.diagramType} className="w-full" />
              <div className="mt-4 pt-3 border-t border-white/10 text-center text-xs text-[#a7adb3]">
                ISO 9001:2015 Verified Mechanical Drawing &amp; Tolerances
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SPECS & FEATURES */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Key Features */}
          <div className="rounded-xl border border-white/10 bg-[#15191c] p-8">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <Wrench className="size-6 text-[#f3a329]" /> Product Features &amp; Engineering
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-[#c1c6ca]">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="size-4 shrink-0 text-[#f3a329] mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-xs font-bold tracking-widest text-[#f3a329] uppercase">
                Target Industries &amp; Applications
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="rounded border border-white/15 bg-[#0b0d0e] px-3 py-1.5 text-xs text-[#a7adb3]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="rounded-xl border border-white/10 bg-[#15191c] p-8">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <Layers className="size-6 text-[#f3a329]" /> Technical Specifications
            </h2>

            <div className="mt-6 border-t border-white/10 divide-y divide-white/10">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="py-3.5 flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">{spec.label}</span>
                  <span className="text-white font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOWNLOADABLE DOCUMENTS */}
        <div className="mt-16 rounded-xl border border-white/10 bg-[#15191c] p-8">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <FileText className="size-5 text-[#f3a329]" /> Engineering Downloads &amp; CAD Models
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.downloads.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded border border-white/10 bg-[#0b0d0e] p-4 text-xs"
              >
                <div>
                  <p className="font-bold text-white line-clamp-1">{doc.title}</p>
                  <span className="text-gray-400">
                    Format: {doc.type} • {doc.size}
                  </span>
                </div>
                <a
                  href={`/contact#quote`}
                  className="p-2.5 rounded bg-[#f3a329]/10 text-[#f3a329] hover:bg-[#f3a329] hover:text-[#0b0d0e] transition-colors"
                  title="Download File"
                >
                  <Download className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

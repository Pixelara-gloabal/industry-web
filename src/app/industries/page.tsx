import Link from "next/link";

import { ArrowRight, ShieldAlert, Zap } from "lucide-react";

import { PageIntro } from "@/components/industrial/page-intro";
import { industriesData, products } from "@/lib/industrial-data";

export const metadata = {
  title: "Industry Solutions | Pixelara Industrial",
  description:
    "Power transmission and conveyor drive solutions tailored for mining, cement, steel, power generation, recycling, and material handling.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="TARGET INDUSTRY SECTORS"
        title="Solutions for Demanding Heavy Industrial Environments"
        description="Every heavy industry presents unique mechanical stresses. Pixelara power transmission gearboxes, conveyor components, and magnetic separators are custom-configured for maximum reliability under extreme dust, thermal, and shock load conditions."
        action={{ label: "DISCUSS INDUSTRY APPLICATION", href: "/contact#quote" }}
      />

      <main className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="space-y-16">
          {industriesData.map((ind, index) => (
            <section
              id={ind.id}
              key={ind.id}
              className="scroll-mt-28 rounded-xl border border-white/10 bg-[#15191c] p-8 sm:p-12 shadow-2xl"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#f3a329] font-bold">
                      0{index + 1} / SECTOR
                    </span>
                    <span className="h-px w-8 bg-[#f3a329]" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      PIXELARA FIELD EXPERTISE
                    </span>
                  </div>

                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-base font-semibold text-[#f3a329]">{ind.tagline}</p>
                  <p className="mt-4 text-sm leading-7 text-[#a7adb3]">{ind.description}</p>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <h3 className="text-xs font-bold tracking-widest text-white uppercase flex items-center gap-2">
                      <ShieldAlert className="size-4 text-[#f3a329]" /> Operational Challenges Solved
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-sm text-[#c1c6ca]">
                      {ind.keyChallenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5">
                          <span className="size-1.5 rounded-full bg-[#f3a329] mt-2 shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended Equipment & Stat Box */}
                <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      RECOMMENDED EQUIPMENT
                    </span>
                    <div className="mt-4 space-y-3">
                      {ind.recommendedProducts.map((slug) => {
                        const prod = products.find((p) => p.slug === slug);
                        if (!prod) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/products/${slug}`}
                            className="flex items-center justify-between rounded border border-white/10 bg-[#15191c] p-3 text-xs text-white hover:border-[#f3a329] transition-colors"
                          >
                            <span className="font-bold">{prod.name}</span>
                            <ArrowRight className="size-3.5 text-[#f3a329]" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="rounded bg-[#f3a329]/10 p-3.5 text-xs text-[#f3a329] font-bold flex items-center gap-2">
                      <Zap className="size-4 shrink-0" />
                      <span>{ind.stat}</span>
                    </div>
                    <Link
                      href={`/contact#quote`}
                      className="mt-4 block w-full bg-[#f3a329] py-3 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
                    >
                      REQUEST {ind.name.toUpperCase()} DRIVE QUOTE
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

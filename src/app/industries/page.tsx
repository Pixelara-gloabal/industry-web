import Image from "next/image";
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

      <main className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="space-y-12 sm:space-y-16">
          {industriesData.map((ind, index) => (
            <section
              id={ind.id}
              key={ind.id}
              className="scroll-mt-28 tech-card"
            >
              {/* Industry Header Image Banner */}
              {ind.image && (
                <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#0b0d0e]">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-[#15191c]/50 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-8 right-5 sm:right-8 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono text-[#f3a329] font-bold">
                        SECTOR 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                        {ind.name}
                      </h2>
                    </div>
                    <span className="hidden sm:inline-block rounded-md bg-[#0b0d0e]/85 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#f3a329] border border-white/10 font-mono">
                      ISO 9001:2015
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#f3a329]">{ind.tagline}</p>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">{ind.description}</p>

                    <div className="mt-7 border-t border-white/10 pt-5">
                      <h3 className="text-xs font-bold tracking-widest text-white uppercase flex items-center gap-2">
                        <ShieldAlert className="size-4 text-[#f3a329]" /> Severe Operational Challenges Solved
                      </h3>
                      <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#c1c6ca]">
                        {ind.keyChallenges.map((challenge, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2.5">
                            <span className="size-1.5 rounded-full bg-[#f3a329] mt-1.5 shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommended Equipment & Stat Box */}
                  <div className="rounded-xl border border-white/10 bg-[#0b0d0e] p-5 sm:p-6 flex flex-col justify-between min-h-[280px] shadow-xl">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        RECOMMENDED DRIVE EQUIPMENT
                      </span>
                      <div className="mt-3.5 space-y-2.5">
                        {ind.recommendedProducts.map((slug) => {
                          const prod = products.find((p) => p.slug === slug);
                          if (!prod) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/products/${slug}`}
                              className="flex items-center justify-between rounded-md border border-white/10 bg-[#15191c] p-3 text-xs text-white hover:border-[#f3a329] transition-all hover:translate-x-1"
                            >
                              <span className="font-bold">{prod.name}</span>
                              <ArrowRight className="size-3.5 text-[#f3a329]" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <div className="rounded-md bg-[#f3a329]/10 p-3 text-xs text-[#f3a329] font-bold flex items-center gap-2 border border-[#f3a329]/20 font-mono">
                        <Zap className="size-4 shrink-0" />
                        <span>{ind.stat}</span>
                      </div>
                      <Link
                        href={`/contact#quote`}
                        className="mt-3.5 block w-full bg-[#f3a329] py-3 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-md active:scale-98"
                      >
                        REQUEST {ind.name.toUpperCase()} DRIVE QUOTE
                      </Link>
                    </div>
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


import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ShieldCheck } from "lucide-react";

import { PageIntro } from "@/components/industrial/page-intro";

export const metadata = {
  title: "Engineering Applications | Pixelara Industrial",
  description:
    "Integrated power transmission, conveyor drive packages, and magnetic separation system architectures for heavy bulk material handling.",
};

const applicationsList = [
  {
    number: "01",
    title: "Heavy Overland Conveyor Drive Package",
    image: "/images/industrial/conveyor-drive.jpg",
    description:
      "A fully integrated drive setup designed for high inertia starting torque and long belt spans. Combines high-ratio SMSR gearboxes with dynamically balanced taper lock pulleys and robust plummer blocks to prevent belt sag and shaft deflection.",
    parts: ["SMSR Gearbox (20:1)", "Taper Lock Pulley", "Plummer Blocks", "Belt Tensioner"],
    specs: "Torque capacity up to 18,500 Nm | Duty Cycle: 24/7 Continuous S1 | Backstop: Mechanical Clutch",
  },
  {
    number: "02",
    title: "Automatic Magnetic Tramp Metal Recovery",
    image: "/images/industrial/magnetic-separator.jpg",
    description:
      "Positioned above high-tonnage feed belts in mining and recycling operations. Extracts ferrous contamination automatically using an overband suspension magnet working in series with a magnetic head drum pulley.",
    parts: ["Suspension Magnet", "Magnetic Drum Pulley", "Magnetic Conveyor Belt"],
    specs: "Magnet Gauss: Up to 8,500 Gauss | Burial Depth: 450 mm | Field Reach: 360° Continuous",
  },
  {
    number: "03",
    title: "Crusher & Screen Shock-Resistant Drive",
    image: "/images/industrial/smsr-gearbox.jpg",
    description:
      "Engineered to withstand heavy cyclic shock impacts from rocks and ore feed. Utilizes carburized alloy gear teeth, heavy cast iron GG25 housing, and shock-damping rubber torque arms.",
    parts: ["Shaft Mounted Speed Reducer", "V-Belt Taper Pulley", "Pillow Block Bearings"],
    specs: "Shock Factor: 2.0+ Service Factor | Efficiency: > 96% | Operating Temp: -25°C to +85°C",
  },
  {
    number: "04",
    title: "Mining Overland Ore Transfer System",
    image: "/images/industrial/mining-conveyor.jpg",
    description:
      "High-tonnage continuous bulk material transport across long distances and severe elevations. Features dual-drive SMSR units with synchronized backstops for zero backward slip.",
    parts: ["Conveyor Gearbox", "Integrated Backstop", "High-Temp Shaft Seals"],
    specs: "Elevation Height: Up to 60 Meters | Lift Capacity: 350 TPH | Safety Standard: ATEX Dust Proof",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="ENGINEERED SYSTEM PACKAGES"
        title="Integrated Power &amp; Material Moving Applications"
        description="Complex industrial machinery requires components that operate in total mechanical harmony. Pixelara supplies pre-engineered, factory-tested package combinations for seamless integration into your processing plant."
        action={{ label: "REQUEST APPLICATION CONSULTATION", href: "/contact#quote" }}
      />

      <main className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {applicationsList.map((app) => (
            <article
              key={app.number}
              className="tech-card group flex flex-col justify-between"
            >
              {/* Application Header Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#0b0d0e]">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-[#15191c]/40 to-transparent" />
                <span className="status-pill absolute top-4 left-4 font-mono text-[10px]">
                  <span className="indicator-pulse" />
                  <span>{app.number} / INTEGRATED ARCHITECTURE</span>
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-[#f3a329] transition-colors">
                    {app.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">{app.description}</p>

                  {/* Component Chain */}
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-mono font-bold tracking-widest text-[#f3a329] uppercase mb-2.5">
                      COMPONENTS INCLUDED IN PACKAGE
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      {app.parts.map((part, index) => (
                        <div className="contents" key={part}>
                          <span className="rounded-md border border-white/15 bg-[#0b0d0e] px-2.5 py-1 text-xs font-medium text-white">
                            {part}
                          </span>
                          {index < app.parts.length - 1 && (
                            <ArrowRight className="size-3 text-[#f3a329]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-md bg-[#0b0d0e] p-3 text-[11px] text-[#a7adb3] font-mono border-l-2 border-[#f3a329]">
                    {app.specs}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <ShieldCheck className="size-3.5 text-[#f3a329]" /> Pre-Tested Factory Alignment
                  </span>
                  <Link
                    href="/contact#quote"
                    className="inline-flex items-center justify-center gap-2 bg-[#f3a329] px-5 py-2.5 text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-md active:scale-95 cursor-pointer"
                  >
                    QUOTE PACKAGE <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}


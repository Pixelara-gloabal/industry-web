import Link from "next/link";

import { ArrowRight, Cpu, ShieldCheck } from "lucide-react";

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
    description:
      "A fully integrated drive setup designed for high inertia starting torque and long belt spans. Combines high-ratio SMSR gearboxes with dynamically balanced taper lock pulleys and robust plummer blocks to prevent belt sag and shaft deflection.",
    parts: ["SMSR Gearbox (20:1)", "Taper Lock Pulley", "Plummer Blocks", "Belt Tensioner"],
    specs: "Torque capacity up to 18,500 Nm | Duty Cycle: 24/7 Continuous S1 | Backstop: Mechanical Clutch",
  },
  {
    number: "02",
    title: "Automatic Magnetic Tramp Metal Recovery",
    description:
      "Positioned above high-tonnage feed belts in mining and recycling operations. Extracts ferrous contamination automatically using an overband suspension magnet working in series with a magnetic head drum pulley.",
    parts: ["Suspension Magnet", "Magnetic Drum Pulley", "Magnetic Conveyor Belt"],
    specs: "Magnet Gauss: Up to 8,500 Gauss | Burial Depth: 450 mm | Field Reach: 360° Continuous",
  },
  {
    number: "03",
    title: "Crusher & Screen Shock-Resistant Drive",
    description:
      "Engineered to withstand heavy cyclic shock impacts from rocks and ore feed. Utilizes carburized alloy gear teeth, heavy cast iron GG25 housing, and shock-damping rubber torque arms.",
    parts: ["Shaft Mounted Speed Reducer", "V-Belt Taper Pulley", "Pillow Block Bearings"],
    specs: "Shock Factor: 2.0+ Service Factor | Efficiency: > 96% | Operating Temp: -25°C to +85°C",
  },
  {
    number: "04",
    title: "Grain & Biomass Bucket Elevator Lift System",
    description:
      "Vertical lift mechanical drive package equipped with instant backstop anti-runback safety. Prevents catastrophic reverse elevator dumping in the event of power outages.",
    parts: ["Conveyor Gearbox", "Integrated Backstop", "High-Temp Shaft Seals"],
    specs: "Elevation Height: Up to 60 Meters | Lift Capacity: 350 TPH | Safety Standard: ATEX Dust Proof",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="ENGINEERED SYSTEM PACKAGES"
        title="Integrated Power & Material Moving Applications"
        description="Complex industrial machinery requires components that operate in total mechanical harmony. Pixelara supplies pre-engineered, factory-tested package combinations for seamless integration into your processing plant."
        action={{ label: "REQUEST APPLICATION CONSULTATION", href: "/contact#quote" }}
      />

      <main className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {applicationsList.map((app) => (
            <article
              key={app.number}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#15191c] p-8 sm:p-10 shadow-2xl transition-all duration-200 hover:border-[#f3a329]/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#f3a329] font-bold">
                    {app.number} / INTEGRATED ARCHITECTURE
                  </span>
                  <Cpu className="size-5 text-[#f3a329]" />
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {app.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#a7adb3]">{app.description}</p>

                {/* Component Chain */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs font-bold tracking-widest text-[#f3a329] uppercase mb-3">
                    COMPONENTS INCLUDED IN PACKAGE
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {app.parts.map((part, index) => (
                      <div className="contents" key={part}>
                        <span className="rounded border border-white/15 bg-[#0b0d0e] px-3.5 py-2 text-xs font-bold text-white">
                          {part}
                        </span>
                        {index < app.parts.length - 1 && (
                          <ArrowRight className="size-3.5 text-[#f3a329]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded bg-[#0b0d0e] p-3.5 text-xs text-[#a7adb3] font-mono border-l-2 border-[#f3a329]">
                  {app.specs}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <ShieldCheck className="size-4 text-[#f3a329]" /> Pre-Tested Alignment
                </span>
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-[#f3a329] px-5 py-2.5 text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
                >
                  QUOTE PACKAGE <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

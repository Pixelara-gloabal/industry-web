import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Factory,
  Globe2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import { PageIntro } from "@/components/industrial/page-intro";

export const metadata = {
  title: "About Pixelara Industrial | Power Transmission Engineering",
  description:
    "Learn about Pixelara Industrial's heavy manufacturing facilities, precision CNC gear shaping capabilities, metallurgy standards, and global export infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="ABOUT PIXELARA INDUSTRIAL"
        title="Engineered Strength Built on Precision Metallurgy &amp; Mechanical Excellence"
        description="Pixelara Industrial is a premier global manufacturer of high-torque speed reducers, conveyor drive components, and magnetic separation systems serving heavy industry worldwide."
        action={{ label: "CONTACT ENGINEERING TEAM", href: "/contact#quote" }}
      />

      <main className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        {/* Facility Spotlight Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#15191c] mb-16 shadow-2xl">
          <div className="relative h-[380px] sm:h-[460px] w-full">
            <Image
              src="/images/industrial/hero-plant.jpg"
              alt="Pixelara Heavy Engineering & CNC Gear Manufacturing Facility"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-[#0b0d0e]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="rounded bg-[#f3a329] px-3 py-1 text-xs font-black text-[#0b0d0e] tracking-widest uppercase">
                  WORLD-CLASS MANUFACTURING
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
                  120,000 Sq Ft Advanced Gear Machining &amp; Foundry Complex
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-gray-300">
                  Houses multi-axis Gleason CNC gear hobbers, Niles precision profile grinders, vacuum carburizing furnaces, and 100% CMM metrology inspection.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact#quote"
                  className="bg-[#f3a329] px-5 py-3 text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm shrink-0"
                >
                  VISIT FACILITY
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-xl border border-white/10 bg-[#15191c] p-8 shadow-2xl h-fit">
            <p className="text-xs font-mono text-[#f3a329] font-bold">COMPANY OVERVIEW</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Global Manufacturing Footprint
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#a7adb3]">
              Operating from state-of-the-art heavy engineering facilities, Pixelara combines multi-axis CNC hobbing, vacuum carburizing heat treatment, and CMM inspection under one roof.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-xs text-[#c1c6ca]">
              <div className="flex items-center gap-3">
                <Factory className="size-4 text-[#f3a329]" />
                <span>120,000 sq ft Advanced Production Facility</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="size-4 text-[#f3a329]" />
                <span>Active Deployments in 40+ Countries</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-4 text-[#f3a329]" />
                <span>ISO 9001:2015 &amp; CE Quality Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <SearchCheck className="size-4 text-[#f3a329]" />
                <span>Carl Zeiss PRISMO 3D CMM Gear Metrology</span>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <article className="rounded-xl border border-white/10 bg-[#15191c] p-8 sm:p-10 shadow-2xl">
              <span className="text-xs font-mono text-[#f3a329] font-bold">01 / OUR FOUNDATION</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                Uncompromising Torque &amp; Gear Reliability
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#a7adb3]">
                Pixelara was established with a singular mission: to eliminate unscheduled drivetrain failure in bulk material handling. By mastering precision helical gear geometry and direct shaft-mounting bush technology, we provide solutions that endure heavy shock loads year after year.
              </p>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#15191c] p-8 sm:p-10 shadow-2xl">
              <span className="text-xs font-mono text-[#f3a329] font-bold">02 / MANUFACTURING CAPABILITY</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                Integrated CNC Machining &amp; Heat Treatment
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#a7adb3]">
                Our factory houses Gleason gear hobbers, Niles profile grinders, high-grade GG25 cast iron foundries, and automated assembly bays. Every shaft, bearing housing, and gear teeth set is machined to exacting tolerances under computer control.
              </p>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#15191c] p-8 sm:p-10 shadow-2xl">
              <span className="text-xs font-mono text-[#f3a329] font-bold">03 / GLOBAL EXPORT &amp; SUPPORT</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                Rapid Logistics &amp; Field Engineering
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#a7adb3]">
                We maintain an extensive inventory of standardized SMSR gearboxes, taper bushes, pillow blocks, and replacement seal kits ready for express air or ocean freight to mining sites, cement plants, and sea ports worldwide.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact#quote"
            className="inline-flex items-center gap-3 bg-[#f3a329] px-8 py-4 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
          >
            START PROJECT CONVERSATION <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import {
  Award,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import { PageIntro } from "@/components/industrial/page-intro";

export const metadata = {
  title: "Quality Assurance & ISO Standards | Pixelara Industrial",
  description:
    "Pixelara Industrial quality control framework including CMM gear profile inspection, NDT ultrasonic testing, dynamic balancing, and ISO 9001:2015 compliance.",
};

const qualityPillars = [
  {
    icon: SearchCheck,
    title: "Carl Zeiss CMM Gear Metrology",
    copy: "Every gear set is inspected on Carl Zeiss 3D Coordinate Measuring Machines (CMM) to verify tooth involute profile accuracy, pitch error, and surface roughness to ISO 1328 Class 6 precision standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Metallurgy & NDT Testing",
    copy: "Castings and forged alloy shafts undergo ultrasonic non-destructive testing (NDT), magnetic particle crack detection, and Rockwell hardness testing (58-62 HRC) post vacuum carburization.",
  },
  {
    icon: ShieldCheck,
    title: "Full Load Dynamometer Spin Testing",
    copy: "100% of assembled speed reducers undergo no-load and full-load spin testing to monitor noise levels (dB), oil seal thermal rise, vibration velocity (mm/s), and backstop sprag clutch engagement.",
  },
  {
    icon: FileCheck2,
    title: "Material Traceability & EN 10204 Certs",
    copy: "Full EN 10204 3.1 material test certificates, heat treatment inspection charts, and dynamic balancing reports (ISO 1940 Grade G6.3) are supplied with every major drive unit shipment.",
  },
];

export default function QualityPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="QUALITY ASSURANCE & STANDARDS"
        title="Zero-Defect Engineering Guaranteed by ISO 9001:2015"
        description="Heavy industrial operations cannot tolerate gear tooth failure or seal leaks. Pixelara operates a rigorous quality management system where every component undergoes multi-stage metallurgical, dimensional, and functional testing before dispatch."
        action={{ label: "REQUEST QUALITY DOCUMENTATION", href: "/contact#quote" }}
      />

      <main className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        {/* Metrology Laboratory Spotlight */}
        <div className="tech-card relative mb-12 sm:mb-16 shadow-2xl p-2.5">
          <div className="relative h-[340px] sm:h-[440px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/industrial/quality-cmm.jpg"
              alt="Carl Zeiss 3D CMM Gear Metrology Laboratory at Pixelara Industrial"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-[#0b0d0e]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <div className="max-w-2xl">
                <span className="status-pill font-mono">
                  <span className="indicator-pulse" />
                  <span>ADVANCED METROLOGY LAB</span>
                </span>
                <h2 className="mt-2.5 text-xl sm:text-3xl font-extrabold text-white">
                  Sub-Micron Precision Involute Gear Measurement
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-300">
                  Our Carl Zeiss PRISMO 3D coordinate measuring system verifies individual helical tooth pitch, runout, and surface flank profile to ISO 1328 Class 6 standards.
                </p>
              </div>

              <Link
                href="/contact#quote"
                className="bg-[#f3a329] px-5 py-3 text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-md shrink-0 active:scale-95 cursor-pointer"
              >
                REQUEST SAMPLE CMM REPORT
              </Link>
            </div>
          </div>
        </div>

        {/* Quality Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPillars.map(({ icon: Icon, title, copy }, index) => (
            <article
              key={title}
              className="tech-card flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <span className="text-[11px] font-mono text-[#f3a329] font-bold">0{index + 1} / STAGE</span>
                <Icon className="mt-4 size-7 text-[#f3a329]" />
                <h2 className="mt-4 text-xl font-bold tracking-tight text-white">{title}</h2>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">{copy}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Certifications Banner */}
        <section className="tech-card mt-12 sm:mt-16 border-[#f3a329]/40 bg-[#15191c] p-6 sm:p-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <div className="status-pill mb-3">
                <Award className="size-3.5" />
                <span>REGISTERED CERTIFICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                International Compliance Standards
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">
                Pixelara products conform strictly to international gear design and safety standards, ensuring seamless export compliance and inter-changeability with major OEM brands.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-4">
                <div className="flex items-center gap-2 text-[#f3a329] font-bold text-xs font-mono">
                  <CheckCircle2 className="size-3.5" /> ISO 9001:2015
                </div>
                <p className="mt-1.5 text-xs text-[#a7adb3]">
                  Certified Quality Management System for Design, Manufacture, and Servicing of Power Transmissions.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-4">
                <div className="flex items-center gap-2 text-[#f3a329] font-bold text-xs font-mono">
                  <CheckCircle2 className="size-3.5" /> CE Machinery Directive
                </div>
                <p className="mt-1.5 text-xs text-[#a7adb3]">
                  European Conformity marking for Machinery Directive 2006/42/EC safety standards.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-4">
                <div className="flex items-center gap-2 text-[#f3a329] font-bold text-xs font-mono">
                  <CheckCircle2 className="size-3.5" /> ATEX Zone 22 Dust Proof
                </div>
                <p className="mt-1.5 text-xs text-[#a7adb3]">
                  Certified dust explosion proof enclosures for coal, grain, and hazardous material plants.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-4">
                <div className="flex items-center gap-2 text-[#f3a329] font-bold text-xs font-mono">
                  <CheckCircle2 className="size-3.5" /> AGMA 2001 &amp; ISO 1328
                </div>
                <p className="mt-1.5 text-xs text-[#a7adb3]">
                  Gear geometry, load rating, and tooth surface contact stress calculations per AGMA 2001 standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


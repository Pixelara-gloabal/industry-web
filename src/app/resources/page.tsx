import Link from "next/link";

import { ArrowRight, BookOpen, Download, FileText, Layers } from "lucide-react";

import { PageIntro } from "@/components/industrial/page-intro";

export const metadata = {
  title: "Engineering Technical Resources | Pixelara Industrial",
  description:
    "Download Pixelara industrial gear product catalogs, 2D/3D CAD models, installation manuals, lubrication schedules, and gear ratio formulas.",
};

const resourceCategories = [
  {
    icon: FileText,
    title: "Master Product Catalogs",
    description: "Comprehensive 48-page technical catalog featuring full dimensional drawings, rating tables, and hub selection charts for all SMSR and speed reducer units.",
    files: [
      { name: "Pixelara SMSR Complete Master Catalog 2026", size: "14.2 MB", format: "PDF" },
      { name: "Conveyor Pulleys & Taper Bushes Dimension Guide", size: "8.5 MB", format: "PDF" },
      { name: "Magnetic Separation Systems Technical Specs", size: "6.1 MB", format: "PDF" },
    ],
  },
  {
    icon: Layers,
    title: "2D / 3D CAD Drawing Package",
    description: "Direct STEP, IGES, and DXF 3D model files for seamless integration into plant CAD engineering layouts.",
    files: [
      { name: "SMSR Gearbox 3D STEP Models (Size A to J)", size: "45.0 MB", format: "ZIP" },
      { name: "Pillow Block & Plummer Block CAD Library", size: "22.8 MB", format: "STEP/DXF" },
      { name: "Overband Suspension Magnet 3D Assemblies", size: "18.3 MB", format: "ZIP" },
    ],
  },
  {
    icon: BookOpen,
    title: "Installation & Maintenance Manuals",
    description: "Step-by-step field manuals covering shaft mounting, taper bush torque settings, backstop installation, and oil change intervals.",
    files: [
      { name: "SMSR Direct Shaft Mounting & Dismantling Manual", size: "3.2 MB", format: "PDF" },
      { name: "Industrial Gearbox Synthetic Lubrication Chart", size: "1.8 MB", format: "PDF" },
      { name: "Magnetic Separator Gauss Testing & Maintenance Guide", size: "2.4 MB", format: "PDF" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="TECHNICAL RESOURCE CENTER"
        title="Product Literature, CAD Models &amp; Field Engineering Guides"
        description="Access technical datasheets, CAD 3D models, installation manuals, and gear calculation references for Pixelara power transmission products."
        action={{ label: "REQUEST CUSTOM CAD DRAWINGS", href: "/contact#quote" }}
      />

      <main className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="space-y-12">
          {resourceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <section
                key={idx}
                className="rounded-xl border border-white/10 bg-[#15191c] p-8 sm:p-10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-6 text-[#f3a329]" />
                  <h2 className="text-2xl font-bold tracking-tight text-white">{cat.title}</h2>
                </div>
                <p className="mt-3 text-sm text-[#a7adb3] max-w-2xl">{cat.description}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.files.map((file, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0b0d0e] p-4 text-xs"
                    >
                      <div>
                        <p className="font-bold text-white line-clamp-1">{file.name}</p>
                        <span className="text-gray-400">
                          {file.format} • {file.size}
                        </span>
                      </div>
                      <Link
                        href="/contact#quote"
                        className="p-2.5 rounded bg-[#f3a329]/10 text-[#f3a329] hover:bg-[#f3a329] hover:text-[#0b0d0e] transition-colors shrink-0"
                        title="Download Document"
                      >
                        <Download className="size-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#a7adb3]">Need specific gear ratio calculations or custom CAD formats?</p>
          <Link
            href="/contact#quote"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f3a329] hover:text-[#ffc368]"
          >
            CONTACT OUR APPLICATION ENGINEERING TEAM <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}

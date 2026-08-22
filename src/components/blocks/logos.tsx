"use client";

import { Award, CheckCircle2, Cpu, ShieldCheck, Sparkles, Wrench, Shield, Check } from "lucide-react";
import Marquee from "react-fast-marquee";

type Certification = {
  code: string;
  name: string;
  category: string;
  stampId: string;
  status: string;
  icon: typeof ShieldCheck;
};

export const Logos = () => {
  const certifications: Certification[] = [
    {
      code: "ISO 9001:2015",
      name: "Quality Management Certified",
      category: "Heavy Manufacturing",
      stampId: "REG # QA-9001-8492",
      status: "TÜV AUDITED",
      icon: ShieldCheck,
    },
    {
      code: "CE DIRECTIVE",
      name: "2006/42/EC Machinery Safety",
      category: "European Conformity",
      stampId: "EU TYPE APPROVAL",
      status: "VERIFIED",
      icon: Award,
    },
    {
      code: "ATEX ZONE 22",
      name: "Dust Ignition-Proof Enclosures",
      category: "Ex II 3D Ex tc IIIC",
      stampId: "EN 60079-31",
      status: "HAZLOC SAFE",
      icon: Sparkles,
    },
    {
      code: "AGMA 6013-A06",
      name: "Enclosed Industrial Gear Drives",
      category: "Gear Rating Standard",
      stampId: "AGMA CLASS 1-12",
      status: "RATED",
      icon: Cpu,
    },
    {
      code: "DIN 3990 / ISO 6336",
      name: "Helical Gear Tooth Durability",
      category: "Involute Flank Rating",
      stampId: "58-62 HRC CASE",
      status: "CALCULATED",
      icon: Wrench,
    },
    {
      code: "EN 10204 3.1",
      name: "Material Test & Heat Traceability",
      category: "Metallurgy Inspection",
      stampId: "BATCH TEST CERTS",
      status: "TRACEABLE",
      icon: CheckCircle2,
    },
    {
      code: "CARL ZEISS CMM",
      name: "ISO 1328 Class 6 Metrology",
      category: "Sub-Micron Flank Scan",
      stampId: "PRISMO 3D SCAN",
      status: "100% CMM",
      icon: ShieldCheck,
    },
    {
      code: "ISO 1940-1 G6.3",
      name: "Dynamic Balancing Precision",
      category: "Conveyor Pulley Rotors",
      stampId: "BALANCED < 6.3 mm/s",
      status: "BALANCED",
      icon: Shield,
    },
  ];

  return (
    <section className="relative border-y border-white/10 bg-[#0f1214] py-7 sm:py-8 overflow-hidden">
      {/* Background hairline glow */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 mb-5 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f3a329] opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-[#f3a329]" />
            </span>
            <p className="text-[11px] font-mono font-bold tracking-[0.16em] text-[#f3a329] uppercase">
              REGISTERED INDUSTRIAL STANDARDS &amp; METROLOGY CERTIFICATIONS
            </p>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-[#a7adb3]">
            <span className="flex items-center gap-1 text-white/80">
              <Check className="size-3 text-[#f3a329]" /> 100% Unit Batch Tested
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1 text-white/80">
              <Check className="size-3 text-[#f3a329]" /> EN 10204 3.1 Traceable
            </span>
          </div>
        </div>
      </div>

      <Marquee speed={32} pauseOnHover gradient={true} gradientColor="#0f1214" gradientWidth={60}>
        <div className="flex items-center gap-5 pr-5">
          {certifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex items-center gap-3.5 rounded-lg border border-white/10 bg-[#15191c]/90 px-4 py-3 text-white transition-all duration-200 hover:border-[#f3a329]/60 hover:bg-[#1a1f23] hover:shadow-lg hover:shadow-[#f3a329]/10"
              >
                {/* Specular highlight on badge top border */}
                <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-[#f3a329]/30 to-transparent group-hover:via-[#f3a329]/80 transition-all" />

                {/* Badge Icon Emblem */}
                <div className="grid size-9 place-items-center rounded-md border border-[#f3a329]/20 bg-[#f3a329]/10 text-[#f3a329] group-hover:bg-[#f3a329] group-hover:text-[#0b0d0e] transition-colors shrink-0">
                  <Icon className="size-4.5" />
                </div>

                {/* Badge Details */}
                <div className="min-w-[170px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-white tracking-tight">
                      {item.code}
                    </span>
                    <span className="rounded bg-[#f3a329]/10 border border-[#f3a329]/20 px-1.5 py-0.5 text-[8px] font-mono font-bold text-[#f3a329]">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-[#c1c6ca] truncate max-w-[190px]">
                    {item.name}
                  </p>
                  <div className="mt-1 flex items-center justify-between text-[9px] font-mono text-[#8a9197]">
                    <span>{item.category}</span>
                    <span className="text-[#a7adb3] font-semibold">{item.stampId}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};



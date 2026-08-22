"use client";

import { useState } from "react";

import Image from "next/image";

import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Flame,
  ArrowRight,
  Sliders,
} from "lucide-react";

type Hotspot = {
  id: string;
  name: string;
  shortName: string;
  tag: string;
  x: number; // percentage from left
  y: number; // percentage from top
  category: string;
  metallurgy: string;
  tolerance: string;
  description: string;
  keySpecs: { label: string; value: string }[];
};

const hotspots: Hotspot[] = [
  {
    id: "helical-gears",
    name: "Case-Hardened Helical Involute Gearing",
    shortName: "Helical Involute Gears",
    tag: "POWER TRANSMISSION",
    x: 48,
    y: 42,
    category: "Tooth Flank Engineering",
    metallurgy: "20MnCr5 Alloy Steel / Vacuum Carburized",
    tolerance: "ISO 1328 Class 6 (DIN 3962)",
    description:
      "Precision-hobbed and CNC flank ground helical teeth with modified involute crown profiles for optimized load distribution, whisper-quiet meshing, and 98% mechanical transmission efficiency per stage.",
    keySpecs: [
      { label: "Core Hardness", value: "32 - 38 HRC" },
      { label: "Case Hardness", value: "58 - 62 HRC (Depth 1.2 mm)" },
      { label: "Tooth Profile", value: "Crowned Involute Helical" },
      { label: "Rating Standard", value: "AGMA 2001-D04 / ISO 6336" },
    ],
  },
  {
    id: "taper-bush",
    name: "Taper-Grip Bushing & Hollow Output Hub",
    shortName: "Taper-Grip Hub",
    tag: "SHAFT INTERFACE",
    x: 32,
    y: 52,
    category: "Keyless / Keyed Shaft Lock",
    metallurgy: "High-Tensile Ductile Iron / Forged C45",
    tolerance: "ISO 286-2 H7 / h6 Clearance",
    description:
      "Eliminates fretting corrosion and allows effortless installation and removal directly onto the driven conveyor shaft without custom machining or shaft damage.",
    keySpecs: [
      { label: "Bore Capacity", value: "30 mm to 125 mm" },
      { label: "Locking Type", value: "Conical Taper Bushing" },
      { label: "Torque Capacity", value: "Up to 18,500 Nm" },
      { label: "Mounting Style", value: "Direct Shaft-Mounted" },
    ],
  },
  {
    id: "gg25-housing",
    name: "Heavy GG25 Cast Iron Monobloc Casing",
    shortName: "GG25 Monobloc Casing",
    tag: "STRUCTURAL RIGIDITY",
    x: 65,
    y: 35,
    category: "Vibration Absorbing Frame",
    metallurgy: "Grade 250 (GG25) Grey Cast Iron",
    tolerance: "Machined on Multi-Axis CNC Bay",
    description:
      "Engineered with thick internal structural ribbing and external heat-dissipation fins to absorb heavy shock loads and keep operating oil sump temperatures below 80°C under 24/7 continuous duty.",
    keySpecs: [
      { label: "Tensile Strength", value: "250 - 300 MPa" },
      { label: "Vibration Damping", value: "4x greater than welded steel" },
      { label: "Ingress Rating", value: "IP65 Dust & Water Resistant" },
      { label: "Surface Finish", value: "Epoxy Enamel Primer" },
    ],
  },
  {
    id: "sprag-backstop",
    name: "Integrated Sprag Clutch Anti-Runback Backstop",
    shortName: "Anti-Runback Backstop",
    tag: "SAFETY SYSTEM",
    x: 72,
    y: 60,
    category: "Mechanical Anti-Reversal",
    metallurgy: "Hardened Chrome-Steel Cam Sprags",
    tolerance: "Zero Backlash Instant Lock",
    description:
      "Mechanically locks the drive instantly if power is cut, preventing high-tonnage inclined conveyor belts or bucket elevators from slipping backwards and causing catastrophic product rollback.",
    keySpecs: [
      { label: "Response Time", value: "< 0.05 seconds (Instantaneous)" },
      { label: "Holding Torque", value: "300% of nominal drive rating" },
      { label: "Lubrication", value: "Sump Oil Bath Immersed" },
      { label: "Service Life", value: "> 100,000 Lock Cycles" },
    ],
  },
  {
    id: "viton-seals",
    name: "Double-Lip Viton FKM High-Temp Oil Seals",
    shortName: "Double-Lip Viton Seals",
    tag: "CONTAMINATION SHIELD",
    x: 22,
    y: 45,
    category: "Labyrinth Dust Exclusion",
    metallurgy: "Viton (FKM) Fluoroelastomer with Stainless Garter Spring",
    tolerance: "Shaft Surface Ra 0.2 µm",
    description:
      "Guarantees leak-free operation in harsh abrasive environments containing silica dust, cement clinker, and mining slurry, operating reliably up to 200°C.",
    keySpecs: [
      { label: "Temp Rating", value: "-25°C to +200°C Continuous" },
      { label: "Lip Configuration", value: "Primary Oil + Secondary Dust Lip" },
      { label: "Chemical Resistance", value: "Synthetic Polyalphaolefin (PAO)" },
      { label: "Dust Protection", value: "Machined Labyrinth Deflector" },
    ],
  },
  {
    id: "roller-bearings",
    name: "Heavy-Duty Tapered & Spherical Roller Bearings",
    shortName: "Heavy Roller Bearings",
    tag: "LOAD BEARING",
    x: 42,
    y: 68,
    category: "High Radial & Axial Capacity",
    metallurgy: "High-Purity Vacuum Degassed Bearing Steel (100Cr6)",
    tolerance: "ABEC 3 / ISO Class 6",
    description:
      "Calculated for minimum L10h fatigue life exceeding 50,000 operational hours under continuous rated conveyor overhung and radial belt tension loads.",
    keySpecs: [
      { label: "Design Life", value: "L10h > 50,000 Operating Hours" },
      { label: "Radial Load Factor", value: "2.25x Dynamic Safety Factor" },
      { label: "Clearance Class", value: "C3 Radial Internal Clearance" },
      { label: "Bearing Brands", value: "SKF / FAG / Timken Tier 1" },
    ],
  },
  {
    id: "torque-arm",
    name: "Shock-Damped Reaction Torque Arm & Bracket",
    shortName: "Reaction Torque Arm",
    tag: "STABILIZATION",
    x: 78,
    y: 22,
    category: "Reaction Force Damping",
    metallurgy: "High-Yield Structural Steel with Polyurethane Bush",
    tolerance: "Turnbuckle Adjustable Length ±35 mm",
    description:
      "Anchors the shaft-mounted gearbox against rotational torque reaction, utilizing a vulcanized elastomer cushion to isolate conveyor frame vibrations and damp peak startup torque spikes.",
    keySpecs: [
      { label: "Shock Absorption", value: "Up to 40% Peak Torque Damping" },
      { label: "Adjustment", value: "Twin Threaded Turnbuckle" },
      { label: "Damping Bush", value: "High-Durometer Polyurethane" },
      { label: "Mounting Position", value: "Universal Left / Right Bracket" },
    ],
  },
];

export function GearboxHotspotExplorer() {
  const [activeId, setActiveId] = useState<string>("helical-gears");
  const [viewAngle, setViewAngle] = useState<"cutaway" | "schematic">("cutaway");

  const activeHotspot = hotspots.find((h) => h.id === activeId) || hotspots[0];

  return (
    <section className="relative overflow-hidden bg-[#0b0d0e] py-14 sm:py-20 border-b border-white/10 text-white">
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="status-pill mb-3">
              <span className="indicator-pulse" />
              <span>INTERACTIVE ENGINEERING CUTAWAY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-white">
              Exploded SMSR Gearbox Visualizer
            </h2>
            <p className="mt-2.5 max-w-2xl text-xs sm:text-sm text-[#a7adb3]">
              Explore the precision metallurgy, tooth geometry, and heavy mechanical seals inside Pixelara&apos;s flagship Shaft-Mounted Speed Reducer. Click any pulsing hotspot to inspect sub-micron tolerances.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#15191c] p-1 text-xs font-mono font-bold self-start md:self-auto">
            <button
              onClick={() => setViewAngle("cutaway")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewAngle === "cutaway"
                  ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                  : "text-[#a7adb3] hover:text-white"
              }`}
            >
              INTERNAL CUTAWAY
            </button>
            <button
              onClick={() => setViewAngle("schematic")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewAngle === "schematic"
                  ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                  : "text-[#a7adb3] hover:text-white"
              }`}
            >
              CAD VECTOR SCHEMATIC
            </button>
          </div>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] items-start">
          {/* Visual Interactive Canvas */}
          <div className="tech-card relative p-4 sm:p-6 overflow-hidden flex flex-col justify-between min-h-[460px] sm:min-h-[540px]">
            {/* Visual Header HUD */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#a7adb3]">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-[#f3a329] animate-ping" />
                <span className="text-white font-bold">MODEL: SMSR-2026-TITAN</span>
              </div>
              <span className="text-[#f3a329]">TOLERANCE: ISO 1328 CLASS 6</span>
            </div>

            {/* Canvas Stage */}
            <div className="relative my-auto w-full h-[320px] sm:h-[400px] flex items-center justify-center">
              {viewAngle === "cutaway" ? (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/industrial/smsr-gearbox.jpg"
                    alt="SMSR Gearbox Cutaway Inspection Model"
                    fill
                    priority
                    className="object-contain filter drop-shadow-[0_20px_50px_rgba(243,163,41,0.15)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              ) : (
                /* CAD Vector Blueprint Schematic */
                <svg
                  viewBox="0 0 500 350"
                  className="w-full h-full stroke-[#f3a329] fill-none"
                  style={{ strokeWidth: 1.5 }}
                >
                  <defs>
                    <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="500" height="350" fill="url(#grid-pattern)" />
                  
                  {/* Housing Outline */}
                  <path
                    d="M 120,60 L 380,60 Q 420,60 420,100 L 420,250 Q 420,290 380,290 L 120,290 Q 80,290 80,250 L 80,100 Q 80,60 120,60 Z"
                    stroke="#a7adb3"
                    strokeWidth="2"
                    fill="rgba(21, 25, 28, 0.8)"
                  />
                  {/* Main Gear Involute Circles */}
                  <circle cx="250" cy="175" r="95" stroke="#f3a329" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="250" cy="175" r="75" stroke="#f3a329" strokeWidth="1.5" />
                  <circle cx="250" cy="175" r="45" stroke="#ffffff" strokeWidth="2" fill="rgba(11, 13, 14, 0.9)" />
                  <circle cx="250" cy="175" r="28" stroke="#f3a329" strokeWidth="1.5" />

                  {/* Pinion Gear */}
                  <circle cx="360" cy="115" r="40" stroke="#f3a329" strokeWidth="1.5" strokeDasharray="3 2" />
                  <circle cx="360" cy="115" r="18" stroke="#ffffff" strokeWidth="1.5" fill="rgba(11,13,14,0.9)" />

                  {/* Reaction Torque Arm */}
                  <path d="M 380,60 L 460,30 L 470,45 L 390,75" stroke="#f3a329" strokeWidth="2" fill="rgba(243,163,41,0.1)" />
                  <circle cx="465" cy="38" r="8" stroke="#ffffff" strokeWidth="2" />

                  {/* Center Crosshair Lines */}
                  <line x1="250" y1="50" x2="250" y2="300" stroke="rgba(243,163,41,0.3)" strokeDasharray="2 2" />
                  <line x1="50" y1="175" x2="450" y2="175" stroke="rgba(243,163,41,0.3)" strokeDasharray="2 2" />
                  <line x1="360" y1="50" x2="360" y2="200" stroke="rgba(243,163,41,0.3)" strokeDasharray="2 2" />

                  {/* Dimensional Callouts */}
                  <text x="250" y="320" fill="#a7adb3" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    CENTER DISTANCE (C-C): 285.5 mm ± 0.02
                  </text>
                </svg>
              )}

              {/* Pulsing Hotspot Markers */}
              {hotspots.map((hotspot) => {
                const isSelected = hotspot.id === activeId;
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveId(hotspot.id)}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center size-8 sm:size-9 rounded-full transition-transform duration-200 cursor-pointer ${
                      isSelected ? "scale-125" : "hover:scale-115"
                    }`}
                    aria-label={`Inspect ${hotspot.name}`}
                  >
                    {/* Pulsing ring */}
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full transition-opacity ${
                        isSelected
                          ? "bg-[#f3a329] opacity-75 animate-ping"
                          : "bg-white/40 group-hover:bg-[#f3a329]/60 animate-pulse"
                      }`}
                    />

                    {/* Core button badge */}
                    <span
                      className={`relative inline-flex items-center justify-center size-6 sm:size-7 rounded-full text-[10px] font-mono font-black border transition-all ${
                        isSelected
                          ? "bg-[#f3a329] text-[#0b0d0e] border-white shadow-lg shadow-[#f3a329]/50"
                          : "bg-[#15191c]/90 text-white border-[#f3a329]/50 group-hover:bg-[#f3a329] group-hover:text-[#0b0d0e]"
                      }`}
                    >
                      +
                    </span>

                    {/* Floating mini-label on hover/select */}
                    <span
                      className={`absolute left-full ml-2 whitespace-nowrap rounded px-2 py-0.5 text-[9px] font-mono font-bold tracking-wider backdrop-blur-md border transition-all pointer-events-none ${
                        isSelected
                          ? "bg-[#f3a329] text-[#0b0d0e] border-[#f3a329] opacity-100 translate-x-0"
                          : "bg-[#0b0d0e]/90 text-white border-white/20 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                      }`}
                    >
                      {hotspot.shortName}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Hotspot Thumbnails Row */}
            <div className="border-t border-white/10 pt-3 flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-[10px] font-mono text-[#a7adb3] uppercase shrink-0 mr-1 flex items-center gap-1">
                <Sliders className="size-3 text-[#f3a329]" /> INSPECTION POINTS:
              </span>
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveId(h.id)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                    h.id === activeId
                      ? "bg-[#f3a329] text-[#0b0d0e]"
                      : "bg-[#0b0d0e] text-[#a7adb3] hover:text-white border border-white/10"
                  }`}
                >
                  {h.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hotspot Detailed Inspector Pane */}
          <div className="tech-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category Pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="status-pill text-[10px] font-mono">
                  <Sparkles className="size-3 text-[#f3a329]" />
                  <span>{activeHotspot.tag}</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-[#f3a329] bg-[#f3a329]/10 px-2 py-0.5 rounded border border-[#f3a329]/20">
                  {activeHotspot.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                {activeHotspot.name}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">
                {activeHotspot.description}
              </p>

              {/* Metallurgy & Tolerance Badges */}
              <div className="mt-5 space-y-2.5">
                <div className="rounded-md border border-white/10 bg-[#0b0d0e] p-3 text-xs">
                  <span className="text-[10px] font-mono uppercase text-[#f3a329] block mb-0.5 flex items-center gap-1.5">
                    <Flame className="size-3 text-[#f3a329]" /> METALLURGICAL ALLOY SPECIFICATION
                  </span>
                  <p className="font-semibold text-white font-mono text-[11px]">{activeHotspot.metallurgy}</p>
                </div>

                <div className="rounded-md border border-white/10 bg-[#0b0d0e] p-3 text-xs">
                  <span className="text-[10px] font-mono uppercase text-[#f3a329] block mb-0.5 flex items-center gap-1.5">
                    <ShieldCheck className="size-3 text-[#f3a329]" /> PRECISION TOLERANCE &amp; STANDARD
                  </span>
                  <p className="font-semibold text-white font-mono text-[11px]">{activeHotspot.tolerance}</p>
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[10px] font-mono font-bold tracking-widest text-white uppercase mb-2.5">
                  MEASURED LAB PARAMETERS
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {activeHotspot.keySpecs.map((spec, i) => (
                    <div key={i} className="rounded border border-white/5 bg-[#0b0d0e]/60 p-2 text-xs">
                      <span className="text-[9px] text-[#a7adb3] block uppercase">{spec.label}</span>
                      <strong className="font-mono text-white text-[11px] mt-0.5 block">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RFQ CTA for this component */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <span className="text-[11px] text-[#a7adb3] flex items-center gap-1 font-mono">
                <CheckCircle2 className="size-3.5 text-[#f3a329]" /> 100% CMM Verified
              </span>
              <a
                href="#quote"
                className="inline-flex items-center gap-1.5 bg-[#f3a329] px-4 py-2.5 text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-all rounded-md shadow-md shadow-[#f3a329]/20 active:scale-95"
              >
                REQUEST SPECS <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

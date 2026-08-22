"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Gauge,
  Cpu,
  Layers,
  SearchCheck,
} from "lucide-react";

import { QuoteModal } from "@/components/industrial/quote-modal";


type Hotspot = {
  id: string;
  name: string;
  shortName: string;
  tag: string;
  x: number;
  y: number;
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
    shortName: "Helical Gears",
    tag: "TRANSMISSION",
    x: 48,
    y: 42,
    category: "Tooth Flank Engineering",
    metallurgy: "20MnCr5 Alloy / Vacuum Carburized",
    tolerance: "ISO 1328 Class 6 (DIN 3962)",
    description:
      "Precision-hobbed and CNC flank ground helical teeth with modified crown profiles for whisper-quiet meshing and 98% efficiency per stage.",
    keySpecs: [
      { label: "Core Hardness", value: "32 - 38 HRC" },
      { label: "Case Hardness", value: "58 - 62 HRC (1.2mm)" },
      { label: "Tooth Profile", value: "Crowned Involute" },
      { label: "Standard", value: "AGMA 2001-D04" },
    ],
  },
  {
    id: "taper-bush",
    name: "Taper-Grip Bushing & Hollow Hub",
    shortName: "Taper Bush",
    tag: "SHAFT LOCK",
    x: 32,
    y: 52,
    category: "Keyless / Keyed Lock",
    metallurgy: "Ductile Iron / Forged C45",
    tolerance: "ISO 286-2 H7 / h6",
    description:
      "Direct shaft-mounting onto driven conveyor shafts without custom machining or fretting corrosion.",
    keySpecs: [
      { label: "Bore Range", value: "30 mm - 125 mm" },
      { label: "Locking Style", value: "Conical Taper" },
      { label: "Peak Torque", value: "18,500 Nm" },
      { label: "Mounting", value: "Direct Shaft" },
    ],
  },
  {
    id: "gg25-housing",
    name: "Heavy GG25 Cast Iron Monobloc Casing",
    shortName: "GG25 Casing",
    tag: "HOUSING",
    x: 65,
    y: 35,
    category: "Shock Frame",
    metallurgy: "Grade 250 (GG25) Grey Cast Iron",
    tolerance: "CNC Multi-Axis Bay",
    description:
      "Internal structural ribbing and external heat-dissipation fins to absorb heavy shock loads and keep sump temps < 80°C.",
    keySpecs: [
      { label: "Tensile Strength", value: "250 - 300 MPa" },
      { label: "Damping", value: "4x vs welded steel" },
      { label: "Ingress", value: "IP65 Enclosure" },
      { label: "Finish", value: "Epoxy Enamel" },
    ],
  },
  {
    id: "sprag-backstop",
    name: "Sprag Clutch Anti-Runback Backstop",
    shortName: "Backstop Clutch",
    tag: "SAFETY",
    x: 72,
    y: 60,
    category: "Anti-Reversal",
    metallurgy: "Hardened Chrome-Steel Sprags",
    tolerance: "Zero Backlash",
    description:
      "Instant mechanical lock preventing high-tonnage inclined conveyor belts or bucket elevators from slipping backward.",
    keySpecs: [
      { label: "Response", value: "< 0.05s Instant" },
      { label: "Holding Torque", value: "300% Rated" },
      { label: "Lubrication", value: "Sump Immersed" },
      { label: "Life", value: "> 100k Cycles" },
    ],
  },
  {
    id: "viton-seals",
    name: "Double-Lip Viton FKM High-Temp Seals",
    shortName: "Viton Seals",
    tag: "SEALS",
    x: 22,
    y: 45,
    category: "Labyrinth Dust Barrier",
    metallurgy: "Viton (FKM) + Stainless Spring",
    tolerance: "Ra 0.2 µm",
    description:
      "Guarantees leak-free operation in harsh abrasive silica dust and cement clinker environments up to 200°C.",
    keySpecs: [
      { label: "Temp Rating", value: "-25°C to +200°C" },
      { label: "Lip Design", value: "Double Dust Lip" },
      { label: "Media", value: "Synthetic PAO" },
      { label: "Dust Shield", value: "Labyrinth Ring" },
    ],
  },
];

type ApplicationType = {
  id: string;
  name: string;
  category: string;
  baseServiceFactor: number;
};

const applicationTypes: ApplicationType[] = [
  { id: "belt-conveyor", name: "Heavy Belt Conveyor", category: "Bulk Handling", baseServiceFactor: 1.5 },
  { id: "bucket-elevator", name: "Bucket Elevator", category: "Vertical Lift", baseServiceFactor: 1.75 },
  { id: "screw-conveyor", name: "Screw Feeder", category: "Friction Feed", baseServiceFactor: 1.6 },
  { id: "crusher-screen", name: "Crusher & Screen", category: "Cyclic Shock", baseServiceFactor: 2.0 },
];

export function EngineeringWorkbench() {
  const [activeTab, setActiveTab] = useState<"hotspots" | "wizard" | "metrology" | "systems">("hotspots");
  const [activeHotspotId, setActiveHotspotId] = useState<string>("helical-gears");
  const [hotspotView, setHotspotView] = useState<"cutaway" | "schematic">("cutaway");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Sizing Wizard State
  const [selectedAppId, setSelectedAppId] = useState<string>("belt-conveyor");
  const [powerKw, setPowerKw] = useState<number>(22);
  const [motorRpm, setMotorRpm] = useState<number>(1440);
  const [targetOutputRpm, setTargetOutputRpm] = useState<number>(70);
  const [operatingHours, setOperatingHours] = useState<"8h" | "16h" | "24h">("24h");
  const [shockLevel, setShockLevel] = useState<"uniform" | "moderate" | "heavy">("moderate");
  const [requiresBackstop, setRequiresBackstop] = useState<boolean>(true);

  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];
  const selectedApp = applicationTypes.find((a) => a.id === selectedAppId) || applicationTypes[0];

  // Calculations
  const hoursMultiplier = operatingHours === "24h" ? 1.3 : operatingHours === "16h" ? 1.15 : 1.0;
  const shockMultiplier = shockLevel === "heavy" ? 1.6 : shockLevel === "moderate" ? 1.25 : 1.0;
  const serviceFactor = Number((selectedApp.baseServiceFactor * (hoursMultiplier * 0.5 + shockMultiplier * 0.5)).toFixed(2));

  const standardRatios = [5, 13, 20, 25];
  const exactRatio = (motorRpm / targetOutputRpm).toFixed(2);
  const closestRatio = standardRatios.reduce((prev, curr) =>
    Math.abs(curr - Number(exactRatio)) < Math.abs(prev - Number(exactRatio)) ? curr : prev
  );
  const actualOutputRpm = (motorRpm / closestRatio).toFixed(1);
  const nominalTorque = Math.round((powerKw * 9550) / Number(actualOutputRpm));
  const designTorque = Math.round(nominalTorque * serviceFactor);

  const getSizedModel = (torque: number) => {
    if (torque <= 1350) return { model: "SMSR Size C", rating: 1600, bore: "35 - 42 mm", bush: "2012" };
    if (torque <= 2600) return { model: "SMSR Size D", rating: 3100, bore: "40 - 50 mm", bush: "2517" };
    if (torque <= 4800) return { model: "SMSR Size E", rating: 5600, bore: "50 - 60 mm", bush: "3020" };
    if (torque <= 8900) return { model: "SMSR Size F", rating: 10200, bore: "60 - 75 mm", bush: "3525" };
    if (torque <= 13500) return { model: "SMSR Size G", rating: 15400, bore: "70 - 85 mm", bush: "4030" };
    return { model: "SMSR Size H / J Heavy", rating: 22000, bore: "90 - 125 mm", bush: "4535 / 5050" };
  };

  const sizedGearbox = getSizedModel(designTorque);

  return (
    <section className="relative overflow-hidden bg-[#0e1114] py-10 sm:py-14 border-y border-white/10 text-white">
      <div className="hero-grid absolute inset-0 opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Compact Hub Header with Integrated Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="status-pill mb-2">
              <span className="indicator-pulse" />
              <span>INTERACTIVE ENGINEERING SUITE</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              SMSR Drive Engineering Workbench
            </h2>
          </div>

          {/* 4 Interactive Hub Tabs */}
          <div className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#15191c] p-1 text-xs font-mono font-bold overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab("hotspots")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "hotspots"
                  ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                  : "text-[#a7adb3] hover:text-white"
              }`}
            >
              <Cpu className="size-3.5" />
              <span>01. HOTSPOT CUTAWAY</span>
            </button>

            <button
              onClick={() => setActiveTab("wizard")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "wizard"
                  ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                  : "text-[#a7adb3] hover:text-white"
              }`}
            >
              <Gauge className="size-3.5" />
              <span>02. DRIVE SIZING WIZARD</span>
            </button>

            <button
              onClick={() => setActiveTab("metrology")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "metrology"
                  ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                  : "text-[#a7adb3] hover:text-white"
              }`}
            >
              <SearchCheck className="size-3.5" />
              <span>03. ZEISS METROLOGY</span>
            </button>

            <button
              onClick={() => setActiveTab("systems")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "systems"
                  ? "bg-[#f3a329] text-[#0b0d0e] shadow-md shadow-[#f3a329]/20"
                  : "text-[#a7adb3] hover:text-white"
              }`}
            >
              <Layers className="size-3.5" />
              <span>04. CONVEYORS &amp; MAGNETS</span>
            </button>
          </div>
        </div>

        {/* TAB 1: HOTSPOT CUTAWAY VISUALIZER */}
        {activeTab === "hotspots" && (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start animate-fadeIn">
            {/* Visual Stage */}
            <div className="tech-card p-4 sm:p-5 relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono">
                <span className="text-[#f3a329] font-bold flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#f3a329] animate-ping" /> SMSR-2026 CUTAWAY
                </span>
                <div className="flex gap-1 bg-[#0b0d0e] p-0.5 rounded border border-white/10 text-[10px]">
                  <button
                    onClick={() => setHotspotView("cutaway")}
                    className={`px-2 py-0.5 rounded ${hotspotView === "cutaway" ? "bg-[#f3a329] text-[#0b0d0e]" : "text-[#a7adb3]"}`}
                  >
                    PHOTO CUTAWAY
                  </button>
                  <button
                    onClick={() => setHotspotView("schematic")}
                    className={`px-2 py-0.5 rounded ${hotspotView === "schematic" ? "bg-[#f3a329] text-[#0b0d0e]" : "text-[#a7adb3]"}`}
                  >
                    CAD SCHEMATIC
                  </button>
                </div>
              </div>

              {/* Stage Viewport */}
              <div className="relative my-auto w-full h-[260px] sm:h-[300px] flex items-center justify-center">
                {hotspotView === "cutaway" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/industrial/smsr-gearbox.jpg"
                      alt="SMSR Cutaway"
                      fill
                      priority
                      className="object-contain filter drop-shadow-[0_15px_30px_rgba(243,163,41,0.15)]"
                    />
                  </div>
                ) : (
                  <svg viewBox="0 0 500 300" className="w-full h-full stroke-[#f3a329] fill-none">
                    <rect width="500" height="300" fill="rgba(11,13,14,0.6)" />
                    <path d="M 120,50 L 380,50 Q 420,50 420,90 L 420,230 Q 420,270 380,270 L 120,270 Q 80,270 80,230 L 80,90 Q 80,50 120,50 Z" stroke="#a7adb3" strokeWidth="2" />
                    <circle cx="250" cy="160" r="85" stroke="#f3a329" strokeWidth="2" strokeDasharray="4 2" />
                    <circle cx="250" cy="160" r="40" stroke="#ffffff" strokeWidth="2" fill="rgba(11,13,14,0.9)" />
                    <circle cx="350" cy="105" r="35" stroke="#f3a329" strokeWidth="1.5" strokeDasharray="3 2" />
                    <line x1="250" y1="40" x2="250" y2="280" stroke="rgba(243,163,41,0.3)" strokeDasharray="2 2" />
                  </svg>
                )}

                {/* Hotspots */}
                {hotspots.map((h) => {
                  const isSel = h.id === activeHotspotId;
                  return (
                    <button
                      key={h.id}
                      onClick={() => setActiveHotspotId(h.id)}
                      style={{ left: `${h.x}%`, top: `${h.y}%` }}
                      className={`group absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center size-7 rounded-full cursor-pointer ${
                        isSel ? "scale-125" : "hover:scale-115"
                      }`}
                    >
                      <span className={`absolute inline-flex h-full w-full rounded-full ${isSel ? "bg-[#f3a329] opacity-80 animate-ping" : "bg-white/30 animate-pulse"}`} />
                      <span className={`relative inline-flex items-center justify-center size-5 rounded-full text-[9px] font-mono font-black border ${
                        isSel ? "bg-[#f3a329] text-[#0b0d0e] border-white" : "bg-[#15191c] text-white border-[#f3a329]/60"
                      }`}>
                        +
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Hotspot Pills Strip */}
              <div className="border-t border-white/10 pt-2.5 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspotId(h.id)}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                      h.id === activeHotspotId
                        ? "bg-[#f3a329] text-[#0b0d0e]"
                        : "bg-[#0b0d0e] text-[#a7adb3] hover:text-white border border-white/10"
                    }`}
                  >
                    {h.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Hotspot Inspector */}
            <div className="tech-card p-5 sm:p-6 flex flex-col justify-between min-h-[380px] sm:min-h-[440px]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#f3a329] bg-[#f3a329]/10 px-2 py-0.5 rounded border border-[#f3a329]/20">
                    {activeHotspot.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#a7adb3]">ISO 1328 CLASS 6</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white">{activeHotspot.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#a7adb3]">{activeHotspot.description}</p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded border border-white/10 bg-[#0b0d0e] p-2.5">
                    <span className="text-[9px] font-mono uppercase text-[#f3a329] block">METALLURGY</span>
                    <strong className="text-white font-mono text-[11px] block">{activeHotspot.metallurgy}</strong>
                  </div>
                  <div className="rounded border border-white/10 bg-[#0b0d0e] p-2.5">
                    <span className="text-[9px] font-mono uppercase text-[#f3a329] block">TOLERANCE &amp; STANDARD</span>
                    <strong className="text-white font-mono text-[11px] block">{activeHotspot.tolerance}</strong>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-1.5">
                  {activeHotspot.keySpecs.map((s, i) => (
                    <div key={i} className="rounded border border-white/5 bg-[#0b0d0e]/60 p-2 text-xs">
                      <span className="text-[8px] text-[#a7adb3] block uppercase">{s.label}</span>
                      <strong className="font-mono text-white text-[10px] block mt-0.5">{s.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#a7adb3] flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-[#f3a329]" /> 100% CMM Inspected
                </span>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-[#f3a329] px-4 py-2 text-[11px] font-bold tracking-wider text-[#0b0d0e] rounded hover:bg-[#ffc368] transition-all cursor-pointer"
                >
                  REQUEST SMSR QUOTE
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DRIVE SIZING WIZARD */}
        {activeTab === "wizard" && (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start animate-fadeIn">
            {/* Sizing Controls */}
            <div className="tech-card p-5 sm:p-6 space-y-4">
              {/* Application Selection */}
              <div>
                <span className="text-xs font-mono font-bold text-[#f3a329] block mb-2">01. SELECT MACHINE DUTY:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {applicationTypes.map((app) => (
                    <button
                      key={app.id}
                      onClick={() => setSelectedAppId(app.id)}
                      className={`p-2 rounded border text-left text-xs transition-all cursor-pointer ${
                        selectedAppId === app.id
                          ? "border-[#f3a329] bg-[#f3a329]/10 text-white font-bold"
                          : "border-white/10 bg-[#0b0d0e] text-[#a7adb3] hover:text-white"
                      }`}
                    >
                      <span className="block truncate">{app.name}</span>
                      <span className="text-[9px] font-mono text-[#f3a329]">{app.baseServiceFactor}x S_f</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Power and Speed Sliders */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-[#c1c6ca]">MOTOR POWER:</span>
                    <strong className="text-[#f3a329]">{powerKw} kW ({Math.round(powerKw * 1.341)} HP)</strong>
                  </div>
                  <input
                    type="range"
                    min="2.2"
                    max="90"
                    step="1"
                    aria-label="Motor power slider"
                    value={powerKw}
                    onChange={(e) => setPowerKw(Number(e.target.value))}
                    className="w-full h-2 rounded bg-[#0b0d0e] accent-[#f3a329] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-[#c1c6ca]">OUTPUT SPEED:</span>
                    <strong className="text-[#f3a329]">{targetOutputRpm} RPM</strong>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="1"
                    aria-label="Output RPM slider"
                    value={targetOutputRpm}
                    onChange={(e) => setTargetOutputRpm(Number(e.target.value))}
                    className="w-full h-2 rounded bg-[#0b0d0e] accent-[#f3a329] cursor-pointer"
                  />
                </div>
              </div>

              {/* Schedule, Shock, Motor RPM, and Backstop Toggles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#a7adb3] block mb-1">MOTOR RPM:</span>
                  <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                    {[
                      { val: 1440, label: "1440" },
                      { val: 960, label: "960" },
                    ].map((item) => (
                      <button
                        key={item.val}
                        onClick={() => setMotorRpm(item.val)}
                        className={`py-1 rounded border text-center text-[10px] transition-all cursor-pointer ${
                          motorRpm === item.val ? "border-[#f3a329] bg-[#f3a329]/10 text-white font-bold" : "border-white/10 bg-[#0b0d0e] text-[#a7adb3]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#a7adb3] block mb-1">SCHEDULE:</span>
                  <div className="grid grid-cols-3 gap-1 text-xs font-mono">
                    {[
                      { id: "8h", label: "8h" },
                      { id: "16h", label: "16h" },
                      { id: "24h", label: "24/7" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setOperatingHours(item.id as "8h" | "16h" | "24h")}
                        className={`py-1 rounded border text-center text-[10px] transition-all cursor-pointer ${
                          operatingHours === item.id ? "border-[#f3a329] bg-[#f3a329]/10 text-white font-bold" : "border-white/10 bg-[#0b0d0e] text-[#a7adb3]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#a7adb3] block mb-1">SHOCK:</span>
                  <div className="grid grid-cols-3 gap-1 text-xs font-mono">
                    {[
                      { id: "uniform", label: "Low" },
                      { id: "moderate", label: "Med" },
                      { id: "heavy", label: "High" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setShockLevel(item.id as "uniform" | "moderate" | "heavy")}
                        className={`py-1 rounded border text-center text-[10px] transition-all cursor-pointer ${
                          shockLevel === item.id ? "border-[#f3a329] bg-[#f3a329]/10 text-white font-bold" : "border-white/10 bg-[#0b0d0e] text-[#a7adb3]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#a7adb3] block mb-1">BACKSTOP:</span>
                  <button
                    onClick={() => setRequiresBackstop(!requiresBackstop)}
                    className={`w-full py-1 rounded border text-center text-[10px] font-mono transition-all cursor-pointer ${
                      requiresBackstop ? "border-[#f3a329] bg-[#f3a329]/10 text-[#f3a329] font-bold" : "border-white/10 bg-[#0b0d0e] text-[#a7adb3]"
                    }`}
                  >
                    {requiresBackstop ? "SPRAG FITTED" : "NONE"}
                  </button>
                </div>
              </div>
            </div>

            {/* Sizing Output Card */}
            <div className="tech-card p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono text-[#f3a329] font-bold">SIZING RESULT</span>
                  <span className="text-[10px] font-mono text-[#a7adb3]">S_f: {serviceFactor}x</span>
                </div>

                <div className="my-3 p-3 rounded-lg bg-[#f3a329]/10 border border-[#f3a329]/30">
                  <span className="text-[9px] font-mono text-[#f3a329] uppercase font-bold block">RECOMMENDED MODEL</span>
                  <h4 className="text-xl sm:text-2xl font-black text-white">{sizedGearbox.model}</h4>
                  <p className="text-xs text-[#a7adb3] font-mono mt-0.5">
                    Ratio {closestRatio}:1 • Actual Output: {actualOutputRpm} RPM • Bore {sizedGearbox.bore}
                  </p>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Design Torque:</span>
                    <strong className="text-[#f3a329]">{designTorque.toLocaleString()} Nm</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Unit Max Capacity:</span>
                    <strong className="text-white">{sizedGearbox.rating.toLocaleString()} Nm</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Taper Bush Part:</span>
                    <strong className="text-white">Bush {sizedGearbox.bush}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="mt-4 w-full bg-[#f3a329] py-3 text-center text-xs font-bold tracking-widest text-[#0b0d0e] rounded hover:bg-[#ffc368] transition-all cursor-pointer"
              >
                REQUEST FACTORY QUOTE FOR {sizedGearbox.model}
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: CARL ZEISS METROLOGY & TESTING */}
        {activeTab === "metrology" && (
          <div className="mt-6 grid gap-6 lg:grid-cols-2 items-center animate-fadeIn">
            <div className="space-y-3 text-xs">
              <div className="tech-card p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="size-4 text-[#f3a329] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-bold">Carl Zeiss PRISMO 3D CMM Metrology</strong>
                    <p className="text-[#a7adb3] mt-1">
                      Gear tooth involute pitch, lead alignment, and surface profile scanned to sub-micron accuracy (ISO 1328 Class 6).
                    </p>
                  </div>
                </div>
              </div>

              <div className="tech-card p-4">
                <div className="flex items-start gap-3">
                  <Flame className="size-4 text-[#f3a329] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-bold">Vacuum Carburizing &amp; Case Hardening</strong>
                    <p className="text-[#a7adb3] mt-1">
                      20MnCr5 alloy steel heat-treated to 58-62 HRC for exceptional core toughness and extreme contact fatigue life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tech-card p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="size-4 text-[#f3a329] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-bold">100% Dynamometer Spin Testing</strong>
                    <p className="text-[#a7adb3] mt-1">
                      Every unit is tested for vibration velocity (&lt; 1.8 mm/s), thermal rise, and backstop hold before factory sign-off.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-card relative p-2 overflow-hidden h-[300px] sm:h-[340px]">
              <Image
                src="/images/industrial/quality-cmm.jpg"
                alt="Carl Zeiss CMM Gear Metrology Lab"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-3 left-3 right-3 bg-[#15191c]/90 backdrop-blur-md p-3 rounded text-xs text-white border border-white/10 flex justify-between items-center">
                <span>Carl Zeiss PRISMO Scanning Bay</span>
                <span className="text-[#f3a329] font-mono font-bold">EN 10204 3.1 Traceable</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONVEYORS & MAGNETIC SEPARATION */}
        {activeTab === "systems" && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 animate-fadeIn">
            <div className="tech-card group flex flex-col justify-between overflow-hidden">
              <div className="relative h-44 w-full">
                <Image
                  src="/images/industrial/conveyor-drive.jpg"
                  alt="Overland Conveyor Drive Package"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded bg-[#0b0d0e]/85 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#f3a329] border border-white/10">
                  CONVEYOR DRIVES
                </span>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base font-bold text-white">Overland Conveyor Pulley &amp; Drive Systems</h4>
                  <p className="mt-1 text-xs text-[#a7adb3]">
                    Taper-lock drive drums, take-ups, and pillow blocks engineered for zero slippage on high-tension belts.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                  <Link href="/products#conveyor-components" className="text-xs font-bold text-[#f3a329] hover:underline">
                    VIEW COMPONENTS &rarr;
                  </Link>
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-3 py-1.5 text-[11px] font-bold bg-white/10 hover:bg-[#f3a329] hover:text-[#0b0d0e] rounded transition-all cursor-pointer"
                  >
                    QUOTE
                  </button>
                </div>
              </div>
            </div>

            <div className="tech-card group flex flex-col justify-between overflow-hidden">
              <div className="relative h-44 w-full">
                <Image
                  src="/images/industrial/magnetic-separator.jpg"
                  alt="Suspension Magnetic Separator"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191c] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded bg-[#0b0d0e]/85 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#f3a329] border border-white/10">
                  TRAMP IRON REMOVAL
                </span>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base font-bold text-white">Cross-Belt Suspension Magnetic Separators</h4>
                  <p className="mt-1 text-xs text-[#a7adb3]">
                    Permanent &amp; electromagnetic overband separators automatically extracting damaging tramp metal.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                  <Link href="/products#magnetic-separation" className="text-xs font-bold text-[#f3a329] hover:underline">
                    VIEW SEPARATORS &rarr;
                  </Link>
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-3 py-1.5 text-[11px] font-bold bg-white/10 hover:bg-[#f3a329] hover:text-[#0b0d0e] rounded transition-all cursor-pointer"
                  >
                    QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} preselectedProduct="smsr-gearbox" />
    </section>
  );
}

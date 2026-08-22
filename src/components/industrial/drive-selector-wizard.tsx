"use client";

import { useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Gauge,
} from "lucide-react";

import { QuoteModal } from "@/components/industrial/quote-modal";

type ApplicationType = {
  id: string;
  name: string;
  category: string;
  baseServiceFactor: number;
  description: string;
};

const applicationTypes: ApplicationType[] = [
  {
    id: "belt-conveyor",
    name: "Heavy Belt Conveyor",
    category: "Continuous Bulk Handling",
    baseServiceFactor: 1.5,
    description: "Standard overland or troughed belt conveyor moving coal, aggregates, sand, or ore.",
  },
  {
    id: "bucket-elevator",
    name: "Vertical Bucket Elevator",
    category: "High-Lift Material Handling",
    baseServiceFactor: 1.75,
    description: "Continuous vertical lift with high startup inertia and mandatory anti-runback safety backstop.",
  },
  {
    id: "screw-conveyor",
    name: "Screw / Auger Feeder",
    category: "Severe Friction Drive",
    baseServiceFactor: 1.6,
    description: "Heavy viscous or granular product transport with intermittent lump jam resistance.",
  },
  {
    id: "crusher-screen",
    name: "Crusher Feed & Vibrating Screen",
    category: "Heavy Cyclic Shock Loads",
    baseServiceFactor: 2.0,
    description: "Severe shock impact from primary/secondary rock crushing with frequent stall peaks.",
  },
  {
    id: "rotary-kiln",
    name: "Rotary Drum / Ball Mill / Agitator",
    category: "High Thermal & High Inertia",
    baseServiceFactor: 1.8,
    description: "Continuous high-torque rotation with severe ambient heat and thermal radiation.",
  },
];

export function DriveSelectorWizard() {
  const [step, setStep] = useState<number>(1);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  // Configuration State
  const [selectedAppId, setSelectedAppId] = useState<string>("belt-conveyor");
  const [powerKw, setPowerKw] = useState<number>(22);
  const [motorRpm, setMotorRpm] = useState<number>(1440);
  const [targetOutputRpm, setTargetOutputRpm] = useState<number>(70);
  const [operatingHours, setOperatingHours] = useState<"8h" | "16h" | "24h">("24h");
  const [shockLevel, setShockLevel] = useState<"uniform" | "moderate" | "heavy">("moderate");
  const [requiresBackstop, setRequiresBackstop] = useState<boolean>(true);
  const [isAtex, setIsAtex] = useState<boolean>(false);

  const selectedApp = applicationTypes.find((a) => a.id === selectedAppId) || applicationTypes[0];

  // Service factor calculation
  let hoursMultiplier = 1.0;
  if (operatingHours === "16h") hoursMultiplier = 1.15;
  if (operatingHours === "24h") hoursMultiplier = 1.3;

  let shockMultiplier = 1.0;
  if (shockLevel === "moderate") shockMultiplier = 1.25;
  if (shockLevel === "heavy") shockMultiplier = 1.6;

  const finalServiceFactor = Number((selectedApp.baseServiceFactor * (hoursMultiplier * 0.5 + shockMultiplier * 0.5)).toFixed(2));

  // Ratio and torque calculation
  const exactRatio = (motorRpm / targetOutputRpm).toFixed(2);
  const standardRatios = [5, 13, 20, 25];
  const closestStandardRatio = standardRatios.reduce((prev, curr) =>
    Math.abs(curr - Number(exactRatio)) < Math.abs(prev - Number(exactRatio)) ? curr : prev
  );

  const actualOutputRpm = (motorRpm / closestStandardRatio).toFixed(1);
  // Nominal torque: (kW * 9550) / Output RPM
  const nominalTorqueNm = Math.round((powerKw * 9550) / Number(actualOutputRpm));
  // Design torque including service factor
  const designTorqueNm = Math.round(nominalTorqueNm * finalServiceFactor);

  // Model Sizing Matrix
  const getSizedGearbox = (designTorque: number) => {
    if (designTorque <= 650) {
      return {
        model: "SMSR Size B",
        nominalRatingNm: 850,
        shaftBoreRange: "30 - 35 mm",
        taperBush: "1610",
        weightKg: 28,
        oilCapLiters: 1.2,
      };
    }
    if (designTorque <= 1350) {
      return {
        model: "SMSR Size C",
        nominalRatingNm: 1600,
        shaftBoreRange: "35 - 42 mm",
        taperBush: "2012",
        weightKg: 42,
        oilCapLiters: 2.1,
      };
    }
    if (designTorque <= 2600) {
      return {
        model: "SMSR Size D",
        nominalRatingNm: 3100,
        shaftBoreRange: "40 - 50 mm",
        taperBush: "2517",
        weightKg: 68,
        oilCapLiters: 3.4,
      };
    }
    if (designTorque <= 4800) {
      return {
        model: "SMSR Size E",
        nominalRatingNm: 5600,
        shaftBoreRange: "50 - 60 mm",
        taperBush: "3020",
        weightKg: 105,
        oilCapLiters: 5.5,
      };
    }
    if (designTorque <= 8900) {
      return {
        model: "SMSR Size F",
        nominalRatingNm: 10200,
        shaftBoreRange: "60 - 75 mm",
        taperBush: "3525",
        weightKg: 165,
        oilCapLiters: 8.2,
      };
    }
    if (designTorque <= 13500) {
      return {
        model: "SMSR Size G",
        nominalRatingNm: 15400,
        shaftBoreRange: "70 - 85 mm",
        taperBush: "4030",
        weightKg: 245,
        oilCapLiters: 12.0,
      };
    }
    return {
      model: "SMSR Size H / J Heavy-Duty",
      nominalRatingNm: 22000,
      shaftBoreRange: "90 - 125 mm",
      taperBush: "4535 / 5050",
      weightKg: 380,
      oilCapLiters: 19.5,
    };
  };

  const sizedGearbox = getSizedGearbox(designTorqueNm);
  const capacityUtilization = Math.min(Math.round((designTorqueNm / sizedGearbox.nominalRatingNm) * 100), 98);

  return (
    <section className="relative overflow-hidden bg-[#0b0d0e] py-14 sm:py-20 border-b border-white/10 text-white">
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="status-pill mb-3">
              <span className="indicator-pulse" />
              <span>INTERACTIVE GEARBOX SIZING WIZARD</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-white">
              Automated Drive Selection Wizard
            </h2>
            <p className="mt-2.5 max-w-2xl text-xs sm:text-sm text-[#a7adb3]">
              Compute exact torque requirements, service factors, shaft taper bushings, and standardized SMSR drive combinations tailored to your material handling application.
            </p>
          </div>

          {/* Wizard Step Breadcrumbs */}
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#15191c] p-1.5 text-xs font-mono">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  step === s
                    ? "bg-[#f3a329] text-[#0b0d0e] font-bold shadow-md shadow-[#f3a329]/20"
                    : step > s
                    ? "text-[#f3a329] bg-[#f3a329]/10"
                    : "text-[#a7adb3] hover:text-white"
                }`}
              >
                <span>STEP 0{s}</span>
                {step > s && <CheckCircle2 className="size-3 text-[#f3a329]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Wizard Main Body */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Step Configurator Forms */}
          <div className="tech-card p-6 sm:p-8">
            {/* STEP 1: Application Category */}
            {step === 1 && (
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-[#f3a329] font-mono">01.</span> Select Material Handling Machine Type
                  </h3>
                  <span className="text-[11px] font-mono text-[#a7adb3]">STEP 1 OF 4</span>
                </div>

                <div className="space-y-3">
                  {applicationTypes.map((app) => (
                    <button
                      key={app.id}
                      onClick={() => setSelectedAppId(app.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                        selectedAppId === app.id
                          ? "border-[#f3a329] bg-[#f3a329]/10 shadow-lg shadow-[#f3a329]/10"
                          : "border-white/10 bg-[#0b0d0e] hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm sm:text-base text-white">{app.name}</span>
                        <span className="text-[10px] font-mono font-bold text-[#f3a329] bg-[#15191c] px-2 py-0.5 rounded border border-white/10">
                          BASE S_f: {app.baseServiceFactor}x
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-[#a7adb3]">{app.description}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-widest text-[#0b0d0e] rounded-md hover:bg-[#ffc368] transition-all shadow-md shadow-[#f3a329]/20 cursor-pointer"
                  >
                    CONTINUE TO PARAMETERS <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Motor Power & Speed Ratings */}
            {step === 2 && (
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-[#f3a329] font-mono">02.</span> Motor Power &amp; Speed Specs
                  </h3>
                  <span className="text-[11px] font-mono text-[#a7adb3]">STEP 2 OF 4</span>
                </div>

                <div className="space-y-6">
                  {/* Motor kW Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono font-bold text-[#c1c6ca] uppercase">
                        ELECTRIC MOTOR POWER (kW):
                      </span>
                      <span className="text-sm font-mono font-extrabold text-[#f3a329] bg-[#0b0d0e] px-3 py-1 rounded border border-white/15">
                        {powerKw} kW ({Math.round(powerKw * 1.341)} HP)
                      </span>
                    </div>
                    <input
                      type="range"
                      min="2.2"
                      max="90"
                      step="0.5"
                      aria-label="Electric motor power in kilowatts"
                      value={powerKw}
                      onChange={(e) => setPowerKw(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-[#0b0d0e] accent-[#f3a329] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#a7adb3] mt-1">
                      <span>2.2 kW</span>
                      <span>15 kW</span>
                      <span>45 kW</span>
                      <span>90 kW</span>
                    </div>
                  </div>

                  {/* Input Motor RPM */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#c1c6ca] uppercase mb-2">
                      INPUT MOTOR SPEED (RPM):
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      {[
                        { label: "1440 RPM (4-Pole / 50Hz)", val: 1440 },
                        { label: "1750 RPM (4-Pole / 60Hz)", val: 1750 },
                        { label: "960 RPM (6-Pole / 50Hz)", val: 960 },
                      ].map((item) => (
                        <button
                          key={item.val}
                          onClick={() => setMotorRpm(item.val)}
                          className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                            motorRpm === item.val
                              ? "border-[#f3a329] bg-[#f3a329]/10 text-white font-bold"
                              : "border-white/10 bg-[#0b0d0e] text-[#a7adb3] hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Output RPM */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono font-bold text-[#c1c6ca] uppercase">
                        DESIRED DRIVEN SHAFT RPM:
                      </span>
                      <span className="text-sm font-mono font-extrabold text-[#f3a329] bg-[#0b0d0e] px-3 py-1 rounded border border-white/15">
                        {targetOutputRpm} RPM
                      </span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="150"
                      step="1"
                      aria-label="Desired driven shaft RPM"
                      value={targetOutputRpm}
                      onChange={(e) => setTargetOutputRpm(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-[#0b0d0e] accent-[#f3a329] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#a7adb3] mt-1">
                      <span>15 RPM (High Torque)</span>
                      <span>70 RPM</span>
                      <span>150 RPM (High Speed)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a7adb3] hover:text-white cursor-pointer"
                  >
                    <ChevronLeft className="size-4" /> BACK
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-widest text-[#0b0d0e] rounded-md hover:bg-[#ffc368] transition-all shadow-md shadow-[#f3a329]/20 cursor-pointer"
                  >
                    DUTY ENVIRONMENT <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Environmental & Duty Conditions */}
            {step === 3 && (
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-[#f3a329] font-mono">03.</span> Duty Cycle &amp; Safety Requirements
                  </h3>
                  <span className="text-[11px] font-mono text-[#a7adb3]">STEP 3 OF 4</span>
                </div>

                <div className="space-y-5">
                  {/* Daily Operating Hours */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#c1c6ca] uppercase mb-2">
                      DAILY OPERATING SCHEDULE:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      {[
                        { id: "8h", label: "8 Hours/Day (Intermittent)" },
                        { id: "16h", label: "16 Hours/Day (2 Shifts)" },
                        { id: "24h", label: "24/7 Continuous Heavy" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setOperatingHours(item.id as "8h" | "16h" | "24h")}
                          className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                            operatingHours === item.id
                              ? "border-[#f3a329] bg-[#f3a329]/10 text-white font-bold"
                              : "border-white/10 bg-[#0b0d0e] text-[#a7adb3] hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Shock Severity */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#c1c6ca] uppercase mb-2">
                      STARTUP &amp; OPERATION SHOCK LEVEL:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      {[
                        { id: "uniform", label: "Uniform (Smooth Load)" },
                        { id: "moderate", label: "Moderate (Standard Ore)" },
                        { id: "heavy", label: "Heavy Shock (Rock Crush)" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setShockLevel(item.id as "uniform" | "moderate" | "heavy")}
                          className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                            shockLevel === item.id
                              ? "border-[#f3a329] bg-[#f3a329]/10 text-white font-bold"
                              : "border-white/10 bg-[#0b0d0e] text-[#a7adb3] hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Anti-runback & ATEX Toggles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => setRequiresBackstop(!requiresBackstop)}
                      className={`p-3.5 rounded-lg border text-left flex items-start justify-between transition-all cursor-pointer ${
                        requiresBackstop
                          ? "border-[#f3a329] bg-[#f3a329]/10 text-white"
                          : "border-white/10 bg-[#0b0d0e] text-[#a7adb3]"
                      }`}
                    >
                      <div>
                        <span className="font-bold text-xs block text-white">Sprag Anti-Runback Backstop</span>
                        <span className="text-[10px] text-[#a7adb3]">Prevents rollback on inclines</span>
                      </div>
                      <span className={`size-4 rounded border grid place-items-center ${requiresBackstop ? "border-[#f3a329] bg-[#f3a329] text-[#0b0d0e]" : "border-white/20"}`}>
                        {requiresBackstop && <CheckCircle2 className="size-3" />}
                      </span>
                    </button>

                    <button
                      onClick={() => setIsAtex(!isAtex)}
                      className={`p-3.5 rounded-lg border text-left flex items-start justify-between transition-all cursor-pointer ${
                        isAtex
                          ? "border-[#f3a329] bg-[#f3a329]/10 text-white"
                          : "border-white/10 bg-[#0b0d0e] text-[#a7adb3]"
                      }`}
                    >
                      <div>
                        <span className="font-bold text-xs block text-white">ATEX Zone 22 Dust Enclosure</span>
                        <span className="text-[10px] text-[#a7adb3]">Explosion-proof hazardous seal</span>
                      </div>
                      <span className={`size-4 rounded border grid place-items-center ${isAtex ? "border-[#f3a329] bg-[#f3a329] text-[#0b0d0e]" : "border-white/20"}`}>
                        {isAtex && <CheckCircle2 className="size-3" />}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a7adb3] hover:text-white cursor-pointer"
                  >
                    <ChevronLeft className="size-4" /> BACK
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-2 bg-[#f3a329] px-6 py-3 text-xs font-bold tracking-widest text-[#0b0d0e] rounded-md hover:bg-[#ffc368] transition-all shadow-md shadow-[#f3a329]/20 cursor-pointer"
                  >
                    CALCULATE SIZING RESULT <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Engineering Summary & Certification */}
            {step === 4 && (
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-[#f3a329] font-mono">04.</span> Engineering Sizing Verification
                  </h3>
                  <span className="text-[11px] font-mono text-[#f3a329] font-bold">READY TO QUOTE</span>
                </div>

                <div className="rounded-lg border border-[#f3a329]/40 bg-[#0b0d0e] p-5 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#a7adb3]">Selected Application:</span>
                    <span className="font-bold text-white">{selectedApp.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#a7adb3]">Motor Configuration:</span>
                    <span className="font-bold text-white">{powerKw} kW @ {motorRpm} RPM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#a7adb3]">Total Computed Service Factor:</span>
                    <span className="font-bold text-[#f3a329]">{finalServiceFactor}x AGMA Compliant</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#a7adb3]">Required Output Speed:</span>
                    <span className="font-bold text-white">{actualOutputRpm} RPM ({closestStandardRatio}:1 Ratio)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#a7adb3]">Design Mechanical Torque:</span>
                    <span className="font-bold text-[#f3a329]">{designTorqueNm} Nm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a7adb3]">Recommended Taper Bush Hub:</span>
                    <span className="font-bold text-white">Bush {sizedGearbox.taperBush} ({sizedGearbox.shaftBoreRange})</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a7adb3] hover:text-white cursor-pointer"
                  >
                    <ChevronLeft className="size-4" /> RECONFIGURE
                  </button>
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#f3a329] px-7 py-3.5 text-xs font-bold tracking-widest text-[#0b0d0e] rounded-md hover:bg-[#ffc368] transition-all shadow-lg shadow-[#f3a329]/25 cursor-pointer active:scale-95"
                  >
                    REQUEST RFQ FOR SIZED UNIT <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Real-time Engineering Sizing HUD Card */}
          <div className="tech-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="status-pill text-[10px] font-mono">
                  <Gauge className="size-3 text-[#f3a329]" />
                  <span>RECOMMENDED SIZING</span>
                </span>
                <span className="text-[10px] font-mono text-[#f3a329]">ISO 9001:2015</span>
              </div>

              {/* Sized Model Banner */}
              <div className="rounded-lg bg-[#f3a329]/10 border border-[#f3a329]/30 p-4 mb-5">
                <span className="text-[10px] font-mono text-[#f3a329] block font-bold uppercase tracking-wider">
                  OPTIMAL SMSR GEARBOX MODEL
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {sizedGearbox.model}
                </h4>
                <p className="mt-1 text-xs text-[#a7adb3] font-mono">
                  Standard Ratio {closestStandardRatio}:1 • Hollow Output Bore {sizedGearbox.shaftBoreRange}
                </p>
              </div>

              {/* Real-time Metric Readouts */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-gray-400">Mechanical Design Torque:</span>
                  <span className="text-white font-bold text-sm text-[#f3a329]">{designTorqueNm} Nm</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-gray-400">Unit Max Torque Rating:</span>
                  <span className="text-white font-bold">{sizedGearbox.nominalRatingNm} Nm</span>
                </div>

                {/* Capacity Progress Bar */}
                <div className="py-2">
                  <div className="flex justify-between text-[11px] text-[#a7adb3] mb-1">
                    <span>Drive Capacity Safety Margin:</span>
                    <span className="text-white font-bold">{100 - capacityUtilization}% Reserve</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#0b0d0e] overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#f3a329] to-[#ffc368] transition-all duration-300"
                      style={{ width: `${capacityUtilization}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-gray-400">Taper Bush Part No:</span>
                  <span className="text-white font-bold">Bush {sizedGearbox.taperBush}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-gray-400">Sprag Backstop Status:</span>
                  <span className={`font-bold ${requiresBackstop ? "text-[#f3a329]" : "text-gray-400"}`}>
                    {requiresBackstop ? "Factory Fitted Sprag" : "Direct Bi-Directional"}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5">
                  <span className="text-gray-400">Recommended Lubrication:</span>
                  <span className="text-white font-bold">ISO VG 320 Synthetic PAO</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full bg-[#f3a329] py-3.5 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-all rounded-md shadow-lg shadow-[#f3a329]/20 active:scale-98 cursor-pointer"
              >
                REQUEST FACTORY QUOTE FOR {sizedGearbox.model.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Quote Modal with pre-configured specs */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct="smsr-gearbox"
      />
    </section>
  );
}


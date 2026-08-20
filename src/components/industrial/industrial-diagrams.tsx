"use client";

import React from "react";

type TechnicalDiagramProps = {
  type: string;
  className?: string;
};

export function IndustrialDiagram({ type, className = "" }: TechnicalDiagramProps) {
  switch (type) {
    case "smsr":
    case "reducer":
    case "gearbox":
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto ${className}`}
        >
          <rect width="400" height="300" rx="8" fill="#15191c" />
          <path d="M0 0h400v300H0z" fill="url(#grid-pattern)" opacity="0.15" />
          {/* Outer Housing */}
          <rect x="70" y="50" width="260" height="200" rx="16" stroke="#f3a329" strokeWidth="3" fill="#1b2024" />
          <path d="M70 90h260M70 210h260" stroke="#f3a329" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Gears */}
          <circle cx="160" cy="150" r="55" stroke="#4a5568" strokeWidth="4" fill="#0f1214" />
          <circle cx="160" cy="150" r="45" stroke="#f3a329" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="160" cy="150" r="16" fill="#f3a329" />
          
          <circle cx="250" cy="150" r="35" stroke="#4a5568" strokeWidth="3" fill="#0f1214" />
          <circle cx="250" cy="150" r="28" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="250" cy="150" r="10" fill="#60a5fa" />
          
          {/* Torque Arm Mount */}
          <path d="M70 150L20 150M20 135v30" stroke="#f3a329" strokeWidth="4" strokeLinecap="round" />
          <circle cx="20" cy="150" r="6" fill="#f3a329" />

          {/* Technical Specs Callout */}
          <text x="85" y="75" fill="#a7adb3" fontSize="10" fontFamily="monospace" letterSpacing="1">
            PIXELARA HEAVY HELICAL GEARBOX
          </text>
          <text x="270" y="235" fill="#f3a329" fontSize="11" fontWeight="bold" fontFamily="monospace">
            RATIO 20:1
          </text>
          
          <defs>
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      );

    case "pulley":
    case "mag-drum":
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto ${className}`}
        >
          <rect width="400" height="300" rx="8" fill="#15191c" />
          <path d="M0 0h400v300H0z" fill="url(#grid-pattern-2)" opacity="0.15" />
          {/* Pulley Drum */}
          <ellipse cx="200" cy="150" rx="90" ry="90" fill="#1e2429" stroke="#f3a329" strokeWidth="4" />
          <ellipse cx="200" cy="150" rx="70" ry="70" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" />
          <ellipse cx="200" cy="150" rx="40" ry="40" fill="#0f1214" stroke="#f3a329" strokeWidth="3" />
          {/* Shaft Keyway */}
          <rect x="188" y="138" width="24" height="24" fill="#f3a329" rx="2" />
          
          {/* Magnetic Lines if mag-drum */}
          {type === "mag-drum" && (
            <>
              <path d="M120 70 Q 200 20 280 70" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" fill="none" />
              <path d="M100 90 Q 200 30 300 90" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              <text x="140" y="45" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">
                HIGH GAUSS FIELD
              </text>
            </>
          )}
          
          <text x="85" y="270" fill="#a7adb3" fontSize="10" fontFamily="monospace">
            CROWNED FACE PULLEY / TAPER-LOCK BUSHING
          </text>
          
          <defs>
            <pattern id="grid-pattern-2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      );

    case "pillow-block":
    case "plummer-block":
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto ${className}`}
        >
          <rect width="400" height="300" rx="8" fill="#15191c" />
          {/* Base Plate */}
          <rect x="40" y="210" width="320" height="35" rx="6" fill="#242b30" stroke="#f3a329" strokeWidth="3" />
          <circle cx="80" cy="227" r="10" fill="#0f1214" stroke="#f3a329" strokeWidth="2" />
          <circle cx="320" cy="227" r="10" fill="#0f1214" stroke="#f3a329" strokeWidth="2" />
          {/* Housing Arch */}
          <path d="M90 210 C90 100, 310 100, 310 210 Z" fill="#1b2024" stroke="#f3a329" strokeWidth="3" />
          {/* Spherical Bearing */}
          <circle cx="200" cy="165" r="45" fill="#0f1214" stroke="#60a5fa" strokeWidth="3" />
          <circle cx="200" cy="165" r="28" fill="#f3a329" />
          {/* Lube Grease Fitting */}
          <rect x="194" y="90" width="12" height="25" fill="#f3a329" rx="2" />
          
          <text x="110" y="275" fill="#a7adb3" fontSize="10" fontFamily="monospace">
            HEAVY CAST IRON PLUMMER BLOCK HOUSING
          </text>
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto ${className}`}
        >
          <rect width="400" height="300" rx="8" fill="#15191c" />
          <rect x="60" y="50" width="280" height="200" rx="12" stroke="#f3a329" strokeWidth="2" fill="#1b2024" />
          <path d="M60 150h280M200 50v200" stroke="#4a5568" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="150" r="50" stroke="#f3a329" strokeWidth="3" fill="#0f1214" />
          <path d="M175 150l18-18 30 36 22-18" stroke="#60a5fa" strokeWidth="3" fill="none" />
          <text x="90" y="80" fill="#a7adb3" fontSize="10" fontFamily="monospace">
            PIXELARA INDUSTRIAL SCHEMATIC
          </text>
        </svg>
      );
  }
}

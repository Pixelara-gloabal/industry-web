import Link from "next/link";

import { Mail, MapPin, Phone, Shield } from "lucide-react";

const footerLinks = [
  {
    title: "Products & Systems",
    links: [
      { label: "All Products Catalog", href: "/products" },
      { label: "SMSR Gearboxes", href: "/products/smsr-gearbox" },
      { label: "Shaft Speed Reducers", href: "/products/shaft-mounted-speed-reducer" },
      { label: "Conveyor Components", href: "/products#conveyor-components" },
      { label: "Magnetic Separators", href: "/products#magnetic-separation" },
    ],
  },
  {
    title: "Company & Quality",
    links: [
      { label: "About Pixelara", href: "/about" },
      { label: "ISO Quality Standards", href: "/quality" },
      { label: "Engineering Applications", href: "/applications" },
      { label: "Technical Resources", href: "/resources" },
      { label: "Pricing Models", href: "/pricing" },
    ],
  },
  {
    title: "Industries & Support",
    links: [
      { label: "Mining & Ore Extraction", href: "/industries#mining" },
      { label: "Cement & Aggregates", href: "/industries#cement" },
      { label: "Steel Mills & Metals", href: "/industries#steel" },
      { label: "Technical FAQ", href: "/faq" },
      { label: "Contact Engineering", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0b0d0e] text-white border-t border-white/10 relative">
      {/* Top subtle amber highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#f3a329]/40 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-10 py-14 lg:flex-row lg:py-16">
          <div className="max-w-md">
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="Pixelara Industrial home">
              <span className="grid size-9 place-items-center rounded-md border-2 border-[#f3a329] text-xs font-black tracking-tighter text-[#f3a329] transition-all group-hover:bg-[#f3a329] group-hover:text-[#0b0d0e]">
                PI
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-black tracking-[0.18em] text-white">PIXELARA</span>
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#f3a329]">INDUSTRIAL</span>
              </div>
            </Link>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">
              Global manufacturer of precision power transmission units, shaft-mounted speed reducers, conveyor drive components, and magnetic separation equipment.
            </p>
            
            <div className="mt-5 space-y-2.5 text-xs text-[#a7adb3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-3.5 text-[#f3a329] shrink-0 mt-0.5" />
                <span>Pixelara Industrial Park, Heavy Engineering Zone, Sector 4, CA 90021</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono">
                <Phone className="size-3.5 text-[#f3a329] shrink-0" />
                <span>+1 (800) 555-PIXEL / +1 (213) 555-0199</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-3.5 text-[#f3a329] shrink-0" />
                <span>engineering@pixelara-industrial.com</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:min-w-[640px]">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-[11px] font-mono font-bold tracking-[0.14em] text-[#f3a329] uppercase">{group.title}</h2>
                <ul className="mt-3.5 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-xs text-[#a7adb3] transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-[#697077] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px]">
            <p>© {new Date().getFullYear()} Pixelara Industrial Solutions Inc. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1 text-[#f3a329] font-mono">
              <Shield className="size-3 text-[#f3a329]" /> ISO 9001:2015 REGISTERED
            </span>
          </div>
          <div className="flex gap-5 text-[11px]">
            <Link href="/faq" className="hover:text-white transition-colors">
              Technical FAQ
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Engineering Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


import Link from "next/link";

import { ArrowUpRight, Mail, MapPin, Phone, Shield } from "lucide-react";

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
    <footer className="bg-[#0b0d0e] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-12 py-16 lg:flex-row lg:py-20">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center border-2 border-[#f3a329] text-xs font-black tracking-tighter text-[#f3a329]">
                PI
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-extrabold tracking-[0.18em] text-white">PIXELARA</span>
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#f3a329]">INDUSTRIAL</span>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-[#a7adb3]">
              Global manufacturer of precision power transmission units, shaft-mounted speed reducers, conveyor drive components, and magnetic separation equipment.
            </p>
            
            <div className="mt-6 space-y-3 text-xs text-[#a7adb3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#f3a329] shrink-0 mt-0.5" />
                <span>Pixelara Industrial Park, Heavy Engineering Zone, Sector 4, CA 90021</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#f3a329] shrink-0" />
                <span>+1 (800) 555-PIXEL / +1 (213) 555-0199</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#f3a329] shrink-0" />
                <span>engineering@pixelara-industrial.com</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:min-w-[680px]">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-bold tracking-[0.14em] text-[#f3a329] uppercase">{group.title}</h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-[#a7adb3] transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-[#697077] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Pixelara Industrial Solutions Inc. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-[#f3a329]">
              <Shield className="size-3.5" /> ISO 9001:2015 Registered
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy & Terms
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              LinkedIn Industry Portal <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

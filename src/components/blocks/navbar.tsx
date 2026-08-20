"use client";

import { useState } from "react";

import Link from "next/link";

import { ChevronDown, Menu, X, ShieldCheck } from "lucide-react";

import { QuoteModal } from "@/components/industrial/quote-modal";

const productLinks = [
  { label: "All Products Catalog", href: "/products" },
  { label: "Gearboxes & Drives", href: "/products#gearboxes-drives" },
  { label: "Conveyor Components", href: "/products#conveyor-components" },
  { label: "Bearings & Housings", href: "/products#bearings-mechanical-components" },
  { label: "Magnetic Separation", href: "/products#magnetic-separation" },
];

const navigation = [
  { label: "Industries", href: "/industries" },
  { label: "Applications", href: "/applications" },
  { label: "Quality Standards", href: "/quality" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d0e]/95 text-white backdrop-blur-xl">
        {/* Top Announcement Strip */}
        <div className="hidden border-b border-white/10 bg-[#15191c] py-1.5 px-5 text-[11px] text-[#a7adb3] sm:block">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#f3a329] font-medium">
                <ShieldCheck className="size-3.5" /> ISO 9001:2015 Certified Manufacturing
              </span>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">Heavy Torque Transmission & Conveyor Engineering</span>
            </div>
            <div className="flex items-center gap-5">
              <Link href="/faq" className="hover:text-white transition-colors">
                Technical FAQ
              </Link>
              <Link href="/login" className="hover:text-white transition-colors">
                Client Portal Login
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="group flex items-center gap-3" aria-label="Pixelara Industrial home">
            <span className="relative grid size-9 place-items-center border-2 border-[#f3a329] text-xs font-black tracking-tighter text-[#f3a329] transition-colors group-hover:bg-[#f3a329] group-hover:text-[#0b0d0e]">
              PI
            </span>
            <div className="flex flex-col">
              <span className="text-[14px] font-extrabold tracking-[0.18em] text-white">PIXELARA</span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-[#f3a329]">INDUSTRIAL</span>
            </div>
          </Link>

          <nav className="hidden h-full items-center gap-7 lg:flex" aria-label="Main navigation">
            <div className="group relative flex h-full items-center">
              <button className="flex items-center gap-1.5 text-sm text-[#c1c6ca] transition-colors hover:text-white">
                Products <ChevronDown className="size-3.5" />
              </button>
              <div className="invisible absolute top-[61px] left-1/2 w-64 -translate-x-1/2 border border-white/10 bg-[#15191c] p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 rounded-b-md">
                {productLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-[#c1c6ca] transition-colors hover:bg-white/5 hover:text-[#f3a329] rounded"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-[#c1c6ca] transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="hidden bg-[#f3a329] px-5 py-3 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-colors hover:bg-[#ffc368] sm:inline-flex rounded-sm"
            >
              REQUEST A QUOTE
            </button>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid size-10 place-items-center border border-white/15 text-white lg:hidden rounded-sm"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0d0e] px-5 py-5 lg:hidden max-h-[85vh] overflow-y-auto">
            <div className="mx-auto max-w-[1440px]">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left text-sm text-white"
              >
                Products{" "}
                <ChevronDown className={`size-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="border-b border-white/10 bg-white/[0.03] px-4 py-2">
                  {productLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-3 text-sm text-[#a7adb3] hover:text-[#f3a329]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block border-b border-white/10 py-4 text-sm text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-2 border-t border-white/10 flex justify-between text-xs text-gray-400">
                <Link href="/login" onClick={closeMenu} className="hover:text-white">
                  Client Portal
                </Link>
                <Link href="/faq" onClick={closeMenu} className="hover:text-white">
                  Technical FAQ
                </Link>
              </div>
              <button
                onClick={() => {
                  closeMenu();
                  setIsQuoteOpen(true);
                }}
                className="mt-5 w-full bg-[#f3a329] px-5 py-4 text-center text-xs font-bold tracking-[0.1em] text-[#0b0d0e] rounded-sm"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

"use client";

import { useState } from "react";

import Link from "next/link";

import { ChevronDown, Menu, X, ShieldCheck, Layers } from "lucide-react";

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
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d0e]/95 text-white backdrop-blur-2xl">
        {/* Top Announcement Strip */}
        <div className="hidden border-b border-white/10 bg-[#121619] py-1.5 px-5 text-[11px] text-[#a7adb3] sm:block">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#f3a329] font-medium font-mono text-[10px]">
                <ShieldCheck className="size-3.5" /> ISO 9001:2015 REGISTERED FACILITY
              </span>
              <span className="text-white/20">|</span>
              <span className="text-gray-300">Heavy Torque Transmission &amp; Conveyor Engineering</span>
            </div>
            <div className="flex items-center gap-5 font-medium">
              <Link href="/faq" className="hover:text-[#f3a329] transition-colors">
                Technical FAQ
              </Link>
              <Link href="/login" className="hover:text-[#f3a329] transition-colors">
                Client Portal Login
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="group flex items-center gap-3" aria-label="Pixelara Industrial home">
            <span className="relative grid size-9 place-items-center rounded-md border-2 border-[#f3a329] text-xs font-black tracking-tighter text-[#f3a329] transition-all group-hover:bg-[#f3a329] group-hover:text-[#0b0d0e] group-hover:shadow-lg group-hover:shadow-[#f3a329]/20">
              PI
            </span>
            <div className="flex flex-col">
              <span className="text-[14px] font-black tracking-[0.18em] text-white">PIXELARA</span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-[#f3a329]">INDUSTRIAL</span>
            </div>
          </Link>

          <nav className="hidden h-full items-center gap-6 lg:flex" aria-label="Main navigation">
            <div className="group relative flex h-full items-center">
              <button className="flex items-center gap-1 text-xs font-bold tracking-[0.05em] text-[#c1c6ca] transition-colors hover:text-white cursor-pointer py-2">
                PRODUCTS <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute top-[58px] left-1/2 w-64 -translate-x-1/2 border border-white/15 bg-[#15191c]/98 p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 rounded-lg backdrop-blur-xl">
                {productLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3.5 py-2.5 text-xs font-medium text-[#c1c6ca] transition-colors hover:bg-white/5 hover:text-[#f3a329] rounded-md"
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
                className="text-xs font-bold tracking-[0.05em] text-[#c1c6ca] transition-colors hover:text-white py-2"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="hidden bg-[#f3a329] px-5 py-2.5 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-all hover:bg-[#ffc368] hover:shadow-lg hover:shadow-[#f3a329]/20 sm:inline-flex rounded-md active:scale-95 cursor-pointer"
            >
              REQUEST A QUOTE
            </button>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid size-10 place-items-center rounded-md border border-white/15 text-white lg:hidden active:bg-white/10 cursor-pointer"
            >
              {menuOpen ? <X className="size-5 text-[#f3a329]" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0d0e]/98 px-5 py-6 lg:hidden max-h-[85vh] overflow-y-auto backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="mx-auto max-w-[1440px] space-y-1">
              <div className="border-b border-white/10 pb-2 mb-2">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-bold text-white"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="size-4 text-[#f3a329]" /> Products Portfolio
                  </span>
                  <ChevronDown className={`size-4 transition-transform ${productsOpen ? "rotate-180 text-[#f3a329]" : ""}`} />
                </button>
                {productsOpen && (
                  <div className="my-2 rounded-lg border border-white/10 bg-white/[0.03] p-2 space-y-1">
                    {productLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                        className="block py-2.5 px-3 text-xs text-[#a7adb3] hover:text-[#f3a329] hover:bg-white/5 rounded"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block border-b border-white/5 py-3.5 text-sm font-medium text-white hover:text-[#f3a329] transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-5 pt-4 border-t border-white/10 flex justify-between text-xs text-[#a7adb3]">
                <Link href="/login" onClick={closeMenu} className="hover:text-white">
                  Client Portal Login
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
                className="mt-6 w-full bg-[#f3a329] py-4 text-center text-xs font-bold tracking-[0.1em] text-[#0b0d0e] rounded-md shadow-lg shadow-[#f3a329]/20 active:scale-98"
              >
                REQUEST FACTORY QUOTE
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


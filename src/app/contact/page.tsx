import { Clock, Mail, MapPin, Phone, Shield } from "lucide-react";

import { PageIntro } from "@/components/industrial/page-intro";
import { QuoteForm } from "@/components/industrial/quote-form";

export const metadata = {
  title: "Contact Engineering Team | Pixelara Industrial",
  description:
    "Contact Pixelara Industrial engineering and sales teams for factory-direct quotes on speed reducers, conveyor components, and magnetic separators.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="CONTACT PIXELARA ENGINEERING"
        title="Direct Engineering Inquiry &amp; RFQ Portal"
        description="Connect directly with our application engineers for gear selection, dimensional verification, CAD drawings, and factory-direct commercial quotations."
      />

      <main id="quote" className="scroll-mt-28 mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="tech-card p-6 sm:p-8 h-fit">
            <p className="text-[11px] font-mono text-[#f3a329] font-bold">COMMERCIAL &amp; TECH HEADQUARTERS</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a7adb3]">
              Whether you require a single replacement SMSR unit or a complete overland conveyor drive system, our estimation team is ready to assist.
            </p>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-5 text-xs text-[#c1c6ca]">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 text-[#f3a329] mt-0.5" />
                <span>
                  Pixelara Industrial Park, Heavy Machinery Zone, Sector 4, CA 90021
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono">
                <Phone className="size-4 shrink-0 text-[#f3a329]" />
                <span>+1 (800) 555-PIXEL / +1 (213) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-[#f3a329]" />
                <span>engineering@pixelara-industrial.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-[#f3a329]" />
                <span>Mon - Fri: 08:00 - 18:00 EST (24/7 Support)</span>
              </div>
            </div>

            <div className="mt-6 rounded-md bg-[#0b0d0e] p-3.5 text-xs text-[#a7adb3] flex items-center gap-2.5 border-l-2 border-[#f3a329]">
              <Shield className="size-4 text-[#f3a329] shrink-0" />
              <span>Strict NDA &amp; commercial confidentiality assured on all engineering drawings.</span>
            </div>
          </div>

          <QuoteForm />
        </div>
      </main>
    </div>
  );
}


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

      <main id="quote" className="scroll-mt-28 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-xl border border-white/10 bg-[#15191c] p-8 shadow-2xl h-fit">
            <p className="text-xs font-mono text-[#f3a329] font-bold">COMMERCIAL &amp; TECH HEADQUARTERS</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#a7adb3]">
              Whether you require a single replacement SMSR unit or a complete overland conveyor drive system, our estimation team is ready to assist.
            </p>

            <div className="mt-8 space-y-5 border-t border-white/10 pt-7 text-xs text-[#c1c6ca]">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 text-[#f3a329] mt-0.5" />
                <span>
                  Pixelara Industrial Park, Heavy Machinery Zone, Sector 4, CA 90021
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[#f3a329]" />
                <span>+1 (800) 555-PIXEL / +1 (213) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-[#f3a329]" />
                <span>engineering@pixelara-industrial.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-[#f3a329]" />
                <span>Mon - Fri: 08:00 - 18:00 EST (24/7 Emergency Support)</span>
              </div>
            </div>

            <div className="mt-8 rounded bg-[#0b0d0e] p-4 text-xs text-[#a7adb3] flex items-center gap-2 border-l-2 border-[#f3a329]">
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

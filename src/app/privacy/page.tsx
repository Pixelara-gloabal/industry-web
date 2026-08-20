import { PageIntro } from "@/components/industrial/page-intro";

export const metadata = {
  title: "Privacy Policy | Pixelara Industrial",
  description:
    "Pixelara Industrial Privacy Policy regarding customer engineering data, RFQ submissions, CAD file handling, and commercial confidentiality.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="LEGAL & CONFIDENTIALITY"
        title="Privacy Policy &amp; Technical NDA Terms"
        description="Pixelara Industrial Solutions Inc. is committed to protecting your proprietary engineering specifications, CAD drawings, and commercial RFQ data."
      />

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="rounded-xl border border-white/10 bg-[#15191c] p-8 sm:p-12 shadow-2xl space-y-8 text-sm leading-7 text-[#a7adb3]">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Technical Data Confidentiality</h2>
            <p>
              All mechanical drawings, motor power calculations, CAD files, and plant layout specifications submitted through the Pixelara RFQ modal or contact forms are held in strict commercial confidence. We do not sell, license, or share proprietary client engineering data with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>
              We collect information necessary to process your RFQ or technical inquiry, including name, business email, company name, telephone number, and application parameters (e.g. required gear ratio, motor kW, shaft size).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. Use of Information</h2>
            <p>
              Collected technical and contact data is used solely for:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-300">
              <li>Generating verified engineering selection quotes and dimensional approvals.</li>
              <li>Fulfilling orders for gearboxes, replacement parts, and magnetic separators.</li>
              <li>Providing technical field support, warranty registration, and maintenance updates.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Security &amp; Compliance</h2>
            <p>
              We enforce SSL/TLS encryption for all web form submissions and maintain secure database storage aligned with ISO 27001 data protection standards.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
            Last Updated: August 2026 • Pixelara Industrial Solutions Inc. Legal Compliance Department
          </div>
        </div>
      </main>
    </div>
  );
}

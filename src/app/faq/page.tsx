import { FAQ } from "@/components/blocks/faq";
import { PageIntro } from "@/components/industrial/page-intro";

export const metadata = {
  title: "Technical FAQ & Selection Guide | Pixelara Industrial",
  description:
    "Answers to technical questions regarding SMSR gear ratios, taper bush selection, interchangeability, lubrication, and warranty.",
};

export default function FaqPage() {
  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen">
      <PageIntro
        eyebrow="TECHNICAL KNOWLEDGE BASE"
        title="Frequently Asked Questions &amp; Gear Selection Support"
        description="Find clear answers to gear ratio selection, taper bushing dimensions, interchangeability with legacy units, ATEX compliance, and warranty coverage."
        action={{ label: "ASK AN ENGINEER", href: "/contact#quote" }}
      />
      <FAQ headerTag="h1" />
    </div>
  );
}

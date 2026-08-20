"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Technical Engineering & Selection",
    questions: [
      {
        question: "How do I select the correct SMSR ratio and taper bushing size for my conveyor driven shaft?",
        answer:
          "Selection requires your electric motor power (kW), motor speed (RPM), and desired conveyor pulley RPM. Use our formula Output RPM = Motor RPM / Gear Ratio. Taper bush size is determined by your driven shaft outer diameter (ranging from 30 mm to 125 mm). Our engineering team can verify your torque calculations free of charge.",
      },
      {
        question: "What gear metallurgy and heat treatment standards are used?",
        answer:
          "Pixelara gear teeth are hobbed from high-alloy 20MnCr5 / 8620 steel, vacuum carburized, case-hardened to 58-62 HRC, and precision ground to ISO 1328 Class 6 metrology standards for ultra-quiet operation and 98% efficiency.",
      },
      {
        question: "Are Pixelara gearboxes suitable for ATEX explosive dust environments?",
        answer:
          "Yes, Pixelara speed reducers and conveyor components are certified for ATEX Zone 22 dust ignition protection, making them safe for coal handling plants, grain elevators, and biomass processing facilities.",
      },
    ],
  },
  {
    title: "Interchangeability & Mounting",
    questions: [
      {
        question: "Are Pixelara SMSR gearboxes interchangeable with Fenner, Bonfiglioli, or Sumitomo units?",
        answer:
          "Yes. Pixelara Shaft-Mounted Speed Reducers follow standardized international envelope dimensions, shaft centers, and taper bush hubs (Size A through J), allowing direct drop-in replacement without altering your existing conveyor torque arm or motor mount.",
      },
      {
        question: "Do Pixelara SMSR units include an integrated backstop anti-runback clutch?",
        answer:
          "Yes, an internal mechanical sprag-clutch backstop can be factory-fitted to prevent inclined conveyor belt runback during power failures.",
      },
    ],
  },
  {
    title: "Ordering, Warranty & Support",
    questions: [
      {
        question: "What warranty coverage is provided with Pixelara drive units?",
        answer:
          "All Pixelara products come with a 24-Month Factory Manufacturer Warranty covering mechanical defects in gear teeth, shafts, bearings, and housing castings.",
      },
      {
        question: "What is the typical shipping lead time for custom gear ratio packages?",
        answer:
          "Standard ratio units (5:1, 13:1, 20:1, 25:1) are maintained in stock for same-day dispatch. Custom engineered bevel-helical gearboxes or high-gauss magnetic drum pulleys typically ship within 2 to 3 weeks.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-16 lg:py-24 bg-[#0b0d0e] text-white", className)}>
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <div className={cn("mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr]", className2)}>
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#f3a329] font-bold">KNOWLEDGE BASE</span>
            {headerTag === "h1" ? (
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Frequently Asked Technical Questions
              </h1>
            ) : (
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Frequently Asked Technical Questions
              </h2>
            )}
            <p className="text-[#a7adb3] max-w-md leading-relaxed text-sm">
              If your application parameters are not covered below, please{" "}
              <Link href="/contact" className="text-[#f3a329] underline underline-offset-4">
                contact our application engineering team directly
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-8 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="rounded-lg border border-white/10 bg-[#15191c] p-6">
                <h3 className="text-sm font-bold text-[#f3a329] uppercase tracking-wider border-b border-white/10 pb-3">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full mt-2">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`} className="border-white/10">
                      <AccordionTrigger className="text-sm font-semibold text-white hover:text-[#f3a329] text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs leading-6 text-[#a7adb3]">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

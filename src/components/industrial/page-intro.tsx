import Link from "next/link";

import { ArrowRight } from "lucide-react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
};

export function PageIntro({ eyebrow, title, description, action }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0d0e] text-white">
      <div className="hero-grid absolute inset-0 opacity-35" />
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <p className="relative z-10 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#f3a329]"><span className="h-px w-10 bg-[#f3a329]" />{eyebrow}</p>
        <h1 className="relative z-10 mt-6 max-w-4xl text-5xl leading-[0.94] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="relative z-10 mt-7 max-w-2xl text-base leading-7 text-[#a7adb3] sm:text-lg">{description}</p>
        {action && <Link href={action.href} className="relative z-10 mt-9 inline-flex items-center gap-3 bg-[#f3a329] px-6 py-4 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-colors hover:bg-[#ffc368]">{action.label} <ArrowRight className="size-4" /></Link>}
      </div>
    </section>
  );
}

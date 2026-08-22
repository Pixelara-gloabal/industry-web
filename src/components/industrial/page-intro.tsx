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
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d0e] text-white">
      <div className="hero-grid absolute inset-0 opacity-25 pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="relative z-10">
          <div className="status-pill mb-4">
            <span className="indicator-pulse" />
            <span>{eyebrow}</span>
          </div>
          <h1 className="mt-2 max-w-4xl text-3xl leading-[1.02] font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-[#a7adb3]">
            {description}
          </p>
          {action && (
            <Link
              href={action.href}
              className="mt-6 inline-flex items-center gap-3 bg-[#f3a329] px-6 py-3.5 text-xs font-bold tracking-[0.1em] text-[#0b0d0e] transition-all hover:bg-[#ffc368] hover:shadow-lg hover:shadow-[#f3a329]/20 rounded-md active:scale-95 cursor-pointer"
            >
              {action.label} <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}


import type React from "react";
import { Camera, Mic, ShieldCheck, Smartphone, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  icon: React.ElementType;
  title: string;
  colorClass: string;
  bgClass: string;
};

const features: Feature[] = [
  {
    icon: Mic,
    title: "Voice-to-text incident reporting",
    colorClass: "text-[#4685F0]",
    bgClass: "bg-[#E7EFFD]",
  },
  {
    icon: Camera,
    title: "Photo input + Excel/PDF report generation",
    colorClass: "text-[#8A38F5]",
    bgClass: "bg-[#8A38F51A]",
  },
  {
    icon: ShieldCheck,
    title: "Compliance with ILO, OSHA, NEBOSH, and national standards",
    colorClass: "text-[#10B981]",
    bgClass: "bg-[#E8FDF6]",
  },
  {
    icon: Smartphone,
    title: "Cross-platform access",
    colorClass: "text-[#FAA700]",
    bgClass: "bg-[#FACC1533]",
  },
  {
    icon: UsersRound,
    title: "AI-powered classification and safety recommendations",
    colorClass: "text-[#0256E4]",
    bgClass: "bg-[#0256E433]",
  },
];

function FeaturePill({ icon: Icon, title, colorClass, bgClass }: Feature) {
  return (
    <div
      className={cn(
        "lg:border border-[0.7px] border-[#A8A8A8] rounded-[11.538px] lg:rounded-[16px]",
        "px-6 py-5  h-full flex flex-col justify-center align-middle hover:bg-[#E7EFFD]",
        ""
      )}
      role="listitem"
      aria-label={title}
    >
      <div className=" flex flex-col items-center gap-3 lg:gap-6 h-full  justify-center align-middle ">
        <span
          className={cn(
            " shrink-0 p-3 flex  items-center justify-center rounded-full",
            bgClass
          )}
          aria-hidden="true"
        >
          <Icon className={cn("h-9 w-9", colorClass)} />
        </span>
        <p className="text-[14px] lg:text-[24px] text-[#000]   font-medium text-center">
          {title}
        </p>
      </div>
    </div>
  );
}

export function WhatWeOfferSection() {
  return (
    <section className="2xl:max-w-[74%] max-w-[95%] mx-auto py-16 lg:py-25 px-4 md:px-6 lg:px-8">
      <div className="mx-auto  text-center">
        <h2 className="text-pretty text-hero-h1 font-semibold tracking-tight text-[#212121] lg:block hidden">
          What we offer
        </h2>{" "}
        <h2 className="text-pretty text-[18px] font-semibold tracking-tight text-[#212121] lg:hidden block ">
          What we offer
        </h2>
      </div>
      <div
        className="mt-8 md:mt-14  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        role="list"
        aria-label="Product capabilities"
      >
        {features.slice(0, 3).map((f) => (
          <div key={f.title} className="w-full">
            <FeaturePill {...f} />
          </div>
        ))}
      </div>
      <div
        className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 md:max-w-[66.666%] md:mx-auto"
        role="list"
        aria-label="Product capabilities"
      >
        {features.slice(3).map((f) => (
          <div key={f.title} className="w-full">
            <FeaturePill {...f} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeOfferSection;
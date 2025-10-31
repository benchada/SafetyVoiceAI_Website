"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, FileText, ShieldCheck, BarChart3, Globe2 } from "lucide-react";
import EmblaCarousel from "../Carouisel1";

// ---- Feature Data ----
type Feature = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    title: "Voice Command Capture",
    description:
      "Voice commands enable real-time critical information capture for field engineer name, site, time, type, etc. auto-population for acute data capture.",
    Icon: Mic,
  },
  {
    title: "Structured, Audit-Ready Reports",
    description:
      "Zero effort formatting done to internal policy and global safety standard compliant instant PDF reports.",
    Icon: FileText,
  },
  {
    title: "Multilingual Voice Input",
    description:
      "Multilingual voice input ensures cross-team and contractor usability across diverse workforces.",
    Icon: BarChart3,
  },
  {
    title: "AI-Powered Safety Advice",
    description:
      "Describe your work environment or upload an image, and instantly receive tailored safety recommendations to help you act smarter and safer in real time.",
    Icon: Globe2,
  },
  {
    title: "Safety Resources On-Demand",
    description:
      "Access training materials, procedures, and safety guidelines anytime, anywhere. Empowering your team with the knowledge they need to prevent incidents before they happen",
    Icon: ShieldCheck,
  },
];

// ---- Feature Card ----
const FeatureCard = React.memo(
  ({ f, isGreen }: { f: Feature; isGreen: boolean }) => {
    const IconComponent = React.memo(f.Icon);

    return (
      <Card
        className={`h-full min-h-[100%] w-full flex flex-col rounded-[9px] gap-0 items-center justify-center border-[0.5px] shadow-md transition-transform duration-200 ease-in-out ${
          isGreen
            ? "bg-white border-[#10B981]"
            : "bg-[#EDF3FE] border-[#4685F0]"
        }`}
      >
        <CardHeader className="flex flex-col items-center justify-center pb-3 space-y-1">
          <IconComponent
            className={`size-[60px] ${
              isGreen ? "text-[#10B981]/80" : "text-blue-500/80"
            }`}
            aria-hidden="true"
          />
          <CardTitle className="text-center  mt-2 lg:mt-5 text-sec-h3 font-semibold lg:font-bold text-secondary">
            {f.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center pt-0 pb-6 mt-0">
          <p className="text-center text-[12px] lg:text-[13px] text-muted-foreground max-w-[95%] lg:max-w-[80%]">
            {f.description}
          </p>
        </CardContent>
      </Card>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// ---- Embla Options ----
const OPTIONS = {
  loop: true,
  dragFree: true,
  align: "start" as const,
};

// ---- Main Component ----
function FeatureSection() {
  return (
    <section
      className="w-full overflow-hidden text-center py-12 md:py-28 flex flex-col gap-[6px] lg:gap-[29px]"
      aria-labelledby="features"
      id="features"
    >
      <h2
        id="features-heading"
        className="text-balance text-center text-sec-h1 font-semibold"
      >
        Key Features
      </h2>
      <p className="mt-3 text-[#5B5B5B] text-txt1 font-medium">
        Powerful capabilities designed for safety professionals in high-risk
        environments
      </p>

      <div className="relative mt-7 lg:mt-10 h-full w-[97%] mx-auto">
        <EmblaCarousel
          options={OPTIONS}
          slides={features.map((f, idx) => (
            <div
              key={idx}
              className="embla__slide px-2 h-full" // 👈 3 slides per view
            >
              <FeatureCard f={f} isGreen={idx % 2 === 1} />
            </div>
          ))}
        />
      </div>
    </section>
  );
}

export default React.memo(FeatureSection);

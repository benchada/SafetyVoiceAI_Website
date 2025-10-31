"use client";
import type React from "react";
import { Eye, ShieldCheck, Target } from "lucide-react";
import { use, useState } from "react";

type AccentCardProps = {
  title: string;
  copy: string;
  icon: React.ReactNode;
  // expects a CSS var name like 'var(--color-chart-3)'
  accentVar: string;
  issecond?: boolean;
};
function AccentCard({
  title,
  copy,
  icon,
  accentVar,
  issecond,
}: AccentCardProps) {
  return (
    <article
      className={`relative rounded-[11px] lg:rounded-[32px] border-0 border-l-[3px] lg:border-l-[9px]  bg-card px-4 py-6 md:px-8 md:py-10 ${
        issecond ? "border-[#3BC2B0] hover:bg-[#E8FDF6]" : "border-[#4685F0] hover:bg-[#E7EFFD]"
      } `}
      aria-label={title}
    >
      <div className="flex flex-col gap-0 lg:gap-2">
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-8 w-8 lg:h-11 lg:w-11 items-center justify-center rounded-full ${
              issecond ? "bg-[#E8FDF6]" : "bg-[#E7EFFD]"
            }`}
          >
            {/* decorative icon */}
            <span aria-hidden="true" style={{ color: accentVar }}>
              {icon}
            </span>
          </div>
          <h3 className=" font-semibold text-sec-h1 lg:block hidden">
            {title}
          </h3>
          <h3 className=" font-semibold text-[18px] lg:hidden block">
            {title}
          </h3>
        </div>

        <p className="text-[12px] lg:text-[24px] font-medium leading-[15.223px] lg:leading-[41.625px] text-[#5B5B5B]">
          {copy}
        </p>
      </div>
    </article>
  );
}

export function Whoweare() {
  return (
    <section aria-labelledby="who-we-are-heading" className="py-12 md:py-24">
      <div className="mx-auto 2xl:max-w-[74%] max-w-[95%] lg:px-0 px-4">
        <header className="text-center">
          <h2
            id="who-we-are-heading"
            className="font-semibold text-hero-h1 text-[#212121] lg:block hidden"
          >
            Who we are
          </h2>
          <h2
            id="who-we-are-heading"
            className="font-semibold text-[18px] text-[#212121] lg:hidden block "
          >
            Who we are
          </h2>
          <p className="lg:mt-5 mt-3 font-medium leading-[25px] lg:leading-[41.625px] text-[#5B5B5B] text-[12px] lg:text-[29px]">
            SafetyVoiceAI, developed by ENTROGX Ventures, is a voice-driven
            safety intelligence platform that transforms how high-risk
            industries report, manage, and act on safety. Designed for HSE
            teams, site operators, and decision-makers, our platform enables
            real-time reporting, risk assessment, and AI-powered incident
            insights through voice, images, and multilingual support. From oil
            &amp; gas to construction, logistics, and manufacturing,
            SafetyVoiceAI ensures faster reporting, stronger compliance, and
            safer operations.
          </p>
        </header>

        <div className="mt-8 grid md:mt-23 md:grid-cols-2 gap-5 lg:gap-20">
          <AccentCard
            title="Mission"
            issecond={false}
            icon={
              <Target
                strokeWidth={2}
                className="text-primary size-[18px] lg:size-[22px]"
              />
            }
            accentVar={"var(--color-chart-3)"} // blue
            copy={
              "To empower frontline teams and safety leaders with intelligent, voice-first tools " +
              "that make incident reporting faster, decision-making smarter, and workplaces safer " +
              "no matter the location, language, or industry."
            }
          />

          <AccentCard
            title="Vision"
            issecond={true}
            icon={
              <Eye
                strokeWidth={2}
                className="text-secondary  size-[18px] lg:size-[22px]"
              />
            }
            accentVar={"var(--color-chart-2)"} // green/teal
            copy={
              "To be the world’s leading platform for voice-enabled safety intelligence—trusted in " +
              "industries where safety is mission critical. We envision a future where every field " +
              "operator can report instantly, AI enhances human judgment, and no safety risk goes unnoticed."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Whoweare;

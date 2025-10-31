"use client";

import type React from "react";
import { BrainCircuit, Puzzle, Check, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import brain from "../../media/brain.png";
import puzzle from "../../media/puzzle_16262482 1.png";
import hoverbrain from "../../media/hover-brain.png";
import hoverpuzzle from "../../media/hover-puzzle.png";

import Image from "next/image";

type Feature = {
  title: string;
  soon?: boolean;
  points: string[];
  icon: React.ReactNode;
};

function FeatureCard({ title, soon = true, points, icon }: Feature) {
  return (
    <section
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
      className={cn(
        // added `group` and hover/bg transition classes for group hover behavior
        "relative group rounded-[24px] bg-[#8AB2F6] hover:bg-[#4685F0]  py-15 pb-10 lg:py-20 lg:pb-10 lg:px-3 text-center md:text-left"
      )}
    >
      {/* badge */}
      <div
        className={cn(
          // added `group-hover:bg-white` and transition for smooth color change
          "absolute -top-8 left-1/2 md:left-1/2 z-[1] hover:bg-white bg-[#8AB2F6] p-4 lg:p-6 rounded-full -translate-x-1/2 flex items-center justify-center group-hover:bg-white "
        )}
        aria-hidden="true"
      >
        <div className="text-primary-foreground/95 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="p-6 py-0 md:py-8 md:p-8">
        <h3
          id={title.replace(/\s+/g, "-").toLowerCase()}
          className="font-bold text-sec-h2 block lg:hidden"
        >
          {title}
        </h3>{" "}
        <h3
          id={title.replace(/\s+/g, "-").toLowerCase()}
          className="font-bold text-[30px] hidden lg:block"
        >
          {title}
        </h3>
        {soon && (
          <p className="mt-2 text-txt2 text-white/74 font-medium">
            Coming Soon
          </p>
        )}
        <ul className="mt-5 lg:mt-10 space-y-5">
          {points.map((p, i) => (
            <li
              key={i}
              className="flex  flex-row items-center md:items-start justify-center md:justify-start gap-3 text-left"
            >
              <span
                className="inline-flex items-center justify-center flex-none"
                aria-hidden="true"
              >
                <Check className="h-7.5 w-7.5" />
              </span>
              <p className="text-sec-h3 font-normal lg:hidden block">{p}</p>
              <p className="text-[24px] font-normal lg:block hidden ">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FutureReadyTechnologySection() {
  return (
    <section
      className={cn(
        "bg-primary relative overflow-hidden py-16 md:py-20 text-white"
      )}
      aria-labelledby="future-ready-technology"
    >
      <div className="2xl:max-w-[73%] max-w-[95%] mx-auto px-7 sm:px-6">
        {/* background icons */}
        <div aria-hidden="true" className="lg:block hidden">
          <Shield
            className="absolute left-[0%] bottom-[0] text-white/10 stroke-[.4px]"
            size={400}
          />
          <Shield
            className="absolute right-[0%] top-[0] text-white/10 stroke-[.4px]"
            size={700}
          />
        </div>
        <div aria-hidden="true" className=" block lg:hidden">
          <Shield
            className="absolute left-[-10%] bottom-[0] text-white/10 stroke-[.4px]"
            size={200}
          />
          <Shield
            className="absolute right-[-10%] top-[0] text-white/10 stroke-[.4px]"
            size={250}
          />
        </div>
        <header className="text-center">
          <h2
            id="future-ready-technology"
            className="text-sec-h1 text-white font-bold"
          >
            Future-Ready Technology
          </h2>
          <p className="mt-4 lg:mt-10 text-white text-txt2 font-medium">
            Powerful capabilities designed for safety professionals in high-risk
            environments.
          </p>
        </header>

        <div className="mt-16 md:mt-25 grid gap-15  md:grid-cols-2">
          <FeatureCard
            title="Predictive Safety Insights"
            icon={
              <>
                <Image
                  src={brain}
                  alt="Predictive Safety Insights Icon"
                  width={75}
                  height={75}
                  className="object-contain size-[40px] lg:size-[75px] block group-hover:hidden"
                />
                <Image
                  src={hoverbrain}
                  alt="Predictive Safety Insights Icon - Hover"
                  width={75}
                  height={75}
                  className="object-contain size-[40px] lg:size-[75px] hidden group-hover:block"
                />
              </>
            }
            points={[
              "AI-driven forecasts for possible safety issue",
              "Alerts to eliminate risks before they become problematic",
            ]}
          />

          <FeatureCard
            title="Enhanced Integration Capabilities"
            icon={
              <>
                <Image
                  src={puzzle}
                  alt="Enhanced Integration Capabilities Icon"
                  width={75}
                  height={75}
                  className="object-contain size-[40px] lg:size-[75px] block group-hover:hidden"
                />
                <Image
                  src={hoverpuzzle}
                  alt="Enhanced Integration Capabilities Icon - Hover"
                  width={75}
                  height={75}
                  className="object-contain size-[40px] lg:size-[75px] hidden group-hover:block"
                />
              </>
            }
            points={[
              "APIs for interfacing with enterprise systems SAP, Oracle, Microsoft Dynamics",
              "Hands-free operation via wearables is accepted",
            ]}
          />
        </div>
      </div>

      {/* subtle background ornaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(60% 60% at 50% 0%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 50% 0%, black 40%, transparent 70%)",
        }}
      />
    </section>
  );
}

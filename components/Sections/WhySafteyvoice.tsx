"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import middleimage from "../../media/Group 66.png";

export function WhySafetyvoice() {
  return (
    <section
      aria-labelledby="why-safetyvoice-heading"
      className="w-full py-12 md:py-25 md:pb-35"
    >
      <div className="2xl:max-w-[73%] max-w-[95%]  mx-auto px-2 w-full  md:px-0">
        <h2
          id="why-safetyvoice-heading"
          className="text-balance text-center text-sec-h1 font-semibold"
        >
          Why SafetyVoice.AI?
        </h2>

        <div className="  mt-6 lg:mt-16 grid gap-9 px-3 lg:px-0 lg:grid-cols-13 lg:gap-4 items-center lg:items-start">
          {/* Left: copy + CTA */}
          <div className="lg:col-span-4 col-span-5   flex flex-col items-center  order-3 lg:order-none text-center lg:items-start lg:text-left mx-auto max-w-xl lg:mx-0 lg:max-w-none">
            <p className="leading-relaxed text-txt1 font-medium text-[#5B5B5B]">
              Experience how SafetyVoiceAI transforms workplace safety. Our
              hands-free, AI-powered platform makes incident reporting faster,
              documentation smarter, and compliance easier for industrial teams.
              Book a demo today to see how it fits into your operations.
            </p>
            <div className="mt-8 ">
              <Button size="sm" variant="primary">
                Join us Now
              </Button>
            </div>
          </div>

          <div className="col-span-5  flex justify-center items-center  order-2 lg:order-none">
            <div className="relative w-full max-w-[600px] md:max-w-[900px] aspect-[16/10] rounded-lg bg-card">
              <Image
                src={middleimage}
                alt="Laptop mockup showing SafetyVoiceAI interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <ul className="lg:col-span-4 col-span-5 grid  gap-3 lg:gap-5 justify-center sm:max-w-md mx-auto lg:mx-0 order-1 lg:order-none">
            <FeatureItem title="Real-Time Incident Reporting" />
            <FeatureItem title="Mobile-Desktop Agnostic" />
            <FeatureItem title="Coordinated Integrated Response" />
            <FeatureItem title="Data Privacy Protection" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "bg-card lg:p-4 lg:px-5 p-3 px-4  rounded-[18px] hover:bg-[#E0F0EB] transition-colors",
        className
      )}
      style={{ boxShadow: "0 0 10.528px 0 rgba(0, 0, 0, 0.10)" }}
    >
      <div className="flex items-start gap-4 lg:gap-5">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-6 w-6 items-center justify-center text-secondary-foreground"
        >
          <CheckIcon className="h-6 w-6 text-secondary" />
        </span>
        <p className="font-medium text-btn1 text-[#5B5B5B]/80">{title}</p>
      </div>
    </li>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

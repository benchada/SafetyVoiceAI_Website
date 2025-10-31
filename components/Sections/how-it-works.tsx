import type React from "react";
import { Button } from "../ui/button";
import play from "../../media/Frame.svg";

type StepProps = {
  number: number;
  title: string;
  description: string;
};

function Step({ number, title, description }: StepProps) {
  return (
    <li className="rounded-[16px] border border-[#CACACA] p-4 w-full hover:bg-[#E0F0EB]">
      <div className="grid grid-cols-7 items-center justify-center align-middle gap-7 sm:gap-8 md:gap-11 w-full">
        <div
          className="flex col-span-1 w-8 h-8 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-[#E8FDF6] text-secondary text-[14px] lg:text-[24px] sm:text-[27px] font-semibold"
          aria-hidden="true"
        >
          {number}
        </div>
        <div className="space-y-1 col-span-6">
          <p className="font-semibold text-sec-h3 text-secondary">{title}</p>
          <p className="text-txt3 leading-relaxed text-[#747474]">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function HowItWorks() {
  return (
    <section
      className="bg-[#ffff]"
      aria-labelledby="howitworks"
      id="howitworks"
    >
      <div className="mx-auto 2xl:max-w-[63%] max-w-[95%] py-12 sm:py-16 md:py-35 px-7 sm:px-6 md:px-0">
        <header className="mx-auto text-center mb-8 sm:mb-10 md:mb-15">
          <h2 className="text-balance text-center text-sec-h1 font-semibold">
            How it Works
          </h2>
          <p className="leading-relaxed text-txt1 text-[#5B5B5B] mt-6 sm:mt-8 md:mt-10 font-medium">
            An AI-driven voice platform that makes safety reporting fast,
            accurate, and effortless. From real-time incident logging to instant
            safety advice and resources, it empowers field teams and managers to
            act quickly while ensuring compliance. The result: safer workplaces,
            smarter decisions, and stronger productivity.
          </p>
        </header>

        <div className="grid gap-5 sm:gap-[40px] md:gap-[60px] md:grid-cols-6">
          {/* Left column */}
          <div className="rounded-xl p-4 sm:p-5 md:px-0 col-span-6 md:col-span-3">
            <h1 className="text-[#000] mb-6 sm:mb-8 md:mb-7 text-center text-txt2 font-semibold">
              For Engineers / HSE Supervisors / Operators
            </h1>
            <ol className="mt-6 space-y-4 sm:space-y-5 px-0 md:px-8">
              <Step
                number={1}
                title="Report by Voice or Photo"
                description="Hands-free reporting of hazards, near-misses, or incidents on-site."
              />
              <Step
                number={2}
                title="AI Converts to Structured Reports"
                description="Real-time transcription into clear, standardized incident data."
              />
              <Step
                number={3}
                title="Submit & Track Immediately"
                description="Your reports are synced, visible, and actionable across the system."
              />
            </ol>
            <div className="mt-6 sm:mt-8 px-2 sm:px-4 md:px-8 lg:block hidden">
              <Button
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-3"
              >
                <img
                  src={play.src}
                  alt="Play icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                />
                <span className="text-base font-medium text-txt2">
                  Start Reporting Faster
                </span>
              </Button>
            </div>
            <div className="mt-4 sm:mt-8 px-2 sm:px-4 md:px-8 lg:hidden block ">
              <Button
                variant="primary"
                size="sm"
                className="w-full flex items-center justify-center gap-3"
              >
                <img
                  src={play.src}
                  alt="Play icon"
                  className="h-5 w-4 sm:h-9 sm:w-9 object-contain"
                />
                <span className="text-base font-medium text-txt2">
                  Start Reporting Faster
                </span>
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="rounded-xl p-4 sm:p-5 md:px-0 col-span-6 md:col-span-3">
            <h1 className="text-[#000] mb-6 sm:mb-8 md:mb-7 text-center  text-txt2 font-semibold">
              For HSE Directors / Leadership
            </h1>
            <ol className="mt-4 space-y-4 sm:space-y-5 px-2 sm:px-4 md:px-8">
              <Step
                number={1}
                title="Access Dashboard"
                description="View all incidents, risks, and safety updates in one place."
              />
              <Step
                number={2}
                title="Review & Approve"
                description="Edit, validate, or escalate reports before they’re finalized"
              />
              <Step
                number={3}
                title="Monitor Trends & Ensure Compliance"
                description="Generate reports, track KPIs, and stay aligned with OSHA, ILO, and local standards."
              />
            </ol>
            <div className="mt-6 sm:mt-8 px-2 sm:px-4 md:px-8 lg:block hidden">
              <Button
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-3"
              >
                <img
                  src={play.src}
                  alt="Play icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                />
                <span className="text-base font-medium text-txt2">
                  Book a Demo with Our Team
                </span>
              </Button>
            </div>
            <div className="mt-4 sm:mt-8 px-2 sm:px-4 md:px-8 lg:hidden block ">
              <Button
                variant="primary"
                size="sm"
                className="w-full flex items-center justify-center gap-3"
              >
                <img
                  src={play.src}
                  alt="Play icon"
                  className="h-5 w-4 sm:h-9 sm:w-9 object-contain"
                />
                <span className="text-base font-medium text-txt2">
                  Book a Demo with Our Team
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

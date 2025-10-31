"use client";

import { Button } from "@/components/ui/button";
import comp1 from "../../media/Neboch_logo-removebg-preview 1.png";
import comp2 from "../../media/OSHA-Logo 1.png";
import comp3 from "../../media/ilo-logo-vector-removebg-preview 1.png";
// removed shield import
// import Image from "next/image";

export function Companies() {
  return (
    <section
      className="relative overflow-hidden py-10 md:py-20"
      style={{ background: "rgba(237, 243, 254, 0.46)" }}
      aria-labelledby="compliance-heading"
    >
      {/* Decorative shields as inline SVGs (responsive via tailwind classes) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 138 151"
        fill="none"
        aria-hidden="true"
        role="img"
        className="absolute text-primary/80 left-4 bottom-0 h-[140px] w-[130px] md:left-10 md:h-[272px] md:w-[252px]"
      >
        <path
          d="M115 73.7494C115 102.499 94.875 116.874 70.955 125.212C69.7024 125.636 68.3418 125.616 67.1025 125.154C43.125 116.874 23 102.499 23 73.7494V33.4994C23 31.9744 23.6058 30.5119 24.6841 29.4335C25.7625 28.3552 27.225 27.7494 28.75 27.7494C40.25 27.7494 54.625 20.8494 64.63 12.1094C65.8482 11.0687 67.3978 10.4968 69 10.4968C70.6022 10.4968 72.1518 11.0687 73.37 12.1094C83.4325 20.9069 97.75 27.7494 109.25 27.7494C110.775 27.7494 112.238 28.3552 113.316 29.4335C114.394 30.5119 115 31.9744 115 33.4994V73.7494Z"
          stroke="#10B981"
          strokeOpacity="0.15"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.75 67.9998L63.25 79.4998L86.25 56.4998"
          stroke="#10B981"
          strokeOpacity="0.15"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 138 151"
        fill="none"
        aria-hidden="true"
        role="img"
        className="absolute right-2 top-2 text-primary/80 h-[90px] w-[85px] md:right-4 md:top-6 md:h-[149px] md:w-[138px]"
      >
        <path
          d="M115 73.7494C115 102.499 94.875 116.874 70.955 125.212C69.7024 125.636 68.3418 125.616 67.1025 125.154C43.125 116.874 23 102.499 23 73.7494V33.4994C23 31.9744 23.6058 30.5119 24.6841 29.4335C25.7625 28.3552 27.225 27.7494 28.75 27.7494C40.25 27.7494 54.625 20.8494 64.63 12.1094C65.8482 11.0687 67.3978 10.4968 69 10.4968C70.6022 10.4968 72.1518 11.0687 73.37 12.1094C83.4325 20.9069 97.75 27.7494 109.25 27.7494C110.775 27.7494 112.238 28.3552 113.316 29.4335C114.394 30.5119 115 31.9744 115 33.4994V73.7494Z"
          stroke="#10B981"
          strokeOpacity="0.15"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.75 67.9998L63.25 79.4998L86.25 56.4998"
          stroke="#10B981"
          strokeOpacity="0.15"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="2xl:max-w-[73%] max-w-[95%] mx-auto relative">
        <div className="container mx-auto max-w-5xl px-4 grid gap-[20px] lg:gap-[47px] text-center">
          <h2
            id="compliance-heading"
            className="text-balance text-sec-h1 font-semibold"
          >
            Always Compliant
          </h2>

          <p className="text-[#5B5B5B] text-txt1 font-medium">
            Supports OSHA, NEBOSH, ILO, and other applicable safety regulations
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-10">
            <img
              src={comp2.src}
              alt="OSHA"
              className="h-10 sm:h-12 md:h-14 lg:h-26 xl:h-26 w-auto object-contain"
            />
            <img
              src={comp1.src}
              alt="NEBOSH"
              className="h-10 sm:h-12 md:h-14 lg:h-26 xl:h-26 w-auto object-contain"
            />
            <img
              src={comp3.src}
              alt="International Labour Organization (ILO)"
              className="h-10 sm:h-12 md:h-14 lg:h-26 xl:h-26 w-auto object-contain"
            />
          </div>

          <div>
            <Button
              className="px-6 py-5 md:px-7"
              size={"sm"}
              variant={"primary"}
            >
              Request a Demo
              <span className="sr-only">Request a product demonstration</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;

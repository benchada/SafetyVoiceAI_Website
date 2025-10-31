"use client";

import React from "react";
import Image from "next/image";
// Replace the import below with your actual image path. If you keep images in /public use: src="/images/your-image.png"
import heroImg from "../../media/aboutheroimg.png"; // <-- update this path to: /mnt/data/b4620e3e-1689-42fd-b282-35ad39142686.png if needed

export default function AboutHero() {
  return (
    <section className="py-15 pt-30  lg:py-25 lg:pt-50 bg-[#F4F9F6]">
      <div className="2xl:max-w-[74%] max-w-[95%] mx-auto  text-center">
        <div className="w-full lg:block hidden">
          {" "}
          <h3 className="text-hero-h2 font-bold text-primary">
            About Safety Voice <span className="text-secondary">AI</span>
          </h3>
          <h4 className="text-sec-h1 font-bold  mt-1 text-[#233C66]">
            Powered By ENTROGX Venture
          </h4>
          <p className="lg:text-[28px] text-[#233C66] font-medium mt-4">
            Enhancing Safety Through Voice Powered Technology
          </p>
        </div>
        <div className="w-full lg:hidden block ">
          <h3 className="text-[22px] font-bold text-primary">
            About Safety Voice <span className="text-secondary">AI</span>
          </h3>
          <h4 className="text-[16px] font-bold  mt-1 text-[#233C66]">
            Powered By ENTROGX Venture
          </h4>
          <p className="text-[12px] text-[#233C66] font-medium mt-3">
            Enhancing Safety Through Voice Powered Technology
          </p>
        </div>
        {/* Decorative horizontal rule (match screenshot spacing) */}
        <div className="flex items-center justify-center mt-6">
          <span className="inline-block w-28 h-1 rounded-full bg-primary-50 opacity-0" />
        </div>

        {/* Image / hero visual */}
        <div className="mt-4 lg:mt-8 mx-auto max-w-[85%] lg:max-w-5xl rounded-[20px] overflow-hidden shadow-md">
          {/* Using next/image with object-cover to match screenshot crop */}
          <Image
            src={heroImg}
            alt="Safety Voice AI team"
            width={1200}
            height={420}
            className="w-full h-[180px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

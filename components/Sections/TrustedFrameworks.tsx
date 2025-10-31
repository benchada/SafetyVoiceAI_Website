"use client";

import React from "react";

export default function TrustedFrameworks() {
  return (
    <section className="bg-[#EDF3FE75] py-8 lg:py-16 px-4 sm:px-6 text-center">
      <div className="2xl:max-w-[74%] max-w-[95%] mx-auto lg:block hidden">
        <h3 className="text-hero-h1 font-semibold text-[#212121]">
          Trusted Frameworks
        </h3>
        <p className="text-sec-h2 text-[#5B5B5B] font-medium mt-4">
          Supports safety protocols like the Incident Command System (ICS)
          already in use by leading organizations like Sonatrach.
        </p>
      </div>
      <div className="2xl:max-w-[74%] mx-auto lg:hidden block">
        <h3 className="text-[18px] font-semibold text-[#212121]">
          Trusted Frameworks
        </h3>
        <p className="text-[14px] text-[#5B5B5B] font-medium mt-4">
          Supports safety protocols like the Incident Command System (ICS)
          already in use by leading organizations like Sonatrach.
        </p>
      </div>
    </section>
  );
}

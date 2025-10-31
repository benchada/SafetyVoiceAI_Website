"use client";

import React from "react";

export default function CoreValues() {
  return (
    <section className="bg-white py-15 lg:py-25 px-4 sm:px-6 text-center">
      <div className="2xl:max-w-[74%] max-w-[95%] mx-auto">
        <h3 className="text-[14px] lg:text-[38px]  font-semibold text-[#212121]">
          Core Values
        </h3>
        <p className="text-sec-h2  text-[#000] mt-2 lg:mt-4 font-semibold lg:block hidden">
          Trust. Innovation. Accountability. Empathy. Impact.
        </p>{" "}
        <p className="text-[12px]  text-[#000] mt-2 lg:mt-4 font-semibold lg:hidden block ">
          Trust. Innovation. Accountability. Empathy. Impact.
        </p>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsimage from "../../media/newsletterimage.png";

export default function NewsletterSection() {
  return (
    <div className="space-y-6 2xl:max-w-[73%] max-w-[95%] mx-auto py-16 sm:py-24 md:py-30 px-4 sm:px-6">
      <div className="grid grid-cols-6 md:flex-row items-center md:items-start  gap-5 lg:gap-15">
        {/* Left Section */}
        <div className="w-full col-span-6 lg:col-span-3 lg:mx-0  mx-auto text-center md:text-left ">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                Get Our
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-sec-h1 font-semibold uppercase tracking-[0.08em] text-secondary">
                NEWSLETTER
              </h2>
            </div>
          </div>

          <p className="pt-4 sm:pt-5 pb-8 sm:pb-10 text-sm sm:text-base text-txt2">
            Be the first to know about new features, case studies, and how AI is
            transforming safety in high-risk sectors.
          </p>

          <form
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
          >
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <div className="flex w-full items-stretch overflow-hidden rounded-md bg-card flex-col sm:flex-row">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                required
                className="flex-1 px-4 sm:px-5 py-3 text-base sm:text-[20px] border border-[#B7B7B7] outline-none placeholder:text-[#B7B7B7] bg-transparent rounded-t-md sm:rounded-t-none sm:rounded-l-md"
              />
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(274deg, var(--secondary, #10B981) -37.86%, var(--pressed-blue, #1169FF) 125.4%)",
                }}
                className="px-6 sm:px-8 py-3 text-sm sm:text-base lg:mt-0 mt-4 font-semibold text-white rounded-sm"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Newsletter Image */}
        <div className="w-full  h-full col-span-6 lg:col-span-3  flex justify-center">
          <Image
            src={newsimage}
            alt="Newsletter illustration"
            className="w-full h-full mt-auto"
          />
        </div>
      </div>
    </div>
  );
}

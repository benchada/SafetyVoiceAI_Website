"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroimage1dektop from "../../media/hero-image1-dektop.png";
import heroimage2dektop from "../../media/hero-image2-dektop.png";
import heroimage3dektop from "../../media/hero-image3-dektop.png";
import heroimage1mobile from "../../media/hero-image1-mobile.png";
import heroimage2mobile from "../../media/hero-image2-mobile.png";
import heroimage3mobile from "../../media/hero-image3-mobile.png";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import thumbnail from "../../media/portrait-engineers-work-hours-job-site 1.png";
import Link from "next/link";

function Hero() {
  const desktopSlides = [heroimage1dektop, heroimage2dektop, heroimage3dektop];
  const mobileSlides = [heroimage1mobile, heroimage2mobile, heroimage3mobile];
  const texts = [
    "‘Voice-Enabled Reporting’",
    "‘AI-Driven Guidance’",
    "‘Real-Time Insights’",
  ];
  const durations = [2000, 3000, 3000];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, durations[index] ?? 3000);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <section
      className="mx-auto relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(70, 133, 240, 0.10) 22.17%, rgba(70, 133, 240, 0.00) 111.72%)",
      }}
    >
      {/* MOBILE SLIDES */}
      <div className="absolute inset-0 -z-10 md:hidden">
        {mobileSlides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-0 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden
          >
            <Image
              src={src}
              alt={`background-${i}`}
              fill
              className="object-cover"
            />
            {i === index && <div className="absolute inset-0 bg-white/20" />}
          </div>
        ))}
      </div>

      <div className="2xl:max-w-[74%] max-w-[95%] mx-auto py-20 pt-35 lg:py-20 lg:pt-50">
        {/* LAYOUT GRID FIXED FOR LAPTOP */}
        <div className="grid grid-cols-1 md:grid-cols-5 md:items-center md:gap-10 gap-4 items-center text-center md:text-left px-5 lg:px-0">
          {/* LEFT / MAIN */}
          <div className="md:col-span-3 w-full">
            <h1 className="text-hero-h1 font-bold">
              Transforming Safety Through <br />
              <span
                className={`${
                  index === 1 ? "text-primary" : "text-secondary"
                } text-hero-h2 leading-tight`}
              >
                {texts[index]}
              </span>{" "}
            </h1>
            <p className="mt-[10px] lg:mt-[25px] text-hero-txt text-[#5B5B5B] max-w-3xl font-medium">
              Enhancing incident reporting accuracy, safety in the field and
              timely decision-making processes within high-risk sectors using an
              AI voice platform.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size={"default"}
                    variant={"primary"}
                    className="lg:w-auto w-[70%]"
                  >
                    Request a Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                  <div className="p-0">
                    <VideoPlayer />
                  </div>
                </DialogContent>
              </Dialog>
              <Link href="#howitworks" className="lg:w-auto w-[70%]">
                <Button
                  size="default"
                  variant="primaryOutline"
                  className="w-full"
                >
                  See How it Works
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT / DESKTOP */}
          <div className="md:col-span-2 hidden md:flex md:items-center md:justify-center">
            <div className="relative w-full flex items-center justify-center">
              {desktopSlides.map((src, i) => (
                <div
                  key={i}
                  className={`absolute transition-opacity duration-0 ease-in-out flex items-center justify-center ${
                    i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  aria-hidden
                >
                  <Image
                    src={src}
                    alt={`SafetyVoice field worker ${i + 1}`}
                    className="w-[420px] h-auto object-contain"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

/* --------------------- VIDEO PLAYER ---------------------- */
function VideoPlayer() {
  return (
    <div className="relative w-full max-w-[1200px] overflow-hidden rounded-lg aspect-video">
      <video className="w-full h-full" poster={thumbnail.src}>
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <Button className="relative w-[96px] h-[97px] rounded-full bg-transparent hover:bg-transparent">
          <div className="absolute inset-0 rounded-full border-[0.42px] border-white" />
          <div className="absolute left-[9.46px] top-[9.88px] w-[77.28px] h-[77.28px] rounded-full bg-[#4685F0]" />
          <div className="absolute left-[4.14px] top-[4.04px] w-[88.12px] h-[88.93px] rounded-full border-[0.55px] border-white" />
          <div className="absolute left-[33px] top-[33px] w-[30.46px] h-[30.46px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
            <PlayIcon className="w-4 h-4 text-[#000]" />
          </div>
        </Button>
      </div>
      <div className="absolute inset-x-0 bottom-0 grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
        <Button className="w-10 h-10 hover:bg-white/10">
          <PlayIcon className="w-6 h-6" />
        </Button>
        <Slider
          className="h-1 [&>span:first-child]:h-full [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
          defaultValue={[40]}
        />
        <div className="flex items-center gap-2">
          <Button className="w-10 h-10 hover:bg-white/10">
            <Volume2Icon className="w-6 h-6" />
          </Button>
          <div className="text-sm">1:20 / 3:45</div>
          <Button className="w-10 h-10 hover:bg-white/10">
            <MaximizeIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* --------------------- ICONS ---------------------- */
function MaximizeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function Volume2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

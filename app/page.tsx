"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import Hero from "@/components/Sections/Hero";
import { WhySafetyvoice } from "@/components/Sections/WhySafteyvoice";
import Companies from "@/components/Sections/Companies";
import FeatureCarousel from "@/components/Sections/Features";
import Feature from "@/components/Sections/Features";
import Partners from "@/components/Sections/Partners";
import Benifits from "@/components/Sections/Benifits";
import HowItWorks from "@/components/Sections/how-it-works";
import { FutureReadyTechnologySection } from "@/components/Sections/FutureReady";
import ContactSection from "@/components/Sections/ContactSection";
import { FAQSection } from "@/components/Sections/FAQSection";
import NewsletterSection from "@/components/Sections/NewsletterSection";

export default function page() {
  return (
    <>
      <Hero />
      <WhySafetyvoice />
      <Companies />
      {/* <Feature /> */}
      <Partners />
      <Benifits />
      <HowItWorks />
      <FutureReadyTechnologySection />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}

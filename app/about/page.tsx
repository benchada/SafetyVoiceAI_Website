import AboutHero from "@/components/Sections/AboutHero";
import CoreValues from "@/components/Sections/CoreValues";
import { MeetOurTeamSection } from "@/components/Sections/MeetOurTeamSection";
import TrustedFrameworks from "@/components/Sections/TrustedFrameworks";
import { WhatWeOfferSection } from "@/components/Sections/WhatWeOfferSection";
import Whoweare from "@/components/Sections/Whoweare";
import React from "react";

function page() {
  return (
    <>
      <AboutHero />
      <Whoweare />
      <WhatWeOfferSection />
      <MeetOurTeamSection/>
      <TrustedFrameworks />
      <CoreValues />
    </>
  );
}

export default page;

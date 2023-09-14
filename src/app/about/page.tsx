
import rightImg from "./about-us.jpg";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionPromo3 from "@/components/SectionPromo3";

const PageAbout = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      <BgGlassmorphism />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="We’re not 200 years old family-owned business. We’re a young and energetic team running Empyreal Attire Leather Store® for you"
        />

        <SectionFounder />
        <div className="relative">
          <BackgroundSection />
        </div>
        <SectionPromo3 />
      </div>
    </div>
  );
};

export default PageAbout;

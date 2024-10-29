"use client";
import React from "react";
import { SocialIcon } from "../SocialIcon";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { socialItems } from "@/utils/data";
import AnimatedSection from "./AnimatedSection";
import CV from "../CV";

const ImageSection = () => {
  const iconsStyle =
    "text-white text-3xl md:text-2xl transform transition-transform duration-300 md:hover:scale-125 md:hover:rotate-12 md:hover:-translate-x-2";

  return (
    <section
      className="relative w-screen flex flex-col md:flex-row md:fixed md:right-0 md:top-0 md:h-full items-center justify-center md:w-4/12"
      style={{ backgroundColor: "rgb(51 65 85)" }}
    >
      <AnimatedSection className="flex md:flex-col gap-4  md:mb-0 md:fixed md:right-0 transform md:-translate-y-1/2 md:pr-4 xl:pr-8 2xl:pr-12">
        {socialItems.map(({ link, icon, type }) => (
          <SocialIcon
            key={link}
            link={link}
            type={type as IconPrefix}
            icon={icon as IconName}
            style={iconsStyle}
          />
        ))}
      </AnimatedSection>
      <AnimatedSection className="flex flex-col items-center justify-center">
        <CV />
      </AnimatedSection>
    </section>
  );
};

export default ImageSection;

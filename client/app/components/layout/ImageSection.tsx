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
      className="relative w-screen flex flex-col md:flex-row md:fixed md:right-0 md:top-0 md:h-full items-center justify-center gap-6 md:w-4/12 md:pr-6 lg:pr-8"
      style={{ backgroundColor: "rgb(51 65 85)" }}
    >
      <AnimatedSection className="flex flex-row items-center justify-center w-full min-h-[60px] md:w-auto md:min-h-0 md:flex-col gap-4 shrink-0 md:order-2 md:mb-0 md:static md:transform-none md:pr-0">
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
      <AnimatedSection className="flex flex-col items-center justify-center min-w-0 md:order-1">
        <CV />
      </AnimatedSection>
    </section>
  );
};

export default ImageSection;

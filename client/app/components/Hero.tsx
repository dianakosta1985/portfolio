import React from "react";
import { playfair } from "../../utils/fonts";
import AnimatedSection from "./layout/AnimatedSection";
import { PageProps } from "@/utils/types";

const Hero = (props: PageProps) => {
  const { title, subTitle, description } = props;
  return (
    <AnimatedSection
      className="flex flex-col md:justify-center min-h-[75vh] lg:min-h-[85vh]
       justify-center p-10 md:pe-56  md:bg-inherit text-primary-contant text-center md:text-left "
      id="home"
    >
      <h2
        className={`text-4xl md:text-6xl font-bold mb-2 z-30 ${playfair.className}`}
      >
        {title}
      </h2>
      <h2 className="text-xl md:text-2xl mb-8">{subTitle}</h2>
      <p className="text-lg md:text-xl font-light">{description}</p>
    </AnimatedSection>
  );
};

export default Hero;

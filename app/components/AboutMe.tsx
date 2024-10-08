import React from "react";
import { playfair } from "../../utils/fonts";
import { techStack } from "../../utils/techStack";
import TechIcon from "./TechIcon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import AnimatedSection from "./layout/AnimatedSection";
import { PageProps } from "@/utils/types";

const AboutMe = (props: PageProps) => {
  const { title, subTitle, description } = props;
  const iconStyle =
    "transform hover:scale-110 transition-transform w-10 h-10 hover:text-blue-400";
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[75vh] lg:min-h-[85vh] p-10 md:pe-56"
      id="about"
    >
      <h1
        className={`text-4xl md:text-6xl pb-2 font-bold mb-2 ${playfair.className}`}
      >
        {title}
      </h1>
      <p className="text-lg md:text-xl font-light mb-4">{description}</p>

      <h2 className={`text-lg md:text-xl font-medium mb-2`}>
        {`Technologies I've worked with:`}
      </h2>
      <div className="grid grid-cols-4 md:flex md:flex-wrap gap-4">
        {techStack.map(({ name, iconName }) => (
          <TechIcon
            key={name}
            iconName={iconName as IconName}
            name={name}
            style={iconStyle}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default AboutMe;

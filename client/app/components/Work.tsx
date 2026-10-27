import React from "react";
import { playfair } from "../../utils/fonts";
import AnimatedSection from "./layout/AnimatedSection";
import { PageProps } from "@/utils/types";
import { projects } from "@/utils/data";

const Work = (props: PageProps) => {
  const { title, description } = props;
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[75vh] lg:min-h-[85vh] p-10 md:pe-56"
      id="work"
    >
      <h1
        className={`text-4xl md:text-6xl pb-2 font-bold mb-2 ${playfair.className}`}
      >
        {title}
      </h1>
      <p className="text-lg md:text-xl font-light mb-8">{description}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ name, link, description }) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-slate-700 p-6 transition-transform hover:scale-105 hover:border-blue-400"
          >
            <h2 className="text-2xl font-medium mb-2">{name}</h2>
            {description && <p className="font-light mb-4">{description}</p>}
            <span className="text-blue-400 break-all">{link}</span>
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Work;

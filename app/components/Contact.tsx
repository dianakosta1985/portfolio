import React from "react";
import ContactForm from "./ContactForm";
import AnimatedSection from "./layout/AnimatedSection";
import { PageProps } from "@/utils/types";

const Contact = (props: PageProps) => {
  const { title, description } = props;
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[75vh] lg:min-h-[85vh] p-10"
      id="contact"
    >
      <h1 className={`text-5xl md:text-6xl font-bold mb-4`}>{title}</h1>
      <p className="text-lg md:text-xl font-light mb-8">{description}</p>
      <ContactForm />
    </AnimatedSection>
  );
};

export default Contact;

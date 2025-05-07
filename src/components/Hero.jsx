import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import resumeData from "../data/resumeData_en.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-site-bg px-4 md:px-8 fade-in-section is-visible"
    >
      <h1
        className="text-5xl md:text-7xl font-bold text-text-primary mb-4 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        {resumeData.name}
      </h1>
      <h2
        className="text-2xl md:text-3xl text-text-secondary mb-6 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        {resumeData.title}
      </h2>
      <p
        className="max-w-2xl text-lg text-text-secondary mb-8 animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        {resumeData.hero_section.greeting}
      </p>
      <div
        className="flex space-x-6 mb-8 animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        <a
          href={resumeData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary hover:text-brand-green transition-colors duration-300"
        >
          <Linkedin size={32} />
        </a>
        <a
          href={resumeData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary hover:text-brand-green transition-colors duration-300"
        >
          <Github size={32} />
        </a>
        <a
          href={`mailto:${resumeData.email}`}
          className="text-text-primary hover:text-brand-green transition-colors duration-300"
        >
          <Mail size={32} />
        </a>
      </div>
      <a
        href="#about"
        className="mt-4 text-brand-green hover:text-brand-green-darker font-semibold animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        {resumeData.hero_section.learn_more_button} &darr;
      </a>
    </section>
  );
};

export default Hero;

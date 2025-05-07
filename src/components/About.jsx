import React from "react";
import resumeData from "../data/resumeData_en.json";

const About = () => {
  return (
    <section id="about" className="bg-site-bg text-text-primary">
      <div className="container mx-auto fade-in-section">
        <h2 className="section-title">{resumeData.about_section.title}</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            {resumeData.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

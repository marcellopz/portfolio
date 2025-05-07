import React from "react";
import resumeData from "../data/resumeData_en.json";

const Experience = () => {
  return (
    <section id="experience" className="bg-card-bg text-text-primary">
      <div className="container mx-auto fade-in-section">
        <h2 className="section-title">{resumeData.experience_section.title}</h2>
        <div className="space-y-12">
          {resumeData.experience.map((job, index) => (
            <div
              key={index}
              className="card animate-fade-in bg-site-bg border-gray-700"
              style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-1">
                {job.roles[0].title}
              </h3>
              <p className="text-lg text-brand-green mb-2">{job.company}</p>{" "}
              {job.roles.map((role, rIndex) => (
                <p key={rIndex} className="text-sm text-text-secondary mb-1">
                  {role.title} ({role.period})
                  {role.duration && (
                    <span className="ml-2">- {role.duration}</span>
                  )}
                </p>
              ))}
              <p className="text-text-secondary mt-3 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

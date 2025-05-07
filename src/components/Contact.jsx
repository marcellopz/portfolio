import React from "react";
import resumeData from "../data/resumeData_en.json";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-site-bg text-text-primary">
      <div className="container mx-auto text-center fade-in-section">
        <h2 className="section-title !text-text-primary">
          {resumeData.contact_section.title}
        </h2>
        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
          {resumeData.contact_section.intro_text}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div
            className="card flex flex-col items-center p-6 bg-card-bg rounded-material shadow-lg animate-fade-in border border-gray-700"
            style={{ animationDelay: "0.2s" }}
          >
            <Mail size={40} className="text-brand-green mb-3" />
            <h3 className="text-xl font-semibold mb-1 text-text-primary">
              {resumeData.contact_section.email_label}
            </h3>
            <a
              href={`mailto:${resumeData.email}`}
              className="text-text-secondary hover:text-brand-green transition-colors duration-300"
            >
              {resumeData.email}
            </a>
          </div>
          <div
            className="card flex flex-col items-center p-6 bg-card-bg rounded-material shadow-lg animate-fade-in border border-gray-700"
            style={{ animationDelay: "0.4s" }}
          >
            <Phone size={40} className="text-brand-green mb-3" />
            <h3 className="text-xl font-semibold mb-1 text-text-primary">
              {resumeData.contact_section.phone_label}
            </h3>
            <p className="text-text-secondary">{resumeData.phone}</p>
          </div>
          <div
            className="card flex flex-col items-center p-6 bg-card-bg rounded-material shadow-lg animate-fade-in border border-gray-700"
            style={{ animationDelay: "0.6s" }}
          >
            <Linkedin size={40} className="text-brand-green mb-3" />
            <h3 className="text-xl font-semibold mb-1 text-text-primary">
              {resumeData.contact_section.linkedin_label}
            </h3>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-brand-green transition-colors duration-300"
            >
              {resumeData.linkedin.split("/").pop()}
            </a>
          </div>
          <div
            className="card flex flex-col items-center p-6 bg-card-bg rounded-material shadow-lg md:col-span-2 lg:col-span-1 animate-fade-in border border-gray-700"
            style={{ animationDelay: "0.8s" }}
          >
            <Github size={40} className="text-brand-green mb-3" />
            <h3 className="text-xl font-semibold mb-1 text-text-primary">
              {resumeData.contact_section.github_label}
            </h3>
            <a
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-brand-green transition-colors duration-300"
            >
              {resumeData.github.split("/").pop()}
            </a>
          </div>
          <div
            className="card flex flex-col items-center p-6 bg-card-bg rounded-material shadow-lg md:col-span-2 lg:col-span-2 animate-fade-in border border-gray-700"
            style={{ animationDelay: "1s" }}
          >
            <MapPin size={40} className="text-brand-green mb-3" />
            <h3 className="text-xl font-semibold mb-1 text-text-primary">
              {resumeData.contact_section.location_label}
            </h3>
            <p className="text-text-secondary">{resumeData.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

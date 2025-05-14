import React from "react";
import resumeData from "../data/resumeData_en.json";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-site-bg text-text-primary">
      <div className="container mx-auto fade-in-section">
        <h2 className="section-title">{resumeData.projects_section.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.personal_projects.map((project, index) => (
            <div
              key={index}
              className="card animate-fade-in bg-card-bg border-gray-700 flex flex-col"
              style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {project.name}
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed overflow-y-auto">
                {project.description}
              </p>
              <div className="flex space-x-4 mt-auto">
                {project.url && project.url !== "" && (
                  <a
                    href={
                      project.url.startsWith("http")
                        ? project.url
                        : `https://${project.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-style flex items-center"
                  >
                    <ExternalLink size={18} className="mr-1" />{" "}
                    {project.view_project_button || "View Project"}
                  </a>
                )}
                {project.github_url && project.github_url !== "" && (
                  <a
                    href={
                      project.github_url.startsWith("http")
                        ? project.github_url
                        : `https://${project.github_url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-style flex items-center"
                  >
                    <Github size={18} className="mr-1" />{" "}
                    {project.source_code_button || "Source Code"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

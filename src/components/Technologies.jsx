import React from "react";
import resumeData from "../data/resumeData_en.json";
import {
  Code,
  Cpu,
  Database,
  GitMerge,
  Cloud,
  Wind,
  Zap,
  Palette,
  PenTool,
  Server,
  MonitorPlay,
  Puzzle,
  LayoutGrid,
  Type,
  CheckCircle,
  Star,
  Rocket,
  Box,
  Layers,
  Package,
  RefreshCcw,
  Share2,
} from "lucide-react";

const IconWrapper = ({ Icon }) => (
  <Icon className="w-10 h-10 text-brand-green" />
);

const iconMap = {
  "react.js": Rocket,
  typescript: Type,
  "javascript (es6+)": Code,
  "next.js": Layers,
  "node.js (basic)": Server,
  python: Cpu,
  html5: Code,
  css3: Palette,
  "material ui": LayoutGrid,
  "tailwind css": Wind,
  git: GitMerge,
  "docker (basic)": Box,
  "aws (certified solutions architect - associate)": Cloud,
  "firebase (realtime database, auth)": Database,
  redux: Share2,
  zustand: Package,
  "react query": RefreshCcw,
  "react testing library (rtl)": CheckCircle,
  jest: Zap,
  "styled components": PenTool,
  gitlab: GitMerge,
  vercel: Cloud,
  jira: Puzzle,
  figma: MonitorPlay,
  "php (basic)": Code,
  default: Star,
};

const Technologies = () => {
  const relevantTech = resumeData.skills.relevant_tech_icons || [];

  return (
    <section id="technologies" className="bg-card-bg text-text-primary">
      <div className="container mx-auto fade-in-section">
        <h2 className="section-title">
          {resumeData.technologies_section.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 text-center">
          {relevantTech.map((tech, index) => {
            const Icon = iconMap[tech.toLowerCase()] || iconMap["default"];
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 card bg-site-bg border-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <IconWrapper Icon={Icon} />
                <p className="mt-3 text-sm font-medium text-text-primary">
                  {tech}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-text-primary">
            {resumeData.technologies_section.other_skills_title}
          </h3>
          {Object.entries(resumeData.skills).map(([categoryKey, skills]) => {
            if (
              [
                "relevant_tech_icons",
                "other_skills_category_title",
                "languages_category_title",
              ].includes(categoryKey) ||
              !Array.isArray(skills) ||
              skills.length === 0
            )
              return null;

            const categoryName =
              resumeData.skills[`${categoryKey}_category_title`] ||
              categoryKey
                .replace(/_/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <div
                key={categoryKey}
                className="mb-4 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <h4 className="text-lg font-medium text-brand-green mb-2">
                  {categoryName}:
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {skills.join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

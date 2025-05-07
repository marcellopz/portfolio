import React from "react";
import resumeData from "../data/resumeData_en.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-site-bg text-text-secondary py-8 text-center border-t border-gray-700">
      <div className="container mx-auto fade-in-section">
        <p className="text-sm text-text-secondary">
          &copy; {currentYear} {resumeData.footer.copyright_text}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {resumeData.footer.developed_with_text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

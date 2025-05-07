import React from "react";
import resumeData from "../data/resumeData_en.json";

const Navbar = () => {
  const navLinks = [
    { href: "#home", label: resumeData.navbar.home },
    { href: "#about", label: resumeData.navbar.about },
    { href: "#experience", label: resumeData.navbar.experience },
    { href: "#projects", label: resumeData.navbar.projects },
    { href: "#technologies", label: resumeData.navbar.technologies },
    { href: "#contact", label: resumeData.navbar.contact },
  ];

  return (
    <nav className="bg-site-bg text-text-primary p-4 fixed w-full top-0 z-50 shadow-md border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold hover:text-brand-green transition-colors duration-300"
        >
          MPZ
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand-green transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => (
  <nav className="w-full px-8 py-4 shadow bg-black text-white fixed top-0 flex justify-between items-center">
    <div className="font-bold text-xl">Portfolio</div>
    <ul className="flex gap-6 text-base">
      <li><a href="#hero" className="hover:underline">Home</a></li>
      <li><a href="#education" className="hover:underline">Education</a></li>
      <li><a href="#skills" className="hover:underline">Skills</a></li>
      <li><a href="#experience" className="hover:underline">Experience</a></li>
      <li><a href="#projects" className="hover:underline">Projects</a></li>
      <li><a href="#footer" className="hover:underline">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;

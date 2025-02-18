import React from "react";
import star from "../assets/star.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-10vh bg-black flex items-start justify-between px-8 p-10 ">
      {/* Left Section: Logo & Text */}
      <div className="flex items-center gap-4 m-10">
        <img src={logo} alt="Donquix Logo" className="w-8 h-8" />
        <span className="text-[#EFC7B0] text-lg font-chokokutai">Donquix</span>
        <span className="text-[#EFC7B0]">|</span>
      {/* left Section: Stars */}
      <div className="flex items-center gap-4">
        <img src={star} alt="star" className="w-4 h-4" />
        <img src={star} alt="star" className="w-4 h-4" />
        <img src={star} alt="star" className="w-4 h-4" />
      </div>
      </div>


      {/* Right Section: Stars & Tagline */}
      <div className="flex items-center gap-4 m-10">
        <img src={star} alt="star" className="w-4 h-4" />
        <img src={star} alt="star" className="w-4 h-4" />
        <img src={star} alt="star" className="w-4 h-4" />
        <span className="text-[#EFC7B0]">| UNCOMMON among UNCOMMON</span>
      </div>
    </nav>
  );
};

export default Navbar;

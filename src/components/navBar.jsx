import React from "react";
import star from "../assets/star.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-4 bg-black">
      {/* Left Section: Logo & Stars */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Donquix Logo" className="w-8 h-8" />
        <span className="text-[#EFC7B0] text-lg font-chokokutai">Donquix</span>
        <span className="text-[#EFC7B0] hidden sm:inline">|</span>

        {/* Stars (Left) */}
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <img key={i} src={star} alt="star" className="w-4 h-4" />
          ))}
        </div>
      </div>

      {/* Right Section: Stars & Tagline */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 sm:mt-0">
        {/* Stars (Right) */}
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <img key={i} src={star} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <span className="text-[#EFC7B0] text-center sm:text-right text-sm sm:text-base">
          | UNCOMMON among UNCOMMON
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

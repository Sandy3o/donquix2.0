import star from "../assets/star.svg";
import logo from "../assets/logo.svg";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="w-full h-[5vh] flex flex-col  sm:flex-row items-center justify-between px-6 sm:px-45 py-1 bg-black">
      {/* Left Section */}
      <div className="flex items-center gap-5">
        <img src={logo} alt="Donquix Logo" className="w-8 h-8" />
        <span className="text-[#EFC7B0] text-xl font-chokokutai">Donquix</span>
        <span className="text-[#EFC7B0] hidden sm:inline">|</span>

        {/*left star*/}
        <div className="flex gap-5">
          {[...Array(3)].map((_, i) => (
            <img key={i} src={star} alt="star" className="w-5 h-5" />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col mt-3 sm:flex-row items-center gap-3  sm:mt-0">
        {/*right star) */}
        <div className="flex gap-5">
          {[...Array(3)].map((_, i) => (
            <img key={i} src={star} alt="star" className="w-5 h-5" />
          ))}
        </div>
        <span className="text-[#EFC7B0] text-center font-gilro sm:text-center text-sm sm:text-base ">
          |{" "}
          <a
            href="https://www.instagram.com/donquixstudio/"
            target="_blank"
            className="m-2 text-xl font-Gilro"
          >
            LinkedIn
          </a>
          |{" "}
          <a
            href="https://www.instagram.com/donquixstudio/"
            target="_blank"
            className="m-2 text-xl font-Gilro"
          >
            Instagram
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

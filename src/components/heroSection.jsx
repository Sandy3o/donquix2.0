import heroImage from "../assets/heroImage.svg";
import ellipse from "../assets/ellipse.svg";
// import buttonBackground from '../assets/buttonBackground';
import "../App.css";

const HeroSection = () => {
  return (
    <>
      <div style={{ transform: "scaleX(-1)" }}>
        <RightCurved />
      </div>
      <RightCurved />

      <section className="w-ful bg-black flex flex-col items-center justify-items-normal text-center mb-10">
        {/* Hero Image */}
        <div className="relative w-full max-w-4xl mx-auto">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-auto h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-[#EFC7B0] text-4xl md:text-5xl lg:text-6xl font-chokokutai mt-1">
          A visionary craftspeople
        </h1>

        {/* Subtitle */}
        <p className="text-[#EFC7B0] text-xl mt-4 max-w-2xl font-Gilro">
          Who push boundaries to bring brands, experiences, and stories to life.
        </p>

        {/* ellipse */}
        <div className="relative w-full max-w-4xl mx-auto">
          <img src={ellipse} alt="ellipse" className="w-full h-4 m-2" />
        </div>

        {/* Work Button */}
        <div className="absolute left-55 top-80 space-y-6">
          <a
            href="/work"
            alt="work"
            className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilro italic"
          >
            {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
            <span className="relative">Work</span>
          </a>
        </div>

        {/*Service Button */}

        <div className="absolute left-50 top-130 space-y-6">
          <a
            href="/Service"
            alt="Service"
            className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilro italic"
          >
            {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
            <span className="relative">Service</span>
          </a>
        </div>

        {/* Blogs Button */}
        <div className="absolute right-55 top-80 space-y-6">
          <a
            href="/Blogs"
            alt="Blogs"
            className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilro italic"
          >
            {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
            <span className="relative">Blogs</span>
          </a>
        </div>

        {/*HandBook button  */}
        <div className="absolute right-50 top-130 space-y-6">
          <a
            href="/HandBook"
            alt="HandBook"
            className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilro italic"
          >
            {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
            <span className="relative">HandBook</span>
          </a>
        </div>
      </section>
    </>
  );
};
const RightCurved = () => {
  return (
    <div className="absolute w-[457px] h-[700px] left-360 ">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 457 818"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 m-o"
      >
        <defs>
          <linearGradient
            id="paint0_linear_2717_129"
            x1="271.184"
            y1="0"
            x2="515.554"
            y2="675.009"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EFC7B0" stopOpacity="0" />
            <stop offset="0.515" stopColor="#EFC7B0" />
            <stop offset="1" stopColor="#EFC7B0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M367.267 0C367.267 0 429.618 176.356 367.267 253C290.623 347.215 156.814 184.874 56.2672 253C-36.8146 328.5 -4.89685 660 96.6852 758.5C262.603 919.384 540.685 697.5 540.685 697.5"
          stroke="url(#paint0_linear_2717_129)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};
export default HeroSection;

import arrowButton from "../assets/arrowButton.svg";

const FooterSection = () => {
  return (
    <>
      <CurvedLine />
      <div className="w-full h-100vh bg-black flex flex-col items-center justify-center pb-20 ">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@donquix.com.com&su=Contact%20Inquiry&body=Hello,%20I%20would%20like%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer">
          <button className="font-chokokutai text-xl text-[#EFC7B0] border border-[#EFC7B0] px-10 py-3 flex items-center gap-5">
            Contact us
            <img src={arrowButton} alt="arrowButton" className="w-6 h-6" />
          </button>
        </a>
      </div>
    </>
  );
};
const CurvedLine = () => {
  return (
    <div className="relative w-full h-[46px] bg-black overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1920 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-2"
            y1="23.231"
            x2="1919"
            y2="23.231"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#EFC7B0" stopOpacity="0" />
            <stop offset="0.5" stopColor="#EFC7B0" />
            <stop offset="1" stopColor="#EFC7B0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-2 44.9999C-2 44.9999 536.5 3.02242 960.5 1.49992C1384.5 -0.0225801 1919 44.9999 1919 44.9999"
          stroke="url(#paint0_linear)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default FooterSection;

//  CTA Button */
//  w-full h-screen bg-black flex flex-col items-center justify-center text-center px-8
//  flex-colum justify-center mt-8 px-6 py-3 bg-black text-[#EFC7B0] text-lg font-chokokutai

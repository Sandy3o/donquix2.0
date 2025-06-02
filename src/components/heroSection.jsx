import heroImage from "../assets/heroImage.svg";
import ellipse from "../assets/ellipse.svg";
// import buttonBackground from '../assets/buttonBackground';
import "../App.css";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-black flex flex-col items-center justify-center text-center px-8">
      {/* Hero Image */}
      <div className="relative w-full max-w-4xl mx-auto">
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Title */}
      <h1 className="text-[#EFC7B0] text-4xl md:text-5xl lg:text-6xl font-chokokutai mt-6">
        A visionary craftspeople
      </h1>

      {/* Subtitle */}
      <p className="text-[#EFC7B0] text-lg font-gilroy mt-4 max-w-2xl font-Gilroy">
        Who push boundaries to bring brands, experiences, and stories to life.
      </p>

      {/* ellipse */}
      <div className="relative w-full max-w-4xl mx-auto">
        <img src={ellipse} alt="ellipse" className="w-full h-4 m-2" />
      </div>

      {/* Work Button */}
      <div className="absolute left-25 top-75 space-y-6">
        <a
          href="/work"
          alt="work"
          className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilroy-Light">
          {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
          <span className="relative">Work</span>
        </a>
      </div>

      {/*Service Button */}

      <div className="absolute left-25 top-170 space-y-6">
        <a
          href="/Service"
          alt="Service"
          className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilroy-Light">
          {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
          <span className="relative">Service</span>
        </a>
      </div>

      {/* Blogs Button */}
      <div className="absolute right-25 top-75 space-y-6">
        <a
          href="/Blogs"
          alt="Blogs"
          className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilroy-Light">
          {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
          <span className="relative">Blogs</span>
        </a>
      </div>

      {/*HandBook button  */}
      <div className="absolute right-25 top-170 space-y-6">
        <a
          href="/HandBook"
          alt="HandBook"
          className="relative block px-6 py-3 text-[#EAD0B2] text-2xl font-Gilroy-Light">
          {/* <span
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ buttonBackground }}
          /> */}
          <span className="relative">HandBook</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import star from "../assets/star.svg"; // Ensure correct relative path

const ThreeStar = () => {
  return (
    <div className="relative w-full h-screen bg-black flex">
      {/* Top-Left Stars */}
      <div className="absolute top-10 left-10 flex items-center gap-3 p-4">
        <img src={star} alt="star" className="w-6 h-6" />
        <img src={star} alt="star" className="w-6 h-6" />
        <img src={star} alt="star" className="w-6 h-6" />
      </div>

      {/* Top-Right Stars */}
      <div className="absolute top-10 right-10 flex items-center gap-3 p-4">
        <img src={star} alt="star" className="w-6 h-6" />
        <img src={star} alt="star" className="w-6 h-6" />
        <img src={star} alt="star" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default ThreeStar;

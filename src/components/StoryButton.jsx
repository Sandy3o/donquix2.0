import buttonBackground from "../assets/buttonBackground.svg"; // Import SVG for button background

const StoryButton = () => {
  return (
    <aside className="absolute  left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
      {/* Sidebar Buttons */}
      <SidebarButton text="Story" />
      {/* <SidebarButton text="Work" />
      <SidebarButton text="Services" />
      <SidebarButton text="Hand Book" /> */}
    </aside>
  );
};

// Reusable Sidebar Button Component
const SidebarButton = ({ text }) => {
  return (
    <button className="absolute w-32 h-12 flex items-center justify-items-normal text-[#EFC7B0] font-gilroy border-0 rounded-md hover:bg-[#EFC7B0] hover:text-black transition">
      <img
        src={buttonBackground}
        alt="Button Background"
        className="absolute inset-0 w-full h-full opacity-70"
      />
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default StoryButton;

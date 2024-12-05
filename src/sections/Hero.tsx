'use client';
import Image from "next/image";
import ArrowIcon from "@/assets/PathhR.png"; 
import Imgg from "@/assets/imgg.png";
import Pathh from "@/assets/Path.png";

export const Hero = () => {
  return (
    <section>
      <div className="relative text-center mt-14">
        {/* Desktop and Mobile Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black font-medium w-full max-w-screen-lg mx-auto opacity-95">
          Get More Done
        </h2>

        {/* Desktop and Mobile Subtext */}
        <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-black mt-6 text-center max-w-xl mx-auto gap-6">
          Post Any Task. Pick The Best Person. Get It Done.
        </p>

        {/* Mobile View: Earn Money as a Tasker (Move to Top) */}
        <div className="mt-4 flex justify-center md:hidden">
          <button className="px-6 py-3 flex items-center justify-between bg-black font-medium rounded-full gap-6 border border-black">
            <span className="text-left text-white">Earn money as a Tasker</span>
            <Image src={Pathh} alt="Arrow Icon" width={20} height={20} className="ml-4" />
          </button>
        </div>

        {/* Mobile View: Image */}
        <div className="mt-4 flex justify-center md:hidden">
          <Image src={Imgg} alt="Arrow Icon" width={393} height={210} className="ml-4" />
        </div>

        {/* Mobile View: Post a Task (Below Image) */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="px-6 py-3 flex items-center justify-between text-gray-500 font-medium rounded-full gap-6 border-4 border-black">
            <span className="text-left text-gray-500">Post a Task with AI for free</span>
            <Image src={ArrowIcon} alt="Arrow Icon" width={20} height={20} className="ml-4" />
          </button>
        </div>

        {/* Desktop View: Buttons and Image Layout */}
        <div className="mt-8 flex justify-center hidden md:flex">
          <button className="px-6 py-3 flex items-center justify-between text-gray-500 font-medium rounded-full gap-6 border-4 border-black">
            <span className="text-left text-gray-500">Post a Task with AI for free</span>
            <Image src={ArrowIcon} alt="Arrow Icon" width={20} height={20} className="ml-4" />
          </button>
        </div>
        <div className="mt-4 flex justify-center hidden md:flex">
          <Image src={Imgg} alt="Main Illustration" width={930} height={496} />
        </div>
        <div className="mt-4 ml-8 flex justify-center hidden md:flex">
          <button className="px-6 py-3 flex items-center justify-between bg-black font-medium rounded-full gap-6 border border-black">
            <span className="text-left text-white">Earn money as a Tasker</span>
            <Image src={Pathh} alt="Arrow Icon" width={20} height={20} className="ml-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

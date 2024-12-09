'use client';

import Taskimg from "@/assets/Layer.png";
import Logo from "@/assets/logoo.svg";
import IconPoints from "@/components/IconPoints";
import one from "@/assets/one.png";
import two from "@/assets/Two.png";
import three from "@/assets/Three.png";
import Pathh from "@/assets/Path.png";
import Image from "next/image";
import PathArr from "@/assets/PathArr.png";

export const CallAction = () => {
  return (
    <section className="mt-20">
      <div className="w-full min-h-[665px] max-w-[1400px] mx-auto sm:h-[606px] sm:w-[359px] md:h-auto md:w-full">
        <div className="relative border border-black/15 py-20 rounded-xl ">
          <div className="absolute inset-0 bg-[#E8FAF4] opacity-95"></div>

          {/* Logo */}
          <div className="absolute top-[52px] left-6 md:left-14 z-30">
            <Logo className="h-192.55px w-35.13px" alt="Logo" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between h-full text-left">
            {/* Left Section */}
            <div className="flex-1 px-6 md:pl-14">
            <h2 className="text-xl sm:text-4xl md:text-[68px] w-[510px] h-auto font-semibold text-black mt-6 tracking-tighter leading-[92.89px]">
  Post your first 
  <br />
  <br />
  task in seconds
</h2>




              <p className="text-xl sm:text-xl md:text-[22px] w-[434px] h-[30px] text-black mt-8 tracking-tighter leading-[30.05px]">
                Save yourself hours and get your to-do list completed in simple 3 steps.
              </p>
              <div className="space-y-6 mt-14">
                <IconPoints text="Describe what you need done" imageSrc={one.src} />
                <IconPoints text="Set your budget" imageSrc={two.src} />
                <IconPoints text="Receive quote and pick the best Tasker" imageSrc={three.src} />
              </div>
              <div className="mt-12 flex justify-center md:justify-start">
  <button className="mt-6 px-6 py-4 flex items-center justify-between bg-black font-medium rounded-full gap-6 border border-black">
    <span className="text-white">Post your task</span>
    <Image src={Pathh} alt="Arrow Icon" width={20} height={20} />
  </button>
</div>

            </div>

            {/* Right Section (Image) */}
            <div className="hidden sm:hidden md:flex flex-1 flex-col items-center mt-10 mr-14 ">
              <div className="w-full max-w-[627px] h-[343.75px] mt-12 px-6">
                <img src={Taskimg.src} alt="Task Image" className="w-full h-auto object-cover" />
              </div>
              <div className="mt-10">
                <button className="px-6 py-3 flex items-center justify-between font-medium rounded-full gap-6">
                  <span className="text-black">Learn how Uplancer works</span>
                  <Image src={PathArr} alt="Arrow Icon" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

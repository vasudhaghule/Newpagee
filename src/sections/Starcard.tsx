import React from "react";
import Image from "next/image";
import pop from "@/assets/Popular.png";
import ccc from "@/assets/ccc.png";
import Gstar from "@/assets/Gstar.png";
import Rectt from "@/assets/Rectt.png";
import Recttt from "@/assets/Recttt.png";
import Pathh from "@/assets/Path.png";

const Starcard = () => {
  const services = [
    { title: "REMOVALS", description: "Couch moved 1km down the road", price: "$500" },
    { title: "CLEANING", description: "Deep cleaning service", price: "$300" },
    { title: "DELIVERY", description: "Package delivery within city", price: "$150" },
    { title: "ASSEMBLY", description: "Furniture assembly service", price: "$200" },
    { title: "PAINTING", description: "Room painting service", price: "$400" },
    { title: "TUTORING", description: "Online tutoring session", price: "$100" },
  ];

  return (
    <section className="mt-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="ml-2 text-4xl md:text-[68px] text-black font-semibold tracking-tighter leading-[92.89px]">
          What others are getting done
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          <button className="px-5 py-2 flex items-center font-medium text-black rounded-full border-2 border-black relative">
            <Image src={pop} alt="Popular Icon" width={20} height={20} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <span className="ml-8">Popular</span>
          </button>
          {["UX/UI Design", "Ecommerce Dev", "Video Animation", "Web Dev", "AI/ML"].map((category) => (
            <button key={category} className="px-3 py-2 bg-white font-medium rounded-full text-black/70 border-2 border-black/70">
              {category}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 p-6 rounded-xl border border-black/15 bg-white min-h-[198px]"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-[56px] w-[56px] rounded-full overflow-hidden flex-shrink-0">
                  <Image src={ccc} alt="Circular Background" layout="fill" objectFit="contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={Rectt} alt="Star Icon" width={14} height={18} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={Recttt} alt="Star Icon" width={10} height={18} />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-[17px] font-medium text-black">{service.title}</p>
                  <p className="mt-1 text-lg md:text-[22px] tracking-tighter font-semibold text-black">{service.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-auto pt-4">
                <Image src={Gstar} alt="Gstar Icon" width={16} height={16} className="object-contain" />
                <p className="text-sm md:text-[17px] font-medium text-black tracking-tighter">5 Stars</p>
              </div>

              <div className="absolute bottom-5 right-4 text-lg md:text-[17px] font-medium text-black">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 flex items-center justify-between bg-black font-medium rounded-full gap-6 border border-black">
            <span className="text-left text-white">Post your task</span>
            <Image src={Pathh} alt="Arrow Icon" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Starcard;

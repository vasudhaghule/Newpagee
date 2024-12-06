import React from "react";
import Feat from "@/assets/RectangleFet.png";
import Feat1 from "@/assets/Feat.png";
import Feat2 from "@/assets/Feato.png";
import Featcirc from "@/assets/Featc.png";
import Star from "@/assets/Feats.png";
import FeatD from "@/assets/Featd.png";

const Featuress = () => {
  return (
    <section className="mt-20 relative">
      {/* Wrapper to control layout */}
    <div className="relative flex justify-start max-w-[1300px] h-[640px] mx-auto sm:h-[628px] sm:w-[396px] md:h-[640px] md:w-full">

        {/* Content Container */}
        <div className="sm:text-left relative min-h-[699px] max-w-[1000px] flex justify-between items-start border border-black/15 py-20 px-6 rounded-xl overflow-hidden bg-[#FBFBF8]">
          {/* Text Section */}
          <div className="flex-1 pl-14 sm:pl-0 z-10">
            <h2 className=" sm:text-5xl md:text-6xl tracking-tighter relative z-10 flex flex-col md:flex-row items-start justify-between h-full text-left text-left text-black font-semibold">
              Trust and safety features for your protection
            </h2>

            <div className="flex items-center mt-14">
              <div className="relative h-[20px] w-[20px] rounded-full overflow-hidden flex-shrink-0 absolute top-[-16px]">
                <img
                  src={Featcirc.src}
                  alt="Circular Background"
                  className="h-full w-full object-cover"
                />
                {/* Centered Star inside Featcirc */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Star.src}
                    alt="Star"
                    className="h-[10px] w-[10px] object-contain"
                  />
                </div>
              </div>

              {/* Secure Payments Text */}
              <div className="ml-4 flex flex-col justify-center">
                <p className="h-[30px] w-[180px] text-lg  md:text-xl text-black font-medium">
                  Secure payments
                </p>
                {/* Additional Text */}
                <p className="relative flex justify-start max-h-[25px] w-[430px] text-black mt-1 mx-auto sm:h-[20px] sm:w-[312px] md:h-[25px] md:w-full">
  Only release payment when the task is completed to your satisfaction.
</p>

              </div>
            </div>

            <div className="flex items-center mt-14">
              <div className="relative h-[20px] w-[20px] rounded-full overflow-hidden flex-shrink-0 absolute top-[-16px]">
                <img
                  src={Featcirc.src}
                  alt="Circular Background"
                  className="h-full w-full object-cover"
                />
                {/* Centered Star inside Featcirc */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={FeatD.src}
                    alt="Star"
                    className="h-[10px] w-[10px] object-contain"
                  />
                </div>
              </div>

              {/* Trusted ratings and reviews Text */}
              <div className="ml-4 flex flex-col justify-center">
                <p className="h-[30px] w-[280px] text-lg md:text-xl text-black font-medium">
                  Trusted ratings and reviews
                </p>
                {/* Additional Text */}
                <p className=" relative flex justify-start max-h-[25px] w-[430px] text-black mt-1 mx-auto sm:h-[20px] sm:w-[312px] md:h-[25px] md:w-full">
                  Pick the right person for the task based on real ratings and reviews from other users
                </p>
              </div>
            </div>

            <div className="flex items-center mt-14">
              <div className="relative h-[20px] w-[20px] rounded-full overflow-hidden flex-shrink-0 absolute top-[-10px]">
                <img
                  src={Featcirc.src}
                  alt="Circular Background"
                  className="h-full w-full object-cover"
                />
                {/* Centered Star inside Featcirc */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={FeatD.src}
                    alt="Star"
                    className="h-[10px] w-[10px] object-contain"
                  />
                </div>
              </div>

              {/* Insurance for peace of mind Text */}
              <div className="ml-4 flex flex-col justify-center">
                <p className="h-[30px] w-[280px] text-lg md:text-xl sm:mt-2 text-black font-medium">
                  Insurance for peace of mind
                </p>
                {/* Additional Text */}
                <p className="relative flex justify-start max-h-[25px] w-[430px] text-black mt-1 mx-auto sm:h-[20px] sm:w-[312px] md:h-[25px] md:w-full">
                  We provide liability insurance for Taskers performing most task activities
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative z-10 w-[343px] h-full hidden md:block">
  {/* Image section visible only on medium screens and above */}
  <img
    src={Feat.src}
    alt="Task Image"
    className="object-contain w-full h-full ml-7"
  />
</div>
        </div>

        {/* Right Side Image with Rounded Corners */}
        <div className="absolute top-0 right-0 h-[699px] w-[400px] rounded-lg overflow-hidden hidden md:block">
  {/* Image visible only on medium screens and above */}
  <img
    src={Feat1.src}
    alt="Feat Image"
    className="h-full w-full object-cover"
  />

  {/* Feat2 Image inside Feat1 */}
  <div className="absolute top-20 left-10 h-[76px] w-[180px] z-10 px-5 py-2 rounded-lg">
    <img
      src={Feat2.src}
      alt="Feato Image"
      className="object-cover h-full w-full rounded-full"
    />
  </div>
</div>


      </div>

      <div
        className="relative mx-auto mb-10 mt-32 relative">
        {/* Content Container */}
        <div className="relative flex justify-start max-w-[1300px] h-[640px] mx-auto sm:h-auto sm:w-[220px] md:h-[640px] md:w-full">
          {/* YouTube Video Embed */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bCJ3A-PZf5k
"
            title="YouTube video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Featuress;

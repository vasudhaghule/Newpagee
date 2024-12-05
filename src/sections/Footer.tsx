import React from "react";
import AndT from "@/assets/AndT.png";
import AndB from "@/assets/AndB.png";
import apple from "@/assets/apple.png";
import appleT from "@/assets/AppleT.png";
import linkedin from "@/assets/linkedin.png";
import Face from "@/assets/Face.png";
import Facec from "@/assets/facec.png";
import Socialx from "@/assets/social.png";
import Inst from "@/assets/inst.png";
import Instc from "@/assets/instc.png";
import yout from "@/assets/yout.png";
import youtt from "@/assets/youtt.png"
import circ from "@/assets/circ.png";
import rgt from "@/assets/Iconsmall.png";
import III from "@/assets/iii.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-black  py-20 ">
 <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* For Clients */}
  <div>
    <div className="flex items-center ">
      <h3 className="text-lg text-white mb-4">For Clients</h3>
      {/* Icon Image */}
      <img
        src={rgt.src}
        alt="Clients Icon"
        className="h-[5px] w-[10px] object-contain md:hidden ml-auto"
      />
    </div>
    <ul className="hidden md:block space-y-2 text-white sm:border-t border-black pt-6">
      <li>How to hire</li>
      <li>Talent Marketplace</li>
      <li>Project Catalog</li>
      <li>Hire an agency</li>
      <li>Enterprise</li>
      <li>Any Hire</li>
      <li>Contract-to-hire</li>
      <li>Direct Contracts</li>
      <li>Hire worldwide</li>
      <li>Hire in the USA</li>
    </ul>
  </div>

  {/* For Talent */}
  <div>
    <div className="flex items-center sm:border-b md:border-none">
      <h3 className="text-lg text-white mb-4">For Talent</h3>
      {/* Icon Image */}
      <img
        src={rgt.src}
        alt="Talent Icon"
        className="h-[5px] w-[10px] object-contain md:hidden ml-auto"
      />
    </div>
    <ul className="hidden md:block space-y-2 text-white">
      <li>How to find work</li>
      <li>Direct Contracts</li>
      <li>Find freelance jobs worldwide</li>
      <li>Find freelance jobs in the USA</li>
      <li>Win work with ads</li>
      <li>Exclusive resources with Freelancer Plus</li>
    </ul>
  </div>

  {/* Resources */}
  <div>
    <div className="flex items-center sm:border-b md:border-none">
      <h3 className="text-lg text-white mb-4">Resources</h3>
      {/* Icon Image */}
      <img
        src={rgt.src}
        alt="Resources Icon"
        className="h-[5px] w-[10px] object-contain md:hidden ml-auto"
      />
    </div>
    <ul className="hidden md:block space-y-2 text-white">
      <li>Help & support</li>
      <li>Success stories</li>
      <li>Upwork reviews</li>
      <li>Blog</li>
      <li>Community</li>
      <li>Affiliate programme</li>
      <li>Free Business Tools</li>
    </ul>
  </div>

  {/* Company */}
  <div>
    <div className="flex items-center ">
      <h3 className="text-lg text-white mb-4">Company</h3>
      {/* Icon Image */}
      <img
        src={III.src}
        alt="Company Icon"
        className="h-[5px] w-[10px] object-contain md:hidden ml-auto"
      />
    </div>
    <ul className="space-y-2 text-white">
      <li>About us</li>
      <li>Leadership</li>
      <li>Investor relations</li>
      <li>Careers</li>
      <li>Our impact</li>
      <li>Press</li>
      <li>Contact us</li>
      <li>Partners</li>
      <li>Trust, safety & security</li>
      <li className="sm:border-b md:border-none pb-4">Modern slavery statement</li>
    </ul>
  </div>
</div>


<div className="mt-10 flex items-center px-6 space-x-2 mt-20 hidden md:flex">
  <p className="ml-8 text-white text-lg">Follow Us</p>
  <div className="flex space-x-2">
    <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
      {/* Circular Background */}
      <img
        src={circ.src}
        alt="Circular Background"
        className="h-51.96 w-51.96 object-cover"
      />
      {/* Centered Inner Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={Facec.src}
          alt="Centered Icon"
          className="h-[22.27px] w-[22.27px] object-contain"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={Face.src}
          alt="Centered Icon"
          className="h-[15.95px] w-[8.6px] object-contain"
        />
      </div>
    </div>

    <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
      {/* Circular Background */}
      <img
        src={circ.src}
        alt="Circular Background"
        className="h-51.96 w-51.96 object-cover"
      />
      {/* Centered Inner Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={linkedin.src}
          alt="Centered Icon"
          className="h-[22.27px] w-[22.27px] object-contain"
        />
      </div>
    </div>

    <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
      {/* Circular Background */}
      <img
        src={circ.src}
        alt="Circular Background"
        className="h-51.96 w-51.96 object-cover"
      />
      {/* Centered Inner Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={Socialx.src}
          alt="Centered Icon"
          className="h-[22.27px] w-[21.79px] object-contain"
        />
      </div>
    </div>

    <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
      {/* Circular Background */}
      <img
        src={circ.src}
        alt="Circular Background"
        className="h-51.96 w-51.96 object-cover"
      />
      {/* Centered Inner Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex space-x-4">
          <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
            {/* Circular Background */}
            <img
              src={circ.src}
              alt="Circular Background"
              className="h-51.96 w-51.96 object-cover"
            />
            {/* Centered Inner Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={yout.src}
                alt="Centered Icon"
                className="h-[22.27px] w-[22.27px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={youtt.src}
            alt="Centered Icon"
            className="h-[6.63px] w-[5.83px] object-contain"
          />
        </div>
      </div>
    </div>

    <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
      {/* Circular Background */}
      <img
        src={circ.src}
        alt="Circular Background"
        className="h-51.96 w-51.96 object-cover"
      />
      {/* Centered Inner Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={Inst.src}
          alt="Centered Icon"
          className="h-[22.27px] w-[22.27px] object-contain"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={Instc.src}
          alt="Centered Icon"
          className="h-[9.9px] w-[9.9px] object-contain"
        />
      </div>
    </div>
  </div>

  {/* Mobile App Section */}
  <div className="absolute left-[700px] flex items-center space-x-2">
    <p className="ml-80 text-white text-lg">Mobile App</p>
    <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
      {/* Circular Background */}
      <img
        src={circ.src}
        alt="Circular Background"
        className="h-full w-full object-cover"
      />
      {/* Apple Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={apple.src}
          alt="Apple Icon"
          className="h-[19.13px] w-[17.11px] object-contain"
        />
      </div>
      {/* Apple Tail Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={appleT.src}
          alt="Apple Tail Icon"
          className="absolute -translate-y-[8px] h-[5.36px] w-[4.57px] object-contain"
        />
      </div>
    </div>

    <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
      {/* Circular Background */}
      <img
        src={circ.src}
        alt="Circular Background"
        className="h-full w-full object-cover"
      />
      {/* Android Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={AndB.src}
          alt="Android Icon"
          className="h-[19.13px] w-[17.11px] object-contain"
        />
      </div>
      {/* Android Tail Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={AndT.src}
          alt="Android Tail Icon"
          className="absolute -translate-y-[8px] h-[6.99px] w-[12.94px] object-contain"
        />
      </div>
    </div>
  </div>
</div>




 {/* Mobile App Section */}
 <div className="mt-10 flex items-center-between space-x-2 md:hidden flex-col">
 <p className="ml-6 text-white text-lg">Follow Us</p>
        <div className="flex space-x-2 mt-4">
 
          <div className="ml-4 relative h-[50px] w-[50px] rounded-full overflow-hidden">
            <img
              src={circ.src}
              alt="Circular Background"
              className="h-51.96 w-51.96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={Facec.src}
                alt="Centered Icon"
                className="h-[22.27px] w-[22.27px] object-contain"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={Face.src}
                alt="Centered Icon"
                className="h-[15.95px] w-[8.6px] object-contain"
              />
            </div>
          </div>

          <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
            <img
              src={circ.src}
              alt="Circular Background"
              className="h-51.96 w-51.96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={linkedin.src}
                alt="Centered Icon"
                className="h-[22.27px] w-[22.27px] object-contain"
              />
            </div>
          </div>

          <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
            <img
              src={circ.src}
              alt="Circular Background"
              className="h-51.96 w-51.96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={Socialx.src}
                alt="Centered Icon"
                className="h-[22.27px] w-[21.79px] object-contain"
              />
            </div>
          </div>

          <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
            <img
              src={circ.src}
              alt="Circular Background"
              className="h-51.96 w-51.96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-4">
                <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
                  <img
                    src={circ.src}
                    alt="Circular Background"
                    className="h-51.96 w-51.96 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={yout.src}
                      alt="Centered Icon"
                      className="h-[22.27px] w-[22.27px] object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={youtt.src}
                  alt="Centered Icon"
                  className="h-[6.63px] w-[5.83px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="sm:border-b md:border-none pb-4 mt-10 flex items-center-between space-x-2 md:hidden flex-col ">
        <p className="ml-6 text-white text-lg">Mobile App</p>
        <div className="flex space-x-2 mt-4">
          <div className="ml-4 relative h-[50px] w-[50px] rounded-full overflow-hidden">
            <img
              src={circ.src}
              alt="Circular Background"
              className="h-51.96 w-51.96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={appleT.src}
                alt="Apple Icon"
                className="h-[22.27px] w-[22.27px] object-contain"
              />
            </div>
          </div>

          <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
            <img
              src={circ.src}
              alt="Circular Background"
              className="h-51.96 w-51.96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={AndT.src}
                alt="Android Icon"
                className="h-[22.27px] w-[22.27px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      




      {/* Social Media and Legal Section */}
      <div className="hidden md:block ml-8  text-white text-lg mt-2 border-t border-black pt-6">
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
    {/* Left-aligned Legal Section */}
    <div className="flex items-center-start">
      {/* Copyright Text */}
      <p className="text-white text-sm">
        © 2015 - 2024 Upwork® Global Inc.
      </p>

      {/* Legal Links */}
      <ul className="flex space-x-4 text-white text-sm ml-20">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>CA Notice at Collection</li>
        <li>Cookie Settings</li>
        <li>Accessibility</li>
      </ul>
    </div>
  </div>
</div>

{/* Social Media and Legal Section */}
<div className="md:hidden ml-1 text-white text-lg mt-2 border-t border-black pt-6">
  <div className="max-w-7xl mx-auto px-6 flex flex-col items-start">
    {/* Copyright Text */}
    <p className="text-white text-sm mb-4">
      © 2015 - 2024 Upwork® Global Inc.
    </p>

    {/* Legal Links in Column */}
    <ul className="flex flex-col space-y-2 text-white text-sm">
      <li>Terms of Service</li>
      <li>Privacy Policy</li>
      <li>Cookie Settings</li>
    </ul>
  </div>
</div>

    </footer>
  );
};

export default Footer;

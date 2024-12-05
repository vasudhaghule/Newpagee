"use client";

import LogoIcon from "@/assets/logo.svg";
import React, { useState } from "react";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import Rectt from "@/assets/Rectangle.png";
import Plus from "@/assets/Plus.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90 border-b-2 border-gray md:border-none hover:bg-gray-100 transition-all duration-300">

      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Mobile View: Menu Icon and Logo */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon className="h-[18.33px] w-[22.76px]" alt="Menu Icon" />
          </button>
          <a href="#" className="flex items-center" aria-label="Home">
            <LogoIcon className="h-6 w-auto" alt="Logo" />
          </a>
        </div>

        {/* Desktop View: Navigation and Logo */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="flex items-center" aria-label="Home">
            <LogoIcon className="h-8 w-auto" alt="Logo" />
          </a>
          <nav className="flex gap-10 text-sm">
            <a href="#" className="text-black-900 font-medium">
              Categories
            </a>
            <a href="#" className="text-black-900 font-medium">
              Browse Tasks
            </a>
            <a href="#" className="text-black-900 font-medium">
              How it Works
            </a>
          </nav>
          <Button bgColor="#000000" textColor="#FFFFFF">
            Post a Task
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-10">
          {/* Mobile View: Sign Up and Image */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="#"
              className="text-gray-700 hover:text-black transition font-medium"
            >
              Sign Up
            </a>
            <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
              {/* Circular Background */}
              <img
                src={Rectt.src}
                alt="Circular Background"
                className="h-full w-full object-contain"
              />
              {/* Centered Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={Plus.src}
                  alt="Centered Icon"
                  className="h-[18.33px] w-[18.33px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop View: Sign Up, Log In, Become a Tasker */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#"
              className="text-gray-700 hover:text-black transition font-medium"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition font-medium"
            >
              Log In
            </a>
            <Button
              bgColor="#FFFFFF"
              textColor="#000000"
              onClick={() => alert("Become a Tasker")}
            >
              Become a Tasker
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col gap-4 p-4">
            <a href="#" className="text-gray-800 hover:text-black font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-800 hover:text-black font-medium">
              Browse Tasks
            </a>
            <a href="#" className="text-gray-800 hover:text-black font-medium">
              How it Works
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

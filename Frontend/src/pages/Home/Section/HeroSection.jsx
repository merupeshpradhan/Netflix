import React from "react";
import { FaChevronRight } from "react-icons/fa";
import RoundedBorderSection from "./RoundedBorderSection";
import LanguageSelector from "./LanguageSelector";

function HeroSection() {
  return (
    <div>
      <div className="first">
        <div
          className="relative w-full h-[120vh] bg-cover bg-center flex justify-between"
          style={{
            backgroundImage: "url('/Netflix-Started-down-img.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/75 rounded-lg"></div>
          <div className="Netflix-Name-img absolute inset-0 py-6 px-37 flex justify-between">
            <div className="">
              <img
                src="/Netflix-Name.png"
                alt="NetflixName"
                className="w-[45%]"
              />
            </div>
            <div className="flex">
              <LanguageSelector />
              <button className="w-[95px] h-[35px] rounded-sm bg-red-700 text-white cursor-pointer">
                Sign In
              </button>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center flex-col text-white gap-2 mt-[250px]">
            <h1 className="text-[50px] font-extrabold text-center w-[40%] flex flex-col tracking-wide">
              Unlimited movies, <span>shows and more</span>
            </h1>
            <div className="flex flex-col justify-center items-center text-lg">
              <p className="text-2xl font-semibold mt-1">
                Starts at ₹149. Cancel at any time.
              </p>
              <p className="mt-5">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                placeholder="Email address"
                className="border border-white/50 text-white w-[25vw] py-4 pl-3 rounded-sm font-semibold tracking-wider bg-transparent outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-white transition-all duration-200"
              />
              <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-md px-6 cursor-pointer">
                <span className="text-[23px] font-bold tracking-wider">
                  Get Started
                </span>
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 mt-[88vh]">
            <RoundedBorderSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

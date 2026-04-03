import React from "react";
import { FaChevronRight } from "react-icons/fa";
import RoundedBorderSection from "./RoundedBorderSection";
import LanguageSelector from "./LanguageSelector";

function HeroSection() {
  return (
    <div>
      <div className="first">
        <div
          className="relative w-full h-[80vh] lg:h-[120vh] bg-cover bg-center flex justify-between"
          style={{
            backgroundImage: "url('/Netflix-Started-down-img.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/75 rounded-lg"></div>
          <div className="Netflix-Name-img absolute inset-0 py-4 px-4 md:py-6 md:px-10 lg:px-37 flex justify-between h-fit z-30">
            <div className="">
              <img
                src="/Netflix-Name.png"
                alt="NetflixName"
                className="w-[100px] md:w-[150px] lg:w-[45%]"
              />
            </div>
            <div className="flex gap-2">
              <LanguageSelector />
              <button className="w-[70px] md:w-[95px] h-[30px] md:h-[35px] rounded-sm bg-red-700 text-white cursor-pointer text-sm md:text-base">
                Sign In
              </button>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center flex-col text-white gap-2 mt-[180px] md:mt-[220px] lg:mt-[250px] px-4 z-20">
            <h1 className="text-3xl lg:text-[50px] font-extrabold text-center w-[100%] md:w-[70%] lg:w-[40%] flex flex-col tracking-wide leading-tight">
              Unlimited movies, <span>shows and more</span>
            </h1>
            <div className="flex flex-col justify-center items-center text-center text-sm md:text-lg">
              <p className="text-lg md:text-2xl font-semibold mt-1">
                Starts at ₹149. Cancel at any time.
              </p>
              <p className="mt-5 text-sm md:text-base">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-4 w-full justify-center items-center">
              <input
                placeholder="Email address"
                className="border border-white/50 text-white w-[90%] md:w-[60%] lg:w-[25vw] py-3 md:py-4 pl-3 rounded-sm font-semibold tracking-wider bg-transparent outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-white transition-all duration-200"
              />
              <button className="flex items-center justify-center md:gap-2 bg-red-600 hover:bg-red-700 rounded-md px-4 md:px-6 py-2 md:py-3 cursor-pointer w-[150px] md:w-auto h-[48px] md:h-[58px]">
                <span className="md:text-[23px] font-bold tracking-wider">
                  Get Started
                </span>
                <FaChevronRight className="text-[15px] md:text-[18px]" />
              </button>
            </div>
          </div>
          {/* <div className="absolute inset-0 mt-[80vh] lg:mt-[88vh] z-10 w-full">
            <RoundedBorderSection />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

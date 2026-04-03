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
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/75 rounded-lg"></div>
          <div className="Netflix-Name-img absolute inset-0 py-4 px-4 md:py-6 md:px-10 lg:px-37 flex justify-between h-fit z-30">
            <div className="">
              <img
                src="/logo.png"
                alt="NetflixName"
                className="w-[100px] md:w-[150px] lg:w-[45%]"
              />
            </div>
            <div className="flex gap-2">
              <LanguageSelector />
              <button className="w-[70px] md:w-[95px] h-[30px] md:h-[35px] rounded-sm bg-purple-700 text-white cursor-pointer text-sm md:text-base">
                Sign In
              </button>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center flex-col text-white gap-2 mt-[180px] md:mt-[220px] lg:mt-[250px] px-4 z-20">
            <h1 className="text-lg lg:text-[30px] font-extrabold text-center w-[100%] md:w-[70%] lg:w-[40%] flex flex-col tracking-wide leading-tight">
              Unlimited entertainment content{" "}
              <span>Watch anytime, anywhere</span>
            </h1>
            <div className="flex flex-col justify-center items-center text-center text-sm md:text-lg">
              <p className="text-lg md:text-2xl font-semibold mt-1">
                Explore demo features anytime.
              </p>
              <p className="mt-5 text-sm md:text-base">
                Enter your email to try this demo project.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-4 w-full justify-center items-center">
              <input
                placeholder="Email address"
                className="border border-white/50 text-white w-[90%] md:w-[60%] lg:w-[25vw] py-3 md:py-4 pl-3 rounded-sm font-semibold tracking-wider bg-transparent outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-white transition-all duration-200"
              />
              <button className="flex items-center justify-center md:gap-2 bg-blue-600 hover:bg-blue-700 rounded-md px-2 md:px-6 md:py-3 cursor-pointer w-[150px] md:w-auto h-[38px] md:h-[58px]">
                <span className="text-[10px] md:text-[20px] font-bold tracking-wider">
                  Start Now Explore
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

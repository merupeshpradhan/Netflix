import React from "react";
import { FaChevronRight } from "react-icons/fa";

function FooterSignup() {
  return (
    <div className="w-full mt-7 px-4 md:px-0">
      <div className="flex items-center justify-center flex-col gap-5 py-5">
        <div className="flex flex-col justify-center items-center text-white tracking-wider gap-3 text-center">
          <p className="text-base md:text-[17px]">
            Try this demo project by entering your email.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full">
          <input
            placeholder="Email address"
            className="border border-white/50 text-white w-full md:w-[60vw] lg:w-[40vw] py-3 md:py-4 pl-3 rounded-sm font-semibold tracking-wider bg-transparent outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-white transition-all duration-200"
          />

          <button className="flex items-center justify-center gap-1 md:gap-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 md:px-6 cursor-pointer w-[150px] md:w-auto mt-2 md:mt-0">
            <span className="text-sm md:text-[23px] py-2 md:py-3 font-bold tracking-wider">
              Get Started
            </span>
            <FaChevronRight className="text-[13px] md:text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterSignup;

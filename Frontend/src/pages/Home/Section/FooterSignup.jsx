import React from "react";
import { FaChevronRight } from "react-icons/fa";

function FooterSignup() {
  return (
    <div className="w-full mt-7">
      <div className="flex items-center justify-center flex-col gap-5 py-5">
        <div className="flex flex-col justify-center items-center text-white tracking-wider gap-3">
          <p className="text-[17px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <input
            placeholder="Email address"
            className="border border-white/50 text-white w-[40vw] py-4 pl-3 rounded-sm font-semibold tracking-wider bg-transparent outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:border-white transition-all duration-200"
          />

          <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white rounded-md px-6 cursor-pointer">
            <span className="text-[23px] py-3 font-bold tracking-wider">
              Get Started
            </span>
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterSignup;

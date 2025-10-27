import React from "react";
import { FaChevronRight } from "react-icons/fa";

function FooterSignup() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center flex-col gap-5 py-5">
        <div className="flex flex-col justify-center items-center text-lg gap-3">
          <p>Starts at ₹149. Cancel at any time.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <input
            placeholder="Email address"
            className="border py-4 pl-5 pr-40 rounded-sm"
          />
          <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-md px-6 cursor-pointer">
            <span className="text-[23px] py-3 text-white font-bold tracking-wider">
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

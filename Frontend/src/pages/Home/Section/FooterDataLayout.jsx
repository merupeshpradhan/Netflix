import React from "react";
import { Link } from "react-router-dom";

function FooterDataLayout() {
  return (
    <div className="w-full py-5 px-4 md:px-10 lg:px-27 flex flex-col gap-3 mt-5 mb-[2vh] md:mb-[20vh\]">
      <p className="text-base md:text-[18px] font-normal tracking-wider text-white/50 mb-6 md:mb-10">
        Questions? Call 000-800-919-1743
      </p>
      <div className="grid grid-cols-1 lg:flex lg:justify-between text-white/50 gap-y-6 md:gap-y-10 lg:gap-y-0 text-sm md:text-base">
        <div className="flex flex-col gap-2 underline underline-offset-4 tracking-wider font-semibold">
          <Link>FAQ</Link>
          <Link>Investor Relations</Link>
          <Link>Privacy</Link>
          <Link>Speed Test</Link>
        </div>
        <div className="flex flex-col gap-2 underline underline-offset-4 tracking-wider font-semibold">
          <Link>Help Centre</Link>
          <Link>I Jobs</Link>
          <Link>Cookie Preferences</Link>
          <Link>Legal Notices</Link>
        </div>
        <div className="flex flex-col gap-2 underline underline-offset-4 tracking-wider font-semibold">
          <Link>Account</Link>
          <Link>Ways to Watch</Link>
          <Link>Corporate Information</Link>
          <Link>Only on Netflix</Link>
        </div>
        <div className="flex flex-col gap-2 underline underline-offset-4 tracking-wider font-semibold">
          <Link>Media Centre</Link>
          <Link>I Terms of Use</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
      <div className=""></div>
      <div className="flex items-end h-10 md:h-12 mt-4 md:mt-0">
        <h3 className="text-white/60 text-sm md:text-base">Netflix India</h3>
      </div>
      <div className="flex items-end h-auto md:h-8 mt-4 md:mt-8">
        <p className="text-white/60 text-xs md:text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
         <Link className="text-blue-600 ml-1"> Learn more.</Link>
        </p>
      </div>
    </div>
  );
}

export default FooterDataLayout;

import React from "react";
import { Link } from "react-router-dom";

function FooterDataLayout() {
  return (
    <div className="w-full py-5 px-27 flex flex-col gap-3 mt-5 mb-[20vh]">
      <p className="text-[18px] font-normal tracking-wider text-white/50 mb-10">
        Questions? Call 000-800-919-1743
      </p>
      <div className="flex justify-between text-white/50">
        <div className="flex flex-col gap-2 underline tracking-wide font-light">
          <Link>FAQ</Link>
          <Link>Investor Relations</Link>
          <Link>Privacy</Link>
          <Link>Speed Test</Link>
        </div>
        <div className="flex flex-col gap-2 underline tracking-wide font-light">
          <Link>Help Centre</Link>
          <Link>I Jobs</Link>
          <Link>Cookie Preferences</Link>
          <Link>Legal Notices</Link>
        </div>
        <div className="flex flex-col gap-2 underline tracking-wide font-light">
          <Link>Account</Link>
          <Link>Ways to Watch</Link>
          <Link>Corporate Information</Link>
          <Link>Only on Netflix</Link>
        </div>
        <div className="flex flex-col gap-2 underline tracking-wide font-light">
          <Link>Media Centre</Link>
          <Link>I Terms of Use</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
      <div className=""></div>
      <div className="flex items-end h-12">
        <h3 className="text-white/60">Netflix India</h3>
      </div>
      <div className="flex items-end h-8 mt-8">
        <p className="text-white/60">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
         <Link className="text-blue-600"> Learn more.</Link>
        </p>
      </div>
    </div>
  );
}

export default FooterDataLayout;

import React from "react";
import { Link } from "react-router-dom";

function FooterDataLayout() {
  return (
    <div className="w-full py-5 px-27 flex flex-col gap-3">
      <p className="text-[14px] font-semibold tracking-wider">
        Questions? Call 000-800-919-1743
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 underline">
          <Link>FAQ</Link>
          <Link>Investor Relations</Link>
          <Link>Privacy</Link>
          <Link>Speed Test</Link>
        </div>
        <div className="flex flex-col gap-2 underline">
          <Link>Help Centre</Link>
          <Link>I Jobs</Link>
          <Link>Cookie Preferences</Link>
          <Link>Legal Notices</Link>
        </div>
        <div className="flex flex-col gap-2 underline">
          <Link>Account</Link>
          <Link>Ways to Watch</Link>
          <Link>Corporate Information</Link>
          <Link>Only on Netflix</Link>
        </div>
        <div className="flex flex-col gap-2 underline">
          <Link>Media Centre</Link>
          <Link>I Terms of Use</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
      <div className=""></div>
      <div className="flex items-end h-12">
        <h3>Netflix India</h3>
      </div>
      <div className="flex items-end h-8">
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
         <Link className="text-blue-600"> Learn more.</Link>
        </p>
      </div>
    </div>
  );
}

export default FooterDataLayout;

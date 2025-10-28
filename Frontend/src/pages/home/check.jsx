import React from "react";

function RoundedBorderSection() {
  return (
    <div className="relative w-full h-[30vh] bg-black overflow-hidden flex items-end justify-center">
      {/* Netflix-style curved gradient border */}
      <div
        className="absolute w-[130%] h-[120px] left-[-15%] bottom-0 rounded-tl-[50%_100%] rounded-tr-[50%_100%] border-b-0"
        style={{
          border: "4px solid transparent", // ✅ needed for border-image to render
          borderImage:
            "linear-gradient(to right, rgba(33,13,22,1) 16%, rgba(184,40,105,1), rgba(229,9,20,1), rgba(184,40,105,1), rgba(33,13,22,1) 84%) 1",
          background:
            "radial-gradient(50% 500% at 50% -420%, rgba(229,9,20,0.4) 80%, rgba(0,0,0,0.1) 100%), black",
          boxSizing: "border-box", // ✅ keeps curve smooth
        }}
      ></div>
    </div>
  );
}

export default RoundedBorderSection;

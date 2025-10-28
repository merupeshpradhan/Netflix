import React from "react";

function RoundedBorderSection() {
  return (
    <div className="relative w-full h-[30vh] bg-black overflow-hidden flex items-center justify-center">
      <div
        className="absolute w-[130%] h-[120px] left-[-15%] bottom-0 border-4 border-b-0 border-red-600 rounded-tl-[50%_100%] rounded-tr-[50%_100%]"
        style={{
            background:"radial-gradient(50% 500% at 50% -420%,rgba(64,97,231,0.4) 80%,rgba(0,0,0,0.1) 100%),black"
        }}
      > 
      </div>
    </div>
  );
}

export default RoundedBorderSection;

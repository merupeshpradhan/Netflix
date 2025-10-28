import React from "react";

function RoundedBorderSection() {
  return (
    <div className="relative w-full h-[30vh] bg-black overflow-hidden flex items-center justify-center">
      <div
        className="absolute w-[130%] h-[120px] left-[-15%] bottom-0 rounded-tl-[50%_100%] rounded-tr-[50%_100%] p-1"
        style={{
          background: `linear-gradient(
          to right,
          rgba(33, 13, 22, 1) 16%,
          rgba(184, 40, 105, 1),
          rgba(229, 9, 20, 1),
          rgba(184, 40, 105, 1),
          rgba(33, 13, 22, 1) 84%
          )`,
          clipPath: "inset(0 0 8% 0 round 50% 50% 0 0)",
        }}
      >
        <div
          className="w-full h-full rounded-tl-[50%_100%] rounded-tr-[50%_100%]"
          style={{
            background:
              "radial-gradient(50% 500% at 50% -420%,rgba(64,97,231,0.4) 80%,rgba(0,0,0,0.1) 100%),black",
          }}
        ></div>
      </div>
    </div>
  );
}

export default RoundedBorderSection;

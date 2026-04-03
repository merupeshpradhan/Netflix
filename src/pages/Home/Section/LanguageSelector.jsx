import { HiMiniLanguage } from "react-icons/hi2";

function LanguageSelector() {
  return (
    <div className="relative text-white border w-[110px] md:w-[130px] lg:w-[8vw] border-gray-400 h-[30px] md:h-[40px] lg:h-[5vh] flex items-center justify-center rounded-sm bg-black/50 mr-2 md:mr-5 overflow-hidden">
      {/* Language icon */}
      <HiMiniLanguage className="absolute left-1 md:left-2 text-sm md:text-lg text-white pointer-events-none" />

      {/* Select box */}
      <select
        className="
          w-full h-full
          bg-transparent text-white
          border-none outline-none
          pl-6 md:pl-8 pr-2 md:pr-3 cursor-pointer
          appearance-none text-xs md:text-base
        "
      >
        <option className="text-black flex items-center w-full">English</option>
        <option className="text-black">हिन्दी</option>
      </select>

      {/* Custom dropdown arrow */}
      <span className="absolute right-2 md:right-3 text-white pointer-events-none text-[10px] md:text-[13px]">▼</span>
    </div>
  );
}

export default LanguageSelector;

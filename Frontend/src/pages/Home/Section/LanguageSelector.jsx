import { HiMiniLanguage } from "react-icons/hi2";

function LanguageSelector() {
  return (
    <div className="relative text-white border w-[8vw] border-gray-400 h-[5vh] flex items-center justify-center rounded-sm bg-black/50 mr-5 overflow-hidden">
      {/* Language icon */}
      <HiMiniLanguage className="absolute left-2 text-lg text-white pointer-events-none" />

      {/* Select box */}
      <select
        className="
          w-full h-full
          bg-transparent text-white
          border-none outline-none
          pl-8 pr-3 cursor-pointer
          appearance-none
        "
      >
        <option className="text-black flex items-center w-full">English</option>
        <option className="text-black">हिन्दी</option>
      </select>

      {/* Custom dropdown arrow */}
      <span className="absolute right-3 text-white pointer-events-none text-[13px]">▼</span>
    </div>
  );
}

export default LanguageSelector;

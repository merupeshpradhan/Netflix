import { FaTv } from "react-icons/fa";
import { LuArrowDown } from "react-icons/lu";
import { VscTelescope } from "react-icons/vsc";
import { CiFaceSmile } from "react-icons/ci";

function MoreReasonsSection() {
  return (
    <div className="w-full h-auto px-4 md:px-10 lg:px-27 mt-10 md:mt-20 mb-10">
      <h3 className="lg:pl-4 py-3 text-xl md:text-2xl text-white font-semibold mb-1 lg:mb-3">
        More reasons to join
      </h3>
      <div className="more-resons-all-table grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 md:px-3">
        <div className="w-full bg-linear-330 from-stone-950 to-cyan-900 px-4 md:px-3 py-6 md:py-4 rounded-lg flex flex-col justify-between min-h-[220px]">
          <div className="flex flex-col gap-3 mb-10 md:mb-30">
            <h2 className="text-white text-xl md:text-2xl font-bold">Enjoy on your TV</h2>
            <p className="font-medium md:font-semibold text-neutral-300 text-sm md:text-base">
              Experience responsive design across different devices.
            </p>
          </div>
          <div className="self-end">
            <FaTv size={40} className="text-red-400 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
          </div>
        </div>
        <div className="w-full bg-linear-330 from-slate-950 to-cyan-900 px-4 md:px-3 py-6 md:py-4 rounded-lg flex flex-col justify-between min-h-[220px]">
          <div className="flex flex-col gap-3 mb-10 lg:mb-0">
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Download your shows to watch offline
            </h2>
            <p className="font-medium md:font-semibold text-neutral-300 w-[95%] text-sm md:text-base">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          <div className="self-end">
            <LuArrowDown size={40} className="text-red-400 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
          </div>
        </div>
        <div className="w-full bg-linear-330 from-fuchsia-950 to-cyan-900 px-4 md:px-3 py-6 md:py-4 rounded-lg flex flex-col justify-between min-h-[220px]">
          <div className="flex flex-col gap-3 mb-10 lg:mb-0">
            <h2 className="text-white text-xl md:text-2xl font-bold">Watch everywhere</h2>
            <p className="font-medium md:font-semibold text-neutral-300 text-sm md:text-base">
              Stream unlimited movies and TV shows on your phone, tablet, laptop
              and TV.
            </p>
          </div>
          <div className="self-end">
            <VscTelescope size={40} className="text-red-400 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
          </div>
        </div>
        <div className="w-full bg-linear-330 from-purple-950 to-cyan-900 px-4 md:px-3 py-6 md:py-4 rounded-lg flex flex-col justify-between min-h-[220px]">
          <div className="flex flex-col gap-3 mb-10 lg:mb-0">
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Create profiles for kids
            </h2>
            <p className="font-medium md:font-semibold text-neutral-300 text-sm md:text-base">
              Send kids on adventures with their favourite characters in a space
              made just for them — free with your membership.
            </p>
          </div>
          <div className="self-end">
            <CiFaceSmile size={40} className="text-red-400 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreReasonsSection;

import { FaTv } from "react-icons/fa";
import { LuArrowDown } from "react-icons/lu";
import { VscTelescope } from "react-icons/vsc";
import { CiFaceSmile } from "react-icons/ci";

function MoreReasonsSection() {
  return (
    <div className="w-full h-[50vh] px-27">
      <h3 className="pl-4 py-3 text-xl font-semibold">More reasons to join</h3>
      <div className="more-resons-all-table flex gap-5 px-3">
        <div className="w-full bg-rose-900/65 px-3 py-4 rounded-lg flex flex-col justify-between">
          <div className="w-[15vw] flex flex-col gap-3">
            <h2 className="text-white text-2xl font-bold">Enjoy on your TV</h2>
            <p className="text-l text-neutral-300">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="self-end">
            <FaTv size={40} className="text-white" />
          </div>
        </div>
        <div className="w-full bg-rose-900/65 px-3 py-4  rounded-lg flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-2xl font-bold">
              Download your shows to watch offline
            </h2>
            <p className="text-lg text-neutral-300">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          <div className="self-end">
            <LuArrowDown size={40} className="text-white" />
          </div>
        </div>
        <div className="w-full bg-rose-900/65 px-3 py-4  rounded-lg flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-2xl font-bold">Watch everywhere</h2>
            <p className="text-lg text-neutral-300">
              Stream unlimited movies and TV shows on your phone, tablet, laptop
              and TV.
            </p>
          </div>
          <div className="self-end">
            <VscTelescope size={40} className="text-white" />
          </div>
        </div>
        <div className="w-full bg-rose-900/65 px-3 py-4  rounded-lg flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-2xl font-bold">
              Create profiles for kids
            </h2>
            <p className="text-lg text-neutral-300">
              Send kids on adventures with their favourite characters in a space
              made just for them — free with your membership.
            </p>
          </div>
          <div className="self-end">
            <CiFaceSmile size={40} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreReasonsSection;

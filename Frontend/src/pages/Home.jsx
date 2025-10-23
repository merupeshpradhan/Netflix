import { FaChevronRight } from "react-icons/fa";

function Home() {
  return (
    <div className="w-full">
      <div className="">
        <div className="relative w-full">
          <div className="netflix-background-img">
            <img
              src="/Netflix-Started-down-img.jpg"
              alt="Netflix"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/75 rounded-lg"></div>
          </div>
          <div className="Netflix-Name-img absolute inset-0 py-6 px-37 flex justify-between">
            <div className="">
              <img
                src="/Netflix-Name.png"
                alt="NetflixName"
                className="w-[45%]"
              />
            </div>
            <div className="">
              <button className="w-[95px] h-[35px] rounded-sm bg-red-700 text-white cursor-pointer">
                Sign In
              </button>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white gap-5">
            <h1 className="text-6xl font-bold text-center w-[40%]">
              Unlimited movies, TV shows and more
            </h1>
            <div className="flex flex-col justify-center items-center text-lg gap-3">
              <p>Starts at ₹149. Cancel at any time.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                placeholder="Email address"
                className="border py-4 pl-5 pr-40 rounded-sm"
              />
              <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-md px-10 cursor-pointer">
                <span className="text-xl font-bold">Get Started</span>
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

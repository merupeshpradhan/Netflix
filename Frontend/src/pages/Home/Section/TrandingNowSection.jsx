import { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TRENDING_NOW_DATA } from "../../../utils/TrendingNowData";

function TrandingNowSection() {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const sliderLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 1500;
  };

  const sliderRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 1500;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[50vh] px-6 z-20 -mt-7">
      <h3 className="pl-4 ml-20 f py-3 text-2xl font-semibold text-white">
        Trending now
      </h3>

      <div className="relative flex justify-center items-center px-3">
        {/* Left Arrow */}
        <div
          className={`absolute left-30 z-10 text-white/70 hover:text-white bg-black h-[285px] w-[90px] cursor-pointer flex justify-center items-center transition-all duration-100 ease-in-out ${
            showLeft
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={sliderLeft}
            className="flex items-center h-[120px] w-[30px] bg-neutral-800 hover:bg-neutral-900 rounded-lg"
          >
            <MdChevronLeft size={35} />
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          id="slider"
          className="w-[85%] h-full overflow-x-scroll overflow-y-hidden scroll-smooth whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TRENDING_NOW_DATA.map((item, index) => (
            <div className="inline-block w-[190px] ml-7 rounded-lg overflow-hidden hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <img
                key={index}
                className="w-full"
                src={item.img}
                alt={item.alt}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          className={`absolute right-30 z-10 text-white/70 hover:text-white bg-black h-[300px] w-[70px] cursor-pointer flex justify-center items-center transition-all duration-500 ${
            showRight
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-auto"
          }`}
        >
          <div
            onClick={sliderRight}
            className="flex items-center h-[120px] w-[30px] bg-neutral-800 hover:bg-neutral-900 rounded-lg"
          >
            <MdChevronRight size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrandingNowSection;

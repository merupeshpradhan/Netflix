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

  const getScrollAmount = () => {
    if (window.innerWidth < 768) return 300;
    if (window.innerWidth < 1024) return 600;
    return 1500;
  };

  const sliderLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= getScrollAmount();
  };

  const sliderRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += getScrollAmount();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:bg-black relative w-full h-auto lg:h-[50vh] px-4 md:px-10 lg:px-20 z-20 -mt-13 md:-mt-5 lg:-mt-7 mb-10">
      <h3 className="lg:pl-7 py-3 text-xl md:text-2xl font-semibold text-white mb-3">
        Trending now
      </h3>

      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <div
          className={`hidden md:flex absolute left-0 lg:left-6 z-10 text-white/70 hover:text-white bg-black/50 h-[285px] w-[50px] lg:w-[90px] cursor-pointer justify-center items-center transition-all duration-100 ease-in-out ${
            showLeft
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={sliderLeft}
            className="flex items-center justify-center h-[120px] w-[30px] bg-neutral-800/80 hover:bg-neutral-900 rounded-lg"
          >
            <MdChevronLeft size={35} />
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          id="slider"
          className="w-full lg:w-[95%] h-full overflow-x-scroll overflow-y-hidden scroll-smooth whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pl-0 md:pl-5 flex gap-4 md:gap-7"
        >
          {TRENDING_NOW_DATA.map((item, index) => (
            <div key={index} className="inline-block w-[130px] md:w-[160px] lg:w-[190px] shrink-0 rounded-lg overflow-hidden hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <img
                className="w-full"
                src={item.img}
                alt={item.alt || "Trending Image"}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          className={`hidden md:flex absolute right-0 lg:right-6 z-10 text-white/70 hover:text-white bg-black/50 h-[300px] w-[50px] lg:w-[70px] cursor-pointer justify-center items-center transition-all duration-500 ${
            showRight
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={sliderRight}
            className="flex items-center justify-center h-[120px] w-[30px] bg-neutral-800/80 hover:bg-neutral-900 rounded-lg"
          >
            <MdChevronRight size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrandingNowSection;

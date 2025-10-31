import { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TRENDING_NOW_DATA } from "../../utils/TrendingNowData";

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
    <div className="relative w-full h-[50vh] px-6 z-20 -mt-10">
      <h3 className="pl-4 py-3 text-2xl font-semibold text-white">
        Trending now
      </h3>

      <div className="relative flex justify-center items-center px-3">
        {/* Left Arrow */}
        {showLeft && (
          <div
            onClick={sliderLeft}
            className="absolute left-30 z-10 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 h-[120px] w-[50px] cursor-pointer flex justify-center items-center rounded-lg transition"
          >
            <MdChevronLeft size={35} />
          </div>
        )}

        {/* Slider */}
        <div
          ref={sliderRef}
          id="slider"
          className="w-[80%] h-full overflow-x-scroll overflow-y-hidden scroll-smooth whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TRENDING_NOW_DATA.map((item, index) => (
            <img
              key={index}
              className="w-[220px] inline-block p-4 hover:scale-105 ease-in-out duration-300 cursor-pointer"
              src={item.img}
              alt={item.alt}
            />
          ))}
        </div>

        {/* Right Arrow */}
        {showRight && (
          <div
            onClick={sliderRight}
            className="absolute right-30 z-10 text-white/70 hover:text-white bg-black cursor-pointer flex justify-center items-center rounded-lg transition"
          >
            <MdChevronRight
              size={35}
              className="bg-neutral-600 hover:bg-neutral-800 h-[120px] z-20"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TrandingNowSection;

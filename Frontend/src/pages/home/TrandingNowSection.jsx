import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HORIZONTAL_SCROLL_IMAGES } from "../../utils/horizontalScrollIData";

function TrandingNowSection() {
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1500;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1500;
  };

  return (
    <div className="relative w-full h-[50vh] px-27 z-20 -mt-10">
      <h3 className="pl-4 py-3 text-2xl font-semibold text-white">
        Trending now
      </h3>
      <div className="relative flex items-center gap-5 px-3">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="opacity-50 cursor-pointer hover:opacity-100"
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll overflow-y-hidden scroll-smooth whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {HORIZONTAL_SCROLL_IMAGES.map((item) => (
            <img
              className="w-[220px] inline-block p-4 hover:scale-105 ease-in-out duration-300 cursor-pointer"
              src={item.img}
              alt={item.alt}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="opacity-50 cursor-pointer hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default TrandingNowSection;

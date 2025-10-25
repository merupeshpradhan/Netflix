import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HORIZONTAL_SCROLL_IMAGES } from "../../utils/horizontalScrollIData";

function Side2() {
  return (
    <div className="relative flex items-center mt-9">
      <MdChevronLeft size={40} />
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap"
      >
        {HORIZONTAL_SCROLL_IMAGES.map((item) => (
          <img
            className="w-[220px] inline-block p-4 hover:scale-105 ease-in-out duration-300 cursor-pointer"
            src={item.img}
            alt={item.alt}
          />
        ))}
      </div>
      <MdChevronRight size={40} />
    </div>
  );
}

export default Side2;

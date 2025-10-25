import { HORIZONTAL_SCROLL_IMAGES } from "../utils/horizontalScrollIData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Side1 from "./home/Side1";
import Side2 from "./home/Side2";

function Home() {
  return (
    <div className="w-full flex flex-col">
      <Side1 />
      <Side2 />
    </div>
  );
}

export default Home;

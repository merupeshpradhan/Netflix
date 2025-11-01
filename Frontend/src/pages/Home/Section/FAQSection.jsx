import { useState } from "react";
import { data } from "../../../utils/FAQSectionData";
import { MdClear } from "react-icons/md";
import { GoPlus } from "react-icons/go";

function FAQSection() {
  const [seletecd, setSelected] = useState(null);

  function handleSingleSelaticon(getCurentId) {
    setSelected(getCurentId == seletecd ? null : getCurentId);
  }

  return (
    <div className="w-full py-5 px-27 flex flex-col gap-3">
      <h3 className="pl-4 py-3 text-2xl text-white font-semibold mb-1">
        Frequently Asked Questions
      </h3>
      <div className="relative flex flex-col items-center gap-5 w-full">
        {data.map((dataItem) => (
          <div
            key={dataItem.id}
            onClick={() => handleSingleSelaticon(dataItem.id)}
            className="item w-[97%] cursor-pointer"
          >
            <div className="flex justify-between items-center p-6 w-full bg-neutral-700 transition duration-300 hover:bg-neutral-600  text-white tracking-wide">
              <h2 className="text-[22px] font-semibold tracking-wider">
                {dataItem.question}
              </h2>
              <span>
                {seletecd === dataItem.id ? (
                  <MdClear size={32} />
                ) : (
                  <GoPlus size={32} />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden bg-neutral-700 text-white font-semibold text-[22px] px-6 mt-1 transition-all duration-300 ease-in-out flex flex-col ${
                seletecd === dataItem.id
                  ? "max-h-[1000px] py-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <span>
                {dataItem.answer1}
                {dataItem.answer2 && (
                  <>
                    <br />
                    <br />
                    {dataItem.answer2}
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;

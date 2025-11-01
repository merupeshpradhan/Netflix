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
      <h2 className="text-2xl text-white font-bold">Frequently Asked Questions</h2>
      <div className="relative flex flex-col items-center gap-5 w-full">
        {data.map((dataItem) => (
          <div
            key={dataItem.id}
            onClick={() => handleSingleSelaticon(dataItem.id)}
            className="item w-full cursor-pointer"
          >
            <div className="flex justify-between items-center p-6 w-full  bg-amber-700 text-white tracking-wide">
              <h2 className="text-xl">{dataItem.question}</h2>
              <span>{seletecd === dataItem.id ? <MdClear size={32}/> : <GoPlus size={32}/>}</span>
            </div>
            <div
              className={`overflow-hidden bg-amber-600 text-white text-[20px] px-6 mt-1 transition-all duration-300 ease-in-out ${
                seletecd === dataItem.id
                  ? "max-h-40 py-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {dataItem.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;

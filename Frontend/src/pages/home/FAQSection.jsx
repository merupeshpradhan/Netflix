import { useState } from "react";
import { data } from "../../utils/FAQSectionData";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

function FAQSection() {
  const [seletecd, setSelected] = useState(null);

  function handleSingleSelaticon(getCurentId) {
    setSelected(getCurentId == seletecd ? null : getCurentId);
  }

  return (
    <div className="w-full py-5 px-27 flex flex-col gap-3">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="relative flex flex-col items-center gap-5">
        {data.map((dataItem) => (
          <div
            onClick={() => handleSingleSelaticon(dataItem.id)}
            className="item w-full"
          >
            <div className="flex justify-between items-center p-6 w-full  bg-amber-700 text-white tracking-wide">
              <h2 className="text-xl">{dataItem.question}</h2>
              <span>
                {seletecd === dataItem.id ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {seletecd === dataItem.id ? (
              <div className="bg-amber-600 text-white text-[20px] p-6 mt-1">
                {dataItem.answer}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;

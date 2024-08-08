import { Checkbox } from "@/components/ui/checkbox";
import { useContext } from "react";
import { AccountContext } from "./context";

// const dataa = [
//     <Lending/>,
//     "Lending & Renting",
//     "14:00",
//     "- 1000₮"

// ]

export const CheckboxCom = ({ icon, money, categoryName, time }) => {
  const { deleteRecord } = useContext(AccountContext);
  return (
    <div className=" flex bg-white py-3 px-6 rounded-xl mt-4">
      <div className=" flex flex-1 gap-4 ml-4 items-center">
        <button className="cursor-pointer" onClick={deleteRecord}>
          x
        </button>
        <div className="flex items-center space-x-2 flex-2 ">
          <Checkbox id="terms" />
        </div>

        <div>{icon}</div>

        <div>
          <div>{categoryName}</div>
          <div className="text-xs text-[#6B7280]">{time}</div>
        </div>
        <div className=" flex gap-2 flex-1 justify-end font-semibold text-[#94A3B8]">
          <div>{money}</div>
        </div>
      </div>
    </div>
  );
};

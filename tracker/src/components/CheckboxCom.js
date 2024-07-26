import { Checkbox } from "@/components/ui/checkbox";

// const dataa = [
//     <Lending/>,
//     "Lending & Renting",
//     "14:00",
//     "- 1000₮"

// ]

export const CheckboxCom = ({ icon, expenses, name, time }) => {
  return (
    <div className=" flex bg-white py-3 px-6 rounded-xl mt-4">
      <div className=" flex flex-1 gap-4 ml-4 items-center">
        <div className="flex items-center space-x-2 flex-2 ">
          <Checkbox id="terms" />
        </div>

        <div>{icon}</div>

        <div>
          <div>{name}</div>
          <div className="text-xs text-[#6B7280]">{time}</div>
        </div>
        <div className=" flex gap-2 flex-1 justify-end font-semibold text-[#94A3B8]">
          <div>{expenses}</div>
        </div>
      </div>
    </div>
  );
};

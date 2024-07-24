import { HiMiniEye } from "react-icons/hi2";
import { MdArrowRight } from "react-icons/md";

export const CategoryCom = ({ item }) => {
  return (
    <div className="mt-5 flex justify-between items-center">
      <div className="flex gap-[8.56px] items-center">
        <HiMiniEye className="text-[#94A3B8]" />
        <div className="text-[#1F2937]">{item}</div>
      </div>
      <MdArrowRight className="text-[#1C1B1F]" />
    </div>
  );
};

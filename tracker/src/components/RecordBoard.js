import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const RecordBoard = () => {
  return (
    <main className="mt-12">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <button className="bg-[#E5E7EB] py-[11px] px-[13px] rounded-[8px]">
            <IoIosArrowBack />
          </button>
          <p>Last 30 Days</p>
          <button className="bg-[#E5E7EB] py-[11px] px-[13px] rounded-[8px]">
            <IoIosArrowForward />
          </button>
        </div>

        <div>
          <Select className="text-2xl font-semibold border border-[#D1D5DB]">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Newest first" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
};

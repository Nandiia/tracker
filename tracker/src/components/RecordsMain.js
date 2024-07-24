import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Plus } from "@/app/svg/Plus";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Slider } from "./ui/slider";

import { CategoryCom } from "./CategoryCom";

const recordData = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

export const RecordsMain = () => {
  return (
    <main className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Records</h1>
        <Button className="flex gap-[2px] rounded-[20px] h-8 w-full bg-[#0166FF] text-base font-normal">
          <Plus /> Record
        </Button>
      </div>

      <Input
        type="text"
        placeholder="Search"
        className="rounded-xl mt-6 w-[250px]"
      />

      <div className="mt-6">
        <h2 className="text-base font-semibold mb-4">Types</h2>

        <div>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2 text-base font-normal text-[#1F2937]">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">All</Label>
            </div>
            <div className="flex items-center space-x-2 text-base font-normal">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Income</Label>
            </div>
            <div className="flex items-center space-x-2 text-base font-normal">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Expense</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mt-6">
          <div className="flex justify-between ">
            <h2 className="text-[#1F2937] text-base font-semibold">Category</h2>
            <div className="text-[#E5E7EB]">Clear</div>
          </div>

          {recordData.map((item, index) => {
            return <CategoryCom key={index} item={item} />;
          })}
        </div>

        <div className="mt-6">
          <h2 className="text-[#1F2937] text-base font-semibold">
            Amount Range
          </h2>

          <div className="flex gap-4 mt-4 mb-4">
            <div className="flex-1 border rounded-lg h-12 border-[#D1D5DB] bg-[#F3F4F6] text-[#0F172A] py-3 px-4">
              0
            </div>
            <div className="flex-1 border rounded-lg h-12 border-[#D1D5DB] bg-[#F3F4F6] text-[#0F172A] py-3 px-4">
              1000
            </div>
          </div>

          <div>
            <Slider
              defaultValue={[50]}
              max={1000}
              step={0}
              className={cn("w-[100%]")}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

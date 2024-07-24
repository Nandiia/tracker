import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Plus } from "@/app/svg/Plus";

export const Recods = () => {
  return (
    <main className="bg-green-200">
      <div>
        <h1 className="text-2xl font-semibold">Records</h1>
        <Button className="flex gap-[2px] rounded-[20px] h-8 w-full bg-[#0166FF] text-base font-normal">
          <Plus /> Record
        </Button>
      </div>

      <div className="mt-6">
        <h2 className="text-base font-semibold">Types</h2>

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
    </main>
  );
};

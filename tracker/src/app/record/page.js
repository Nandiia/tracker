import { RecordBoard } from "@/components/RecordBoard";
import { RecordsMain } from "@/components/RecordsMain";

export default function Record() {
  return (
    <div className="bg-[#f2f4f6] w-full h-fit ">
      <div className="border max-w-screen-xl border-red-300 m-auto flex gap-6  ">
        <div className="flex-2">
          <RecordsMain />
        </div>
        <div className=" bg-[#f2f4f6] rounded-xl border-red-800 border-[2px] flex-1">
          <RecordBoard />
        </div>
      </div>
    </div>
  );
}

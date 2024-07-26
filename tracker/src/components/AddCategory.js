import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "@/app/svg/Plus";
import { Gift } from "@/app/svg/Gift";

export const AddCategory = () => {
  return (
    <main>
      <Dialog>
        <DialogTrigger className="px-4 pb-4 border-b w-full">
          <button className="flex gap-2  text-[#1F2937] items-center mt-6">
            <div className="w-6 h-6 bg-[#0166FF] rounded-2xl flex justify-center items-center">
              <Plus color="white" />
            </div>

            <div className="ml-3 ">Add Category</div>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

import { Logo } from "@/app/svg/Logo";
import { Plus } from "@/app/svg/Plus";
import { Button } from "./ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const Nav = () => {
  return (
    <main className="w-[1440px] px-[120px] py-4 flex justify-between">
      <div className="flex gap-6">
        <Logo />
        <div className="text-base flex gap-6 ">
          <button>Dashboard</button>
          <button>Records</button>
        </div>
      </div>

      <div className="flex gap-6 ">
        <Button className="flex gap-[2px] rounded-[20px] h-8 bg-[#0166FF] text-base font-normal">
          <Plus /> Record
        </Button>

        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="w-10 h-10 rounded-[40px]"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </main>
  );
};

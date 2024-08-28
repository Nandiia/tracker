import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Plus } from "@/app/svg/Plus";
import { Gift } from "@/app/svg/Gift";
import { Button } from "./ui/button";

import { AiFillHome } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { PiStairs } from "react-icons/pi";
import { AiFillPicture } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { AccountContext } from "./context";
import axios from "axios";
import { CategoryIcon } from "./CategoryIcon";

// const iconImgData = {
//   AiFillHome: AiFillHome,
//   MdAccountBox: MdAccountBox,
//   PiStairs: PiStairs,
//   AiFillPicture: AiFillPicture,
//   AiFillPicture: AiFillPicture,
//   AiFillPicture: AiFillPicture,
//   AiFillPicture: AiFillPicture,
//   AiFillPicture: AiFillPicture,
//   AiFillPicture: AiFillPicture,
//   AiFillPicture: AiFillPicture,
// };

// const iconData = [
//   {
//     img: "AiFillHome",
//   },

//   {
//     img: "MdAccountBox",
//   },

//   {
//     img: "PiStairs",
//   },

//   {
//     img: "AiFillPicture",
//   },

//   {
//     img: "AiFillPicture",
//   },

//   {
//     img: "AiFillPicture",
//   },

//   {
//     img: "AiFillPicture",
//   },

//   {
//     img: "AiFillPicture",
//   },

//   {
//     img: "AiFillPicture",
//   },

//   {
//     img: "AiFillPicture",
//   },
// ];

export const AddCategory = () => {
  const {
    category,
    setCategory,
    creatCategory,
    categoryName,
    setCategoryName,
    categoryIcon,
    setCategoryIcon,
  } = useContext(AccountContext);

  // const [newCategoryName, setNewCategoryName] = useState("");
  // const { addCategory, setAddCategory } = useContext(AccountContext);
  // console.log(addCategory);

  // const handleCreatCategory = async () => {
  //   const response = await axios.post("http://localhost:3010/categories", {
  //     categoryName: newCategoryName,
  //   });

  //   setAddCategory([...addCategory, response.data]);
  // };

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
          <DialogHeader className="flex flex-col gap-6">
            <DialogTitle className="border-b pb-5">Add Category</DialogTitle>
            <DialogDescription className="flex flex-col gap-8 ">
              <div className="flex gap-3">
                <CategoryIcon catIc={categoryIcon} catSetIc={setCategoryIcon} />

                {/* <Input
                  className="border border-[#D1D5DB] p-4"
                  value={categoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                /> */}

                <Input
                  className="border border-[#D1D5DB] p-4"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>

              <Button
                className="bg-[#16A34A] rounded-3xl text-white"
                onClick={creatCategory}
              >
                Add
              </Button>
              {/* <Button>test</Button> */}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

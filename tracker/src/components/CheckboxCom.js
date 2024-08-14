import { Checkbox } from "@/components/ui/checkbox";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "./context";

import * as Icons from "react-icons/fa";
import axios from "axios";
const iconData = [{ icon: "FaAccessibleIcon" }, { icon: "FaAdjust" }];

// const dataa = [
//     <Lending/>,
//     "Lending & Renting",
//     "14:00",
//     "- 1000₮"

// ]

export const CheckboxCom = ({ item }) => {
  const { deleteRecord, record } = useContext(AccountContext);

  const [category, setCategory] = useState({});

  useEffect(() => {
    const categoryById = async () => {
      console.log(item.category_id);

      const response = await axios.get(
        `http://localhost:3010/categories/${item.category_id}`
      );

      console.log(response, "dataa");
      setCategory(response.data);
    };
    categoryById();

    console.log(category, "====");
  }, []);

  // const [categoryName, setCategoryName] = useState(
  //   record.find((item) => item.id === category_id).categoryName
  // );
  // const [categoryIcon, setCategoryIcon] = useState(
  //   record.find((item) => item.id === category_id).categoryIcon
  // );

  // const categoryName = category.find(
  //   (item) => item.id === category_id
  // ).categoryName;
  // const categoryIcon = category.find(
  //   (item) => item.id === category_id
  // ).categoryIcon;

  const IconComponent = Icons[category?.categoryIcon];

  return (
    <div className=" flex bg-white py-3 px-6 rounded-xl mt-4">
      <div className=" flex flex-1 gap-4 ml-4 items-center">
        <button
          className="cursor-pointer"
          onClick={() => deleteRecord(item.id)}
        >
          x
        </button>
        <div className="flex items-center space-x-2 flex-2 ">
          <Checkbox id="terms" />
        </div>

        {/* <div>{IconComponent}</div> */}
        {/* <IconComponent color="red" /> */}
        {IconComponent && (
          <IconComponent style={{ color: category?.categoryColor }} />
        )}

        <div>
          <div>{category?.categoryName}</div>
          <div className="text-xs text-[#6B7280]">{item.time}</div>
        </div>
        <div className=" flex gap-2 flex-1 justify-end font-semibold text-[#94A3B8]">
          <div>{item.amount}</div>
        </div>
      </div>
    </div>
  );
};

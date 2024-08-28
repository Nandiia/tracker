"use client";

import * as Icons from "react-icons/fa";
// import * as Icons from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setConfig } from "next/config";
import { useContext, useState } from "react";
import { AccountContext } from "./context";

const iconData = [{ icon: "FaAccessibleIcon" }, { icon: "FaAdjust" }];

const colorData = [{ color: "red" }, { color: "blue" }];
const colorD = ["red", "yellow", "green", "orange"];
console.log(colorD);

// const categoryData = [
//   {
//     img: "Checkbox",
//     name: "Checkbox",
//   },
//   {
//     img: "FaCamera",
//     name: "FaCamera",
//   },
//   {
//     img: "FaCoffee",
//     name: "FaCoffee",
//   },
//   {
//     img: "FaBeer",
//     name: "FaBeer",
//   },
//   {
//     img: "FaApple",
//     name: "FaApple",
//   },
//   {
//     img: "FaAndroid",
//     name: "FaAndroid",
//   },
//   {
//     img: "FaRocket",
//     name: "FaRocket",
//   },
//   {
//     img: "FaHeart",
//     name: "FaHeart",
//   },
//   {
//     img: "FaCar",
//     name: "FaCar",
//   },
//   {
//     img: "FaBicycle",
//     name: "FaBicycle",
//   },
//   {
//     img: "FaBus",
//     name: "FaBus",
//   },
//   {
//     img: "GiHamburger",
//     name: "GiHamburger",
//   },
//   {
//     img: "GiPizzaSlice",
//     name: "GiPizzaSlice",
//   },
//   {
//     img: "GiHotDog",
//     name: "GiHotDog",
//   },
// ];

export const CategoryIcon = ({ catIc, catSetIc }) => {
  const { categoryColor, setCategoryColor } = useContext(AccountContext);

  return (
    // <Select
    //   //   value={catIc}
    //   //   onValueChange={() => {
    //   //     console.log("ji");
    //   //   }}
    //   value={catIc}
    //   onValueChange={catSetIc}
    // >
    //   <SelectTrigger className="w-[84px] h-[48px]">
    //     <SelectValue placeholder="<sjft/>" />
    //   </SelectTrigger>

    //   <SelectContent>
    //     <div className="grid grid-cols-6">
    //       {categoryData.map((item, index) => {
    //         const IconComp = iconData[item.img];
    //         return (
    //           <SelectItem key={index} value={item.img}>
    //             <IconComp className="w-6 h-6 " />
    //           </SelectItem>
    //         );
    //       })}
    //     </div>
    //   </SelectContent>
    // </Select>

    <Select value={catIc} onValueChange={(value) => catSetIc(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {iconData.map((item, index) => {
          const IconComp = Icons[item.icon];
          return (
            <SelectItem key={index} value={item.icon}>
              <IconComp style={{ color: categoryColor }} />
            </SelectItem>
          );
        })}
        {/* {colorData.map((item) => {
          return (
            <div
              className="w-6 h-6 rounded-xl"
              style={{ backgroundColor: `${item.color}` }}

            ></div>
          );
        })} */}

        {colorD.map((item, index) => {
          return (
            <div
              key={index}
              className="w-6 h-6 rounded-xl border"
              style={{ backgroundColor: item }}
              onClick={() => setCategoryColor(item)}
            ></div>
          );
        })}

        {/* {colorD.map((item, index) => {
          const colorHandle = (event) => {
            setCategoryColor(event.target.value);
          };
          return (
            <Select
              key={index}
              style={{ background: item }}
              className="w-6 h-6 rounded-xl "
              
            >
              <SelectContent>
                <SelectItem value={item} oncClick={}></SelectItem>
              </SelectContent>
            </Select>
          );
        })} */}
      </SelectContent>
    </Select>
  );
};

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { FaCamera } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { GiPizzaSlice } from "react-icons/gi";
import { GiHotDog } from "react-icons/gi";
import { GiDonut } from "react-icons/gi";
import { GiIceCreamCone } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { SiNintendo } from "react-icons/si";
import { SiPlaystation } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { SiSteam } from "react-icons/si";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { FaParachuteBox } from "react-icons/fa6";
import { GiBoombox } from "react-icons/gi";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { SiScrapbox } from "react-icons/si";
import { TbBoxMultiple7 } from "react-icons/tb";
import { FaBridge } from "react-icons/fa6";
import { SiHomebridge } from "react-icons/si";
import { FaIcons } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { AccountContext } from "./context";

import * as Icons from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setConfig } from "next/config";

const iconData = [{ icon: "FaAccessibleIcon" }, { icon: "FaAdjust" }];

const colorData = [{ color: "red" }, { color: "blue" }];

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

    <Select value={catIc} onValueChange={catSetIc}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {iconData.map((item, index) => {
          const IconComp = Icons[item.icon];
          return (
            <SelectItem key={index} value={item.icon}>
              <IconComp />
            </SelectItem>
          );
        })}
        {colorData.map((item) => {
          return <div className={`bg-red-600 w-4 border h-5`}></div>;
        })}
      </SelectContent>
    </Select>
  );
};

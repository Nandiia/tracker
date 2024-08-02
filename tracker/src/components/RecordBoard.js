"use client";

import { useState, useEffect } from "react";
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

import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxCom } from "./CheckboxCom";

import { FoodDrink } from "@/app/svg/FoodDrink";
import { Lending } from "@/app/svg/Lending";
import axios from "axios";

const data = [
  {
    icon1: <Lending />,
    name1: "Lending & Renting",
    time: "14:00",
    expenses: "- 1000₮",
  },
  {
    icon1: <FoodDrink />,
    name1: "Food & Drinks",
    date: "14:00",
    expenses: "- 1000₮",
  },
  {
    icon1: <FoodDrink />,
    name1: "Food & Drinks",
    date: "14:00",
    expenses: "- 1000₮",
  },
];

// const data = [<Lending />, "Lending & Renting", "14:00", "- 1000₮"];

export const RecordBoard = ({}) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3010/accounts");
        setAccounts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  });

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

      <>
        <div className=" flex bg-white py-3 px-6 rounded-xl mt-4">
          <div className="flex items-center space-x-2 flex-1 ">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sellect All
            </label>
          </div>

          <div className=" flex gap-2 flex-1 justify-end font-semibold text-[#94A3B8]">
            <div>-</div>
            <div>35500₮</div>
          </div>
        </div>
      </>

      <>
        <div className="mt-3">
          <h1>Today</h1>
          <div>
            {accounts.map((item, index) => {
              return (
                <CheckboxCom
                  key={index}
                  icon={item.icon1}
                  expenses={item.amount}
                  time={item.time}
                  name={item.name1}
                />
              );
            })}
          </div>
        </div>
      </>
    </main>
  );
};

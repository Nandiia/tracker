"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "@/app/svg/Plus";
import { FaGift } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RecordDate } from "./RecordDate";
import { AddCategory } from "./AddCategory";
import { Gift } from "@/app/svg/Gift";
import { Lending } from "@/app/svg/Lending";
import { Home } from "@/app/svg/Home";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import * as Icons from "react-icons/fa";

import { AccountContext } from "./context";

export const AddRecord = () => {
  // //ene doorh back-d baih data
  // const iconData = {
  //   Gift: Gift,
  //   Home: Home,
  // };

  // //ene bol end baih data
  // const categoryData = [
  //   {
  //     img: "Home",
  //     name: "Home",
  //   },

  //   {
  //     img: "Gift",
  //     name: "Gift",
  //   },
  // ];

  // const { addCategory } = useContext(AccountContext);
  const { createRecord, newRecord, setNewRecord, category } =
    useContext(AccountContext);

  return (
    <main>
      <Dialog>
        <DialogTrigger className="flex gap-[2px] rounded-[20px] h-8 w-full bg-[#0166FF] text-base text-white font-normal justify-center items-center">
          <Plus color="white" /> Add
        </DialogTrigger>
        <DialogContent className="max-w-fit">
          <DialogHeader>
            <div className=" border-b h-fit p-0 mb-[20px] ">
              <DialogTitle className="pb-5">Add Record</DialogTitle>
            </div>

            <div className="flex ">
              <div className="flex-1 flex gap-5 flex-col pr-6">
                <>
                  <Tabs defaultValue="account" className="w-[400px] ">
                    <TabsList>
                      <TabsTrigger value="account">Expense</TabsTrigger>
                      <TabsTrigger value="password">Income</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">
                      Make changes to your Expense here.
                    </TabsContent>
                    <TabsContent value="password">
                      Change your Income here.
                    </TabsContent>
                  </Tabs>

                  <div className="flex flex-col gap-y-4">
                    <>
                      <div className=" bg-[#F3F4F6] border border-[#D1D5DB] px-4 py-3 rounded-lg ">
                        <Label htmlFor="email">Amount</Label>

                        <Input
                          type="number"
                          id="num"
                          placeholder="₮ 000.00"
                          className="bg-[#F3F4F6] p-0"
                          value={newRecord.amount}
                          onChange={(event) => {
                            setNewRecord({
                              ...newRecord,
                              amount: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </>
                    <>
                      <div className="flex flex-col gap-[3px] ">
                        <div>Category</div>

                        <Select
                          onValueChange={(value) => {
                            setNewRecord((prev) => ({
                              ...prev,
                              category_id: value,
                            }));
                          }}
                        >
                          <SelectTrigger className="h-12 border border-[#D1D5DB] bg-[#F3F4F6] ">
                            <SelectValue placeholder="Choose" />
                          </SelectTrigger>
                          <SelectContent>
                            <AddCategory />

                            {/* {addCategory.map((item, index) => {
                              return (
                                <SelectItem
                                  key={index}
                                  value={item.categoryName}
                                  onChange={(event) => {
                                    setAddCategory(event.target.value);
                                  }}
                                >
                                  <div className=" flex w-[350px] justify-between ">
                                    <p>{item.categoryName}</p>
                                    <div>X</div>
                                  </div>
                                </SelectItem>
                              );
                            })} */}

                            {category.map((item, index) => {
                              const Icon = Icons[item.categoryIcon];
                              return (
                                <SelectItem key={index} value={item.id}>
                                  <Icon
                                    style={{
                                      color: item.categoryColor,
                                    }}
                                  />
                                  <p>{item.categoryName}</p>
                                </SelectItem>
                              );
                            })}

                            {/* {category.map((item, index) => {
                              return (
                                <SelectItem>
                                  <div key={index}>{item.categoryName}</div>
                                </SelectItem>
                              );
                            })} */}
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                    <>
                      <>
                        <div>
                          <div className="flex gap-3">
                            <div className="flex flex-col gap-[3px]">
                              <div>Date</div>
                              <Input
                                type="date"
                                id="num"
                                placeholder="₮ 000.00"
                                className="bg-[#F3F4F6] border border-[#D1D5DB] px-4"
                                value={newRecord.date}
                                onChange={(event) => {
                                  setNewRecord({
                                    ...newRecord,
                                    date: event.target.value,
                                  });
                                }}
                              />
                            </div>

                            <div className="flex flex-col gap-[3px]">
                              <div>Time</div>
                              <Input
                                type="time"
                                id="num"
                                placeholder="₮ 000.00"
                                className="bg-[#F3F4F6] border border-[#D1D5DB] px-4 text-[#0F172A]"
                                value={newRecord.time}
                                onChange={(event) => {
                                  setNewRecord({
                                    ...newRecord,
                                    time: event.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    </>
                    <>
                      <Button
                        className="flex gap-[2px] w-full rounded-[20px] h-8 bg-[#0166FF] text-base font-normal mt-3"
                        onClick={createRecord}
                      >
                        Add Record
                      </Button>
                    </>
                  </div>
                </>
              </div>

              <div className="flex-1 pl-6 h-fit  ">
                <div className="flex flex-col gap-[3px]">
                  <div className="text-[#1F2937]">Payee</div>
                  <Select>
                    <SelectTrigger className="border border-[#D1D5DB] bg-[#F9FAFB] text-[#94A3B8]">
                      <SelectValue
                        placeholder="Write here"
                        className="bg-[#F3F4F6] p-0"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-[19px]">
                  <div>Note</div>
                  <textarea
                    id="textar"
                    name="w3review"
                    rows="5"
                    cols="40"
                    placeholder="Write here"
                    className=" h-[280px] border border-[#D1D5DB] bg-[#F3F4F6] text-[#94A3B8] p-4 rounded-lg mt-[3px]"
                  ></textarea>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

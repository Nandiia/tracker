"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AccountContext = createContext(null);

export const AccountContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  const [addCategory, setAddCategory] = useState([]);

  // useEffect(() => {
  //   const getAccounts = async () => {
  //     const response = await axios.get("http://localhost:3010/accounts");
  //     setAccounts(response.data);
  //   };
  //   getAccounts();
  // }, []);

  const [record, setRecord] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const getRecord = async () => {
    try {
      const response = await axios.get("http://localhost:3010/records");
      // console.log(response);

      setRecord(response.data);

      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecord();
  }, []);

  const createRecord = async () => {
    const newRecord = {
      categoryName,
      amount,
    };

    const response = await axios.post(
      "http://localhost:3010/records",
      newRecord
    );
    setRecord([]);
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get("http://localhost:3010/categories");

        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  const creatCategory = async () => {
    const newCategory = {
      categoryName,
    };

    console.log(newCategory);
    const response = await axios.post(
      "http://localhost:3010/categories",
      newCategory
    );
    setCategory([...category, response.data]);
  };

  // const creatCategory = async () => {
  //   const response = await axios.post("http://localhost:3010/categories", {
  //     categoryName: newCategoryName,
  //   });

  //   setAddCategory([...addCategory, response.data]);
  // };
  // const creatCategory = asyn () => {
  //   const newCategory = {

  //   }
  // }

  return (
    <AccountContext.Provider
      value={{
        accounts,
        setAccounts,
        addCategory,
        setAddCategory,

        amount,
        setAmount,
        record,
        setRecord,
        createRecord,

        category,
        setCategory,
        creatCategory,
        categoryName,
        setCategoryName,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
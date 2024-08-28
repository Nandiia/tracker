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
  const [categoryIcon, setCategoryIcon] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  const [newRecord, setNewRecord] = useState({
    type: "EXP",
    amount: 0,
    category_id: "",
    date: "",
    time: "",
    payee: "",
    note: "",
    userId: "",
  });

  console.log("name", categoryName);
  console.log("icon", categoryIcon);

  const getRecord = async () => {
    try {
      const response = await axios.get("http://localhost:3010/records", {
        headers: {
          Authorization: `Bearer  ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response, "ggggg");

      // setRecord(response.data);

      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecord();
  }, []);

  const createRecord = async () => {
    // const categoryName = category.find(
    //   (item) => item.id === newRecord.category_id
    // ).categoryName;
    // const categoryIcon = category.find(
    //   (item) => item.id === newRecord.category_id
    // ).categoryIcon; /* nemsen categoryNAme, categoryIcon 2-oo doorh newRecord-oo nemj ugnu */

    // setNewRecord({...newRecord, userId: })

    const response = await axios.post(
      "http://localhost:3010/records",
      newRecord,
      {
        headers: {
          Authorization: `Bearer  ${localStorage.getItem("token")}`,
        },
      }
    );
    setRecord([...record, response.data]);
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:3010/records/${id}`);
    setRecord((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const getCategory = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:3010/categories", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer  ${token}`,
          },
        });

        console.log(localStorage.getItem("token"));

        console.log(response + "responce data");

        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  /*local data-s datagaa awch baigaa 
  const creatCategory = async () => {
    const newCategory = {
      categoryName,
      categoryIcon,
      categoryColor,
    };

    console.log(newCategory);
    const response = await axios.post(
      "http://localhost:3010/categories",
      newCategory
    );
    setCategory([...category, response.data]);
  }; */

  /* database-s datagaa oruulj irj bn. token tawij bn */

  const creatCategory = async () => {
    const newCategory = {
      categoryName,
      categoryIcon,
      categoryColor,
    };

    console.log(categoryName, categoryIcon, categoryColor);

    console.log(newCategory);
    const response = await axios.post(
      "http://localhost:3010/categories",
      newCategory,
      {
        headers: {
          // Authorization: "Bearer" + localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
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
        deleteRecord,

        category,
        setCategory,
        creatCategory,
        categoryName,
        setCategoryName,
        categoryIcon,
        setCategoryIcon,
        categoryColor,
        newRecord,
        setNewRecord,
        setCategoryColor,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

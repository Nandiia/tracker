"use client";

import { createContext, useContext, useState } from "react";

export const AccountContext = createContext(null);

export const AccountContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState({
    category: "category",
    date: "date",
    time: "time",
  });
  const [addCategory, setAddCategory] = useState({ categoryName: "name" });

  return (
    <AccountContext.Provider
      value={{ accounts, setAccounts, addCategory, setAddCategory }}
    >
      {children}
    </AccountContext.Provider>
  );
};

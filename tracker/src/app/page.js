"use client";

import Image from "next/image";
import { Nav } from "@/components/Nav";
import { RecordsMain } from "@/components/RecordsMain";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [accounts, setAccounts] = useState([]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const res = await fetch.get("http://localholst:3010/accounts");
    //     const data = await res.json();
    //     await setAccounts(data.body);
    //     console.log(data.body);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3010/accounts");

        setAccounts(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    //   axios.get("http://localholst:3005/accounts").then((res) => {
    //     console.log(res.data);
    //   });
  }, []);

  const createAccount = async () => {
    const newAccount = {
      title,
      amount,
    };

    const response = await axios.post(
      "http://localhost:3010/accounts",
      newAccount
    );
    setAccounts([]);
  };

  return (
    <main className="max-w-[1440px] h-fit m-auto ">
      <Link href="/record">
        <Button>loging</Button>
      </Link>

      <ul>
        {accounts.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
              {item.amount}
            </li>
          );
        })}
      </ul>

      <div className="flex gap-4 p-6">
        <input
          className="border"
          value={title}
          onChange={(event) => {
            /* onChange ni utga uurchlugduh burt setTitrle gesen function ajillana */
            setTitle(event.target.value);
          }}
        />

        <input
          className="border"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />

        <button onClick={createAccount}>Click me</button>
      </div>
    </main>
  );
}

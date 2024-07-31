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

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const response = await axios.get("http://localholst:3005/accounts");
    //     setAccounts(response.data);

    //     console.log(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getData();

    axios.get("http://localholst:3001/accounts").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <main className="max-w-[1440px] h-fit m-auto">
      <Link href="/record">
        <Button>loging</Button>

        <div>hh</div>
      </Link>
    </main>
  );
}

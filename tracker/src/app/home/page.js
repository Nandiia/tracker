"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();

  const [count, setCount] = useState(0);

  const handleCLick = () => {
    setCount(count + 1);
    router.push("/login");
  };

  return (
    <div className="text-5xl font-bold flex items-center justify-center max-w-screen-xl h-screen gap-5">
      <div>{count}</div>
      <div onClick={handleCLick}>Home</div>
    </div>
  );
}

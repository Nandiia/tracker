"use client";

import { Input } from "@/components/ui/input";
import { Logo } from "../svg/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LogIn() {
  return (
    <main className="flex">
      <div className="flex-1 flex flex-col items-center justify-center gap-11  ">
        <div className="flex items-center gap-[3px]">
          <Logo />
          <p className="font-bold text-2xl">Geld </p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Welcome Back</h1>
          <p className="text-[#334155] mt-2">
            Welcome back, Please enter your details
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            className="border w-[384px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3"
          />
          <Input
            type="password"
            placeholder="Password"
            className="border w-[384px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3"
          />
          <Button className="bg-[#0166FF] rounded-[20px] text-white ">
            Log in
          </Button>
        </div>

        <div className="flex gap-3">
          <p>Don’t have account?</p>

          <Link href="/signup">
            <button className="text-[#0166FF] underline-offset-1">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 bg-blue-700 h-screen"></div>
    </main>
  );
}

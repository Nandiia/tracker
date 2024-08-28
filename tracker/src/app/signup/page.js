"use client";

import { Input } from "@/components/ui/input";
import { Logo } from "../svg/Logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";

export default function SignUp() {
  const { register } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="flex">
      <div className="flex-1 flex flex-col items-center justify-center gap-11  ">
        <div className="flex items-center gap-[3px]">
          <Logo />
          <p className="font-bold text-2xl">Geld </p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Create Geld account</h1>
          <p className="text-[#334155] mt-2">
            Sign up below to create your Wallet account
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="name"
            className="border w-[384px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <Input
            type="email"
            placeholder="Email"
            className="border w-[384px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            className="border w-[384px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3"
          />

          <Input
            type="password"
            placeholder="Re-Password"
            className="border w-[384px] border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            className="bg-[#0166FF] rounded-[20px] text-white "
            onClick={() => register(username, email, password)}
          >
            Sign up
          </Button>
        </div>

        <div className="flex gap-3">
          <p>Already have account?</p>
          <button className="text-[#0166FF] underline-offset-1">Log in</button>
        </div>
      </div>

      <div className="flex-1 bg-blue-700 h-screen"></div>
    </main>
  );
}

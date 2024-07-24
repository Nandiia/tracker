import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Recods } from "@/components/Recods";

export default function Home() {
  return (
    <main className="max-w-[1440px] h-fit m-auto">
      <Nav />
      <Recods />
    </main>
  );
}

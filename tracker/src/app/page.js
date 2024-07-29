import Image from "next/image";
import { Nav } from "@/components/Nav";
import { RecordsMain } from "@/components/RecordsMain";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1440px] h-fit m-auto">
      <Link href="/record">
        <Button>loging</Button>
      </Link>
    </main>
  );
}

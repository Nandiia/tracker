"use context";

import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { AccountContextProvider } from "@/components/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AccountContextProvider>
        <body className={inter.className}>
          <Nav /> {children}
        </body>
      </AccountContextProvider>
    </html>
  );
}

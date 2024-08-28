"use context";

import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { AuthProvider } from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AccountContextProvider } from "@/components/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AccountContextProvider>
            <Nav /> {children}
          </AccountContextProvider>
        </AuthProvider>

        <ToastContainer />
      </body>
    </html>
  );
}

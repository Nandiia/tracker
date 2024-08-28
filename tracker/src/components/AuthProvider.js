"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [isChecking, setIsChecking] = useState(true);

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      // setIsLoggedIn(true);
      setUser(response.data.user);
      router.push("/");
    } catch (error) {
      toast.error(
        error.response.data.message ?? error.message
      ); /* error.response.data.message  - ene bol back-n aldaa */
    }
  };

  // const login = async (email, password) => {
  //   try {
  //     const res = await api.post("/auth/login", {email, password});
  //     localStorage.setItem("token", res.data.token);

  //   }
  // }

  const register = async (username, email, password) => {
    try {
      await api.post("/auth/register", {
        username,
        email,
        password,
      });

      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error(error.message ?? err.response.data.message);
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) setUser(true);
  // }, []);

  useEffect(() => {
    const loadUser = async () => {
      try {
        // isChecking(false);

        const token = localStorage.getItem("token");

        if (!token) return;

        const responce = await api.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(responce.data);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        toast.error("Your session has expired. Please login again.");
      } finally {
        // setIsChecking(true);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (isChecking) return;
    if (!user) router.push("/login");
  }, [user, isChecking]);

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

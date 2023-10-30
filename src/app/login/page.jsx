"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import showToast from "@/helper/toaster";

function Login() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      setButtonDisabled(true);
      const response = await axios.post("/api/users/login", user);
      if (response.status == 200 && response.data.status === true) {
        showToast("Login Successful!", "SUCCESS");
        router.push("/profile");
      } else {
        showToast("Invalid Credentials!", "ERROR");
      }
      console.log(response);
    } catch (error) {
      toast.error("Login Failed!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      console.log("Login failed=>", error?.message);
    } finally {
      setButtonDisabled(false);
    }
  };

  const onchangeHandler = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-[100%]">
      <div className="flex flex-col basis-1/4 w-64 bg-white p-10 rounded-xl ">
        <h1 className="mb-6 text-left text-2xl font-bold">
          Sign in to OnLearn
        </h1>

        <label className="mb-1 font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="email"
          name="email"
          type="email"
          onChange={onchangeHandler}
        />
        <label className="mb-1 font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="password"
          name="password"
          type="password"
          onChange={onchangeHandler}
        />
        <button
          onClick={onLogin}
          disabled={buttonDisabled}
          className="disabled:cursor-not-allowed bg-[rgb(13,12,34)] h-[52px] text-white font-medium p-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-gray-600">
          {!buttonDisabled ? "Login" : "Please Wait .."}
        </button>
        <span className="mt-5">
          Don&apos;t have an account?&nbsp;
          <Link className="underline" href={"/signup"}>
            SignUp!
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;

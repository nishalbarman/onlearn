"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import showToast from "@/helper/toaster";
import Image from "next/image";

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
    <>
      <div className="fixed backdrop-blur z-10 border-b border-[rgb(0,0,0,0.1)] shadow-[rgba(17,17,26,0.09)_0px_1px_0px] flex items-center  pt-5 pb-5 w-[100%] justify-between pl-4 pr-4 lg:pl-[15%] lg:pr-[15%]">
        {/* website logo */}
        <div
          className="flex gap-1 items-center w-fit h-[100%] hover:cursor-pointer"
          onClick={() => {
            router.push("/");
          }}>
          <Image
            className="align-center w-[50px]"
            src="/icons/graduation-hat.png"
            width={500}
            height={500}
          />
          <h2 className="font-bold text-3xl text-black">
            On<span className="text-[rgb(254,134,28)]">Learn</span>
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen w-[100%]">
        <div className="flex flex-col basis-2/4 xl:basis-1/4 xl:w-64 bg-white p-10 rounded-xl ">
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
    </>
  );
}

export default Login;

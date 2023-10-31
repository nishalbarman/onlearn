"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import showToast from "@/helper/toaster";
import Image from "next/image";

function Signup() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignup = async () => {
    try {
      setButtonDisabled(true);
      const response = await axios.post("/api/users/signup", user);
      if (response.status == 200 && response.data.status === true) {
        showToast("Account created!", "SUCCESS");
        router.push("/login");
      } else {
        showToast(response.data.message || response.data.error, "ERROR");
      }
      console.log(response);
    } catch (error) {
      showToast("Account creation failed!", "ERROR");
      console.log("Signup failed=>", error?.message);
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
      <div className="p-2 flex items-center justify-center min-h-screen">
        <div className="flex flex-col basis-2/4 xl:basis-1/4 xl:w-64 bg-white p-10 rounded-xl ">
          <h1 className="mb-6 text-left text-2xl font-bold">
            Sign up to OnLearn
          </h1>

          <label className="mb-1 font-medium" htmlFor="username">
            Name
          </label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="username"
            name="username"
            type="text"
            onChange={onchangeHandler}
          />
          <label className="mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="email"
            name="email"
            type="email"
            onChange={onchangeHandler}
          />

          <label className="mb-1 font-medium" htmlFor="password">
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
            onClick={onSignup}
            disabled={buttonDisabled}
            className="disabled:cursor-not-allowed bg-[rgb(13,12,34)] h-[52px] text-white font-medium p-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-gray-600">
            {!buttonDisabled ? "Signup" : "Please Wait .."}
          </button>
          <span className="mt-5">
            Already have an account?&nbsp;
            <Link className="underline" href={"/login"}>
              Login!
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Signup;

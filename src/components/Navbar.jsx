"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Navbar() {
  const router = useRouter();
  useEffect(() => {
    const removeDefaultBehaviour = (e) => {
      e.preventDefault();
    };

    window.addEventListener("contextmenu", removeDefaultBehaviour);

    return () => {
      window.removeEventListener("contextmenu", removeDefaultBehaviour);
    };
  }, []);
  return (
    <div className="fixed backdrop-blur z-10 border-b border-[rgb(0,0,0,0.1)] shadow-[rgba(17,17,26,0.09)_0px_1px_0px] flex items-center  pt-5 pb-5 w-[100%] justify-between pl-3 pr-3 lg:pl-[15%] lg:pr-[15%]">
      {/* menu icon */}
      <div className="flex items-center justify-center xl:hidden w-fit h-fit hover:cursor-pointer">
        <Image src="/icons/menu.png" width={32} height={32} />
      </div>

      {/* website logo */}
      <div className="flex gap-1 items-center w-fit h-[100%]">
        <Image
          className="align-center w-[50px]"
          src="/icons/graduation-hat.png"
          width={500}
          height={500}
        />
        <h2 className="font-bold text-3xl">
          On<span className="text-[rgb(254,134,28)]">Learn</span>
        </h2>
      </div>

      {/* desktop links */}
      <div className="hidden xl:flex items-center gap-5 w-fit">
        <Link className="font-bold text-lg" href={"/"}>
          Home
        </Link>
        <Link className="font-bold text-lg" href={"/about"}>
          About
        </Link>
        <Link className="font-bold text-lg" href={"/courses"}>
          Courses
        </Link>
        <Link className="font-bold text-lg" href={"/contact"}>
          Contact Us
        </Link>
      </div>

      {/* signup and login button */}
      <div className="hidden xl:flex gap-6 items-center h-fill w-fit">
        <Link className="font-normal text-lg underline" href={"/signup"}>
          SignUp
        </Link>
        <button
          className="p-2 w-[150px] rounded-lg text-white text-lg font-semibold bg-[rgb(254,134,28)] hover:scale-95 duration-200"
          onClick={() => {
            router.push("/login");
          }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;

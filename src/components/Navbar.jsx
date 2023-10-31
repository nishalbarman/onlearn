"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [user, setUserData] = useState({ isAuth: false });

  const [isSideNavbarVisible, setIsSideNavbarVisible] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isNavbarHidden = pathname === "/login" || pathname === "/signup";

  const handleMobileNavItemClick = () => {
    setIsSideNavbarVisible(false);
  };

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
    <>
      {!isNavbarHidden && (
        <div className="fixed backdrop-blur z-10 border-b border-[rgb(0,0,0,0.1)] shadow-[rgba(17,17,26,0.09)_0px_1px_0px] flex items-center  pt-5 pb-5 w-[100%] justify-between pl-4 pr-4 lg:pl-[15%] lg:pr-[15%]">
          {/* menu icon */}
          <div
            className="flex items-center justify-center xl:hidden w-fit h-fit hover:cursor-pointer"
            onClick={() => {
              setIsSideNavbarVisible((prev) => !prev);
            }}>
            <Image src="/icons/menu.png" width={32} height={32} />
          </div>

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

          {/* desktop links */}
          <div className="hidden xl:flex items-center gap-5 w-fit">
            <Link
              className={`${
                pathname === "/" ? "text-[rgb(254,134,28)]" : "text-black"
              } font-semibold text-lg hover:text-[rgb(254,134,28)] duration-200`}
              href={"/"}>
              Home
            </Link>
            <Link
              className={`${
                pathname === "/about" ? "text-[rgb(254,134,28)]" : "text-black"
              }
          font-semibold text-lg hover:text-[rgb(254,134,28)] duration-200`}
              href={"/about"}>
              About
            </Link>
            <Link
              className={`${
                pathname === "/courses"
                  ? "text-[rgb(254,134,28)]"
                  : "text-black"
              }
          font-semibold text-lg hover:text-[rgb(254,134,28)] duration-200`}
              href={"/courses"}>
              Courses
            </Link>
            <Link
              className={`${
                pathname === "/contact"
                  ? "text-[rgb(254,134,28)]"
                  : "text-black"
              }
          font-semibold text-lg hover:text-[rgb(254,134,28)] duration-200`}
              href={"/contact"}>
              Contact Us
            </Link>
          </div>

          {/* signup and login button */}
          {!user?.isAuth ? (
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
          ) : (
            <button
              className="p-2 w-[150px] rounded-lg text-white text-lg font-semibold bg-[rgb(254,134,28)] hover:scale-95 duration-200"
              onClick={() => {
                axios.get("/api/users/logout");
              }}>
              Logout
            </button>
          )}
        </div>
      )}

      <div
        className={`${
          isSideNavbarVisible || "hidden"
        } fixed h-[100%] w-[100%] bg-[rgb(0,0,0,0.4)] z-10`}
        onClick={() => {
          setIsSideNavbarVisible(false);
        }}></div>

      {/* mobile navbar */}
      <div
        className={`${
          isSideNavbarVisible || "hidden translate-x-[-300px]"
        } translate-x-[0px] duration-200 translate-x-[-300px] xl:hidden flex flex-col fixed h-screen items-start top-0 left-0 p-4 z-20 w-[260px] bg-white`}>
        <div
          className="flex gap-1 mb-6 mt-5 items-center w-fit hover:cursor-pointer"
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
        <div className="h-[1px] w-[100%] border-t border-[rgb(0,0,0,0.1)]"></div>
        <Link
          className="w-[100%] text-black font-medium p-3 hover:bg-[rgb(254,168,91)] rounded"
          href={"/"}
          onClick={handleMobileNavItemClick}>
          Home
        </Link>
        <div className="h-[1px] w-[100%] border-t border-[rgb(0,0,0,0.1)]"></div>
        <Link
          className="w-[100%] text-black font-medium p-3 hover:bg-[rgb(254,168,91)] rounded"
          href={"/about"}
          onClick={handleMobileNavItemClick}>
          About
        </Link>
        <div className="h-[1px] w-[100%] border-t border-[rgb(0,0,0,0.1)]"></div>
        <Link
          className="w-[100%] text-black font-medium p-3 hover:bg-[rgb(254,168,91)] rounded"
          href={"/courses"}
          onClick={handleMobileNavItemClick}>
          Courses
        </Link>
        <div className="h-[1px] w-[100%] border-t border-[rgb(0,0,0,0.1)]"></div>
        <Link
          className="w-[100%] text-black font-medium p-3 hover:bg-[rgb(254,168,91)] rounded"
          href={"/contact"}
          onClick={handleMobileNavItemClick}>
          Contact Us
        </Link>
        <div className="h-[1px] w-[100%] border-t border-[rgb(0,0,0,0.1)]"></div>
        {!user?.isAuth ? (
          <>
            <Link
              className="w-[100%] text-black font-medium p-3 hover:bg-[rgb(254,168,91)] rounded"
              href={"/signup"}
              onClick={handleMobileNavItemClick}>
              Signup
            </Link>
            <div className="h-[1px] w-[100%] border-t border-[rgb(0,0,0,0.1)]"></div>
            <button
              className="p-2 mt-4 w-[150px] rounded-lg text-white text-lg font-semibold bg-[rgb(254,134,28)] hover:scale-95 duration-200"
              onClick={() => {
                handleMobileNavItemClick();
                router.push("/login");
              }}>
              Login
            </button>
          </>
        ) : (
          <button
            className="p-2 mt-4 w-[150px] rounded-lg text-white text-lg font-semibold bg-[rgb(254,134,28)] hover:scale-95 duration-200"
            onClick={() => {
              axios.get("/api/users/logout");
            }}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;

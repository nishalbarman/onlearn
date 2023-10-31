"use client";

import React, { useState } from "react";

function Footer() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-[100%] bg-[rgb(47,48,50)]">
      <div className="grid grid-cols-1 ml-4 mr-4 text-center sm:text-left md:grid-cols-2 md:ml-[15%] md:mr-[15%] lg:text-left xl:grid-cols-3 xl:ml-[15%] xl:mr-[15%] gap-8 pt-[4rem] pb-[4rem] mt-5 border-t-[1px] border-gray-200">
        <div className="flex flex-col gap-4 lg:w-auto">
          <p className="text-white text-xl font-semibold">About Us</p>
          <p className="text-[rgb(145,145,145)] text-normal">
            Our mission is to empower learners and educators worldwide with a
            comprehensive and innovative platform that fosters a lifelong love
            for learning.
            <br></br>
            <br></br>
            We believe education should be personalized, accessible, and
            enjoyable for all. With cutting-edge technology, we connect learners
            and educators globally, revolutionizing education and creating a
            seamless learning experience.
          </p>
        </div>

        <div className="flex items-center sm:items-start lg:items-start flex-col gap-4  lg:w-auto">
          <p className="text-white text-xl font-semibold">Get Newsletter</p>
          <p className="text-[rgb(145,145,145)] text-normal">
            Be among the first to recieve timely program and event info career
            tips, industry trends and more.
          </p>
          <div className="h-[42px] flex max-w-auto items-center rounded ">
            <input
              type="email"
              className="p-2 pl-3 pr-3 h-[100%] max-w-auto rounded-l focus:border-0 focus:outline-0 hover:border-0"
              placeholder="Your Email Address"
            />
            <button
              className="flex p-3 text-white justify-center items-center h-[100%] w-[43px] bg-[rgb(50,102,204)] rounded-r"
              onClick={() => {
                setLoading((prev) => !prev);
              }}>
              {!loading ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                  <path
                    style={{ fill: "white" }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="4"
                  style={{ fill: "white" }}>
                  <circle cx="9" cy="2" r="2" />
                  <circle cx="2" cy="2" r="2" />
                  <circle cx="16" cy="2" r="2" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3  lg:w-auto">
          <p className="text-white text-xl font-semibold">Contacts</p>
          <p className="text-[rgb(145,145,145)] text-normal">
            {/* Adress: <br></br> */}
            <span className="text-[rgb(180,180,180)]">
              Nalbari, Assam, India, 781335
            </span>
          </p>

          <p className="text-[rgb(145,145,145)] text-normal">
            Email:{" "}
            <span className="text-[rgb(180,180,180)]">query@onlearn.in</span>
          </p>
        </div>
      </div>

      <div className="p-6 mt-5 border-t border-[rgb(0,0,0,0.2)] flex w-[100%] text-[rgb(180,180,180)] justify-center align-center text-sm bg-[rgb(31,32,33)]">
        © {new Date().getFullYear()}&nbsp; OnLearn. Explore, Learn
      </div>
    </div>
  );
}

export default Footer;

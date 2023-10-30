"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";

function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
      toast.success("Loged out successfully!", {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-black text-4xl text-center">Profile</h1>
      <button
        className="self-center p-2 m-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;

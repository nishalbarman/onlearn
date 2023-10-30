"use client";

import React from "react";

function ProfileId({ params }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-black text-4xl text-center">Profile</h1>
      <span className="m-5 p-2 rounded bg-white">
        Your id is : {params?.id}
      </span>
    </div>
  );
}

export default ProfileId;

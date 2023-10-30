"use client";

import { useEffect, useState } from "react";
import axios from "axios";

function VerifyEmail({ searchParams }) {
  const [message, setMessage] = useState(searchParams.token || "Nothing");
  const verifyRequest = async () => {
    try {
      const response = await axios.post("/api/users/verify", {
        token: searchParams?.token || "",
      });
      setMessage(response.data.message);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    verifyRequest();
  }, []);
  return (
    <div className="w-screen min-h-screen bg-white flex items-center justify-center">
      Verifies the user = {message}
    </div>
  );
}

export default VerifyEmail;

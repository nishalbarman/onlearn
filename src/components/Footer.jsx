import React from "react";

function Footer() {
  return <div className="p-5 mt-5 border-t-[1px] border-gray-200 flex w-[100%] justify-center align-center">© {new Date().getFullYear()}&nbsp;<b>OnLearn</b>, Explore. Learn</div>;
}

export default Footer;

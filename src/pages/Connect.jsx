import React from "react";
import Link from "../components/Link";
import connect from "../assets/connect.png";

const Connect = ({ title, des, link }) => {
  return (
    <div className="flex justify-around my-6 items-center">
      <img src={connect} alt="Work" />
      
      <div className="max-w-[600px]">
        <h1 className="text-6xl font-bold my-4">{title}</h1>
        <p className="text-lg text-gray-600 my-4">{des}</p>
        <Link>{link}</Link>
      </div>
    </div>
  );
};

export default Connect;

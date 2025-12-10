import React from "react";
import trusted1 from "../assets/trusted1.png";
import trusted2 from "../assets/trusted2.png";
import trusted3 from "../assets/trusted3.png";
import trusted4 from "../assets/trusted4.png";
import trusted5 from "../assets/trusted5.png";

const Trusted = () => {
  return (
    <div>
      <h1 className="text-center text-gray-400 text-xl">
        Trusted by 45M+ users
      </h1>

      <div className="flex justify-evenly my-5">
        <img src={trusted1} alt="" />
        <img src={trusted2} alt="" />
        <img src={trusted3} alt="" />
        <img src={trusted4} alt="" />
        <img src={trusted5} alt="" />
      </div>
    </div>
  );
};

export default Trusted;

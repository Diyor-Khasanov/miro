import React from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-7 border-b border-b-gray-300 h-[70px]">
      <ul className="flex gap-9 items-center cursor-pointer text-lg">
        <li>
          <img src={logo} alt="miro" />
        </li>
        <li>Product</li>
        <li>Solutions</li>
        <li>Resourses</li>
        <li>Enterprise</li>
        <li>Pricing</li>
      </ul>

      <ul className="flex gap-9 items-center cursor-pointer">
        <li className="flex gap-1 items-center">
          <GrLanguage /> EN
        </li>
        <li>Contact Sales</li>
        <li>Login</li>
        <li>
          <Button>Sign up free</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

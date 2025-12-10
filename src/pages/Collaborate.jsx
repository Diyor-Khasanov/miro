import React from "react";
import { collaborate } from "../data/collaborate";
import Button from "../components/Button";

const Collaborate = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-6xl font-bold">
        Collaborate without constraints
      </h1>

      <div className="flex my-10 items-center mx-auto max-w-max gap-50">
        {collaborate.map((data) => (
          <div className="max-w-[400px]">
            <h1 className="text-3xl font-semibold my-2">{data.title}</h1>
            <p className="text-gray-600">{data.des}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Button>Sign Up Free</Button>
      </div>
    </div>
  );
};

export default Collaborate;

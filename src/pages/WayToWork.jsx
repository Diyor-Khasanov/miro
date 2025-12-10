import React from "react";
import { wayToWork } from "../data/wayToWork";
import img from "../assets/wayToWork.png";
import Link from "../components/Link";

const WayToWork = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold mx-30 my-5">
        Built for the way you work
      </h1>

      <div className="flex justify-evenly items-center">
        {wayToWork.map((item) => (
          <p className="border border-gray-400 px-4 py-2 my-4 rounded-4xl">
            {item}
          </p>
        ))}
      </div>

      <div className="flex justify-around">
        <div className="max-w-[700px] flex flex-col gap-8 mt-8">
          <h1>Brainstorming</h1>
          <p className="text-gray-600">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <Link>Learn More</Link>
        </div>

        <img src={img} alt="way to work" />
      </div>
    </div>
  );
};

export default WayToWork;

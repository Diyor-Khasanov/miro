import React from 'react'
import { kindsOfTeams } from "../data/kindsOfTeams";
import img from "../assets/kindsOfTeams.png";
import Link from "../components/Link";

const KindsOfTeams = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold mx-35 my-5">
        Built for the way you work
      </h1>

      <div className="flex justify-evenly items-center">
        {kindsOfTeams.map((item) => (
          <p className="border border-gray-400 px-4 py-2 my-4 rounded-4xl">
            {item}
          </p>
        ))}
      </div>

      <div className="flex justify-around">
        <div className="max-w-[700px] flex flex-col gap-8 mt-8">
          <h1>UX & Design</h1>
          <ul className="list-disc">
            <li>Build low-fi wireframes</li>
            <li>Involve stakeholders in the design process</li>
            <li>Run engaging design workshops</li>
          </ul>
          <Link>Learn More</Link>
        </div>

        <img src={img} alt="kinds of teams" />
      </div>
    </div>
  );
}

export default KindsOfTeams
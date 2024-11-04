"use client";
import React from "react";

interface IHeading {
  name: string;
  desc: string;
}

const Heading: React.FC<IHeading> = ({ name, desc }) => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <p className="capitalize text-xl">{desc}</p>
    </div>
  );
};
export default Heading;
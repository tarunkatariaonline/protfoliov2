"use client";
import React from "react";
import { TypeAnimation as TPA } from "react-type-animation";
const TypeAnimation = () => {
  return (
    <TPA
      sequence={[
        "Full Stack Developer",
        2000,
        "Software Engineer",
        5000,
        "MERN Stack Developer",
        8000,
        "Problem Solver",
        10000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default TypeAnimation;

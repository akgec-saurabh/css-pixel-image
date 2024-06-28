"use client";
import { cutImage } from "@/actions/image";
import React from "react";

const Pattern = () => {
  const handleClick = async () => {
    console.log("clicked");
    const response = await cutImage();
    console.log(response);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Pattern;

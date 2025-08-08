import React from "react";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center lg:my-15 my-7">
        <h1 className="text-5xl lg:text-[8rem] uppercase font-medium text-neutral-700">
          {HERO_CONTENT.title}
        </h1>
        <p className="lg:mt-6 text-sm mb-4 font-medium -tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>
        <img
          src={HERO_CONTENT.image}
          className="w-full h-[65vh] object-cover rounded-2xl p-2"
        />
      </div>
    </div>
  );
};

export default Hero;

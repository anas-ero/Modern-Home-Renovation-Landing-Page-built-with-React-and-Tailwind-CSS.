import React from "react";
import { PORTFOLIO_PROJECTS } from "../constants/index";
const Porfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="my-20">
        <h1 className="text-xl lg:text-3xl -tracking-tight text-center uppercase mb-20 ">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {PORTFOLIO_PROJECTS.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl mx-4"
            >
              <img
                src={item.image}
                className="object-cover h-full w-full transition-transform duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-medium">{item.name}</h3>
                <p className="mb-12 p-4 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Porfolio;

import React from "react";
import { REVIEWS } from "../constants";

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 p-2">
      <div className="my-20">
        <h1 className="text-center -tracking-tight text-xl">Reviews</h1>
        <p className="text-center -tracking-tighter mt-10 mb-10 text-2xl">
          {REVIEWS.text}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[250px] transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <p className="text-gray-700">{item.review}</p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h5 className="font-medium text-gray-900">{item.name}</h5>
                  <span className="text-sm text-gray-600">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

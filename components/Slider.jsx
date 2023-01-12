import React from "react";
import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Slider = ({ name, title, description, price, image }) => {
  return (
    <div id="default-carousel" className="relative">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden md:h-96 rounded-lg">
        <div className="duration-700 ease-in-out">
          <span className="absolute text-4xl font-semibold  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl text-gray-800">
            {title}
          </span>
          <div className="relative h-96 w-96">
            {/* <Image
              src={image}
              fill
              objectFit="cover"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            /> */}
          </div>
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        <button className="w-3 h-3 rounded-full bg-gray-500"></button>
      </div>
      {/* Slider controls */}
      <button className="absolute top-1/3 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
          <AiOutlineLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button className="absolute top-1/3 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-gray-800/30  group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
          <AiOutlineRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;

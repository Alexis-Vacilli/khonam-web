import React from "react";
import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import data from "../data";
import image from '../assets/doogee.png'

const Slider = () => {
  return (
    <div id="default-carousel" className="relative h-[90vh]">
      {/* Carousel wrapper */}
      <div className="p-24 flex w-full h-full justify-between space-x-5">
        <div className="w-1/2 bg-white flex flex-col items-start justify-center space-y-5">
          <h2 className="text-5xl font-semibold w-96 text-gray-900 pl-10">
            It is time to break the rules
          </h2>
          <p className="text-gray-600 text-1xl font-light pl-10 pr-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quam? Ducimus, earum! Vero neque accusamus labore, modi voluptate quos veritatis?
          </p>
          <button className="ml-10 border-[1px] border-gray-500 py-2 px-4 rounded-md text-gray-500 font-normal">Learn more</button>
        </div>
        <div className="w-1/2">
          <Image src={image} fill objectFit="contain" alt="img" className="scale-75 ml-32"/>
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        <button className="w-3 h-3 rounded-full bg-gray-500"></button>
      </div>
      {/* Slider controls */}
      <button className="absolute top-1/2 translate-y-[-50%] left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
          <AiOutlineLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button className="absolute top-1/2 translate-y-[-50%] right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-gray-800/30  group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
          <AiOutlineRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;

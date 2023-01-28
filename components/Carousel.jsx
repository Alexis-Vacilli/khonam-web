import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image: "image1.jpg",
      text: "Text for image 1",
    },
    {
      image: "image2.jpg",
      text: "Text for image 2",
    },
    {
      image: "image3.jpg",
      text: "Text for image 3",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative overflow-hidden p-10 w-full">
      <div className="relative z-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 w-full h-full ${
              index !== currentIndex ? "invisible" : ""
            }`}
          >
            {/* <Image
              className="w-full h-full object-cover"
              fill
              src={item.image}
              alt={item.text}
            /> */}
            <div className="absolute bottom-0 p-4">
              <p className="text-black text-xl font-bold">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 flex p-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button className="absolute top-1/3 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-gray-800/30  group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
          <AiOutlineRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          <span className="sr-only">Next</span>
        </span>
      </button>
      </div>
    </div>
  );
};

export default Carousel;

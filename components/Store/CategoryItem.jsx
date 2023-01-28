import React from "react";
import Image from "next/image";

const CategoryItem = ({ item }) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md bg-gray-50">
      <a href="#">
        <Image
          className="p-8 rounded-t-lg"
          src={item.image}
          alt="product image"
          objectFit="contain"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-normal tracking-tight text-gray-700">
            {item.name}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-700">$599</span>
          <a
            href="#"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

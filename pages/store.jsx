import React from "react";
import Header from "../components/Header";
import data from "../data";
import Image from "next/image";

function store() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 mt-5">
          <h1 className="text-4xl text-center font-normal text-gray-900">
            Store
          </h1>
          <div className="flex space-x-8 p-2 cursor-pointer mt-10 shadow-sm w-1/3">
            <span className="">
              <h5 className="text-lg text-gray-500 hover:text-gray-900">All</h5>
            </span>
            <span className="">
              <h5 className="text-lg text-gray-500 hover:text-gray-900">
                Rugged Phones
              </h5>
            </span>
            <span className="">
              <h5 className="text-lg text-gray-500 hover:text-gray-900">
                Smart watches
              </h5>
            </span>
          </div>
          <div className="flex mt-10 space-x-5">
            {data?.map((item) => {
              return (
                <div
                  key={item.name}
                  className="w-full max-w-sm rounded-lg shadow-md bg-gray-50"
                >
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
                      <span className="text-3xl font-bold text-gray-700">
                        $599
                      </span>
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
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default store;

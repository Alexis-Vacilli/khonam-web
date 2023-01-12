import React from "react";
import Header from "../components/Header";
import { TbBrandTelegram } from "react-icons/tb";
import { TfiLocationPin, TfiHeadphoneAlt } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import {FaExternalLinkAlt} from 'react-icons/fa'

function contact() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 mb-20">
        <section className="pt-6 mt-5">
          <h1 className="text-4xl text-center font-normal text-gray-900">
            Get in touch
          </h1>
          <div className="flex mt-10 space-x-4">
            <div className="w-1/2 px-10">
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="bg-gray-100 py-2 px-4 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="bg-gray-100 py-2 px-4 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-gray-100 py-2 px-4 rounded-md outline-none"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="bg-gray-100 py-2 px-4 rounded-md outline-none"
                ></textarea>
                <button className="text-white bg-gray-900 p-2 rounded-xl">
                  Send
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-1/2">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <TbBrandTelegram className="w-10 h-10 mb-2 text-gray-500" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-500">
                    Our email
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a
                  href="#"
                  class="inline-flex items-center text-gray-600 hover:underline"
                >
                  Send us email
                  <FaExternalLinkAlt className="h-3 ml-1"/>
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <TfiLocationPin className="w-10 h-10 mb-2 text-gray-500 font-bold" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-500">
                    Our address
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a
                  href="#"
                  class="inline-flex items-center text-gray-600 hover:underline"
                >
                  Send us email
                  <FaExternalLinkAlt className="h-3 ml-1"/>
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <TfiHeadphoneAlt className="w-10 h-10 mb-2 text-gray-500 font-bold" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-500">
                    Our Phone
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a
                  href="#"
                  class="inline-flex items-center text-gray-600 hover:underline"
                >
                  Send us email
                  <FaExternalLinkAlt className="h-3 ml-1"/>
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <RxInstagramLogo className="w-10 h-10 mb-2 text-gray-500 font-bold" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-500">
                    Our Instagram
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a
                  href="#"
                  class="inline-flex items-center text-gray-600 hover:underline"
                >
                  Visit our instagram
                  <FaExternalLinkAlt className="h-3 ml-1"/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default contact;

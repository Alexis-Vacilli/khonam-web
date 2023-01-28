import React from "react";
import Header from "../components/Header";
import { TbBrandTelegram } from "react-icons/tb";
import { TfiLocationPin, TfiHeadphoneAlt } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import {BsPerson} from "react-icons/bs"
import {CiMail} from 'react-icons/ci'
import Footer from "../components/Footer";


function Contact() {
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
                <div className="flex items-center border-2 rounded-xl">
                  <BsPerson className="h-5 w-5 ml-3 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className=" py-2 px-4 rounded-md outline-none"
                  />
                </div>
                <div className="flex items-center border-2 rounded-xl">
                  <CiMail className="h-5 w-5 ml-3 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className=" py-2 px-4 rounded-md outline-none"
                  />
                </div>
                <div className="flex items-start border-2 rounded-xl">
                <TbBrandTelegram className="h-5 w-5 ml-3 mt-2.5 text-gray-400" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="py-2 px-4 w-full rounded-md outline-none"
                ></textarea>
                </div>
                <button className="text-white bg-gray-900 p-2 rounded-xl">
                  Send
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-1/2">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <TbBrandTelegram className="w-10 h-10 mb-2 text-gray-500" />
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a       
                  href="/a"
                  className="inline-flex items-center text-gray-600 hover:underline"
                >
                  Send us email
                  <FaExternalLinkAlt className="h-3 ml-1" />
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <TfiLocationPin className="w-10 h-10 mb-2 text-gray-500 font-bold" />
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a
                  href="/a"
                  class="inline-flex items-center text-gray-600 hover:underline"
                >
                  Send us email
                  <FaExternalLinkAlt className="h-3 ml-1" />
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <TfiHeadphoneAlt className="w-10 h-10 mb-2 text-gray-500 font-bold" />
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a
                  href="/a"
                  class="inline-flex items-center text-gray-600 hover:underline"
                >
                  Send us email
                  <FaExternalLinkAlt className="h-3 ml-1" />
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <RxInstagramLogo className="w-10 h-10 mb-2 text-gray-500 font-bold" />
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  khonam@info.rw
                </p>
                <a
                  href="/a"
                  class="inline-flex items-center text-gray-600 hover:underline"
                >
                  Visit our instagram
                  <FaExternalLinkAlt className="h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

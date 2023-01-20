import React from "react";
import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white border-gray-100">
      {/* ===== */}
      <div className="mt-1 bg-white border-gray-100 shadow-sm border-y">
        <div className="grid max-w-screen-xl px-4 py-10 mx-auto text-sm text-gray-500  md:grid-cols-3 md:px-6">
          <ul
            className="space-y-4 sm:mb-4 md:mb-0"
            aria-labelledby="mega-menu-full-cta-button"
          >
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 ">
                Online Stores
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 ">
                Segmentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600">
                Marketing CRM
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600">
                Online Stores
              </a>
            </li>
          </ul>
          <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
            <li>
              <a href="#" className="hover:underline hover:text-gray-600">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600">
                License
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600">
                Resources
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 font-semibold text-gray-900 ">Our brands</h2>
            <p className="mb-2 font-light text-gray-500">
              At Flowbite, we have a portfolio of brands that cater to a variety
              of preferences.
            </p>
            <div className="flex space-x-5 mt-8">
              <div className="flex space-x-2 border-2 items-center px-2 py-2 w-96 rounded-lg">
                <MdMail className="h-6 w-6 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your email..."
                  className="border-none outline-none flex flex-grow"
                />
              </div>
              <button className="bg-gray-900 text-white py-0 px-4 rounded-full font-bold">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <div></div>
        <p className="text-sm text-gray-400 font-extralight">
          @copyrights, 2023 khonam ltd
        </p>
        <div className="flex space-x-5 text-gray-500">
          <a href="">
            <SlSocialInstagram />
          </a>
          <a href="">
            <SlSocialTwitter />
          </a>
          <a href="">
            <SiWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

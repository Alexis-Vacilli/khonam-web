import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex flex-grow py-7 h-5 w-full items-center justify-center space-x-20 bg-transparent backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div>Logo</div>
      <div className="flex space-x-10 text-gray-500 capitalize">
        {[
          "home",
          "about",
          "contact",
          "store",
          "rugged phones",
          "smart watches",
        ].map((link) => {
          return (
            <Link key={link} href={link} className="hover:text-gray-900">
              {link}
            </Link>
          );
        })}
      </div>
      <div>
        <AiOutlineSearch className="text-gray-600 h-5 w-10 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Header from "../components/Header";
import data from "../data";
import Image from "next/image";
import FilterCategories from "../components/Store/FilterCategories";

function store() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 mt-5">
          <h1 className="text-4xl text-center font-normal text-gray-900">
            Store
          </h1>
          <FilterCategories />
        </section>
      </main>
    </div>
  );
}

export default store;

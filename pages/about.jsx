import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 mt-5">
          <h1 className="text-4xl text-center font-normal text-gray-900">
            About us
          </h1>
          <div className="flex flex-col space-y-0 m-10">
            <div className="flex flex-grow">
              <div className="w-1/2 bg-gray-50 p-16">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                  Who we are
                </h1>
                <p className="mt-4 text-sm text-gray-600 font-light">
                  Khonam Ltd is a trading company registered in RWANDA with a
                  leading role in providing innovation in electronics. The
                  Khonam Ltd Idea is to solve the most complicated social
                  problems with the best electronic devices. Khonam Ltd is
                  deeply invested in providing innovation solving problems in
                  electronics. Khonam is dedicated to being LA MEJOR ELECTRONICA
                  provider on the market of RWANDA and elsewhere.
                </p>
              </div>
              <div></div>
            </div>
            <div className="flex">
              <div className="w-1/2"></div>
              <div className="w-1/2 bg-blue-50 bg-opacity-30 p-16">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                  Our vision
                </h1>
                <p className="mt-4 text-sm font-light text-gray-500">
                  Khonam Ltd is a trading company registered in RWANDA with a
                  leading role in providing innovation in electronics. The
                  Khonam Ltd Idea is to solve the most complicated social
                  problems with the best electronic devices. Khonam Ltd is
                  deeply invested in providing innovation solving problems in
                  electronics. Khonam is dedicated to being LA MEJOR ELECTRONICA
                  provider on the market of RWANDA and elsewhere.
                </p>
              </div>
            </div>
            <div className="flex flex-grow">
              <div className="w-1/2 bg-gray-50 p-16">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                  Our Mission
                </h1>
                <p className="mt-4 text-sm text-gray-500 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci molestias dolorum qui eveniet expedita explicabo, quibusdam excepturi exercitationem unde ipsa nisi magni hic. Ullam quo nemo dignissimos optio maiores nulla. Earum molestiae veritatis incidunt natus eius repellendus ab!
                </p>
              </div>
              <div></div>
            </div>
            <div className="flex">
              <div className="w-1/2"></div>
              <div className="w-1/2 bg-purple-50 bg-opacity-30 p-16">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                  Our core values
                </h1>
                <p className="mt-4 text-sm text-gray-500 font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempora aspernatur, cum, quod quae reprehenderit eius, doloribus numquam pariatur ratione similique hic minus laudantium necessitatibus neque deserunt eligendi incidunt soluta!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

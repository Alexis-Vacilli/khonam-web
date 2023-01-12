import { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Slider from "../components/Slider";
import data from "../data";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {

  }

  const goToPreviousSlide = () => {

  }
  return (
    <>
      <Head>
        <title>Khonam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* main section */}
      <main className="">
        <section>
          <div>
            {data?.map((item) => {
              return (
                <Slider
                  key={item.name}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

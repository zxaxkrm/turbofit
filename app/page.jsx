import Image from "next/image";
import React from "react";

export default function Home() {
  return (
  <main className="bg-cover bg-no-repeat bg-[url('/dumbg.jpg')] bg-black/70 min-h-dvh">
<section className="flex items-center justify-center min-h-dvh ">
  <div className=" w-3/4 ">
    <h1 className="text-white text-center font-bold text-3xl md:text-6xl lg:text-7xl ">Train Hard, Sweat Hard.</h1>
    <p className="text-white text-center text-base font-semibold italic">Maximize your full potential...</p>
  </div>

   <div className="flex max-md:flex-col items-center md:gap-10 gap-5 w-full justify-center">
            <button className="border-2 bg-white border-neutral-800 px-10 py-2 hover:text-white text-neutral-700 text-base lg:text-lg max-md:w-full font-semibold hover:bg-neutral-800  transition-all">
              Become a member
            </button>
            <button className="border-2 bg-neutral-800 border-white px-10 py-2 text-white font-semibold text-base lg:text-lg max-md:w-full hover:text-black hover:bg-white  transition-all">
              Book Now
            </button>
          </div>
</section>
  </main>
  );
}

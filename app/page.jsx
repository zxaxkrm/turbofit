import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="">
      <section className=" max-md:pt-25 flex flex-col gap-7 md:gap-12 py-2 items-start pl-8 justify-center min-h-dvh bg-cover bg-center bg-[url('/bwbgg.jpg')] ">
        <div className="w-1/2">
          <h1 className="text-white text-center  font-bold text-3xl md:text-6xl lg:text-7xl">
            TRANSFORM YOUR BODY, TRANSFORM YOUR LIFESTYLE.
          </h1>
          <p className="text-[#DAB55D] pl-2 text-center max-md:hidden text-base font-semibold italic">
            Maximize your full potential with mental and performance training
            for athletes and coaches
          </p>
        </div>

        <a
          href="/membership"
          className="flex pl-2 items-center hover:cursor-pointer "
        >
          <span className="bg-white text-neutral-800 font-bold px-10 py-4">
            GET STARTED
          </span>
          <span className="text-neutral-800 font-bold text-2xl bg-[#DAB55D] py-4 px-4">
            <FaArrowRight />
          </span>
        </a>
      </section>

      <section className="min-h-dvh bg-[#5A363A]  p-10 py-20 md:px-10">
        <div className="w-full lg:flex mt-10 md:px-30">
          <div className="w-full lg:flex justify-between  mx-auto border-b border-[#9B8687]">
            <h1 className=" font-bold  text-5xl text-white border-b-8 pb-4 border-[#9B8687] ">
              OUR SERVICES
            </h1>
            <h1 className="bg-[#DAB55D] hover:bg-[#5A363A] max-lg:mt-4 hover:text-white transition-all h-10 px-6 py-3 text-black text-center justify-center pb-4 font-semibold">
              View All
            </h1>
          </div>
        </div>

        <div className="grid max-lg:items-center max-lg:justify-center  lg:grid-cols-3 mt-10 md:px-12 max-lg:space-y-15">
          <div className="">
            <img src="/ind.jpg" alt="indivi" className=" h-85 w-85" />
            <h1 className="text-white font-semibold border-b border-[#9B8687] pb-5 pt-4 mx-5">
              INDIVIDUAL SESSION
            </h1>
            <button className="bg-[#DAB55D] transition-all hover:underline mt-12 mx-5 px-4 py-2 text-center justify-center font-semibold text-black">
              BOOK NOW
            </button>
          </div>

          <div>
            <img src="/grup.jpg" alt="indivi" className=" h-85 w-85" />
            <h1 className="text-white font-semibold border-b border-[#9B8687] pb-5 pt-4 mx-5">
              WORK WITH A TRAINER
            </h1>
            <button className="bg-[#DAB55D] transition-all hover:underline mt-12 mx-5 px-4 py-2 text-center justify-center font-semibold text-black">
              BOOK NOW
            </button>
          </div>

          <div>
            <img src="/aerobics.avif" alt="indivi" className=" h-85 w-85" />
            <h1 className="text-white font-semibold border-b border-[#9B8687] pb-5 pt-4 mx-5">
              AEROBICS & CHALLENGES
            </h1>
            <button className="bg-[#DAB55D] transition-all hover:underline mt-12 mx-5 px-4 py-2 text-center justify-center font-semibold text-black">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

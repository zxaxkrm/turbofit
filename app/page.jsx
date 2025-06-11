import Image from "next/image";
import React from "react";

export default function Home() {
  return (
  <main className="bg-cover bg-no-repeat bg-[url('/dumbg.jpg')] bg-black/70 min-h-dvh">
<section className="flex items-center justify-center min-h-dvh ">
  <div className=" w-3/4 ">
    <h1 className="text-white text-center font-black text-3xl md:text-6xl lg:text-9xl ">TURBOFIT</h1>
    <p className="text-white text-center text-base font-semibold italic">Where Limits Break...</p>
  </div>
</section>
  </main>
  );
}

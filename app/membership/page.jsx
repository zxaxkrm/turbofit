import React from "react";

const membership = () => {
  return (
    <main className="py-10 bg-neutral-800">
      <section>
        <div className="p-4 text-white py-15 bg-neutral-800 text-center ">
          <div className="w-full lg:flex md:mt-10 md:px-30">
            <div className="w-full lg:flex justify-between mx-auto border-b border-[#9B8687]">
              <h1 className=" font-bold text-4xl md:text-5xl text-white border-b-8 pb-4 border-[#9B8687] ">
                OUR PACKAGES
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8  items-center justify-center bg-neutral-800">
        <div className="flex max-md:flex-col md:justify-around max-lg:px-6  max-md:px-4 ">
          <div>
            <img
              src="/monthly.webp"
              alt="month"
              className="h-54 md:w-110 max-md:w-78 "
            />
          </div>

          <div className="items-center justify-center py-5 border pl-6 border-gray-500 md:w-110 space-y-5 ">
            <h1 className="text-white font-bold text-xl">MONTHLY PLAN</h1>
            <p className="text-white text-lg font-thin">30 Days</p>
            <p className="text-white text-lg font-thin">$20</p>
            <span className="text-neutral-800 text-base cursor-pointer font-bold py-1 px-4  bg-white hover:bg-[#DAB55D] hover:transition-all border-neutral-800  ">
              VIEW DETAILS
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col md:justify-around max-lg:px-6  max-md:px-4 ">
          <div>
            <img
              src="/quarter.webp"
              alt="quart"
              className="h-54 md:w-110 max-md:w-78 "
            />
          </div>

          <div className="items-center justify-center py-5 border pl-6 border-gray-500 md:w-110 space-y-5 ">
            <h1 className="text-white font-bold text-xl">QUARTERLY PLAN</h1>
            <p className="text-white text-lg font-thin">90 Days</p>
            <p className="text-white text-lg font-thin">$57</p>
            <span className="text-neutral-800 text-base font-bold py-1 px-4 cursor-pointer bg-white hover:bg-[#DAB55D] hover:transition-all border-neutral-800  ">
              VIEW DETAILS
            </span>
          </div>
        </div>

        <div className="flex max-md:flex-col max-md:px-4 max-lg:px-6 justify-around ">
          <div>
            <img
              src="/coach.webp"
              alt="annual"
              className="h-54 md:w-110 max-md:w-78"
            />
          </div>

          <div className="items-center justify-center py-5 border pl-6 border-gray-500 md:w-110 space-y-5 ">
            <h1 className="text-white font-bold text-xl">ANNUAL PLAN</h1>
            <p className="text-white text-lg font-thin">1 Year</p>
            <p className="text-white text-lg font-thin">$215</p>
            <span className="text-neutral-800 text-base font-bold cursor-pointer py-1 px-4 t bg-white hover:bg-[#DAB55D] hover:transition-all border-neutral-800  ">
              VIEW DETAILS
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default membership;

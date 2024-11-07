import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" px-6 min-h-[30rem] py-16 mx-auto bg-gray-800">
      <div className="items-center lg:flex ">
        <div className="w-full lg:w-1/2 lg:ml-12">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl text-center lg:text-start">
              Guarantee your safety in using our ambulances
            </h1>

            <div className="flex justify-between w-80 md:w-1/3 lg:w-2/3 mx-auto my-7">
              <div className="flex items-center flex-col">
                <Image
                  src="/24-hours.png"
                  alt="24-hours"
                  width={40}
                  height={40}
                />
                <h1 className="text-white font-light ">24/7</h1>
              </div>
              <div className="flex items-center flex-col">
                <Image
                  src="/ambulance.png"
                  alt="24-hours"
                  width={40}
                  height={40}
                />
                <h1 className="text-white font-light ">Accessible</h1>
              </div>
              <div className="flex items-center flex-col">
                <Image src="/money.png" alt="24-hours" width={40} height={40} />
                <h1 className="text-white font-light ">Affordable</h1>
              </div>
            </div>

            <div className=" flex justify-center">
              <button
                type="button"
                className="text-white bg-[#5D17EB] hover:bg-[#5D17EB] focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#5D17EB] dark:hover:bg-[#5e17ebdc]  focus:outline-none dark:focus:ring-blue-800 duration-300 ease-in-out font-bold"
              >
                <div className="flex gap-2 items-center">
                  {" "}
                  <span>Get Started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Image
            src="/ambulance.avif"
            alt="ambulance patient"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="dark:bg-gray-100 py-20 rounded-3xl">
      <div className="container px-6 py-10 mx-auto">
        <h1
          data-aos="fade-up"
          className="text-3xl font-[500] text-gray-900 text-center mb-12"
        >
          Our <span className="text-blueish font-[500]">Exclusive Team</span>
        </h1>
        <p
          data-aos="zoom-out"
          className="max-w-2xl mx-auto my-6 text-center text-gray-900 "
        >
          We have a passionate team dedicated to transforming healthcare through
          innovation. With a wealth of experience and expertise, we are united
          by a common goal: to improve the lives of individuals through
          technology.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <div
            data-aos="flip-left"
            className="flex flex-col items-center ease-in-out p-8 transition-colors duration-300 transform  group hover:bg-blueish bg-white shadow-md rounded-xl"
          >
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-blueish duration-300 ease-in-out   group-hover:ring-[#FF9141]"
              src="/Beti.jpg"
              alt="Dr. Betelhem Tadele"
              width={400}
              height={400}
            />

            <h1 className="mt-4 text-xl  text-center font-[600] text-gray-900 capitalize duration-300 ease-in-out  group-hover:text-white">
              Dr. Betelhem Tadele
            </h1>

            <p className="mt-2 text-gray-00  text-center capitalize duration-300 ease-in-out  group-hover:text-gray-300">
              Founder of Delta
            </p>
          </div>

          <div
            data-aos="flip-left"
            className="flex flex-col items-center ease-in-out p-8 transition-colors duration-300 transform  group hover:bg-blueish bg-white  shadow-md rounded-xl"
          >
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-blueish duration-300 ease-in-out   group-hover:ring-[#FF9141]"
              src="/arsema.jpg"
              alt="Dr. Arsema Goytom"
              width={400}
              height={400}
            />

            <h1 className="mt-4 text-xl  text-center font-semibold text-gray-900 capitalize duration-300 ease-in-out  group-hover:text-white">
              Dr. Arsema Goytom
            </h1>

            <p className="mt-2 text-gray-00 capitalize  text-center duration-300 ease-in-out  group-hover:text-gray-300">
              Co-founder of Delta
            </p>
          </div>

          <div
            data-aos="flip-left"
            className="flex flex-col items-center ease-in-out p-8 transition-colors duration-300 transform  group hover:bg-blueish bg-white shadow-md rounded-xl"
          >
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-blueish duration-300 ease-in-out   group-hover:ring-[#FF9141]"
              src="/yordi.jpg"
              alt="Dr. Yordanos Tsehay"
              width={400}
              height={400}
            />

            <h1 className="mt-4 text-xl font-semibold  text-center text-gray-900 capitalize duration-300 ease-in-out  group-hover:text-white">
              Dr. Yordanos Tsehay
            </h1>

            <p className="mt-2 text-gray-00 capitalize text-center duration-300 ease-in-out  group-hover:text-gray-300">
              Cofounder & Program manager of Delta
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="flex flex-col items-center ease-in-out p-8 transition-colors duration-300 transform  group hover:bg-blueish bg-white shadow-md rounded-xl"
          >
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-blueish duration-300 ease-in-out   group-hover:ring-[#FF9141]"
              src="/bereketgetachew.jpg"
              alt=""
              width={400}
              height={400}
            />

            <h1 className="mt-4 text-xl font-semibold  text-center text-gray-900 capitalize duration-300 ease-in-out  group-hover:text-white">
              Bereket Getachew
            </h1>

            <p className="mt-2 text-gray-00 capitalize  text-center duration-300 ease-in-out  group-hover:text-gray-300">
              Junior full stack web Developer of Delta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

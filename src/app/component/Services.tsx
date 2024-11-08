import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="bg-white my-32 py-16 dark:bg-gray-100">
      <div className="container px-6 py-10 mx-auto">
        <h1
          data-aos="fade-up"
          className="text-3xl font-[500] text-gray-900 text-center mb-12"
        >
          Our <span className="text-blueish font-[500]">Services</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div
            data-aos="flip-up"
            className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-white shadow-md"
          >
            <Image
              src="/alarm.png"
              alt="emergency transportation"
              width={50}
              height={50}
            />
            <h1 className="text-xl font-semibold text-gray-900 capitalize ">
              Emergency Transport
            </h1>

            <p className="text-gray-500 text-sm dark:text-gray-800">
              Our Emergency Transport Service offers swift and dependable
              transportation for patients in critical situations. Our
              well-equipped ambulances and highly trained paramedics are
              available 24/7, ensuring that every patient receives exceptional
              care during their journey.
            </p>
          </div>

          <div data-aos="flip-up"  className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-white shadow-md">
            <Image
              src="/wheelchair.png"
              alt="non-emergency transportation"
              width={50}
              height={50}
            />
            <h1 className="text-xl font-semibold text-gray-900 capitalize ">
              Non-Emergency Transport
            </h1>

            <p className="text-gray-500 text-sm dark:text-gray-800">
              Our Non-Emergency Transport Service provides safe and comfortable
              transportation for patients who require medical care but do not
              need immediate attention. Whether it&apos;s for scheduled
              appointments, routine check-ups, or transfers between facilities,
              our trained staff and well-maintained vehicles ensure a smooth and
              reliable journey.
            </p>
          </div>

          <div data-aos="flip-up"  className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-white shadow-md">
            <Image
              src="/mobile.png"
              alt="tele-medicine"
              width={50}
              height={50}
            />
            <h1 className="text-xl font-semibold text-gray-900 capitalize ">
              Tele Medicine
            </h1>

            <p className="text-gray-500 text-sm dark:text-gray-800">
              Our Telemedicine Service allows you to connect with healthcare
              professionals via secure video consultations. Receive expert
              medical advice, follow-up care, and prescription refills from the
              comfort of your home, ensuring easy access to quality healthcare
              anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

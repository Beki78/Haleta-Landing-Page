import React from 'react'


const About = () => {
  return (
    <div className="my-16 ">
      <h1
        data-aos="fade-up"
        className="text-3xl font-[400] text-gray-900 text-center mb-12"
      >
        About <span className="text-blueish font-[500]">Haleta</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-12 justify-between items-center mx-4 md:mx-12 lg:mx-16">
        <video
          src="/video.mp4"
          controls
          autoPlay
          muted
          loop
          data-aos="zoom-in-down"
          className="w-full lg:w-1/2 max-w-xl mx-auto mt-8 px-2 shadow-2xl shadow-[#6F7CB2] "
        ></video>

        <div
          data-aos="zoom-in-down"
          className="shadow-left px-4 py-10 rounded-md "
        >
          <p>
            Haleta is a health care platform that provides reliable and easily
            accessible medical transportation services, ensuring a safe and
            comfortable journey for every patient. We offer a variety of
            services to meet your needs, from emergency ambulance transport to
            non-emergency medical appointments.
          </p>
          <div className="mt-6">
            <div className="flex gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blueish"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>{" "}
              <h1 className="font-semibold text-blueish">Vision</h1>
            </div>
            <h1 className="pl-10">
              Our vision is to become the premier provider of life-saving
              healthcare solutions by setting the standard of excellence in
              emergency response, and enhancing healthcare accessibility across
              Ethiopia and beyond East Africa.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
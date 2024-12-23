"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement | null>(null); 

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_j2jhjn6",
          "template_2xbuhom",
          form.current,
          "V9zzDoynjPinXgUYN"
        )
        .then(
          () => {
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message sent!", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          () => {
            toast.error("Message failed!", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
    }
  };

  return (
    <div>
      <section className="bg-gray-100 py-12 rounded-3xl">
        <div className="container py-12 mx-auto">
          <div className="lg:flex lg:items-center mx-4 md:mx-12 lg:mx-7 xl:mx-20">
            <div data-aos="zoom-out-right" className="lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold text-gray-900 capitalize lg:text-3xl">
                Contact us for <br /> more info
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#FF9141]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72">
                    Addis Ababa, Ethiopia
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#FF9141]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72">
                    +251991117306
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#FF9141]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72">
                    haletamedical@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-700">Follow us</h3>

                <div className="flex mt-4 -mx-1.5">
                  <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/haleta-medical-services/"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/linkedin.png"
                          alt="LinkedIn"
                          width={30}
                          height={10}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div data-aos="zoom-out-left" className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 dark:shadow-black/30">
                <form ref={form} onSubmit={sendEmail} className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="user_name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 rounded-md focus:ring-blueish shadow-sm focus:outline-none focus:ring focus:ring-opacity-90"
                      required
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="user_email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 rounded-md  focus:ring-blueish shadow-sm focus:outline-none focus:ring focus:ring-opacity-90"
                      required
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 rounded-md md:h-48 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blueish focus:outline-none focus:ring focus:ring-opacity-90 shadow-sm"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <input
                    type="submit"
                    value="Send"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blueish rounded-md hover:bg-[#FF9141]"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

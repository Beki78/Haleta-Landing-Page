"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const scrollheader = () => {
    if (window.scrollY >= 3) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollheader);

    return () => {
      window.removeEventListener("scroll", scrollheader);
    };
  }, []);
   const navbarHeight = 220; 
   const navbarHeight2 = 100; 

  return (
    <header
      className={
        header
          ? "fixed shadow-lg z-10 bg-white w-full transition-all duration-500 ease-in-out rounded-bl-3xl rounded-br-3xl "
          : "bg-gray-800"
      }
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="haleta logo"
              src="/logo.png"
              width={60}
              height={60}
              className="ml-10"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className={header ? "h-6 w-6 text-black" : "h-6 w-6 text-white"}
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            className={`relative text-sm font-semibold cursor-pointer ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            className={`relative text-sm font-semibold cursor-pointer ${
              header ? "text-gray-900" : "text-white "
            } group`}
          >
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-navbarHeight2}
            className={`relative text-sm font-semibold cursor-pointer ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            Services
            <span className="absolute left-0 bottom-0 h-0.5 w-full  bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="solutions"
            smooth={true}
            duration={500}
            offset={-navbarHeight2}
            className={`relative text-sm font-semibold cursor-pointer ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            Solutions
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            offset={-navbarHeight2}
            className={`relative text-sm font-semibold cursor-pointer ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            Team
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-navbarHeight2}
            className="flex items-center gap-2 text-white bg-[#5D17EB] hover:bg-[#5D17EB]  focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer dark:bg-[#5D17EB] dark:hover:bg-[#FF9141]    duration-300 ease-in-out font-bold"
          >
            <span>Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src="/logo.png" width={60} height={60} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  to="solutions"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Solutions
                </Link>
                <Link
                  to="team"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Team
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className=" -mx-3 cursor-pointer flex gap-2 items-center rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <span>Contact Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

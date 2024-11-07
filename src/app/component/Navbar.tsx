"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [header, setHeader] = useState(false)
  const scrollheader = () => {
    if (window.scrollY >= 3) {
      setHeader(true)
    }
    else{
      setHeader(false)
    }
  }
useEffect(() => {
 window.addEventListener("scroll", scrollheader);

 return () => {
   window.removeEventListener("scroll", scrollheader);
 };
}, [])

  return (
    <header
      className={
        header
          ? "fixed bg-white w-full transition-all duration-500 ease-in-out "
          : "bg-gray-800 "
      }
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="haleta logo"
              src="/logo.png"
              width={60}
              height={60}
              className="ml-10"
            />
          </a>
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
          <a
            href="#"
            className={`relative text-sm font-semibold ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </a>
          <a
            href="#"
            className={`relative text-sm font-semibold ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </a>
          <a
            href="#"
            className={`relative text-sm font-semibold ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            Services
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </a>
          <a
            href="#"
            className={`relative text-sm font-semibold ${
              header ? "text-gray-900" : "text-white"
            } group`}
          >
            Solutions
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FF9141] scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="text-white bg-[#5D17EB] hover:bg-[#5D17EB] focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#5D17EB] dark:hover:bg-[#FF9141]  hover:text-black focus:outline-none dark:focus:ring-blue-800 duration-300 ease-in-out font-bold"
          >
            Contact Us
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
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
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>{" "}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Solutions
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

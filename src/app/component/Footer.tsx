import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const Footer5 = () => {
  const anchorStyles =
    "text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80 cursor-pointer";
   const navbarHeight = 220; 

  return (
    <section className="py-12 bg-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <Image
              className="w-auto mx-auto h-10"
              src="/logo.png"
              alt="Aura UI Logo"
              height={500}
              width={500}
            />
            <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">
              © Copyright 2024 Bereket G.
            </p>
          </div>

          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                >
                  <span className={anchorStyles}>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                >
                  <span className={anchorStyles}>About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                >
                  <span className={anchorStyles}>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="solutions"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                >
                  <span className={anchorStyles}>Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="team"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                >
                  <span className={anchorStyles}>Team</span>
                </Link>
              </li>
            </ul>

            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

            <ul className="flex items-center justify-center space-x-8 xl:justify-end">
              <li>
                <a
                  href="mailto:haletamedical@gmail.com"
                  title="Gmail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/gmail.png" alt="gmail" width={30} height={10} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/haleta-medical-services/"
                  title="Linedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.png"
                    alt="gmail"
                    width={30}
                    height={10}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer5;

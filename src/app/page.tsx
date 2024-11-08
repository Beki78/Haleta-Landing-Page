"use client";

import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import About from "./component/About";
import Accordion from "./component/Accordion";
import Contact from "./component/Contact";
import Footer5 from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Solutions from "./component/Solutions";
import Team from "./component/Team";
import { DotLoader } from "react-spinners";
import FloatingIcon from "./component/FloatingIcon";
import { ToastContainer } from "react-toastify";

const Pages = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  return (
    <div>
      {loading && (
        <div
          className={`flex justify-center items-center min-h-screen bg-slate-100 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <DotLoader size={100} color={"#5D17EB"} />
        </div>
      )}
      {!loading && (
        <div className="overflow-x-hidden ">
          <Navbar />
          <Element name="home">
            <Hero />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="services">
            <Services />
          </Element>
          <Element name="solutions">
            <Solutions />
          </Element>
          <Element name="team">
            <Team />
          </Element>
          <Element name="accordion">
            <Accordion />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <Element name="footer">
            <Footer5 />
          </Element>
          <FloatingIcon />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Pages;

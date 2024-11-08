"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Haleta and how does it work?",
      answer:
        "Haleta is a comprehensive healthcare service platform designed to connect users with emergency transport services, health updates, and essential medical information. Through our easy-to-use mobile app, you can request medical transportation, receive notifications about health news, and access reliable healthcare services tailored to your needs.",
    },
    {
      question: "Who can use Haleta?",
      answer:
        "Haleta is available for anyone needing quick access to emergency medical transport, health updates, or assistance with non-emergency medical transportation (NEMT). Our services cater especially to families, elderly individuals, people with disabilities, and anyone seeking safe, reliable healthcare access.",
    },
    {
      question: "How can I request an emergency transport through Haleta?",
      answer:
        "Simply open the Haleta app, select the “Request Emergency Transport” option, and follow the prompts to confirm your location and transport requirements. We’ll immediately connect you with the nearest ambulance or medical transport provider.",
    },
    {
      question: "What types of transportation does Haleta offer?",
      answer:
        "Haleta offers a range of transportation options, including basic ambulances, advanced ambulances, VIP transport vehicles, and regular automobiles for non-emergency medical needs. We ensure that each option is equipped for safe and comfortable travel, tailored to your specific requirements.",
    },
    {
      question: "Is Haleta available 24/7?",
      answer:
        " Yes, Haleta is available 24/7 to ensure that you can access emergency medical transportation and support whenever you need it, day or night.",
    },
    {
      question: "How much does it cost to use Haleta’s services?",
      answer:
        "The cost varies based on the type of transportation or service needed. Our app provides a transparent pricing structure so you can see and understand any fees before you confirm a request.",
    },
    {
      question: "How do I get updates on health information through Haleta?",
      answer:
        "Our app provides a dedicated section for health updates, where you can read the latest health news, advisories, and information on preventative care. You can also opt-in to receive notifications about critical health updates.",
    },
    {
      question: "Can I use Haleta for scheduled medical appointments?",
      answer:
        "Yes, Haleta provides Non-Emergency Medical Transportation (NEMT) services, which allow you to schedule medical transport in advance for routine appointments, treatments, or check-ups.",
    },
    {
      question: "How do I get started with Haleta?",
      answer:
        "Getting started with Haleta is simple! Download our app from the App Store or Google Play, create a free account, and you’ll be ready to access all our services, from emergency transport to health information and more.",
    },
  ];

  return (
    <div>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>

          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-2">
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`faqs-text-${index}`}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className="fill-indigo-500 shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          expandedIndex === index ? "!rotate-180" : ""
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          expandedIndex === index ? "!rotate-180" : ""
                        }`}
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`faqs-text-${index}`}
                  role="region"
                  aria-labelledby={`faqs-title-${index}`}
                  className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-3">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accordion;

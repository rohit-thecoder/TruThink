"use client"
import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";



const ServiceFaqs = ({info = []}) => {
  const [openStates, setOpenStates] = useState(Array(info.length).fill(false));

  const toggleFaq = (index) => {
    const updatedStates = [...openStates];
    updatedStates[index] = !updatedStates[index];
    setOpenStates(updatedStates);
  };

    if (info.length === 0) {
      return null; // agar faq empty hai to kuch render mat kar
    }


  return (
    <section className="px-[clamp(1rem,5vw,5rem)] py-[clamp(2rem,10vw,5rem)]">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 py-2">
        <h2 className="w-fit text-2xl sm:text-4xl font-light text-white bg-[#2271B8] text-center mb-10 px-8 sm:px-6 md:px-8 py-2 rounded-full">
          FAQs
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black0 text-center mb-10 px-8 sm:px-6 md:px-8 py-2">
          Answers to your questions
        </h3>

        <div className=" max-w-screen-xl mx-auto">
          {info.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg mb-5 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium text-base md:text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`transition-transform duration-300 ${
                    openStates[index] ? "rotate-90 text-[#f6921e]" : "rotate-0"
                  }`}
                >
                  {openStates[index] ? <FaTimes /> : <FaPlus />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openStates[index]
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 py-4 text-gray-700 text-sm md:text-base whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaqs;

// components/FAQ.jsx
// 'use client' zaroori hai kyunki hum useState ka upyog kar rahe hain
"use client";

import { useState } from "react";


export default function ResourcesFaq({info= []}) {
  // 2. State to track which FAQ is open
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // Pehla wala default mein khula hai

  const handleToggle = (index) => {
    // Agar pehle se khula hai, toh use band karo (null),
    // varna naye index ko open karo
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className=" px-2 md:px-[clamp(1rem,10vw,10rem)] py-[clamp(2rem,10vw,5rem)]">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 py-2">
        <h2 className="w-fit  text-2xl sm:text-4xl font-light text-white bg-[#2271B8] text-center mb-10 px-8 sm:px-6 md:px-8 py-2 rounded-full">
          FAQs
        </h2>
        {/* <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black0 text-center mb-10 px-8 sm:px-6 md:px-8 py-2">
          Answers to your questions
        </h3> */}

        {/* FAQ Accordion Container */}
        <div className="bg-[#fffdf7] rounded-3xl p-6 md:p-10 shadow-sm">
          {/* 3. Divide-y se har item ke beech mein line aa jayegi */}
          <div className="divide-y divide-blue-300">
            {info.map((faq, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0" // Pehle aur aakhri item se extra padding hatayi
              >
                {/* Question / Clickable Toggle */}
                <button
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  {/* 4. '+' aur '−' (minus sign) ke beech toggle */}
                  <span className="text-3xl text-blue-600 font-light ml-4">
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer (Smooth transition ke saath) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      openFaqIndex === index
                        ? "max-h-[500px] opacity-100 pt-6" // Open state
                        : "max-h-0 opacity-0 pt-0" // Closed state
                    }
                  `}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
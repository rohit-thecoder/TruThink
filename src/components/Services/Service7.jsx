// components/FAQ.jsx
// 'use client' zaroori hai kyunki hum useState ka upyog kar rahe hain
"use client";

import { useState } from "react";

// 1. Sample FAQ data (Aap ise baad mein badal sakte hain)
const faqs = [
  {
    question:
      "When is the best time to start working with an accounting/finance firm like Graphite?",
    answer:
      "In reality, the second you start developing your product and spending money is when you need to start keeping clean books. There are always inflection points (for example a company raising money and investors needing them to provide clean financials, or a bank requiring GAAP compliant financials in order to provide a loan) where you don’t want to be scrambling to get those things together.",
  },
  {
    question: "What is GAAP and why does it matter for my startup?",
    answer:
      "GAAP (Generally Accepted Accounting Principles) is a common set of accounting rules and standards. Following GAAP ensures your financial statements are consistent, comparable, and reliable. This is crucial when you seek funding from investors or apply for loans, as they expect financials that are accurate and easy to understand.",
  },
  {
    question: "How much do your startup accounting services cost?",
    answer:
      "Our pricing is tailored to the specific needs and stage of your startup. We offer flexible packages that can scale with your business, from basic bookkeeping to a fully outsourced finance department. Contact us for a proposal, and we can provide a clear quote based on your requirements.",
  },
  {
    question: "What's the difference between bookkeeping and accounting?",
    answer:
      "Think of bookkeeping as the daily recording of financial transactions (logging invoices, paying bills). Accounting is the bigger picture—it involves interpreting that data, preparing financial statements, analyzing your financial health, and providing strategic advice to help your business grow.",
  },
];

export default function Service7() {
  // 2. State to track which FAQ is open
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // Pehla wala default mein khula hai

  const handleToggle = (index) => {
    // Agar pehle se khula hai, toh use band karo (null),
    // varna naye index ko open karo
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className=" py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="bg-[#1C64F2] text-white text-2xl font-medium rounded-full px-6 py-4 mb-2">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-5">
            Answers to your questions
          </h2>
        </div>

        {/* FAQ Accordion Container */}
        <div className="bg-[#F1F9FF] rounded-3xl p-6 md:p-10 shadow-sm">
          {/* 3. Divide-y se har item ke beech mein line aa jayegi */}
          <div className="divide-y divide-blue-300">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0" // Pehle aur aakhri item se extra padding hatayi
              >
                {/* Question / Clickable Toggle */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full text-left"
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

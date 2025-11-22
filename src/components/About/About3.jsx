"use client";
import Image from "next/image";
import { useState } from "react";
import { Linkedin } from "lucide-react"; // ✅ LinkedIn Icon

const team = [
  {
    name: "Venkatesh R",
    role: "Co Founder",
    linkedin:
      "https://www.linkedin.com/in/venkatesh-r-1136b2189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnpVZZnyyTZ%2BUIpgmrdGWlQ%3D%3D", // 🔗 Add your actual LinkedIn link
    desc: "A finance professional with 6+ years of experience a sharp eye for both detail and direction, Venkatesh brings a rare mix of tax expertise, operational leadership, and startup experience to Truthink. He started his career with PwC, where he worked in the taxation division, handling complex direct and indirect tax matters for diverse clients. Eager to move closer to the business side of finance, he went on to lead the finance and accounting function at Geeklurn, a fast-growing startup, where he built strong financial controls and streamlined reporting from the ground up. Later, as Chief of Staff – Operations at a boutique consulting firm, he worked directly with the founder on strategy, operations, and client delivery — strengthening his understanding of how businesses scale efficiently. With deep skills across finance controllership, taxation, startup advisory, strategy, and valuation, he now uses his experience to help companies bring structure, insight, and foresight to their financial decisions. At Truthink, he anchors the firm’s commitment to precision, practicality, and purpose-driven growth.",
    image:
      "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
  },
  {
    name: "Kanhaiya Bharti",
    role: "Co Founder",
    linkedin:
      "https://www.linkedin.com/in/kbharti95?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTXYSxyCKSxy5%2FqIrasyNRQ%3D%3D ", // 🔗 Add your actual LinkedIn link
    desc: "Chartered Accountant by profession and a problem-solver by instinct with 4+ years of experience, Kanhaiya brings a rare blend of big-firm experience and startup agility to Truthink. He began his career with Deloitte, where he worked on the audits of a few S&P 500 companies, before moving to a boutique consulting firm to work more closely with founders and businesses. There, he helped tech and manufacturing startups build their finance functions from scratch — from setting up systems to managing end-to-end financial operations. He also led an Accounts Payable team in India catering to an Australian MNC, where his work delivered tangible cash flow improvements and operational efficiency. Over time, he has valued multiple startups across industries using different valuation approaches, engaging with founders, analysing pitch decks, and providing actionable feedback that drives better financial decisions. At Truthink, he brings all of this together — turning financial data into direction, and helping businesses grow with clarity and confidence.",
    image:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
  },
];

export default function About3() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="min-h-screen flex items-center justify-center  py-16">
      <div className="w-full max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-black0">
          Meet The Founders
          <div className="w-24 h-[3px] bg-black mx-auto mt-3 mb-12 rounded-full"></div>
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col items-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-xl cursor-pointer  rounded-2xl p-4"
            >
              {/* Image Section */}
              <div className="relative w-[260px] aspect-[4/5]  rounded-xl overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={260}
                  height={325}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />

                {/* Fading Grid Overlay (top-right corner) */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                  <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[length:20px_20px] opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>

              {/* Name + Role + LinkedIn */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-orange-500">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>

                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin size={22} />
                </a>
              </div>

              {/* Description (expands on hover) */}
              <div
                className={`transition-all duration-500 ${
                  hovered === index
                    ? "max-h-[900px] opacity-100 mt-3 bg-blue-50 p-3 rounded-xl"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-700 text-sm text-justify leading-relaxed max-w-[440px] mx-auto">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

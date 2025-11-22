"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const IndustriesCard = ({ title, description, href = "#" }) => {
  return (
    <div className="bg-[#5ea0ef] px-7 py-12 flex flex-col  items-start min-h-[300px] relative text-black0 shadow-md rounded-xl md:rounded-2xl w-full text-center hover:shadow-lg transition-shadow duration-300 h-full gap-6 ">
      <Image
        src="/—Pngtree—grid diary_5623144.png"
        height={500}
        width={600}
        alt="Grid overlay"
        className="absolute top-0 right-0 w-full md:w-full h-1/2 md:h-full object-cover  
              [mask-image:linear-gradient(to_bottom,black_0%,transparent),linear-gradient(to_left,black_0%,transparent)] 
              [mask-composite:intersect] [-webkit-mask-composite:destination-in]
       opacity-30 md:opacity-60"
      />
      {/* Top Section */}
      <div className="relative">
        <h3 className="text-[32px] z-2 sm:text-4xl font-semibold text-white text-start md:min-h-[50px]">
          {title}
        </h3>
      </div>
      {/* Bottom White Section */}

      <p className="relative z-2 self-start text-[18px] text-slate-100 leading-relaxed md:min-h-[80px]  text-start">
        {description}
      </p>
      {/* ✅ Navigation Button */}
      <Link href="/contact" className="block mt-auto">
        <button className="group relative z-2 cursor-pointer  mt-auto text-left text-white font-semibold uppercase  rounded-lg transition-all duration-300 flex items-center gap-2 ">
          {title}
          <FaArrowRightLong className="transition-transform duration-800 text-white ease-in-out group-hover:translate-x-9 " />
        </button>
      </Link>
    </div>
  );
};

export default IndustriesCard;
// text-[#0f172a]  text-[#1e293b]

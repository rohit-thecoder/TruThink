"use client";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import React, { useState } from "react";
import Link from "next/link";


const CtaButton = ({ text = "BOOK A CALL", href = "#" }) => {
   const [widthFull, setWidthFull] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setWidthFull(true)}
      onMouseLeave={() => setWidthFull(false)}
      className={`group inline-flex items-center justify-center bg-[#2271B8] gap-3 w-full  pr-6 rounded-full overflow-hidden 
        `}
    >
      {/* Text area */}
      <span
        className={`px-6   py-3 rounded-full text-white text-sm md:text-lg font-semibold transition-all duration-300  ${
          widthFull ? "bg-[#2271B8]" : " bg-[#97CEFF99]"
        }`}
      >
        {text}
      </span>

      {/* Arrow */}
      <HiOutlineArrowNarrowRight className="w-9 h-9 text-white transition-transform duration-300 group-hover:translate-x-2" />
    </Link>
  );
};

export default CtaButton;

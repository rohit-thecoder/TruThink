"use client";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import React from "react";
import Link from "next/link";

const CtaButton = ({ text = "BOOK A CALL", href = "#" }) => {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-3 w-fit bg-[#2271B8] pr-6 rounded-2xl overflow-hidden transition-transform duration-300 "
    >
      {/* Text area */}
      <span className="bg-[#97CEFF99] px-6 py-3 rounded-2xl text-white text-[clamp(1rem,3vw,1.25rem)] font-medium">
        {text}
      </span>

      {/* Arrow */}
      <HiOutlineArrowNarrowRight className="w-9 h-9 text-white transition-transform duration-300 group-hover:translate-x-2" />
    </Link>
  );
};

export default CtaButton;

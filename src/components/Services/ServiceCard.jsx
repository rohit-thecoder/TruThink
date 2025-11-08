import React from "react";
import Link from "next/link";


const ServiceCard = ({ title, description, href="#" }) => {
  return (
    <div className="bg-blue0 flex flex-col  text-black0 shadow-md rounded-2xl md:rounded-4xl w-full text-center hover:shadow-lg transition-shadow duration-300 h-full border-1 border-[#97CEFF] glex-grow ">
      {/* Top Section */}
      <div className="px-7 py-12">
        <h3 className="text-[32px] sm:text-4xl font-semibold text-black0 text-start ">
          {title}
        </h3>
      </div>
      {/* Bottom White Section */}
      <div className="bg-white flex flex-col items-center justify-between px-7 py-12 flex-grow rounded-2xl md:rounded-4xl border-1 border-[#97CEFF] gap-9  ">
        <p className="text-[18px] text-[#4b5563] leading-relaxed mb-10 text-start">
          {description}
        </p>
        {/* ✅ Navigation Button */}
        <Link
          href={href}
          className="bg-[#2271B8] text-white font-medium px-6 py-3 rounded-full text-[clamp(1.1rem,2vw,1.3rem)] hover:bg-[#6db9ff] transition-all duration-300"
        >
          Request for Proposal
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

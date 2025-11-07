import React from "react";
import Link from "next/link";


const ServiceCard = ({ title, description, href="#" }) => {
  return (
    <div className="bg-blue0 flex flex-col  text-black0 shadow-md rounded-2xl md:rounded-4xl  max-w-sm text-center hover:shadow-lg transition-shadow duration-300 h-full border-1 border-[#97CEFF] glex-grow">
      {/* Top Section */}
      <div className="p-[clamp(1rem,2vw,1.5rem)]">
        <h3 className="text-lg sm:text-4xl font-semibold text-black0 text-center ">
          {title}
        </h3>
      </div>
      {/* Bottom White Section */}
      <div className="bg-white flex flex-col items-center justify-between p-[clamp(1rem,2vw,1.5rem)] flex-grow rounded-2xl md:rounded-4xl border-1 border-[#97CEFF]">
        <p className="text-lg sm:text-base text-gray-700 leading-relaxed mb-10 text-center ">
          {description}
        </p>
        {/* ✅ Navigation Button */}
        <Link
          href={href}
          className="bg-[#2271B8] text-white font-medium px-4 py-2 rounded-xl text-[clamp(1.3rem,2vw,1.5rem)] hover:bg-[#6db9ff] transition-all duration-300"
        >
          Request for Proposal
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

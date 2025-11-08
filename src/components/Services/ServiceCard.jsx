import React from "react";
import Link from "next/link";


const ServiceCard = ({ title, description, href="#" }) => {
  return (
    <div className="bg-[#f1f9ff] px-7 py-12 flex flex-col flex-grow justify-between text-black0 shadow-md rounded-xl md:rounded-2xl w-full text-center hover:shadow-lg transition-shadow duration-300 h-full gap-6 ">
      {/* Top Section */}
      <div className="">
        <h3 className="text-[32px] sm:text-4xl font-semibold text-black0 text-start ">
          {title}
        </h3>
      </div>
      {/* Bottom White Section */}

      <p className="text-[18px] text-[#4b5563] leading-relaxed mb-10 flex-grow  text-start">
        {description}
      </p>
      {/* ✅ Navigation Button */}
      <Link
        href={href}
        className="bg-[#2271B8] text-white font-medium px-6 py-3 mt-auto rounded-full text-[clamp(1.1rem,2vw,1.3rem)] hover:bg-[#6db9ff] transition-all duration-300"
      >
        Request for Proposal
      </Link>
    </div>
  );
};

export default ServiceCard;

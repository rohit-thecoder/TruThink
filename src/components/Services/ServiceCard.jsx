// "use client"
// import React from "react";
// import Link from "next/link";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Image from "next/image";


// const ServiceCard = ({ title, description, href="#" }) => {
//   return (
//     <div className="bg-[#5ea0ef] px-7 py-12 flex flex-col  items-start min-h-[300px] relative text-black0 shadow-md rounded-xl md:rounded-2xl w-full text-center hover:shadow-lg transition-shadow duration-300 h-full gap-6 ">
//       <Image
//         src="/—Pngtree—grid diary_5623144.png"
//         height={500}
//         width={500}
//         alt="Grid overlay"
//         className="absolute top-0 right-0 w-full md:w-full h-1/2 md:h-full object-cover  
//               [mask-image:linear-gradient(to_bottom,black_0%,transparent),linear-gradient(to_left,black_0%,transparent)] 
//               [mask-composite:intersect] [-webkit-mask-composite:destination-in]
//        opacity-30 md:opacity-60"
//       />
//       {/* Top Section */}
//       <div className="relative">
//         <h3 className="text-[32px] z-2 sm:text-4xl font-semibold text-white text-start md:min-h-[100px]">
//           {title}
//         </h3>
//       </div>
//       {/* Bottom White Section */}

//       <p className="relative z-2 self-start text-[18px] text-slate-100 leading-relaxed md:min-h-[200px]  text-start">
//         {description}
//       </p>
//       {/* ✅ Navigation Button */}
//       <Link href="/contact" className="block mt-auto">
//         <button className="group relative z-2 cursor-pointer  mt-auto text-white font-semibold uppercase  rounded-lg transition-all duration-300 flex items-start text-start gap-2 ">
//           {title}
//           <FaArrowRightLong className="transition-transform duration-800 text-white ease-in-out group-hover:translate-x-9 " />
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default ServiceCard;
// // text-[#0f172a]  text-[#1e293b] 


"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react"; // Professional Icons

const ServiceCard = ({ title, description, href = "/contact" }) => {
  return (
    <div className=" flex flex-col h-full justify-between px-6 py-8 sm:px-8 z-10 relative group/card">
      
      {/* --- TOP SECTION --- */}
      <div className="space-y-6">
        
        {/* Icon Box - Animates on Hover */}
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2271B8] shadow-sm transition-all duration-500 group-hover/card:bg-[#0f172a] group-hover/card:border-[#0f172a] group-hover/card:scale-110">
           <Layers size={28} className="transition-colors duration-500 group-hover/card:text-[#F99321]" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] tracking-tight group-hover/card:text-[#2271B8] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* --- BOTTOM SECTION (BUTTON) --- */}
      <div className="mt-10">
        <Link href={href} className="inline-flex items-center gap-3 group/btn cursor-pointer">
          
          {/* Animated Text (Slide Up Effect) */}
          <div className="relative overflow-hidden h-6">
             <span className="block text-sm font-bold text-[#0f172a] uppercase tracking-widest transition-transform duration-300 group-hover/btn:-translate-y-full">
               Explore Service
             </span>
             <span className="absolute top-0 left-0 block text-sm font-bold text-[#F99321] uppercase tracking-widest transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0">
               Explore Service
             </span>
          </div>

          {/* Animated Arrow */}
          <div className="p-1.5 rounded-full bg-transparent group-hover/btn:bg-[#F99321]/10 transition-colors">
            <ArrowRight size={18} className="text-[#0f172a] transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-[#F99321]" />
          </div>

        </Link>
      </div>

    </div>
  );
};

export default ServiceCard;
// "use client";
// import React from "react";
// import Link from "next/link";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Image from "next/image";

// const IndustriesCard = ({ title, description, href = "#" }) => {
//   return (
//     <div className="bg-[#5ea0ef] px-7 md:pr-40 py-12 flex flex-col  items-start min-h-[300px] relative text-black0 shadow-md rounded-xl md:rounded-2xl w-full text-center hover:shadow-lg transition-shadow duration-300 h-full gap-6 ">
//       <Image
//         src="/—Pngtree—grid diary_5623144.png"
//         height={500}
//         width={600}
//         alt="Grid overlay"
//         className="absolute top-0 right-0 w-full md:w-full h-1/2 md:h-full object-cover  
//               [mask-image:linear-gradient(to_bottom,black_0%,transparent),linear-gradient(to_left,black_0%,transparent)] 
//               [mask-composite:intersect] [-webkit-mask-composite:destination-in]
//        opacity-30 md:opacity-60"
//       />
//       {/* Top Section */}
//       <div className="relative">
//         <h3 className="text-[32px] z-2 sm:text-4xl font-semibold text-white text-start md:min-h-[70px]">
//           {title}
//         </h3>
//       </div>
//       {/* Bottom White Section */}

//       <p className="relative z-2 self-start text-[18px] text-slate-100 leading-relaxed md:min-h-[80px]  text-start">
//         {description}
//       </p>
//       {/* ✅ Navigation Button */}
//       <Link href="/contact" className="block mt-auto">
//         <button className="group relative z-2 cursor-pointer  mt-auto text-left text-white font-semibold uppercase  rounded-lg transition-all duration-300 flex items-center gap-2 ">
//           {title}
//           <FaArrowRightLong className="transition-transform duration-800 text-white ease-in-out group-hover:translate-x-9 " />
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default IndustriesCard;
// // text-[#0f172a]  text-[#1e293b]

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Building2 } from "lucide-react"; // Default icon
import gsap from "gsap";

const IndustriesCard = ({ title, description, href = "/contact", icon }) => {
  const cardRef = useRef(null);
  const arrowRef = useRef(null);
  const borderRef = useRef(null);
  const iconRef = useRef(null);
  const gridRef = useRef(null);

  // GSAP Hover Effects
  const handleMouseEnter = () => {
    const ctx = gsap.context(() => {
      // 1. Lift Card
      gsap.to(cardRef.current, { y: -10, duration: 0.5, ease: "power2.out" });
      
      // 2. Crawl Arrow
      gsap.to(arrowRef.current, { x: 8, duration: 0.3, ease: "back.out(2)" });
      
      // 3. Border Glow Reveal
      gsap.to(borderRef.current, { opacity: 1, duration: 0.4 });

      // 4. Icon Animation (Pop & Tilt)
      gsap.to(iconRef.current, { scale: 1.1, rotation: 5, backgroundColor: "#2271B8", color: "#ffffff", duration: 0.4 });

      // 5. Parallax Grid
      gsap.to(gridRef.current, { y: -15, duration: 0.8, ease: "power1.out" });

    }, cardRef);
    return () => ctx.revert();
  };

  const handleMouseLeave = () => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
      gsap.to(arrowRef.current, { x: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(borderRef.current, { opacity: 0, duration: 0.4 });
      
      // Reset Icon
      gsap.to(iconRef.current, { scale: 1, rotation: 0, backgroundColor: "rgba(34, 113, 184, 0.1)", color: "#2271B8", duration: 0.4 });
      
      // Reset Grid
      gsap.to(gridRef.current, { y: 0, duration: 0.8, ease: "power1.out" });
    }, cardRef);
    return () => ctx.revert();
  };

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full h-full min-h-[380px] rounded-[2rem] bg-white shadow-[0_10px_40px_-10px_rgba(34,113,184,0.1)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-10px_rgba(34,113,184,0.2)] overflow-hidden flex flex-col"
    >
      
      {/* 1. Animated Gradient Border (Blue/Orange Blend) */}
      <div 
        ref={borderRef} 
        className="absolute inset-0 p-[2px] rounded-[2rem] bg-gradient-to-br from-[#2271B8] via-[#8EC5FF] to-[#F99321] opacity-0 transition-opacity duration-300 pointer-events-none" 
        style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor" }}
      />

      {/* 2. Main Background (Richer Whitish Blue) */}
      {/* Changed gradient to be slightly deeper blue at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f7ff] to-[#cfe5ff]"></div>

      {/* 3. Technical Grid (High to Low Opacity + Parallax) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
            ref={gridRef}
            className="absolute inset-[-20px] bg-[linear-gradient(to_right,#2271B81a_1px,transparent_1px),linear-gradient(to_bottom,#2271B81a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_60%)]"
        ></div>
      </div>

      {/* 4. Decorative Orbs */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F99321]/10 rounded-full blur-[60px] transition-all duration-500 group-hover:bg-[#F99321]/20"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#2271B8]/10 rounded-full blur-[60px] transition-all duration-500 group-hover:bg-[#2271B8]/15"></div>


      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
        
        {/* --- ICON HEADER --- */}
        <div className="mb-8 flex justify-between items-start">
            {/* Main Icon Box */}
            <div 
                ref={iconRef}
                className="w-16 h-16 rounded-2xl bg-[#2271B8]/10 flex items-center justify-center text-[#2271B8] shadow-sm backdrop-blur-sm border border-[#2271B8]/20"
            >
                {/* Check if icon prop exists, else use default */}
                {icon ? icon : <Building2 size={32} strokeWidth={1.5} />}
            </div>

            {/* Orange Line Indicator */}
            <div className="w-12 h-1.5 bg-[#F99321] rounded-full mt-2 group-hover:w-20 transition-all duration-500 shadow-sm"></div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="flex-grow">
            {/* Title */}
            <h3 className="text-3xl md:text-[32px] font-bold text-[#0f172a] mb-4 leading-tight group-hover:text-[#2271B8] transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-base md:text-[17px] text-slate-500 leading-relaxed font-medium">
              {description}
            </p>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-8 pt-6 border-t border-[#2271B8]/10">
            <Link href={href} className="inline-block w-full">
              <button className="flex items-center justify-between w-full group/btn">
                <span className="text-sm font-bold uppercase tracking-widest text-[#0f172a] group-hover:text-[#2271B8] transition-colors">
                    {title}
                </span>
                
                {/* Animated Arrow Circle */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white/80 shadow-sm transition-all duration-300 group-hover:border-[#2271B8] group-hover:bg-[#2271B8] group-hover:shadow-md">
                   <span ref={arrowRef} className="text-[#2271B8] group-hover:text-white transition-colors duration-300">
                      <FaArrowRightLong size={16} />
                   </span>
                </div>
              </button>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default IndustriesCard;
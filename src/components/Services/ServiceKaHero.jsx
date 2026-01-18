// import Image from 'next/image'
// import React from 'react'
// import CtaButton from '../CtaButton';
// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from 'next/link';


// const ServiceKaHero = ({info}) => {
//   return (
//     <section className="  flex justify-center px-5 py-16 md:pl-5 md:py-32  xl:ml-[clamp(0px,5vw,160px)]  mt-[clamp(0.5rem,5vw,1rem)]">
//       <Image
//         src="/pngtree_13534322.png"
//         height={2000}
//         width={2000}
//         alt="Grid overlay"
//         className="absolute top-0 left-0 w-full md:w-1/2 h-2/3 md:h-full object-cover md:object-contain  
//         md:[mask-image:linear-gradient(to_bottom,black_40%,transparent),linear-gradient(to_right,black_30%,transparent)] 
//         [mask-composite:intersect] [-webkit-mask-composite:destination-in]
//  opacity-30 md:opacity-50"
//       />

//       <div className="w-full max-w-7xl  md:h-[75vh] flex flex-col gap-0 md:gap-20 md:flex-row  items-center justify-center  md:items-start    rounded-2xl ">
//         {/* Text Content  */}
//         <div className="flex flex-col text-black0 items-center md:items-start w-full flex-3 gap-[clamp(1.5rem,2vw,3.5rem)] py-[clamp(2rem,5vw,10rem)] px-[clamp(1rem,2vw,3rem)]">
//           <h1 className="text-black0 z-2 text-[36px] md:text-[45px] font-medium text-start">
//             {info?.title}
//           </h1>
//           <p className="text-[18px] z-2  text-start">
//             {info?.description}
//           </p>

//           <div className="flex justify-center">
//             <CtaButton className="" />
//           </div>
//         </div>
//         {/* Image  */}
//         <div className="relative flex w-full h-full  flex-2 rounded-2xl ">
//           <Image
//             src={info?.src}
//             alt={
//               info?.title
//                 ? `${info.title} - Truthink Consulting`
//                 : "Service hero section image"
//             }
//             height={600}
//             width={800}
//             className="object-cover object-center rounded-lg "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServiceKaHero

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import CtaButton from "../CtaButton";

const ServiceKaHero = ({ info }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const fullText = info?.description || "We provide top-tier consulting solutions designed to scale your operations and optimize financial performance with precision.";
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Initial Set to prevent FOUC (Flash of Unstyled Content)
      gsap.set(".hero-bg-layer", { opacity: 0, scale: 1.1 });
      gsap.set(".hero-content-item", { y: 40, opacity: 0 });
      gsap.set(".hero-image-wrapper", { x: 60, opacity: 0, scale: 0.95, rotationY: 5 });
      

      // 2. Background Elements Fade In
      tl.to(".hero-bg-layer", 
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
      );

      // 3. Text Content Stagger (Up & Fade)
      tl.to(".hero-content-item", 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }, 
        "-=1.5" // Start overlap with background
      );
      // 4. Image Reveal (Slide & Fade from Right with slight rotation reset)
      tl.to(".hero-image-wrapper", 
        { x: 0, opacity: 1, scale: 1, rotationY: 0, duration: 1.5, ease: "expo.out" }, 
        "-=1"
      );
      // 3. TYPEWRITER EFFECT (The Magic Part ✨)
      tl.to({}, {
        duration: 8, // Adjust speed of typing here
        ease: "none",
        onUpdate: function() {
          // Calculate how many characters to show based on progress
          const progress = this.progress();
          const charCount = Math.floor(progress * fullText.length);
          if (textRef.current) {
            textRef.current.innerText = fullText.substring(0, charCount);
          }
        },
        onComplete: () => {
           // Optional: Remove cursor or keep blinking
           gsap.to(".type-cursor", { opacity: 0, duration: 0.5 });
        }
      }, "-=0.5"); // Starts slightly before title finishes

      

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-36 pb-20 px-6 md:px-12 lg:px-20 "
    >
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Grid Pattern (Slate Gray for visibility on off-white) */}
      <div className="hero-bg-layer absolute inset-0 pointer-events-none -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b1a_1px,transparent_1px),linear-gradient(to_bottom,#64748b1a_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_85%)]"></div>
      </div>

      {/* 2. Premium Glowing Orbs */}
      {/* Blue Orb (Top Left) */}
      <div className="hero-bg-layer absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-[#3b82f6]/10 rounded-full blur-[120px] -z-15 mix-blend-multiply will-change-transform"></div>
      {/* Orange Orb (Bottom Right) */}
      <div className="hero-bg-layer absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#f97318]/15 rounded-full blur-[100px] -z-15 mix-blend-multiply will-change-transform"></div>
       
      {/* Optional Subtle Noise Texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          
          {/* Badge */}
          <div className="hero-content-item inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 rounded-full shadow-sm">
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
             <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Premium Services</span>
          </div>

          {/* Heading */}
          <h1 className="hero-content-item text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
            {info?.title || "Elevate Your Business Strategy"}
          </h1>

          {/* Description */}
          <div className="min-h-[80px]  relative">
            <p className="text-lg text-gray-600 leading-relaxed font-medium inline">
              <span ref={textRef}></span>
              {/* Blinking Cursor */}
              <span className="type-cursor inline-block w-[3px] h-[1.2em] bg-[#F99321] ml-1 align-middle animate-pulse"></span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="hero-content-item pt-4">
            <CtaButton />
          </div>
        </div>

        {/* --- RIGHT: HERO IMAGE --- */}
        <div className="hero-image-wrapper w-full lg:w-1/2 relative perspective-1000">
          <div className="relative rounded-[32px] overflow-hidden border-[6px] border-white shadow-2xl shadow-blue-900/10 aspect-[4/3] group bg-white">
            {/* Image */}
            <Image
              src={info?.src || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"}
              alt={info?.title ? `${info.title} - Truthink Consulting` : "Service Hero"}
              fill
              priority
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            
            {/* Subtle Gradient Overlay on Image for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/10 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Decorative Float Element Behind Image */}
          <div className="hero-bg-layer absolute -bottom-8 -right-8 w-32 h-32 border-2 border-orange-200/50 rounded-full opacity-60 -z-10 animate-spin-slow pointer-events-none"></div>
           <div className="hero-bg-layer absolute -top-8 -left-8 w-20 h-20 bg-blue-100/50 rounded-full blur-xl -z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}

export default ServiceKaHero;
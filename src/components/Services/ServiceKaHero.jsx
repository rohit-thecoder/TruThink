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
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CtaButton from "../CtaButton";

const ServiceKaHero = ({ info }) => {
  const fullText = info?.description || "We provide top-tier consulting solutions designed to scale your operations and optimize financial performance with precision.";
  
  // --- TYPEWRITER LOGIC (Framer Motion Style) ---
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => fullText.slice(0, latest));

  useEffect(() => {
    // Animate the count from 0 to text length over 6 seconds (adjusted for readability)
    const controls = animate(count, fullText.length, {
      type: "tween",
      duration: 6, 
      ease: "linear",
      delay: 1.5 // Wait for other animations to start
    });
    return controls.stop;
  }, [fullText]);


  // --- ANIMATION VARIANTS ---

  // 1. Background Elements (Fade In & Scale)
  const bgVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  // 2. Text Items (Slide Up)
  const contentContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5 // Start after background settles a bit
      }
    }
  };

  const contentItemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // 3. Image Reveal (Slide from right, Scale, Rotate)
  const imageVariants = {
    hidden: { x: 60, opacity: 0, scale: 0.95, rotateY: 5 },
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 } // Custom ease "expo.out" equivalent
    }
  };

  return (
    <section 
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-36 pb-20 px-6 md:px-12 lg:px-20"
    >
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Grid Pattern */}
      <motion.div 
        className="hero-bg-layer absolute inset-0 pointer-events-none -z-20"
        initial="hidden" animate="visible" variants={bgVariants}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b1a_1px,transparent_1px),linear-gradient(to_bottom,#64748b1a_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_85%)]"></div>
      </motion.div>

      {/* 2. Premium Glowing Orbs */}
      <motion.div 
        className="hero-bg-layer absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-[#3b82f6]/10 rounded-full blur-[120px] -z-15 mix-blend-multiply will-change-transform"
        initial="hidden" animate="visible" variants={bgVariants}
      ></motion.div>
      
      <motion.div 
        className="hero-bg-layer absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#f97318]/15 rounded-full blur-[100px] -z-15 mix-blend-multiply will-change-transform"
        initial="hidden" animate="visible" variants={bgVariants}
      ></motion.div>
        
      {/* Optional Subtle Noise Texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          initial="hidden"
          animate="visible"
          variants={contentContainerVariants}
        >
          
          {/* Badge */}
          <motion.div variants={contentItemVariants} className="hero-content-item inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Premium Services</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={contentItemVariants} className="hero-content-item text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
            {info?.title || "Elevate Your Business Strategy"}
          </motion.h1>

          {/* Description (Typewriter) */}
          <motion.div variants={contentItemVariants} className="min-h-[80px] relative">
            <p className="text-lg text-gray-600 leading-relaxed font-medium inline">
              {/* Typewriter Text */}
              <motion.span>{displayText}</motion.span>
              
              {/* Blinking Cursor */}
              <motion.span 
                className="type-cursor inline-block w-[3px] h-[1.2em] bg-[#F99321] ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              ></motion.span>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={contentItemVariants} className="hero-content-item pt-4">
            <CtaButton />
          </motion.div>
        </motion.div>

        {/* --- RIGHT: HERO IMAGE --- */}
        <motion.div 
          className="hero-image-wrapper w-full lg:w-1/2 relative perspective-1000"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
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
        </motion.div>

      </div>
    </section>
  );
}

export default ServiceKaHero;
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import IndustryCta from "../IndustryCta"; 
import { Layers } from "lucide-react";

const IndustriesHero = ({ info }) => {
  // Default title fallback
  const fullTitle = info?.title || "Transforming Industries.";

  // --- TYPEWRITER LOGIC (Framer Motion) ---
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => fullTitle.slice(0, latest));

  useEffect(() => {
    // Duration 4s as per your GSAP code
    const controls = animate(count, fullTitle.length, {
      type: "tween",
      duration: 4,
      ease: "linear",
      delay: 0.5 // Slight delay after badge appears
    });
    return controls.stop;
  }, [fullTitle]);


  // --- VARIANTS ---

  // 1. Background Grid Fade
  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1 } 
    }
  };

  // 2. Content Stagger (Badge -> Text -> CTA)
  const leftContentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemFadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // 3. Image Grid Stagger
  // Note: Started shortly after typing starts (approx 0.5s delay) to match GSAP's "-=3.5" offset logic
  const imageGridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5 // Start revealing images while typing
      }
    }
  };

  const imageItemVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 30 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } // Custom "expo.out" ease
    }
  };

  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-5 md:px-10 lg:px-20 pt-20 pb-10"
    >
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Technical Grid */}
      <motion.div 
        className="hero-grid-bg absolute inset-0 pointer-events-none -z-20"
        initial="hidden" animate="visible" variants={bgVariants}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_80%)]"></div>
      </motion.div>

      {/* 2. Premium Ambient Glows */}
      <motion.div initial="hidden" animate="visible" variants={bgVariants} className="hero-grid-bg absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[120px] -z-15 mix-blend-multiply"></motion.div>
      <motion.div initial="hidden" animate="visible" variants={bgVariants} className="hero-grid-bg absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] -z-15 mix-blend-multiply"></motion.div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 z-10"
          initial="hidden"
          animate="visible"
          variants={leftContentVariants}
        >
          
          {/* Badge */}
          <motion.div variants={itemFadeUpVariants} className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
              <Layers size={14} className="text-[#F99321]" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industry Expertise</span>
          </motion.div>

          {/* H1 Heading with Typewriter */}
          <div className="min-h-[120px] md:min-h-[160px]"> 
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
                {/* Text Span */}
                <motion.span>{displayText}</motion.span>
                {/* Cursor Span */}
                <span className="inline-block w-[3px] h-[0.9em] bg-[#F99321] ml-1 align-baseline animate-pulse"></span>
            </h1>
          </div>

          {/* Description */}
          <motion.p 
            variants={itemFadeUpVariants} 
            className="hero-fade-item text-lg text-slate-600 leading-relaxed font-medium max-w-lg"
          >
            {info?.description || "We bring specialized consulting strategies to scalable sectors, ensuring your business stays ahead of the curve."}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemFadeUpVariants} className="hero-fade-item pt-2">
            <IndustryCta text="Let's Talk" />
          </motion.div>
        </motion.div>


        {/* --- RIGHT: BENTO GRID IMAGES --- */}
        <div className="flex-1 w-full h-auto md:h-[500px] relative">
            
            {/* Grid Layout */}
            <motion.div 
              className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-full w-full min-h-[350px] sm:min-h-[450px]"
              initial="hidden"
              animate="visible"
              variants={imageGridVariants}
            >
    
                {/* 1. BIG IMAGE (Left Column) */}
                <motion.div variants={imageItemVariants} className="hero-img-box relative col-span-1 row-span-2 rounded-xl md:rounded-2xl overflow-hidden border-[3px] md:border-[4px] border-white shadow-xl shadow-gray-200 group">
                    <Image
                        src={info?.bigImage?.src || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"}
                        alt={info?.bigImage?.alt || "Industry Focus"}
                        fill
                        priority
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent pointer-events-none"></div>
                </motion.div>

                {/* 2. TOP RIGHT (Small) */}
                <motion.div variants={imageItemVariants} className="hero-img-box relative col-span-1 row-span-1 rounded-xl md:rounded-2xl overflow-hidden border-[3px] md:border-[4px] border-white shadow-lg group">
                    <Image
                        src={info?.smallImage?.src || "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"}
                        alt={info?.smallImage?.alt || "Detail Shot"}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </motion.div>

                {/* 3. BOTTOM WIDE */}
                <motion.div variants={imageItemVariants} className="hero-img-box relative col-span-2 row-span-1 rounded-xl md:rounded-2xl overflow-hidden border-[3px] md:border-[4px] border-white shadow-lg group">
                    <Image
                        src={info?.wideImage?.src || "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"}
                        alt={info?.wideImage?.alt || "Wide Shot"}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>

            </motion.div>
            
            {/* Decorative Dots */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1 }} className="hero-grid-bg absolute -top-5 -right-5 w-24 h-24 bg-[radial-gradient(#2271B8_2px,transparent_2px)] [background-size:12px_12px] opacity-30 -z-10"></motion.div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesHero;
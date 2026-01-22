// import { ArrowRight } from "lucide-react";
// import Image from "next/image"; // Image component ko import karna na bhoolein
// import CtaButton from "../CtaButton";

// export default function Service4() {
//   return (
//     <div className="relative">
//       {" "}
//       <section
//         className="relative flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto py-20  px-8 md:pl-30 gap-16"
//         // Note: Maine responsive layout ke liye fixed style (width/height) hata diya hai
//       >
//         {/* LEFT SECTION */}
//         <div className="w-full md:w-1/2 flex flex-3 flex-col justify-center">
//           <h2 className="relative z-2 text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
//             One of the only true scalable & hands-on startup accounting firms
//           </h2>

//           <p className="relative z-2 text-gray-700 mb-10 text-lg leading-relaxed">
//             There are many basic bookkeeping firms out there, but very few
//             operationally-focused startup accounting firms like us. Our business
//             model focuses around high-touch and long-term engagements, where we
//             take our clients from seed all the way through exit.
//           </p>

//           {/* BUTTON (Style same hai, bas text badla hai) */}
//           <div className="w-fit">
//             <CtaButton />
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="hidden w-full md:w-1/2 mt-10 md:mt-0 md:flex flex-2 justify-center">
//           {/* Peach background container */}
//           <div className=" p-8 rounded-3xl w-full max-w-lg">
//             {/* --- AAPKI IMAGE YAHAN AAYEGI --- */}
//             {/* 'src' ko apni 3-circle PNG image ke path se replace karein */}
//             <Image
//               src="https://images.pexels.com/photos/8145261/pexels-photo-8145261.jpeg" // Example: "/images/my-chart.png"
//               alt="Graphite vs other accounting firms chart"
//               width={700}
//               height={500}
//               className="w-full h-auto rounded-2xl relative z-2"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, TrendingUp, Layers } from "lucide-react";
import CtaButton from "../CtaButton";

export default function Service4() {
  
  // --- 3D TILT LOGIC (Framer Motion Way) ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt (replaces GSAP ease)
  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), springConfig); // Reverse Y for natural tilt
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to center on leave
    x.set(0);
    y.set(0);
  };

  // --- SCROLL ANIMATION VARIANTS ---

  // 1. Text Content Stagger
  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const textItemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // 2. Visual Layer Stagger
  const visualContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const visualLayerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } // Expo ease equivalent
    }
  };

  // 3. Icon Pop
  const iconVariants = {
    hidden: { opacity: 0, rotate: -20 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 1.5, type: "spring", bounce: 0.5 }
    }
  };

  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-white">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. High Quality Noise Texture */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

      {/* 2. Technical Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b1a_1px,transparent_1px),linear-gradient(to_bottom,#64748b1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      {/* 3. Ambient Orbs */}
      <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-[-10%] w-[700px] h-[700px] bg-orange-50/60 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-28">
          
          {/* --- LEFT SECTION: TEXT --- */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={textContainerVariants}
          >
            
            {/* Tag */}
            <motion.div variants={textItemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 rounded-full shadow-sm w-fit">
               <Layers size={14} className="text-[#2271B8]" />
               <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Growth Partners</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={textItemVariants} className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0f172a] leading-[1.05] tracking-tight">
              Scalable. Hands-on. <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2271B8] to-[#003B70]">
                    Built for Startups.
                </span>
                {/* Underline Decoration */}
                <svg className="absolute w-[105%] h-3 -bottom-1 -left-1 text-[#F99321] opacity-90 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p variants={textItemVariants} className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              We don't just balance the books; we engineer your financial infrastructure. 
              From <span className="text-[#0f172a] font-semibold underline decoration-[#F99321]/30 decoration-2 underline-offset-2">seed stage to exit</span>, 
              we provide the operational backbone you need to scale without breaking.
            </motion.p>

            {/* Premium Checklist (Pill Style) */}
            <motion.div variants={textItemVariants} className="flex flex-wrap gap-3 pt-2">
                {[
                    "Strategic CFO",
                    "R&D Tax Credits",
                    "Due Diligence Ready",
                    "Cash Flow Mgmt"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg group hover:border-[#F99321]/30 hover:bg-orange-50/30 transition-colors">
                        <CheckCircle2 size={16} className="text-green-500 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-semibold text-gray-700">{item}</span>
                    </div>
                ))}
            </motion.div>

            {/* Button */}
            <motion.div variants={textItemVariants} className="pt-6 w-fit">
              <CtaButton />
            </motion.div>
          </motion.div>

          {/* --- RIGHT SECTION: 3D INTERACTIVE VISUAL --- */}
          <motion.div 
            className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end perspective-1000"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={visualContainerVariants}
          >
             
             {/* 3D Container with Mouse Events */}
             <motion.div 
                className="relative w-full max-w-[580px] aspect-[4/3] group"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d" // Essential for 3D effect
                }}
             >
               
               {/* Layer 1: Abstract Backdrop */}
               <motion.div variants={visualLayerVariants} className="absolute top-[-30px] right-[-30px] w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-20 border border-gray-200 rounded-[2.5rem] transform-gpu translate-z-[-20px]"></motion.div>
               
               {/* Layer 2: Main Image with Glass Border */}
               <motion.div variants={visualLayerVariants} className="relative h-full w-full rounded-[2rem] overflow-hidden border-[8px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] bg-gray-100 z-10 transform-gpu translate-z-[10px]">
                 <Image
                   src="https://images.pexels.com/photos/8145261/pexels-photo-8145261.jpeg" // Professional meeting image
                   alt="Strategic Meeting"
                   fill
                   className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.5s]"
                 />
                 {/* Cinematic Inner Shadow */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-[#0f172a]/10 to-transparent pointer-events-none"></div>
                 
                 {/* Text Overlay on Image */}
                 <div className="absolute bottom-8 left-8 text-white z-20">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-90">Live Metrics</p>
                     </div>
                     <p className="text-3xl font-bold tracking-tight">Precision & Growth</p>
                 </div>
               </motion.div>

               {/* Layer 3: Floating Decoration Icon */}
               <motion.div 
                  variants={iconVariants}
                  className="absolute -top-8 -right-8 bg-[#F99321] text-white p-4 rounded-2xl shadow-lg shadow-orange-500/30 z-30 transform-gpu translate-z-[30px]"
               >
                   <TrendingUp size={28} />
               </motion.div>

             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
// import Image from "next/image";
// import React from "react";
// import CtaButton from "../CtaButton";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";

// const IndustriesSpecial = ({ info }) => {
//   return (
    
//     <section className="py-16 md:py-32">
//       <h2 className="text-black z-2 text-[33px] md:text-[48px] font-medium text-start md:text-center pb-5  px-5 md:px-50 ">
//         {info?.title}
//       </h2>
//       <section className="  flex justify-center px-5  md:pl-5   xl:mr-[clamp(0px,5vw,160px)]  mt-[clamp(0.5rem,5vw,1rem)]">
//         <div className="w-full max-w-7xl   md:h-[60vh] flex flex-col gap-10 md:gap-0 md:flex-row  items-stretch justify-center  md:items-start    rounded-2xl ">
//           {/* Image  */}
//           <div className="relative flex  w-full h-full  flex-1 rounded-2xl justify-end items-center">
//             <Image
//               src={info?.src}
//               alt={
//                 info?.title
//                   ? `${info.title} - Truthink Consulting`
//                   : "Service hero section image"
//               }
//               fill
//               className="object-cover object-center rounded-lg "
//             />
//           </div>

//           {/* Text Content  */}
//           <div className="flex  flex-col text-black0 items-center md:items-start justify-center w-full h-full flex-1 gap-[clamp(1.5rem,2vw,3.5rem)] py-0 md:px-[clamp(1rem,2vw,3rem)] md:ml-10">
//             {/* <h2 className="text-black0 z-2 text-[33px] md:text-[40px] font-medium text-start">
//               {info?.title}
//             </h2> */}
//             <div className="flex flex-col gap-8 ">
//               <p className="text-[18px] z-2  text-gray-900 text-start">
//                 {info?.description}
//               </p>
//               <p className="text-[18px] z-2 text-gray-900 text-start">
//                 {info?.description2}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
    
//     </section>
//   );
// };

// export default IndustriesSpecial;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Target, ShieldCheck, TrendingUp, Sparkles, Layers, 
  Building2, Factory, Landmark 
} from "lucide-react";

const IndustriesSpecial = ({ info }) => {

  // --- ANIMATION VARIANTS ---

  // 1. Image Reveal (Scale & Fade)
  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  // 2. Text Content Stagger
  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4 // Wait slightly for image to start
      }
    }
  };

  const textItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // 3. Floating Card Pop (Bouncy/Spring)
  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring", 
        bounce: 0.5, // Mimics ease: "back.out(1.7)"
        duration: 0.8,
        delay: 0.6 
      }
    }
  };

  // 4. Background Icons Continuous Float
  const floatingIconAnimate = {
    y: [-15, 15], // Move up and down
    rotate: [5, -5], // Slight rotation
  };

  const floatingIconTransition = {
    duration: 4,
    repeat: Infinity,
    repeatType: "mirror", // Equivalent to yoyo: true
    ease: "easeInOut",
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Base Technical Grid */}
      <div className="absolute inset-0 pointer-events-none -z-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* 2. Circle Dots */}
      <div className="absolute inset-0 pointer-events-none -z-20">
         <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_80%)] opacity-50"></div>
      </div>

      {/* 3. Floating Background Icons (Continuous Animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
         <motion.div 
            animate={floatingIconAnimate}
            transition={{ ...floatingIconTransition, delay: 0 }}
            className="absolute top-[10%] left-[5%] text-slate-100 transform -rotate-12"
         >
            <Building2 size={120} strokeWidth={1} />
         </motion.div>
         
         <motion.div 
            animate={floatingIconAnimate}
            transition={{ ...floatingIconTransition, delay: 1 }} // Staggered start
            className="absolute bottom-[20%] right-[5%] text-slate-100 transform rotate-12"
         >
            <Factory size={140} strokeWidth={1} />
         </motion.div>
         
         <motion.div 
            animate={floatingIconAnimate}
            transition={{ ...floatingIconTransition, delay: 2 }} // Staggered start
            className="absolute top-[40%] right-[15%] text-slate-50 transform rotate-6"
         >
            <Landmark size={80} strokeWidth={1} />
         </motion.div>
      </div>


      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* --- HEADING --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textItemVariants} // Using simple slide for heading
          className="mb-12 md:mb-16 text-start md:text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight pb-2">
            <span className="text-transparent bg-clip-text bg-[#0f172a]">
              {info?.title || "Specialized Industry Focus"}
            </span>
          </h2>
          
          {/* Premium Decorative Accent Line */}
          <div className="h-1.5 w-24 bg-[#F99321] rounded-full mt-4 md:mx-auto opacity-90 shadow-sm"></div>
        </motion.div>

        {/* --- MAIN CONTENT WRAPPER --- */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 items-stretch md:h-[60vh]">
          
          {/* LEFT: IMAGE SECTION */}
          <motion.div 
            className="relative w-full md:w-1/2 h-[400px] md:h-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/5 border-[4px] border-white group bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Starts when 30% visible
          >
             {/* Main Image Reveal */}
             <motion.div variants={imageVariants} className="w-full h-full relative">
                 <Image
                   src={info?.src || "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"}
                   alt={info?.title || "Industry Specialization"}
                   fill
                   className="object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
                 />
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 via-transparent to-transparent pointer-events-none"></div>
             </motion.div>

             {/* Floating Compact Card (Pop Animation) */}
             <motion.div 
                variants={cardVariants}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 flex items-center gap-5 max-w-[260px]"
             >
                {/* Text Info */}
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Revenue Impact</p>
                    <p className="text-xl font-extrabold text-[#0f172a]">+18.5%</p>
                </div>
                
                {/* Mini Visual Chart */}
                <div className="h-10 flex items-end gap-1.5 pb-1">
                    <div className="w-2 h-[40%] bg-blue-100 rounded-sm"></div>
                    <div className="w-2 h-[60%] bg-blue-200 rounded-sm"></div>
                    <div className="w-2 h-[45%] bg-blue-300 rounded-sm"></div>
                    <div className="w-2 h-[100%] bg-[#2271B8] rounded-sm"></div>
                </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col justify-center h-full space-y-6 md:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textContainerVariants}
          >
            
            <div className="space-y-4">
                <motion.p variants={textItemVariants} className="text-lg text-slate-600 leading-relaxed font-medium">
                  {info?.description || "We dive deep into the specific mechanics of your industry to unlock value others miss. Our approach is tailored, not generic."}
                </motion.p>
                {info?.description2 && (
                    <motion.p variants={textItemVariants} className="text-base text-slate-500 leading-relaxed">
                      {info.description2}
                    </motion.p>
                )}
            </div>

            {/* Premium Feature Grid */}
            <motion.div variants={textItemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#2271B8]/40 hover:shadow-md transition-all duration-300">
                    <div className="p-1.5 bg-blue-50 rounded-lg text-[#2271B8]"><Target size={16} /></div>
                    <span className="text-sm font-bold text-gray-700">Startup-Native</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#F99321]/40 hover:shadow-md transition-all duration-300">
                    <div className="p-1.5 bg-orange-50 rounded-lg text-[#F99321]"><ShieldCheck size={16} /></div>
                    <span className="text-sm font-bold text-gray-700">Metric-Driven</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-green-500/40 hover:shadow-md transition-all duration-300">
                    <div className="p-1.5 bg-green-50 rounded-lg text-green-600"><Layers size={16} /></div>
                    <span className="text-sm font-bold text-gray-700">Investor Aware</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-purple-500/40 hover:shadow-md transition-all duration-300">
                    <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600"><Sparkles size={16} /></div>
                    <span className="text-sm font-bold text-gray-700">Growth-Ready</span>
                </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSpecial;
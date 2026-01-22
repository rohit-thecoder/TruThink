// // components/WhyPreferUs.jsx
// "use client";

// export default function IndustriesPreferUs({
//   features = [
//     { name: "Value-based Pricing", active: true },
//     { name: "Fast and seamless data onboarding", active: false },
//     { name: "Proactive AR tracking and reporting", active: false },
//     { name: "Real-time dashboards and reconciliations", active: false },
//     {
//       name: "Tailored processes that match your systems and culture",
//       active: false,
//     },
//   ],
// }) {
//   return (
//     <section className=" py-20 md:py-36 px-5 my-20 sm:px-8 lg:px-5 bg-[#5ea0ef]">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-14 gap-5 md:gap-26 items-center">
//         {/* --- LEFT TEXT COLUMN --- */}
//         <div className="lg:col-span-5 ">
//           <div className="">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight  ">
//               Why{" "}
//               <span className="bg-[#f7c72d] text-black0 p-2 rounded-xl inline-block -rotate-1">
//                 Startups
//               </span>{" "}
//               Prefer Us
//             </h2>
//           </div>
//           <p className="mt-6 text-lg sm:text-lg text-[#0f172a] leading-relaxed">
//             Simple: Our track record and talent. We are your long-term startup
//             accounting partner, backed by a Indian-based team that handles only
//             a few clients at a time. That means you get high-touch service, deep
//             understanding of your business, and a partner that feels truly
//             in-house.
//           </p>

//           <p className="mt-4 text-lg sm:text-lg text-[#0f172a] leading-relaxed">
//             Here are a few key reasons why hundreds of startups trust us.
//           </p>
//         </div>

//         {/* --- CENTER TIMELINE COLUMN --- */}
//         <div className="lg:col-span-4 relative flex justify-center py-10 text-[#211e1c]">
//           <div className="relative">
//             {/* Vertical Line */}
//             <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-[#7BBEF8]"></div>

//             {/* Feature List */}
//             <div className="relative z-10 flex flex-col gap-10">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-center relative">
//                   {/* Dot */}
//                   <span
//                     className={`absolute left-0 w-5 h-5 rounded-full border-2 border-white shadow-sm 
//                       ${
//                         feature.active
//                           ? "bg-[#F6921E] scale-110"
//                           : "bg-[#CFE8FF]"
//                       }`}
//                   ></span>
//                   {/* Text */}
//                   <span
//                     className={`ml-10 text-lg   ${
//                       feature.active
//                         ? "text-[#ffffff] font-bold sm:text-2xl"
//                         : "text-[211e1c] font-medium sm:text-xl"
//                     }`}
//                   >
//                     {feature.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* --- RIGHT CARD COLUMN --- */}
//         <div className="lg:col-span-5">
//           <div className="bg-[#FFFBF7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
//             <p className="text-gray-800 text-lg leading-relaxed mb-6">
//               We support you from seed to exit — no need to switch firms as you
//               grow. From day one bookkeeping to CFO-level financial strategy, we
//               scale alongside your startup.
//             </p>

//             {/* --- Image Placeholder (Replace with Next/Image) --- */}
//             <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-200">
//               {/* Example static image */}
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1661277666101-01fb123f2a4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
//                 alt="Startup team working together"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, TrendingUp, Zap, BarChart3, Users, 
  ShieldCheck, ArrowRight, LayoutDashboard 
} from "lucide-react";

// Data with icons and specific images for each feature
const FEATURES_DATA = [
  { 
    id: 0, 
    name: "Value-based Pricing", 
    desc: "Transparent pricing that aligns with your growth stage. No hidden fees, just value.",
    icon: <TrendingUp size={20} />,
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    id: 1, 
    name: "Fast & Seamless Onboarding", 
    desc: "We get your data migrated and systems up in days, not months. Zero friction start.",
    icon: <Zap size={20} />,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    id: 2, 
    name: "Proactive AR Tracking", 
    desc: "Never chase an invoice again. Our automated systems ensure healthy cash flow.",
    icon: <BarChart3 size={20} />,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    id: 3, 
    name: "Real-time Dashboards", 
    desc: "Live financial health checks at your fingertips. Make decisions on data, not guesses.",
    icon: <LayoutDashboard size={20} />,
    image: "https://images.pexels.com/photos/186522/pexels-photo-186522.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    id: 4, 
    name: "Tailored Processes", 
    desc: "We adapt to your culture and tech stack. An accounting partner that truly fits in.",
    icon: <Users size={20} />,
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

export default function IndustriesPreferUs() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate features every 5 seconds if user hasn't clicked
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- ANIMATION VARIANTS ---

  // 1. Main Container Stagger (Controls the sequence)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Delay between each element appearing
        delayChildren: 0.2
      }
    }
  };

  // 2. Text Slide Up
  const fadeInUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // 3. List Item Slide In (From Left)
  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // 4. Card Pop (Bounce effect)
  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        type: "spring", 
        bounce: 0.4 // Mimics GSAP back.out
      } 
    }
  };

  return (
    <section className="relative py-24 md:py-36 px-5 md:px-10 lg:px-20 bg-slate-50 overflow-hidden">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Technical Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      {/* 2. Floating Background Icons */}
      <div className="absolute top-20 right-10 text-slate-200/50 rotate-12 pointer-events-none">
          <ShieldCheck size={180} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-20 left-10 text-slate-200/50 -rotate-12 pointer-events-none">
          <BarChart3 size={150} strokeWidth={0.5} />
      </div>


      {/* ================= MAIN GRID ================= */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
        variants={containerVariants}
      >
        
        {/* --- LEFT: TEXT & LIST --- */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Header */}
          <div className="space-y-6">
            <motion.h2 variants={fadeInUpVariants} className="prefer-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
              Why{" "}
              <span className="relative inline-block px-4 py-1 mx-1">
                  <span className="absolute inset-0 bg-[#F99321] -skew-x-6 rounded-lg transform rotate-[-2deg]"></span>
                  <span className="relative z-10 text-white">Startups</span>
              </span>
              <br /> Prefer Us
            </motion.h2>
            
            <motion.p variants={fadeInUpVariants} className="prefer-text text-lg text-slate-600 leading-relaxed font-medium">
              We are your long-term growth partner. Backed by an expert team that handles limited clients, offering high-touch service that feels truly in-house.
            </motion.p>
          </div>

          {/* Interactive Feature List */}
          <div className="relative pl-6 border-l-2 border-slate-200 space-y-8">
            {FEATURES_DATA.map((feature, index) => {
              const isActive = activeFeature === index;
              return (
                <motion.div 
                    key={index} 
                    variants={listItemVariants}
                    className="group cursor-pointer relative"
                    onClick={() => setActiveFeature(index)}
                >
                    {/* Active Indicator Line */}
                    <div className={`absolute -left-[27px] top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-full transition-all duration-300 ${isActive ? "bg-[#2271B8] scale-y-100" : "bg-transparent scale-y-0"}`}></div>
                    
                    {/* Item Content */}
                    <div className={`flex items-center gap-4 transition-all duration-300 ${isActive ? "translate-x-2" : "group-hover:translate-x-1"}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 
                            ${isActive ? "bg-[#2271B8] border-[#2271B8] text-white shadow-lg shadow-blue-500/30" : "bg-white border-slate-200 text-slate-400 group-hover:border-[#2271B8] group-hover:text-[#2271B8]"}`}>
                            {feature.icon}
                        </div>
                        <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isActive ? "text-[#0f172a]" : "text-slate-400 group-hover:text-slate-600"}`}>
                            {feature.name}
                        </span>
                    </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* --- RIGHT: DYNAMIC CARD --- */}
        <div className="lg:col-span-7 h-full flex items-center">
             <motion.div 
                variants={cardVariants}
                className="prefer-card relative w-full bg-white rounded-[2.5rem] p-3 shadow-2xl shadow-blue-900/10 border border-slate-100 overflow-hidden"
             >
                
                {/* Dynamic Content Area */}
                <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden bg-slate-900">
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image 
                                src={FEATURES_DATA[activeFeature].image}
                                alt={FEATURES_DATA[activeFeature].name}
                                fill
                                className="object-cover opacity-60"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F99321] text-white text-xs font-bold uppercase tracking-widest mb-4">
                                    {FEATURES_DATA[activeFeature].icon}
                                    <span>Feature Focus</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {FEATURES_DATA[activeFeature].name}
                                </h3>
                                <p className="text-lg text-slate-300 leading-relaxed max-w-lg mb-8">
                                    {FEATURES_DATA[activeFeature].desc}
                                </p>
                                
                                <button className="flex items-center gap-3 text-white font-bold group">
                                    <span className="border-b border-transparent group-hover:border-[#F99321] transition-colors">Learn how it works</span>
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F99321] transition-colors">
                                        <ArrowRight size={14} />
                                    </div>
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
             </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
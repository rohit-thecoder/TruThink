"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Target } from "lucide-react";

export default function About4() {
  
  // --- ANIMATION VARIANTS ---

  // 1. Heading Fade Up
  const headingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  // 2. Text Content Fade Up
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // 3. Feature Cards Stagger & Pop
  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        bounce: 0.4, // Mimics 'back.out'
        duration: 0.8 
      } 
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#8EC5FF1a_1px,transparent_1px),linear-gradient(to_bottom,#8EC5FF1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8EC5FF]/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F99321]/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
            {/* Added 'items-start' to ensure sticky works properly */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left Column (Sticky Wrapper) */}
            {/* CSS STICKY LOGIC: 'lg:sticky' keeps it pinned, 'top-32' sets position */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start h-fit">
                
                {/* Animation Target (Inner Div) */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={headingVariants}
                    className="about-inner-content"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-[2px] w-10 bg-[#F99321]"></span>
                        <span className="text-[#F99321] font-bold tracking-widest uppercase text-xs">
                            About Truthink
                        </span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                        Who <br className="hidden md:block" /> we are.
                    </h2>
                    
                    <p className="text-gray-500 text-lg max-w-sm border-l-2 border-gray-200 pl-6 py-2">
                        Building financial clarity for the next generation of businesses.
                    </p>
                </motion.div>
            </div>

            {/* Right Column (Scrollable Content) */}
            <div className="lg:col-span-7 space-y-12 pb-10">
                
                {/* Intro Text */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={textVariants}
                >
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium">
                        Founded in 2024, <span className="text-[#005bb5] font-bold">Truthink</span> brings together over a decade of cummative experience
                        from Big 4 consulting and hands-on work with early-stage startups.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={gridContainerVariants}
                >
                    <motion.div variants={cardVariants} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#8EC5FF] transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-[#8EC5FF]/10 flex items-center justify-center text-[#005bb5] mb-4 group-hover:scale-110 transition-transform">
                            <TrendingUp size={24} />
                        </div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Growth Focused</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">Simplifying complex financial challenges so you can focus on scaling.</p>
                    </motion.div>

                    <motion.div variants={cardVariants} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F99321] transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-[#F99321]/10 flex items-center justify-center text-[#d97706] mb-4 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Compliance Ready</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">Navigating regulatory landscapes with Big 4 precision and expertise.</p>
                    </motion.div>
                </motion.div>

                {/* Secondary Text */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={textVariants}
                >
                    <p className="text-lg leading-relaxed text-gray-600">
                        We’ve seen the startup journey up close — from the uncertainty of
                        launch to the challenges of scaling. With a mix of sharp financial
                        insight and real-world perspective, we partner with founders to turn
                        complexity into clarity.
                    </p>
                </motion.div>

                {/* Core Mission Box */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F99321]/5 to-[#8EC5FF]/5 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-lg shadow-gray-200/50">
                        <div className="flex gap-4 items-start">
                        <div className="mt-1 text-[#F99321]">
                            <Target size={32} />
                        </div>
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg mb-2">Our Core Mission</h4>
                            <p className="text-lg leading-relaxed text-gray-700 italic">
                                "To make finance simple and growth achievable — ensuring your
                                success is amplified while we handle the numbers."
                            </p>
                        </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            </div>
        </div>
    </section>
  );
}
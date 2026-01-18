"use client";
import React from "react";
import { motion } from "framer-motion";
import IndustriesCard from "./IndustriesCard";
import IndustryCta from "../IndustryCta";

const SubIndustries = ({ industries, heading }) => {
  return (
    <section className="relative px-5 md:px-20 py-20 md:py-32 bg-slate-50/30 overflow-hidden">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Technical Grid (Blue Tint | High Opacity Top -> Low Opacity Bottom) */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2271B80a_1px,transparent_1px),linear-gradient(to_bottom,#2271B80a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_85%)]"></div>
      </div>

      {/* 2. Ambient Glows (Brand Colors) */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#2271B8]/5 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#F99321]/5 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply"></div>


      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- HEADING --- */}
        <div className="relative mb-[clamp(3rem,5vw,5rem)] text-center">
            <h2 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
                {heading}
            </h2>
            {/* Decorative Accent Line */}
            <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#F99321] to-[#d97706] opacity-90 shadow-sm"></div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 w-full">
            {industries.map((service, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.6,
                delay: index * 0.15, // Slightly faster stagger
                ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full flex justify-center h-full"
            >
                <IndustriesCard
                    title={service?.title}
                    description={service?.description}
                    // Optional: Pass an icon if your data has it, or let the card use default
                    // icon={service?.icon} 
                />
            </motion.div>
            ))}
        </div>

        {/* --- CTA SECTION --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16 md:mt-24 relative"
        >
            {/* Subtle glow behind button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10"></div>
            
            <IndustryCta text="Let's Talk" />
        </motion.div>

      </div>
    </section>
  );
};

export default SubIndustries;
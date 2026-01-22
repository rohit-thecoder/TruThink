"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Coins, History, 
  CheckCircle2, Lightbulb, Scale, Sparkles 
} from "lucide-react";

export default function ValuationGuide() {

  // --- ANIMATION VARIANTS ---

  // 1. Definition Cards (Staggered Up & Fade)
  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  // 2. Methods List (Staggered Slide Right)
  const methodsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const methodItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // 3. CTA Reveal (Scale Up with Expo Ease)
  const ctaVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 30 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] // Custom bezier for "expo.out" feel
      } 
    }
  };

  return (
    <section className="relative py-24 md:py-36 px-5 md:px-12 lg:px-20 overflow-hidden font-sans">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Base Grid (Linear) */}
      <div className="absolute inset-0 pointer-events-none -z-20">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#64748b12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* 2. Circle Dots */}
      <div className="absolute inset-0 pointer-events-none -z-20">
         <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_90%)] opacity-30"></div>
      </div>

      {/* 3. Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-[-10%] w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>


      <div className="max-w-7xl mx-auto space-y-32">

        {/* ================= SECTION 1: DEFINITIONS (Cards) ================= */}
        <motion.div 
          className="guide-cards-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainerVariants}
        >
            
            {/* CARD 1: PRE-MONEY */}
            <motion.div variants={cardItemVariants} className="guide-card group relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(34,113,184,0.15)] transition-all duration-500 hover:-translate-y-2">
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-[#2271B8] mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <History size={32} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4 tracking-tight">Pre-money Valuation</h3>
                    
                    <p className="text-slate-500 text-lg leading-relaxed mb-10">
                        The value of your company <strong>before</strong> any new investment. It measures your worth based on traction, IP, and team—excluding the cash about to enter.
                    </p>
                    
                    {/* Insight Box */}
                    <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 p-6 rounded-2xl group-hover:border-[#2271B8]/20 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb size={16} className="text-[#2271B8] fill-[#2271B8]" />
                            <p className="text-xs font-bold text-[#2271B8] uppercase tracking-widest">In Simple Terms</p>
                        </div>
                        <p className="text-[#0f172a] font-medium italic text-lg leading-snug">“What is my startup worth just before the investor signs the cheque?”</p>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2: POST-MONEY */}
            <motion.div variants={cardItemVariants} className="guide-card group relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(249,147,33,0.15)] transition-all duration-500 hover:-translate-y-2">
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-[#F99321] mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Coins size={32} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4 tracking-tight">Post-money Valuation</h3>
                    
                    <p className="text-slate-500 text-lg leading-relaxed mb-10">
                        The value of your company <strong>immediately after</strong> the investment hits the bank. It combines your existing value plus the new cash injection.
                    </p>
                    
                    {/* Insight Box */}
                    <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 p-6 rounded-2xl group-hover:border-[#F99321]/20 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb size={16} className="text-[#F99321] fill-[#F99321]" />
                            <p className="text-xs font-bold text-[#F99321] uppercase tracking-widest">In Simple Terms</p>
                        </div>
                        <p className="text-[#0f172a] font-medium italic text-lg leading-snug">“What is my ownership slice worth after the deal closes?”</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>

        {/* ================= SECTION 2: STRATEGY & METHODS ================= */}
        <div className="methods-wrapper grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Content Context */}
            <div className="lg:col-span-5 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2271B8] font-bold uppercase text-[11px] tracking-widest">
                    <Scale size={14} /> Valuation Strategy
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
                    How to calculate the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2271B8] to-[#004a94]">
                        Perfect Number?
                    </span>
                </h2>
                
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-medium">
                    <p>
                        A valuation isn’t a guess—it’s a negotiation backed by data. Investors compare your startup against market alternatives based on risk, growth, and scalability.
                    </p>
                    <p>
                        To arrive at a defensible number, we use established financial methodologies tailored to your stage:
                    </p>
                </div>
            </div>

            {/* Right: Premium Methods Grid */}
            <div className="lg:col-span-7">
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={methodsContainerVariants}
                >
                    {[
                        "Discounted Cash Flow (DCF)",
                        "Venture Capital Method",
                        "Scorecard Valuation",
                        "Checklist Method",
                        "Comparable Multiples",
                        "Berkus Method",
                        "Risk Factor Summation",
                        "First Chicago Method"
                    ].map((method, i) => (
                        <motion.div 
                          key={i} 
                          variants={methodItemVariants}
                          className="method-item group flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#2271B8]/40 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                        >
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#2271B8] transition-colors duration-300">
                                <CheckCircle2 size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="font-semibold text-slate-700 group-hover:text-[#0f172a] transition-colors">{method}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>

        {/* ================= SECTION 3: CTA (The Finale) ================= */}
        <motion.div 
          className="truthink-cta relative rounded-[3rem] bg-[#0f172a] overflow-hidden p-10 md:p-20 text-center shadow-2xl shadow-blue-900/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
        >
            
            {/* Dark Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#F99321] via-[#8EC5FF] to-[#2271B8]"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute -top-[50%] -left-[10%] w-[600px] h-[600px] bg-[#2271B8]/30 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute -bottom-[50%] -right-[10%] w-[600px] h-[600px] bg-[#F99321]/20 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    <Sparkles size={14} className="text-[#F99321]" /> Advisory Service
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] tracking-tight">
                    Valuation isn't just Maths, <br />
                    <span className="text-[#8EC5FF]">It’s your story in Numbers.</span>
                </h2>
                
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    At Truthink Consulting, we move beyond simple calculators. We combine financial rigor with market context to build a valuation you can pitch with confidence.
                </p>

                <div className="pt-6">
                    <Link href="/contact" className="inline-block group">
                        <button className="cursor-pointer relative overflow-hidden bg-gradient-to-r from-[#F99321] to-[#d97706] text-white font-bold text-lg tracking-wide uppercase px-12 py-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(249,147,33,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(249,147,33,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 ring-1 ring-white/20">
                            Get Expert Valuation
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
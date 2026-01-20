"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using Lucide for cleaner icons

const CtaButton = ({ text = "Request For Proposal", className = "" }) => {
  return (
    <Link href="/contact" className={`inline-block group ${className}`}>
      <button className="relative cursor-pointer overflow-hidden bg-gradient-to-r from-[#F99321] to-[#d97706] text-white font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-full shadow-[0_10px_20px_-10px_rgba(249,147,33,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(249,147,33,0.6)] hover:-translate-y-1 transition-all duration-300 active:scale-95 active:shadow-none">
        
        {/* Shine Effect Layer */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>

        {/* Content Wrapper */}
        <div className="relative z-20 flex items-center justify-center gap-3">
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            {text}
          </span>
          
          {/* Arrow Animation */}
          <div className="relative flex items-center w-4 h-4 overflow-hidden">
             {/* Arrow 1 (Exists) */}
             <ArrowRight 
               size={16} 
               className="absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" 
             />
             {/* Arrow 2 (Slides In) */}
             <ArrowRight 
               size={16} 
               className="absolute top-1/2 -translate-y-1/2 -left-full transition-all duration-300 group-hover:translate-x-full group-hover:left-0 opacity-0 group-hover:opacity-100" 
             />
          </div>
        </div>

      </button>
    </Link>
  );
};

export default CtaButton;
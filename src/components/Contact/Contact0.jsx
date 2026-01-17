"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Plugin Register
gsap.registerPlugin(ScrollTrigger);

export default function Contact0() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. INTRO TIMELINE ---
      const tl = gsap.timeline();

      // Step A: Container Reveal
      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      // Step B: Image Zoom Out (Cinematic)
      .fromTo(
        ".contact-bg-image", 
        { scale: 1.25 }, 
        { scale: 1, duration: 1.8, ease: "expo.out" }, 
        "<" // Starts at same time
      )
      // Step C: White Box Entry (Slide Up smoothly)
      .fromTo(
        boxRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1.2"
      )
      // Step D: Text & Icon Stagger
      .fromTo(
        ".reveal-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      // --- 2. PARALLAX EFFECT (Scroll) ---
      gsap.to(".contact-bg-image", {
        yPercent: 15, // Subtle crawling movement
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "bottom top", 
          scrub: true, 
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // 1. Parent container
    <div 
      ref={containerRef} 
      className="relative w-full max-w-[1400px] mx-auto md:py-24 md:px-10 lg:px-20 pt-32 opacity-0"
    > 
      {/* 2. Main container (High-End Rounded Look) */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-200 group">
        
        {/* Background Image Wrapper */}
        <div className="w-full h-full relative overflow-hidden">
            <Image
              ref={imageRef}
              src="https://images.pexels.com/photos/5717224/pexels-photo-5717224.jpeg"
              alt="Get in Touch Background"
              fill
              className="contact-bg-image object-cover opacity-100 will-change-transform"
              priority 
            />
            {/* Subtle Gradient Overlay for Text Pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* 3. "Cutout" Shape - The Floating Premium Box */}
        <div
          ref={boxRef}
          className="absolute bottom-0 right-0 w-full md:w-auto md:min-w-[450px] h-[160px] bg-white 
                     md:rounded-tl-[40px] flex px-10 md:px-12 items-center z-20"
        >
          {/* --- Inverted Radius (Magic Curves for Premium Feel) --- */}
           {/* Top Curve */}
           <div className="hidden md:block absolute -top-[40px] right-0 w-[40px] h-[40px] bg-transparent shadow-[20px_20px_0_#ffffff] rounded-br-[40px] pointer-events-none"></div>
           {/* Left Curve */}
           <div className="hidden md:block absolute bottom-0 -left-[40px] w-[40px] h-[40px] bg-transparent shadow-[20px_20px_0_#ffffff] rounded-br-[40px] pointer-events-none"></div>

          {/* 4. Content Inside */}
          <div className="w-full flex justify-between items-center gap-8 cursor-pointer group/btn">
            
            <div className="flex flex-col">
              {/* Eyebrow Text */}
              <span className="reveal-item text-xs font-bold tracking-[0.2em] text-[#F99321] uppercase mb-2">
                Start A Project
              </span>
              {/* Main Heading */}
              <span className="reveal-item text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none group-hover/btn:text-[#0066cc] transition-colors duration-300">
                Get In Touch
              </span>
            </div>

            {/* Premium Circular Button */}
            <div className="reveal-item flex-shrink-0 w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover/btn:border-[#0066cc] group-hover/btn:shadow-lg">
                {/* Fill Animation */}
                <div className="absolute inset-0 bg-[#0066cc] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                
                {/* Icon */}
                <ArrowUpRight className="relative z-10 w-7 h-7 text-gray-900 group-hover/btn:text-white transition-colors duration-300" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
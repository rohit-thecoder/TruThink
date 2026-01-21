"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact0() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".contact-bg-image", 
        { scale: 1.25 }, 
        { scale: 1, duration: 1.8, ease: "expo.out" }, 
        "<"
      )
      .fromTo(
        boxRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1.2"
      )
      .fromTo(
        ".reveal-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      gsap.to(".contact-bg-image", {
        yPercent: 15,
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
    <div 
      ref={containerRef} 
      // Tailwind ki opacity-0 hata kar style use kiya hai taaki FOUC na ho
      className="relative w-full max-w-[1400px] mx-auto md:py-24 md:px-10 lg:px-20 pt-32"
      style={{ opacity: 0 }} // Initial hidden strictly via inline style
    > 
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-200 group">
        
        <div className="w-full h-full relative overflow-hidden">
            <Image
              ref={imageRef}
              src="https://images.pexels.com/photos/5717224/pexels-photo-5717224.jpeg"
              alt="Get in Touch Background"
              fill
              className="contact-bg-image object-cover opacity-100 will-change-transform"
              priority 
              // --- CRITICAL FIX: Ye line add karo ---
              // Jab ye image load hogi, tabhi GSAP positions recalculate karega
              onLoadingComplete={() => ScrollTrigger.refresh()}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <div
          ref={boxRef}
          className="absolute bottom-0 right-0 w-full md:w-auto md:min-w-[450px] h-[160px] bg-white 
                     md:rounded-tl-[40px] flex px-10 md:px-12 items-center z-20"
        >
           <div className="hidden md:block absolute -top-[40px] right-0 w-[40px] h-[40px] bg-transparent shadow-[20px_20px_0_#ffffff] rounded-br-[40px] pointer-events-none"></div>
           <div className="hidden md:block absolute bottom-0 -left-[40px] w-[40px] h-[40px] bg-transparent shadow-[20px_20px_0_#ffffff] rounded-br-[40px] pointer-events-none"></div>

          <div className="w-full flex justify-between items-center gap-8 cursor-pointer group/btn">
            <div className="flex flex-col">
              <span className="reveal-item text-xs font-bold tracking-[0.2em] text-[#F99321] uppercase mb-2">
                Start A Project
              </span>
              <span className="reveal-item text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none group-hover/btn:text-[#0066cc] transition-colors duration-300">
                Get In Touch
              </span>
            </div>
            <div className="reveal-item flex-shrink-0 w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover/btn:border-[#0066cc] group-hover/btn:shadow-lg">
                <div className="absolute inset-0 bg-[#0066cc] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                <ArrowUpRight className="relative z-10 w-7 h-7 text-gray-900 group-hover/btn:text-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
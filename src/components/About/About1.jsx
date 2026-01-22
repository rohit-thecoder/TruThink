// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Plugin Register
// gsap.registerPlugin(ScrollTrigger);

// export default function About1() {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // --- 1. INTRO ANIMATION (Load hote hi chalega) ---
//       const tl = gsap.timeline();

//       // Step A: Container Reveal
//       tl.fromTo(
//         containerRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//       )
//       // Step B: Image Zoom Out (Premium Reveal)
//       .fromTo(
//         ".bg-image", 
//         { scale: 1.2 }, 
//         { scale: 1, duration: 1.5, ease: "power2.out" }, 
//         "<" // Starts at same time as Step A
//       )
//       // Step C: Text Box Entry (Thoda delay aur bounce ke sath)
//       .fromTo(
//         textRef.current,
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
//         "-=1" // Starts 1 second before previous animation ends
//       );

//       // --- 2. CRAWLING PARALLAX EFFECT (Scroll karne par) ---
//       // Image thodi dheere chalegi scroll ke sath
//       gsap.to(".bg-image", {
//         yPercent: 20, // Image thoda niche khiskegi
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top", // Section start
//           end: "bottom top", // Section end
//           scrub: true, // Smooth crawling effect linked to scrollbar
//         },
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     // 1. Parent container
//     <div 
//       ref={containerRef} 
//       className="relative w-full max-w-8xl mx-auto md:py-20 md:px-20 md:pt-40 opacity-0" // Initial opacity-0 to avoid flash
//     > 
//       {/* 2. Main container (Shadow & Radius) */}
//       <div className="relative w-full h-[500px] overflow-hidden md:rounded-2xl shadow-2xl group">
        
//         {/* Background Image Wrapper for Scaling */}
//         <div className="w-full h-full relative overflow-hidden">
//             <Image
//             ref={imageRef}
//             src="https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="bg-image opacity-100 will-change-transform" // 'bg-image' class target ki gayi hai GSAP ke liye
//             priority // Top element hai isliye priority true rakhi
//             />
//              {/* Mobile Overlay */}
//              <div className="md:hidden absolute inset-0 bg-black/80"></div>
//         </div>

//         {/* 3. "Cutout" Shape - Text Parent */}
//         <div
//           ref={textRef}
//           className="absolute bottom-0 right-0 w-[340px] h-[130px] md:bg-white rounded-tl-[30px] 
//                      flex justify-center items-center z-10 overflow-hidden"
//         >
//           {/* Smooth Curves (Pseudo Elements for Premium Corner Join) */}
//            <div className="hidden md:block absolute -top-[20px] right-0 w-[20px] h-[20px] bg-transparent shadow-[10px_10px_0_#fff] rounded-br-[20px]"></div>
//            <div className="hidden md:block absolute bottom-0 -left-[20px] w-[20px] h-[20px] bg-transparent shadow-[10px_10px_0_#fff] rounded-br-[20px]"></div>

//           {/* 4. Text Content */}
//           <div className="flex items-center gap-3 cursor-pointer group/btn transition-all duration-300 ease-in-out">
//             <span className="text-5xl font-bold text-white md:text-gray-900 tracking-tight">
//               Our Team
//             </span>
//             <ArrowUpRight className="w-8 h-8 md:text-blue-500 text-white transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Plugin Register
gsap.registerPlugin(ScrollTrigger);

export default function About1() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null); // Ref for text content inside the box

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. INTRO ANIMATION (Timeline) ---
      const tl = gsap.timeline();

      // Step A: Container Reveal
      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      // Step B: Image Zoom Out (Cinematic Effect)
      .fromTo(
        ".bg-image", 
        { scale: 1.25 }, 
        { scale: 1, duration: 1.8, ease: "expo.out" }, 
        "<" // Starts same time
      )
      // Step C: White Box Entry (Slide Up + Bounce)
      .fromTo(
        textRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1.2"
      )
      // Step D: Content Stagger (Text & Button reveal)
      .fromTo(
        ".content-reveal",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      // --- 2. PARALLAX CRAWLING (Scroll Effect) ---
      gsap.to(".bg-image", {
        yPercent: 15, // Subtle movement
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
      className="relative w-full max-w-[1400px] mx-auto md:py-34 md:px-10 lg:px-20 pt-32 opacity-0" 
    > 
      {/* 2. Main wrapper (Rounded High-End Look) */}
      <div className="relative w-full h-[60vh] min-h-[500px] md:h-[550px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-200 group">
        
        {/* Background Image Wrapper */}
        <div className="w-full h-full relative overflow-hidden">
            <Image
              ref={imageRef}
              src="https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg"
              alt="Our Team Background Image"
              fill
              className="bg-image object-cover opacity-100 will-change-transform"
              priority 
              onLoadingComplete={() => {
    import("gsap/ScrollTrigger").then((st) => {
        st.ScrollTrigger.refresh();
    });
  }}
            />
            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* 3. "Cutout" Shape - The Premium Floating Box */}
        <div
          ref={textRef}
          className="absolute bottom-0 right-0 w-full md:w-auto md:min-w-[420px] h-[160px] bg-white 
                     md:rounded-tl-[40px] flex px-10 md:px-12 items-center z-20"
        >
          {/* --- Inverted Radius (The Magic Curves) --- */}
          {/* Top Curve */}
           <div className="hidden md:block absolute -top-[40px] right-0 w-[40px] h-[40px] bg-transparent shadow-[20px_20px_0_#ffffff] rounded-br-[40px] pointer-events-none"></div>
           {/* Left Curve */}
           <div className="hidden md:block absolute bottom-0 -left-[40px] w-[40px] h-[40px] bg-transparent shadow-[20px_20px_0_#ffffff] rounded-br-[40px] pointer-events-none"></div>

          {/* 4. Content Inside */}
          <div className="w-full flex justify-between items-center gap-8 cursor-pointer group/btn">
            
            <div className="flex flex-col">
              {/* Eyebrow Text */}
              <span className="content-reveal text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
                The Creators
              </span>
              {/* Main Heading */}
              <span className="content-reveal text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none group-hover/btn:text-[#F99321] transition-colors duration-300">
                Our Team 
              </span>
            </div>

            {/* Circular Arrow Button */}
            <div className="content-reveal w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover/btn:border-[#F99321]">
                {/* Fill Animation */}
                <div className="absolute inset-0 bg-[#F99321] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                
                {/* Icon */}
                <ArrowUpRight className="relative z-10 w-6 h-6 text-gray-900 group-hover/btn:text-white transition-colors duration-300" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
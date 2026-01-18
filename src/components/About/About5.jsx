// "use client";
// import Image from "next/image";

// export default function About5() {
//   return (
//     <section className="px-8 py-20">
//       <div className="max-w-7xl mx-auto   flex flex-col md:flex-row items-start gap-12 md:gap-20 md:h-[90vh]">
//         {/* Left Side - Text */}
//         <div className="md:w-1/2 text-gray-800">
//           <h2 className="text-[30px] md:text-[40px] font-medium text-black0 mb-6 leading-snug">
//             At <span className="text-black0 p-2 rotate-359 inline-block rounded-lg bg-amber-400">TRUTHINK</span> , we help
//             businesses think smarter, scale faster, and stay financially
//             confident.
//           </h2>

//           <p className="text-lg text-gray-800 mb-5 ">
//             We started with a simple belief — that finance shouldn’t feel
//             complicated or intimidating. It should be a partner in your growth
//             story. Over time, we’ve built a team that loves turning messy
//             spreadsheets into clarity, numbers into insights, and uncertainty
//             into direction.
//           </p>

//           <p className="text-lg text-gray-800 mb-5 ">
//             We work with founders, business owners, and finance teams who want
//             more than just reports — they want meaning behind the numbers. We
//             bring structure, discipline, and honesty to every engagement,
//             helping you make decisions with confidence and focus on what truly
//             matters — building your business.
//           </p>

//           <p className="text-lg text-gray-800">
//             Every company’s journey is different — and so is ours with you.
//             Whether you’re just starting up or scaling across markets, we walk
//             beside you with a mix of strategy, empathy, and precision.
//           </p>
//         </div>

//         {/* Right Side - Image */}
//         <div className="md:w-1/2 relative h-full">
//           <div className="rounded-2xl overflow-hidden">
//             <Image
//               src="https://images.pexels.com/photos/8962470/pexels-photo-8962470.jpeg"
//               alt="Two persons standing near a window overlooking a cityscape"
//               fill
//               className="object-cover w-full h-full rounded-2xl"
//             />
//           </div>

//           {/* Soft gradient overlay for premium look */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none rounded-2xl"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About5() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // --- IMAGE REVEAL ---
      gsap.from(imageRef.current, {
        clipPath: "inset(100% 0 0 0)",
        scale: 1.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // --- TEXT STAGGER ---
      const textElements =
        textContainerRef.current.querySelectorAll(".anim-text");

      gsap.from(textElements, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          once: true,
        },
      });

    }, containerRef);

    // --- IMAGE LOAD SAFETY FIX ---
    const img = imageRef.current.querySelector("img");

    if (img && !img.complete) {
      img.addEventListener("load", () => {
        ScrollTrigger.refresh();
      });
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);
  
  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-20 py-24 bg-white overflow-hidden"
    >
      {/* Decorative Background Orb (Subtle Premium Feel) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- Left Side - Text Content --- */}
        <div ref={textContainerRef} className="order-2 lg:order-1 flex flex-col justify-center">
          
          {/* Heading */}
          <h2 className="anim-text text-4xl md:text-5xl lg:text-[56px] font-semibold text-gray-900 mb-8 leading-[1.15] tracking-tight">
            At{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 font-bold px-1">
              TRUTHINK
              {/* Subtle Underline highlight */}
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-amber-100 -z-10 rounded-sm"></span>
            </span>
            , we help businesses think smarter, scale faster, and stay financially confident.
          </h2>

          {/* Divider Line */}
          <div className="anim-text w-20 h-[2px] bg-gray-200 mb-8"></div>

          {/* Paragraph 1 */}
          <p className="anim-text text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            We started with a simple belief — that finance shouldn’t feel
            complicated or intimidating. It should be a partner in your growth
            story. Over time, we’ve built a team that loves turning messy
            spreadsheets into clarity, numbers into insights, and uncertainty
            into direction.
          </p>

          {/* Paragraph 2 */}
          <p className="anim-text text-lg text-gray-600 mb-8 leading-relaxed">
            We work with founders, business owners, and finance teams who want
            more than just reports — they want meaning behind the numbers. We
            bring structure, discipline, and honesty to every engagement,
            helping you make decisions with confidence and focus on what truly
            matters — building your business.
          </p>

          {/* Paragraph 3 (Highlighted) */}
          <div className="anim-text pl-6 border-l-4 border-amber-400">
            <p className="text-lg text-gray-800 font-medium italic">
              "Every company’s journey is different — and so is ours with you.
              Whether you’re just starting up or scaling across markets, we walk
              beside you with a mix of strategy, empathy, and precision."
            </p>
          </div>
        </div>

        {/* --- Right Side - Image --- */}
        <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full">
          {/* Image Container with Masking for Animation */}
          <div 
            ref={imageRef} 
            className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200"
          >
            <Image
              src="https://images.pexels.com/photos/8962470/pexels-photo-8962470.jpeg"
              alt="Professional team discussing strategy"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Gradient Overlay for Text Readability/Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply pointer-events-none"></div>
          </div>
          
          {/* Decorative Pattern behind image */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 -z-10"></div>
        </div>

      </div>
    </section>
  );
}
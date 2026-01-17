// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// // --- Original card data ---
// const originalCardData = [
//   {
//     id: 1,
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1661407578158-fbf949999fa5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2832",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1661762879869-304d03785940?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2854",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1683121291576-786e1d36fc2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
//   },
//   {
//     id: 5,
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1661542504234-82bdfd434c08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
//   },
// ];

// // --- 1. SLIDES KE ARRAY KO DOUBLE KAR DIYA GAYA HAI ---
// // (React key ko unique rakhne ke liye IDs ko map karke badal diya hai)
// const cardData = [
//   ...originalCardData,
//   ...originalCardData.map((card) => ({ ...card, id: `${card.id}-copy` })),
// ];

// export default function Home3() {
//   const swiperRef =useRef(null);
//   return (
//     <section className="relative md:pt-0 py-20 lg:py-30 w-full overflow-hidden">
//       {/* --- Top Text Content (Aapke text color changes rakhe gaye hain) --- */}
//       <div className="max-w-5xl mx-auto text-center mb-16 px-4">
//         <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center font-bold leading-tight">
//           Your Finanace Department as a Service
//         </h2>
//         {/* <p className=" text-md sm:text-xl text-center text-gray-500 pt-4 leading-6 px-10 sm:px-20 md:px-30 lg:px-40">
//           We deeply understand the needs and nuances of growing startups and
//           small businesses. Since 2016, we've provided hundreds of growing
//           companies with a dedicated team of experienced startup accountants and
//           CFOs who serve as their complete or supporting in-house accounting &
//           finance department. We are your one-stop-shop for all things
//           outsourced accounting, finance and tax.
//         </p> */}
//       </div>

//       {/* --- Swiper Carousel --- */}
//       <div className="relative">
//         {/* LEFT WHITE FADE */}
//         <div className="pointer-events-none absolute left-0 top-0 h-full w-[200px] lg:bg-gradient-to-r from-white to-transparent z-20"></div>

//         {/* RIGHT WHITE FADE */}
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-[200px] lg:bg-gradient-to-l from-white to-transparent z-20"></div>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           onSwiper={(swiper) => (
//             console.log(swiper), (swiperRef.current = swiper)
//           )}
//           loop={true}
//           autoplay={{
//             delay: 1000,
//             disableOnInteraction: false,
//           }}
//           centeredSlides={true}
//           slidesPerView={"auto"}
//           spaceBetween={20}
//           grabCursor={true}
//           className="mySwiper w-full relative"
//         >
//           {/* 2. Ab yeh double array (10 slides) par map ho raha hai */}
//           {cardData.map((card) => (
//             <SwiperSlide
//               key={card.id} // Key ab unique hai (e.g., "1" aur "1-copy")
//               className="!w-[300px] md:!w-[450px] !h-[350px]"
//             >
//               {({ isActive }) => (
//                 <div
//                   onMouseEnter={() => swiperRef.current?.autoplay.stop()}
//                   onMouseLeave={() => swiperRef.current?.autoplay.start()}
//                   className={`relative overflow-hidden rounded-3xl w-full h-full transition-all duration-500 ease-in-out ${
//                     isActive ? "scale-110" : "scale-90 opacity-70"
//                   }`}
//                 >
//                   <Image
//                     src={card.imageUrl}
//                     alt="Finance Department Service"
//                     fill
//                     className="object-cover rounded-3xl"
//                     priority
//                   />
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* --- Bottom Button --- */}
//         <div className="text-center mt-20">
//           <button className="bg-[#7BBEF8] cursor-pointer text-white text-base font-medium px-8 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* --- Custom Styles for Pagination Dots --- */}
//       <style jsx global>{`
//         .mySwiper {
//           padding-top: 20px;
//           padding-bottom: 40px;
//         }
//         .swiper-pagination-bullet {
//           width: 8px;
//           height: 8px;
//           background-color: #d1d5db;
//           opacity: 1;
//           transition: all 0.3s ease;
//         }
//         .swiper-pagination-bullet-active {
//           background-color: #f9a825 !important;
//           transform: scale(1.2);
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// --- Original card data ---
const originalCardData = [
  {
    id: 1,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661407578158-fbf949999fa5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2832",
  },
  {
    id: 2,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661762879869-304d03785940?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2854",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 4,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683121291576-786e1d36fc2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661542504234-82bdfd434c08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
  },
];

// --- Slides doubled for infinite loop ---
const cardData = [
  ...originalCardData,
  ...originalCardData.map((card) => ({ ...card, id: `${card.id}-copy` })),
];

// --- SVG Icons for Background ---
const IconChart = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const IconPie = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const IconTrending = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default function Home3() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
      {/* ========================================
        BACKGROUND LAYERS
        ======================================== 
      */}
      
      {/* 1. Grid Pattern with Mask (High opacity center -> Low opacity edges) */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px'
          }}
        ></div>
        {/* Radial Mask to fade out grid towards bottom/edges */}
        <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"></div>
      </div>

      {/* 2. Dotted Pattern (Circle dots) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        <div 
           className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        ></div>
      </div>

      {/* 3. Floating Background Icons (Blurred & Low Opacity) */}
      <div className="absolute top-10 left-10 md:left-20 opacity-10 animate-pulse">
         <IconPie className="w-24 h-24 text-blue-600 rotate-12 blur-[1px]" />
      </div>
      <div className="absolute bottom-20 right-5 md:right-20 opacity-10">
         <IconChart className="w-32 h-32 text-indigo-600 -rotate-12 blur-[2px]" />
      </div>
      <div className="absolute top-20 right-10 md:right-32 opacity-[0.07]">
         <IconTrending className="w-20 h-20 text-sky-600 rotate-6" />
      </div>


      {/* ========================================
        CONTENT
        ======================================== 
      */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16 px-4">
        {/* Badge / Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Premium Solutions
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
          Your Finance Department <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            as a Service
          </span>
        </h2>
        
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Comprehensive financial management tailored for growing startups. 
          Expert CFOs and accountants, dedicated to your success.
        </p>
      </div>

      {/* --- Swiper Carousel --- */}
      <div className="relative z-10">
        {/* LEFT FADE (Matches background) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[100px] md:w-[300px] bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>

        {/* RIGHT FADE (Matches background) */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[100px] md:w-[300px] bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          speed={800} // Smoother transition
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, 
          }}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30} // Slightly more space
          grabCursor={true}
          className="mySwiper w-full relative !pb-14" // Added padding bottom for shadow/pagination
        >
          {cardData.map((card) => (
            <SwiperSlide
              key={card.id}
              className="!w-[280px] sm:!w-[350px] md:!w-[480px] !h-[320px] sm:!h-[380px]"
            >
              {({ isActive }) => (
                <div
                  className={`relative overflow-hidden rounded-[2rem] w-full h-full transition-all duration-700 ease-out border border-white/20 ${
                    isActive
                      ? "scale-100 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 translate-y-0"
                      : "scale-90 opacity-40 blur-[1px] translate-y-4"
                  }`}
                >
                  <Image
                    src={card.imageUrl}
                    alt="Finance Service"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={isActive}
                  />
                  {/* Overlay Gradient on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Bottom Button --- */}
        <div className="text-center mt-12 relative z-30">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900"></span>
            <span className="relative">Get Started Now</span>
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* --- Global Styles --- */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1; /* Slate 300 */
          opacity: 1;
          transition: all 0.4s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #3b82f6 !important; /* Blue 500 */
          width: 24px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
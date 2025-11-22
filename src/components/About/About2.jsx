"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules"; // <-- Swiper modules import karein

// Swiper CSS import karein
import "swiper/css";
import "swiper/css/pagination";

// Aapki Team ka Data (About2.jsx se)
const teamData = [
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
];

export default function About2() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 overflow-hidden">
      {/* Title (About2.jsx se) */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800">
        What makes our team different
      </h2>

      {/* --- Swiper Carousel (Home3.jsx jaisa) --- */}
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        centeredSlides={true} // <-- Center effect ke liye
        slidesPerView={"auto"} // <-- Center effect ke liye
        spaceBetween={16} // <-- Slides ke beech ka gap (gap-4 jaisa)
        pagination={{ clickable: true }}
        className="myTeamSwiper" // <-- Custom class
      >
        {teamData.map((src, index) => (
          <SwiperSlide
            key={index}
            // Tailwind class '!' ke saath Swiper ke styles ko override karti hai
            className="!w-[90%] sm:!w-[90%]" // <-- Width About2.jsx jaisi
          >
            {/* Yeh 'isActive' prop humein Swiper se milta hai */}
            {({ isActive }) => (
              <div
                className={`
                  relative w-full h-130 rounded-2xl overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? "scale-100 opacity-100" // Center wala
                      : "scale-90 opacity-70" // Side wala (Aapke request ke mutabik)
                  }
                `}
              >
                <Image
                  src={src}
                  alt={`Team member ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  priority={isActive} // Active slide ko pehle load karega
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Custom Styles for Pagination Dots (Home3.jsx jaisa) --- */}
      {/* Active dot ka color orange kar diya hai (About2.jsx jaisa) */}
      <style jsx global>{`
        .myTeamSwiper {
          padding-top: 10px; /* Thodi padding taaki shadow na kate */
          padding-bottom: 50px; /* Dots ke liye jagah */
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #d1d5db; /* gray-300 */
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #f9a825 !important; /* Orange */
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}

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

// --- 1. SLIDES KE ARRAY KO DOUBLE KAR DIYA GAYA HAI ---
// (React key ko unique rakhne ke liye IDs ko map karke badal diya hai)
const cardData = [
  ...originalCardData,
  ...originalCardData.map((card) => ({ ...card, id: `${card.id}-copy` })),
];

export default function Home3() {
  const swiperRef =useRef(null);
  return (
    <section className="relative md:pt-0 py-20 lg:py-30 w-full overflow-hidden">
      {/* --- Top Text Content (Aapke text color changes rakhe gaye hain) --- */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center font-bold leading-tight">
          Your Finanace Department as a Service
        </h2>
        {/* <p className=" text-md sm:text-xl text-center text-gray-500 pt-4 leading-6 px-10 sm:px-20 md:px-30 lg:px-40">
          We deeply understand the needs and nuances of growing startups and
          small businesses. Since 2016, we've provided hundreds of growing
          companies with a dedicated team of experienced startup accountants and
          CFOs who serve as their complete or supporting in-house accounting &
          finance department. We are your one-stop-shop for all things
          outsourced accounting, finance and tax.
        </p> */}
      </div>

      {/* --- Swiper Carousel --- */}
      <div className="relative">
        {/* LEFT WHITE FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[200px] lg:bg-gradient-to-r from-white to-transparent z-20"></div>

        {/* RIGHT WHITE FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[200px] lg:bg-gradient-to-l from-white to-transparent z-20"></div>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (
            console.log(swiper), (swiperRef.current = swiper)
          )}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          grabCursor={true}
          className="mySwiper w-full relative"
        >
          {/* 2. Ab yeh double array (10 slides) par map ho raha hai */}
          {cardData.map((card) => (
            <SwiperSlide
              key={card.id} // Key ab unique hai (e.g., "1" aur "1-copy")
              className="!w-[300px] md:!w-[450px] !h-[350px]"
            >
              {({ isActive }) => (
                <div
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay.start()}
                  className={`relative overflow-hidden rounded-3xl w-full h-full transition-all duration-500 ease-in-out ${
                    isActive ? "scale-110" : "scale-90 opacity-70"
                  }`}
                >
                  <Image
                    src={card.imageUrl}
                    alt="Finance Department Service"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Bottom Button --- */}
        <div className="text-center mt-20">
          <button className="bg-[#7BBEF8] cursor-pointer text-white text-base font-medium px-8 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* --- Custom Styles for Pagination Dots --- */}
      <style jsx global>{`
        .mySwiper {
          padding-top: 20px;
          padding-bottom: 40px;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #f9a825 !important;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}

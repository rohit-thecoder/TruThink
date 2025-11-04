"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const images = [
  "https://images.pexels.com/photos/5466810/pexels-photo-5466810.jpeg",
  "https://images.pexels.com/photos/3783879/pexels-photo-3783879.jpeg",
  "https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg",
  "https://images.pexels.com/photos/3791130/pexels-photo-3791130.jpeg",
  "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg",
  "https://images.pexels.com/photos/4491441/pexels-photo-4491441.jpeg",
  "https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg",
];

const HomeSlider = () => {
  const total = images.length;
    const [index, setIndex] = useState(2);
    
    const [isAnimating, setIsAnimating] =useState(true);

    //Extend array bana raha hu illusion ke liye
    const extended = [images[total-2], images[total-1], ...images, images[0], images[1]];

    //Auto Slide Effect 
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
    return () =>
    clearInterval(interval)
  }, [index]);

  const nextSlide = () =>{
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setIndex((prev) => prev - 1 )
  }

  //Reset Position jab dublicate slide pe pahuch jaye 
  useEffect(() => {
    if(index === total + 1){
      //last ke baad (duplicate last -> first)
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(2); //jump to real first
      }, 700); //same as transition duration
      return () => clearTimeout(timeout);
    }

    if(index === 0 ) {
      //first ke pehle (duplicate first -> last)
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(total + 1);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index])

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [isAnimating]);



  return (
    <div className="relative w-full overflow-hidden px-[10%] py-8 bg-white border-4 border-amber-800">
      {/* Slider Track */}
      <div
        className={`flex gap-2  ${
          isAnimating ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(calc(-${index * 33.333}% + 33.333%))`,
        }}
      >
        {extended.map((src, i) => (
          <div
            key={i}
            className={`flex-none w-1/3 rounded-2xl overflow-hidden shadow-lg transform translate-transform duration-500  px-2
             ${
               i === index ? "scale-110 brightness-110 z-10" : " brightness-75"
             }`}
          >
            {/* 🟡 Debug Info */}
            <h1 className="text-center bg-white text-black font-bold">
              Extended Index: {i}
            </h1>
            <h1 className="text-center bg-gray-200 text-black text-sm">
              Real Index: {images.indexOf(src)}
            </h1>
            
            <Image
              src={src}
              alt={`slide-${i}`}
              width={500} // ✅ required
              height={500}
              className="w-full h-72 object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation  */}
      {/* <div className='flex justify-center mt-6 gap-1'>
          {images.map((_, i) => (
            <button 
            key={i}
            onClick={() => setIndex(i+1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i+1===index ? "color-orange scale-110" : "bg-gray-500"}`} />
          ))}
      </div> */}
    </div>
  );
}

export default HomeSlider;

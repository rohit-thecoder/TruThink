"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Contact0() {
  return (
    // 1. Parent container
    <div className="relative w-full max-w-8xl mx-auto md:py-20 md:px-20 md:pt-40">
      {/* 2. Main container (shadow add kiya hai) */}
      <div className="relative w-full h-[500px] overflow-hidden md:rounded-2xl">
        {/* Background Image */}
        <Image
          src="https://images.pexels.com/photos/5717224/pexels-photo-5717224.jpeg" // 🔁 Aap yahan apni image daal sakte hain
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />

        {/* 3. "Cutout" shape - YEH AB TEXT KA PARENT HAI */}
        {/* Iska background (bg-white) aapke page ke background se match hona chahiye. */}
        <div
          className="absolute bottom-0 right-0 w-[360px] h-[130px] md:bg-white rounded-tl-[20px] 
                        flex justify-center items-center"
        >
          {/* 4. "Our Team" Text (Ab yeh white div ke andar hai) */}
          <div className="flex items-center gap-3 cursor-pointer group transition-all duration-300 ease-in-out">
            <span className="text-5xl font-bold text-white md:text-gray-900 tracking-tight">
              Get In Touch
            </span>
            <ArrowUpRight className="w-8 h-8 md:text-blue-300 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>

      {/* "Our Team" text ab upar move ho chuka hai */}
    </div>
  );
}

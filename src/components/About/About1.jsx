"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About1() {
  return (
    // 1. Parent container
    <div className="relative w-full max-w-5xl mx-auto p-4">
      {/* 2. Main container (shadow add kiya hai) */}
      <div className="relative w-full h-[400px] bg-gray-300 rounded-[40px] overflow-hidden shadow-xl">
        {/* Background Image */}
        <Image
          src="https://plus.unsplash.com/premium_photo-1661411073939-e7207087fa75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" // 🔁 Aap yahan apni image daal sakte hain
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />

        {/* 3. "Cutout" shape - YEH AB TEXT KA PARENT HAI */}
        {/* Iska background (bg-white) aapke page ke background se match hona chahiye. */}
        <div
          className="absolute bottom-0 right-0 w-[340px] h-[130px] bg-white rounded-tl-[50px] 
                        flex justify-center items-center"
        >
          {/* 4. "Our Team" Text (Ab yeh white div ke andar hai) */}
          <div className="flex items-center gap-3 cursor-pointer group transition-all duration-300 ease-in-out">
            <span className="text-5xl font-bold text-gray-900 tracking-tight">
              Our Team
            </span>
            <ArrowUpRight className="w-8 h-8 text-blue-300 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>

      {/* "Our Team" text ab upar move ho chuka hai */}
    </div>
  );
}

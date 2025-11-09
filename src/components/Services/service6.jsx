import { ArrowRight } from "lucide-react";
import CtaButton from "../CtaButton";
import Image from "next/image";

export default function Service6() {
  return (
    <section className="relative py-45 md:py-60 px-4 sm:px-6 lg:px-8">
      <Image
        src="/pngwing.com.png"
        height={500}
        width={500}
        alt="Grid overlay"
        className="hidden md:block
    absolute top-1/2 left-1/2 
    transform -translate-x-1/2 -translate-y-1/2
    w-full h-full
    object-cover opacity-40
    [mask-image:radial-gradient(circle,black_0%,rgba(0,0,0,0.3)_0%,transparent_50%)]
    [-webkit-mask-image:radial-gradient(circle,black_0%,rgba(0,0,0,0.2)_0%,transparent_50%)]
  "
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="relative z-2 text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
          <span className="text-[#f6921e]">Startup</span> <span>Program:</span>
        </h2>

        {/* Subheading (Slightly lighter font as in image) */}
        <h3 className="relative z-2 text-4xl md:text-5xl text-gray-800 leading-tight mt-2">
          Special pricing for early-stage startups
        </h3>

        {/* Button */}
        <div className="flex justify-center mt-12 md:mt-14">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

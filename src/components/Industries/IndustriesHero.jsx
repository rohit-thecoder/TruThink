import Image from "next/image";
import React from "react";
import CtaButton from "../CtaButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import IndustryCta from "../IndustryCta";

const IndustriesHero = ({ info }) => {
  return (
    <section className="  flex justify-center px-5 py-16 md:pl-5 md:py-32  xl:ml-[clamp(0px,5vw,160px)]  mt-[clamp(0.5rem,5vw,1rem)]">
      <Image
        src="/pngtree_13534322.png"
        height={2000}
        width={2000}
        alt="Grid overlay"
        className="absolute top-0 left-0 w-full md:w-1/2 h-2/3 md:h-full object-cover md:object-contain  
        md:[mask-image:linear-gradient(to_bottom,black_40%,transparent),linear-gradient(to_right,black_30%,transparent)] 
        [mask-composite:intersect] [-webkit-mask-composite:destination-in]
 opacity-30 md:opacity-50"
      />

      <div className=" w-full flex-2 max-w-7xl   flex flex-col gap-0 md:gap-20 md:flex-row  items-center justify-center  md:items-start    rounded-2xl ">
        {/* Text Content  */}
        <div className="flex flex-col text-black0 items-center md:items-start w-full flex-3 gap-[clamp(1.5rem,2vw,3.5rem)] py-[clamp(2rem,5vw,10rem)] px-[clamp(1rem,2vw,3rem)]">
          <h1 className="text-black0 z-2 text-[36px] md:text-[45px] font-medium text-center md:text-start">
            {info?.title}
          </h1>
          <p className="text-[18px] z-2  text-center md:text-start">
            {info?.description}
          </p>

          <IndustryCta text="Let's Talk" />
        </div>
        {/* Image  */}
        <div
          className="w-full flex-2 h-full grid grid-cols-3 grid-rows-1 md:grid-cols-3 md:grid-rows-3 gap-2 md:gap-4 rounded-2xl overflow-hidden"
        >
          {/* ROW 1 & 2 → BIG IMAGE (col-span-3, row-span-2) */}
          <div className="relative col-span-3 row-span-2 rounded-xl overflow-hidden hidden md:block">
            <Image
              src={info?.bigImage?.src}
              alt={info?.bigImage?.alt}
              fill
              className="object-cover hover:scale-105 transition-all duration-500 cursor-zoom-in"
            />
          </div>

          {/* ROW 3 → COL 1 → SMALL IMAGE */}
          <div className="relative rounded-xl overflow-hidden h-40">
            <Image
              src={info?.smallImage?.src}
              alt={info?.smallImage?.alt}
              fill
              className="object-cover hover:scale-110 transition-all duration-500 cursor-zoom-in"
            />
          </div>

          {/* ROW 3 → COL 2 & COL 3 → WIDE IMAGE (col-span-2) */}
          <div className="relative col-span-2 rounded-xl overflow-hidden h-40 ">
            <Image
              src={info?.wideImage?.src}
              alt={info?.wideImage?.alt}
              fill
              className="object-cover hover:scale-110 transition-all duration-500 cursor-zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;

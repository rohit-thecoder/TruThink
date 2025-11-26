import Image from "next/image";
import React from "react";
import CtaButton from "../CtaButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const IndustriesSpecial = ({ info }) => {
  return (
    <section className="  flex justify-center px-2 py-16 md:pl-5 md:py-32  xl:mr-[clamp(0px,5vw,160px)]  mt-[clamp(0.5rem,5vw,1rem)]">
      <div className="w-full max-w-7xl   md:h-[70vh] flex flex-col-reverse gap-10 md:gap-20 md:flex-row  items-stretch justify-center  md:items-start    rounded-2xl ">
        {/* Image  */}
        <div className="relative flex  w-full h-full  flex-2 rounded-2xl ">
          <Image
            src={info?.src}
            alt={
              info?.title
                ? `${info.title} - Truthink Consulting`
                : "Service hero section image"
            }
            fill
            className="object-cover object-center rounded-lg "
          />
        </div>

        {/* Text Content  */}
        <div className="flex flex-col text-black0 items-center md:items-start justify-center w-full h-full flex-3 gap-[clamp(1.5rem,2vw,3.5rem)] py-0 px-[clamp(1rem,2vw,3rem)]">
          <h2 className="text-black0 z-2 text-[33px] md:text-[40px] font-medium text-start">
            {info?.title}
          </h2>
          <div className="flex flex-col gap-4 "> 
            <p className="text-[18px] z-2  text-gray-800 text-start">
              {info?.description}
            </p>
            <p className="text-[18px] z-2 text-gray-800 text-start">
              {info?.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSpecial;

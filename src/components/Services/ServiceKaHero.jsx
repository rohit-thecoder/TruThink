import Image from 'next/image'
import React from 'react'
import CtaButton from '../CtaButton';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';


const ServiceKaHero = ({info}) => {
  return (
    <section className="  px-5 py-16 md:pl-5 md:py-32  xl:ml-[clamp(0px,5vw,160px)]  mt-[clamp(0.5rem,5vw,1rem)]">
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

      <div className="w-full  md:h-[75vh] flex flex-col gap-0 md:gap-20 md:flex-row  items-center justify-center  md:items-start    rounded-2xl ">
        {/* Text Content  */}
        <div className="flex flex-col text-black0 items-center md:items-start w-full flex-3 gap-[clamp(1.5rem,2vw,3.5rem)] py-[clamp(2rem,5vw,10rem)] px-[clamp(1rem,2vw,3rem)]">
          <h1 className="text-black0 z-2 text-[36px] md:text-[45px] font-medium text-center md:text-start">
            {info?.title}
          </h1>
          <p className="text-[18px] z-2  text-center md:text-start">
            {info?.description}
          </p>

         <CtaButton/>
        </div>
        {/* Image  */}
        <div className="relative flex w-full h-full  flex-2 rounded-2xl ">
          <Image
            src={info?.src}
            alt={
              info?.title
                ? `${info.title} - Truthink Consulting`
                : "Service hero section image"
            }
            height={600}
            width={800}
            className="object-cover object-center rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceKaHero

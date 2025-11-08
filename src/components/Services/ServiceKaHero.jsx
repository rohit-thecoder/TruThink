import Image from 'next/image'
import React from 'react'
import CtaButton from '../CtaButton';


const ServiceKaHero = ({info}) => {
  return (
    <section className=" bg-white px-5 py-16 md:px-16 md:py-32  xl:mx-[clamp(0px,5vw,160px)]  mt-[clamp(0.5rem,5vw,1rem)]">
      <div className="w-full  md:h-[90vh] flex flex-col md:flex-row  items-center  md:items-start gap-[clamp(1.5rem,2vw,3.5rem)]  md:bg-[#F1F9FF] rounded-2xl ">
        {/* Text Content  */}
        <div className="flex flex-col items-center md:items-start w-full flex-1 gap-[clamp(1.5rem,2vw,3.5rem)] py-[clamp(2rem,5vw,10rem)] px-[clamp(1rem,2vw,3rem)]">
          <h1 className="text-black0 text-[36px] md:text-[36px] font-semibold text-center md:text-start">
            {info?.title}
          </h1>
          <p className="text-[18px]   text-[#4b5563] text-center md:text-start">
            {info?.description}
          </p>
          <CtaButton
            text="REQUEST FOR PROPOSAL"
            className="self-center md:self-start  uppercase"
          />
        </div>
        {/* Image  */}
        <div className="relative flex w-full h-full  flex-1 rounded-2xl ">
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

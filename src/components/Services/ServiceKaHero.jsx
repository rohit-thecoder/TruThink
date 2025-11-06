import Image from 'next/image'
import React from 'react'
import CtaButton from '../CtaButton';


const ServiceKaHero = ({info}) => {
  return (
    <section className=" bg-white px-[clamp(1rem,5vw,5rem)] py-[clamp(2rem,10vw,5rem)] mt-[clamp(1.5rem,10vw,5rem)]">
      <div className="w-full  md:h-[90vh] flex flex-col md:flex-row  items-center  md:items-start gap-[clamp(1.5rem,2vw,3.5rem)]  bg-[#F1F9FF] rounded-2xl ">
        {/* Text Content  */}
        <div className="flex flex-col items-center md:items-start w-full flex-2 gap-[clamp(1.5rem,2vw,3.5rem)] py-[clamp(2rem,5vw,10rem)] px-[clamp(1rem,2vw,3rem)]">
          <h1 className="text-black0 text-[clamp(2rem,4vw,3.5rem)] font-regular text-center md:text-start">
            {info?.title}
          </h1>
          <p className="text-[clamp(0.9rem,3vw,1.3rem)] mt-[clamp(1rem,2vw,2rem)] font-light text-black0 text-center md:text-start">
            {info?.description}
          </p>
          <CtaButton
            text="Request for Proposal"
            className="self-center md:self-start"
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

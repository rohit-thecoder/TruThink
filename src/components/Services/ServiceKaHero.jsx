import Image from 'next/image'
import React from 'react'
import CtaButton from '../CtaButton';


const ServiceKaHero = () => {
  return (
    <section className=" bg-white px-[clamp(1rem,5vw,5rem)] py-[clamp(1.5rem,8vw,5rem)]">
      <div className="w-full  md:h-[90vh] flex flex-col md:flex-row  items-center  md:items-start gap-[clamp(1.5rem,2vw,3.5rem)]  bg-[#F1F9FF] rounded-2xl ">
        {/* Text Content  */}
        <div className="flex flex-col w-full flex-2 gap-[clamp(1.5rem,2vw,3.5rem)] py-[clamp(2rem,5vw,10rem)] px-[clamp(1rem,2vw,3rem)]">
          <h1 className="text-black0 text-[clamp(2rem,4vw,3.5rem)] font-semibold">
            Strategic Finance Partner for Ambitious Startups & Growing SMEs
          </h1>
          <p className="text-[clamp(0.9rem,3vw,1.5rem)] mt-[clamp(1rem,2vw,2rem)] text-black0">
            Building a successful business takes more than just a great idea.
            Whether you’re just validating your business model or scaling to new
            markets, our experts help you stay investor-ready, compliant, and
            financially confident every step of the way.
          </p>
          <CtaButton text="Request for Proposal" className="self-center md:self-start"/>
        </div>
        {/* Image  */}
        <div className="relative flex w-full h-full  flex-1 rounded-xl ">
          <Image
            src="https://images.pexels.com/photos/34358325/pexels-photo-34358325.jpeg"
            alt="hello"
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

"use client";
import Image from "next/image";

export default function About5() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-gray-800">
          <h2 className="text-[30px] md:text-[40px] font-medium text-black0 mb-6 leading-snug">
            At <span className="text-orange-400">TRUTHINK</span>, we help
            businesses think smarter, scale faster, and stay financially
            confident.
          </h2>

          <p className="text-lg text-gray-800 mb-3 ">
            We started with a simple belief — that finance shouldn’t feel
            complicated or intimidating. It should be a partner in your growth
            story. Over time, we’ve built a team that loves turning messy
            spreadsheets into clarity, numbers into insights, and uncertainty
            into direction.
          </p>

          <p className="text-lg text-gray-800 mb-3 ">
            We work with founders, business owners, and finance teams who want
            more than just reports — they want meaning behind the numbers. We
            bring structure, discipline, and honesty to every engagement,
            helping you make decisions with confidence and focus on what truly
            matters — building your business.
          </p>

          <p className="text-lg text-gray-800">
            Every company’s journey is different — and so is ours with you.
            Whether you’re just starting up or scaling across markets, we walk
            beside you with a mix of strategy, empathy, and precision.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg"
              alt="Two persons standing near a window overlooking a cityscape"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Soft gradient overlay for premium look */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}

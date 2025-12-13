// components/HeroSection2.jsx
import Image from "next/image";

export default function Home2() {
  return (
    <section className="relative min-h-screen bg-cover bg-center overflow-hidden">
      <Image
        src="/pngwing.com.png"
        height={2000}
        width={2000}
        alt="Grid overlay"
        className="absolute top-0  w-full md:w-full md:h-full object-cover md:object-contain  
            opacity-10 -z-10 scale-400 md:scale-120  "
      />
      

      <div className="absolute bottom-0 left-0 w-full h-[20px] md:h-[100px] lg:h-[200px] bg-gradient-to-b from-transparent to-white z-[5] pointer-events-none"></div>

      <section className=" relative h-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 text-center pt-10 md:pt-30">
        {/* --- TEXT CONTENT (completely outside image div) --- */}
        <div className="max-w-4xl mx-auto my-16 relative z-10">
          {/* Top Tag */}
          <div className="flex flex-col  md:flex-row justify-center items-center gap-[2px] md:gap-2 mb-6 bg-blue-200 px-4 py-2 rounded-full w-full md:w-fit mx-auto ">
            <span className="text-black text-[16px] font-semibold flex items-center gap-1 bg-white px-2 rounded-full">
              <span className=" h-1.5 bg-white rounded-full"></span>
              COINEST
            </span>
            <span className="text-black text-[16px] ">
              Smarter Money Management
            </span>
          </div>

          {/* Main Heading */}
          {/* <h1 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold  text-[#194FB0] leading-tight tracking-wide mb-6">
          Simplify Finance, <br className="hidden md:inline" />
          Amplify Success
        </h1> */}

          <h1
            className="
    text-[40px] sm:text-5xl md:text-[95px]
    font-extrabold
    text-[#1f1f1f]
    leading-[1.2] tracking-wide 
    mb-6 relative z-2
  "
          >
            Simplify Finance <br className="hidden md:inline" />
            Amplify Success
          </h1>

          {/* Description */}
          <p className="text-[#1f1f1f] text-[18px] md:text-[20px] max-w-2xl mx-auto p-3 leading-relaxed mb-10">
            Clean Books. Strategic Guidance. Industry Specific Expertise. Born
            out of a VC fund, we are the startup accounting firm most founders
            &amp; operators rely on for quality bookkeeping, fractional CFO
            &amp; tax.
          </p>

          {/* Call to Action Button */}
          <button className="bg-[#7BBEF8] cursor-pointer text-white text-base font-medium px-8 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* --- IMAGE SECTION (only the image inside) --- */}
        <div className="mt-10 inset-x-0 bottom-0 max-w-7xl mx-auto z-0">
          <div
            className="relative w-full h-[200px] md:h-[500px] lg:h-[600px]
                    
                     rounded-t-3xl overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[100px] lg:h-[200px] bg-gradient-to-b from-transparent to-white"></div>

            <img
              src="https://lets-viz.com/wp-content/uploads/2023/04/financial-dashboard.jpg"
              alt="Background Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      {/* <hr className="bg-gray-300 h-px" /> */}
    </section>
  );
}

// components/HeroSection2.jsx
import Image from "next/image";

export default function Home2() {
  return (
    <>
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

      <section
        className=" relative h-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 text-center pt-10 md:pt-30"
        style={{
          background: "linear-gradient(to bottom, #ffffff, #ffbc80 )",
        }}
      >
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
    text-[40px] sm:text-5xl md:text-[64px]
    font-medium
    text-[#003B70]
    leading-[1.2] 
    mb-6 relative z-2
  "
          >
            Simplify Finance <br className="hidden md:inline" />
            Amplify Success
          </h1>

          {/* Description */}
          <p className="text-[#003B70] text-[18px] md:text-lg max-w-2xl mx-auto p-3 leading-relaxed mb-10">
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
                     border-t-[10px] border-l-[10px] border-r-[10px] border-gray-300 
                     rounded-t-3xl overflow-hidden"
          >
            <video
              src="https://www.pexels.com/download/video/8348912/"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      </section>
      <hr className="bg-gray-300 border-5 border-gray-300 h-px" />
    </>
  );
}

import { ArrowRight } from "lucide-react";

export default function Service6() {
  return (
    <section className=" py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Startup Program:
        </h2>

        {/* Subheading (Slightly lighter font as in image) */}
        <h3 className="text-4xl md:text-5xl text-gray-800 leading-tight mt-2">
          Special pricing for early-stage startups
        </h3>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          {/* Ise <a> tag (link) banaya hai, jo zyada useful hai */}
          <a
            href="#" // Yahaan apna link daalein
            className="group flex items-center rounded-full overflow-hidden shadow-md cursor-pointer text-sm w-fit"
          >
            {/* Part 1: Text */}
            <div className="inline-flex items-center group cursor-pointer text-lg font-semibold rounded-full overflow-hidden shadow-lg">
              <span className="bg-[#5EA0EF] text-white px-8 py-4 rounded-l-full transition-colors duration-300 group-hover:bg-[#4A90E2]">
                Apply Now
              </span>
              <span
                className="bg-[#1C64F2] text-white p-5 flex items-center justify-center 
                   transition-all duration-300 group-hover:translate-x-1 rounded-r-full"
              >
                <ArrowRight className="w-6 h-6" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

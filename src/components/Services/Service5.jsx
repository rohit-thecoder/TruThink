// components/WhyPreferUs.jsx
"use client";



export default function Service5({features}) {
  
  return (
    <section className=" py-20 md:py-36 px-5 my-20 sm:px-8 lg:px-5 bg-[#5ea0ef]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-14 gap-5 md:gap-26 items-center">
        {/* --- LEFT TEXT COLUMN --- */}
        <div className="lg:col-span-5 ">
          <div className="">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black0 leading-tight  ">
              Why{" "}
              <span className="bg-[#f7c72d] text-black0 p-2 rounded-xl inline-block -rotate-1">
                Startups
              </span>{" "}
              Prefer Us
            </h2>
          </div>
          <p className="mt-6 text-lg sm:text-lg text-[#0f172a] leading-relaxed">
            Simple: Our track record and talent. We are your long-term startup
            accounting partner, backed by a Indian-based team that handles only
            a few clients at a time. That means you get high-touch service, deep
            understanding of your business, and a partner that feels truly
            in-house.
          </p>

          <p className="mt-4 text-lg sm:text-lg text-[#0f172a] leading-relaxed">
            Here are a few key reasons why hundreds of startups trust us.
          </p>
        </div>

        {/* --- CENTER TIMELINE COLUMN --- */}
        <div className="lg:col-span-4 relative flex justify-center py-10 text-[#211e1c]">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-[#7BBEF8]"></div>

            {/* Feature List */}
            <div className="relative z-10 flex flex-col gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center relative">
                  {/* Dot */}
                  <span
                    className={`absolute left-0 w-5 h-5 rounded-full border-2 border-white shadow-sm 
                      ${
                        feature.active
                          ? "bg-[#F6921E] scale-110"
                          : "bg-[#CFE8FF]"
                      }`}
                  ></span>
                  {/* Text */}
                  <span
                    className={`ml-10 text-lg   ${
                      feature.active
                        ? "text-[#ffffff] font-bold sm:text-2xl"
                        : "text-[211e1c] font-medium sm:text-xl"
                    }`}
                  >
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT CARD COLUMN --- */}
        <div className="lg:col-span-5">
          <div className="bg-[#FFFBF7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              We support you from seed to exit — no need to switch firms as you
              grow. From day one bookkeeping to CFO-level financial strategy, we
              scale alongside your startup.
            </p>

            {/* --- Image Placeholder (Replace with Next/Image) --- */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-200">
              {/* Example static image */}
              <img
                src="https://plus.unsplash.com/premium_photo-1661277666101-01fb123f2a4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                alt="Startup team working together"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

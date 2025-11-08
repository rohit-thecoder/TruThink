// components/WhyPreferUs.jsx
"use client";



export default function Service5() {
  const features = [
    { name: "Scalable financial systems", active: true },
    { name: "Dedicated startup accountants", active: false },
    { name: "Data-driven CFO insights", active: false },
    { name: "End-to-end automation", active: false },
    { name: "24/7 support & transparent pricing", active: false },
  ];

  return (
    <section className=" py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* --- LEFT TEXT COLUMN --- */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2271B8] leading-tight">
            Why Startups Prefer Us
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            Simple: Our track record and talent. We are your long-term startup
            accounting partner, backed by a US-based team that handles only a
            few clients at a time. That means you get high-touch service, deep
            understanding of your business, and a partner that feels truly
            in-house.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Here are a few key reasons why hundreds of startups trust us.
          </p>
        </div>

        {/* --- CENTER TIMELINE COLUMN --- */}
        <div className="lg:col-span-2 relative flex justify-center py-10">
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
                    className={`ml-10 text-base sm:text-lg font-medium ${
                      feature.active ? "text-[#1C64F2]" : "text-gray-800"
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
              “We support you from seed to exit — no need to switch firms as you
              grow. From day one bookkeeping to CFO-level financial strategy, we
              scale alongside your startup.”
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

import Image from "next/image";

const features = [
  {
    title: "Value-based Pricing",
    description:
      "We price our services based on the value we create, not hours billed. You pay for outcomes that move your business forward.",
  },
  {
    title: "Deliver Insights driving decisions",
    description:
      "We go beyond reports to deliver insights you can act on. Every number tells a story that supports smarter, faster decisions.",
  },
  {
    title: "Not a cost center anymore",
    description:
      "Your finance function becomes a growth enabler, not an expense. We help unlock savings, efficiency, and strategic clarity",
  },
  {
    title: "Like your In-house team",
    description:
      "We work as an extension of your internal team. Proactive, accountable, and aligned with your business goals.",
  },
];

export default function Home4() {
  return (
    <section className="py-15 md:py-30 px-4 sm:px-20 lg:px-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-center font-bold leading-tight">
          Services That Compliments The Current Startups Needs.
        </h2>

        {/* 1️⃣ IMAGE ROW */}
        {/* IMAGE WRAPPER */}
        <div className="mt-14 w-full h-[420px] md:h-[550px] relative rounded-3xl overflow-hidden shadow-lg">
          {/* Image */}
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="Startup team working in a modern office"
            fill
            className="object-cover"
            priority
          />

          {/* BLACK SHADOW FADE (CONTROLLED HEIGHT) */}
          <div
            className="absolute bottom-0 left-0 w-full h-[50%] lg:h-[45%] 
                  bg-gradient-to-t from-black via-black/90 to-transparent"
          />

          {/* TEXT OVER SHADOW */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl">
              Built for founders who want clarity, control, and confident
              growth.
            </p>
            
          </div>
        </div>

        {/* 2️⃣ FEATURES ROW */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex justify-between items-stretch border border-[#F6921E] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="bg-[#F6921E] text-white flex items-center justify-center px-4">
                <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-medium tracking-wider">
                  Feature
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3️⃣ CTA ROW */}
        <div className="mt-20 flex justify-center">
          <button className="cursor-pointer px-10 py-4 text-lg font-semibold rounded-full bg-[#F6921E] text-white hover:bg-[#e58218] transition shadow-lg">
            Get a Proposal
          </button>
        </div>
      </div>
    </section>
  );
}

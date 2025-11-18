import Image from "next/image";

// Data for the four feature cards
const features = [
  {
    title: "One-Stop-Shop",
    description:
      "You'll never need to work with another startup accounting firm again. We handle everything from bookkeeping to CFO to tax and more.",
  },
  {
    title: "Fair and Transparent Pricing",
    description:
      "Startups need fair, predictable pricing for outsourced accounting & CFO to survive and grow. That's why we offer a simple, fixed monthly pricing model that is presented up front.",
  },
  {
    title: "In-House Feel",
    description:
      "Startups prefer us because we replicate the feeling of working with an in-house team. We communicate regularly via slack, email and/or calls...we are a true extension of your team.",
  },
  {
    title: "Long-Term Partner",
    description:
      "We are one of the only startup accounting & finance firms that can scale with you from just a few founders to hundreds of millions in revenue. Our engagement with you evolves as your needs and resources evolve.",
  },
];

export default function Home4() {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Main Heading --- */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16">
          The New Wave of Startup Accounting
        </h2>

        {/* --- Main Content Grid (2 Columns) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT COLUMN (Image) --- */}
          <div className="w-full h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Startup team working in a modern office"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
              priority
            />
          </div>

          {/* --- RIGHT COLUMN (Feature List) --- */}
          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex justify-between items-stretch border-1 border-[#F6921E] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Left Content (Circle + Text) */}
                <div className="flex items-center gap-5 p-6 rounded">
                  {/* Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-200 rounded-full"></div>
                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Right Tab (Orange with Vertical Text) */}
                <div className="flex-shrink-0 bg-[#F6921E] text-white flex items-center justify-center p-4 cursor-pointer transition-colors rounded-xl">
                  <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-medium tracking-wider">
                    Get a Proposal
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

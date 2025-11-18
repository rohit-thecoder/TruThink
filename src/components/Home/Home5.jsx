import Image from "next/image";

export default function Home5() {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      {/* Container ko text-center ki jagah flex-col aur items-center banaya */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* --- Online Image --- */}
        <div className="w-full h-80 md:h-96 relative bg-gray-200 rounded-3xl overflow-hidden shadow-lg mb-12">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2832"
            alt="SaaS team meeting"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* --- Testimonial Quote --- */}
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug text-center max-w-3xl">
          “I feel like I’ve got a resident expert from the SaaS world advising
          us. Graphite’s team always had a great expert response because this
          was probably the hundredth time they were dealing with any particular
          scenario.”
        </blockquote>

        {/* --- Author Attribution --- */}
        <div className="inline-flex items-center gap-3 bg-[#FFF7EF] rounded-full px-4 py-2 mt-8">
          {/* Author Avatar */}
          <Image
            // Placeholder avatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
            alt="Andres Fabris, CEO"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          {/* Author Name & Title */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Andres Fabris</p>
            <p className="text-xs text-gray-600">CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}

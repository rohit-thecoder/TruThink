import Image from "next/image";

export default function Contact1() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Team collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1544106093-f32f05a91176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Business meeting",
    },
    {
      src: "https://images.unsplash.com/photo-1563986768605-e4b77ac822b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Handshake deal",
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Working together",
    },
  ];

  return (
    <section className=" bg-white py-16 px-4">
      {/* 1. White container ki padding badha di hai (px-8 py-12 md:py-16) */}
      <div className="max-w-6xl mx-auto rounded-3xl px-8 py-12 md:py-16">
        {/* 2. Heading ko responsive bana diya hai (text-3xl sm:text-4xl) */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
          <span className="text-orange-500">Contact</span> &{" "}
          <span className="text-blue-600">Join Together</span>
        </h2>

        {/* 3. Image grid pehle se hi 'justify-center' use kar raha tha, jo sahi hai. */}
        {/* Gap ko responsive kar diya hai (gap-6 sm:gap-8) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {images.map((img, index) => (
            // 4. Image size ko responsive bana diya hai
            <div
              key={index}
              className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 
                         bg-gray-300 rounded-2xl overflow-hidden shadow-md
                         hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

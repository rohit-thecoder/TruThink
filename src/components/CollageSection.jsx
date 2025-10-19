"use client";

import Image from "next/image";

export default function CollageSection() {
  const photos = Array.from({ length: 35 }, (_, i) => `https://picsum.photos/600/800?random=${i + 1}`);

  return (
    <div className="w-full overflow-x-hidden text-gray-800 font-sans bg-gray-50">
      {/* Header */}
      <header className="py-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider uppercase">Photo Collage Showcase</h1>
        <p className="mt-3 text-lg opacity-90">Scroll down to experience motion-driven art</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-20 py-16">
        {/* Section One */}
        <section className="max-w-3xl mx-auto space-y-6 px-4 leading-relaxed text-gray-700">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium voluptate rerum iste perferendis debitis accusantium.</p>
          <p>Nemo, corporis repellendus sed est dicta eveniet maxime, tenetur dolor consequatur rerum minus corrupti voluptatibus fugiat.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/1280/720?random=1"
              alt="Sample"
              width={1280}
              height={720}
              className="object-cover w-full"
            />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae dolor ut, aut minus.</p>
        </section>

        {/* Collage Animation Block */}
        <div className="relative h-[200vh] bg-gray-100">
          <div className="sticky top-[20vh] h-[60vh] overflow-hidden flex items-center justify-center bg-gray-200 rounded-3xl shadow-lg">
            <div className="grid grid-cols-7 gap-2 rotate-[38deg] scale-105">
              {photos.map((url, idx) => (
                <div
                  key={idx}
                  className="w-[18vmax] aspect-[3/4] transition-transform duration-700 hover:scale-105"
                >
                  <Image
                    src={url}
                    alt={`photo-${idx}`}
                    width={600}
                    height={800}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Two */}
        <section className="max-w-3xl mx-auto space-y-6 px-4 leading-relaxed text-gray-700">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus amet vitae voluptatibus ut veritatis error.</p>
          <p>Quam incidunt voluptate quidem cumque officiis voluptas amet minus quisquam veniam ullam veritatis fugit.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/1280/720?random=3"
              alt="Sample"
              width={1280}
              height={720}
              className="object-cover w-full"
            />
          </div>
          <p>Quasi doloribus mollitia, autem quia animi beatae non explicabo accusantium nemo et.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">Peace! ʕ·ᴥ·ʔ</h2>
        <p className="mt-2 text-sm opacity-90">Crafted with love using Next.js + Tailwind</p>
      </footer>
    </div>
  );
}

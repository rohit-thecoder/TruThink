"use client";
import React, { useState } from "react";

export default function CardStack() {
  const [active, setActive] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Watchtower",
      img: "https://picsum.photos/id/641/300/200",
      alt: "watch tower",
      poem: [
        "A lone watchtower stands by the moaning shore, its shadow long, though eyes watch no more.",
        "Salt-kissed winds whisper secrets of the sea, but no soul stirs in its silent decree.",
        "Once it scanned the horizon, steadfast and proud, now only gulls cry beneath gathering cloud.",
        "Rust etches poems in its weathered face, time’s fingerprints left in every trace.",
      ],
    },
    {
      id: 2,
      title: "Whispers in the Mist",
      img: "https://picsum.photos/id/634/300/200",
      alt: "forest mist",
      poem: [
        "The forest sleeps beneath a shroud of grey, where dawn forgets to find its way.",
        "Each branch is cloaked in silver breath, suspended still, in quiet death.",
        "No bird dares break the woven hush, no footstep stirs the softened brush.",
        "Only the mist moves, slow and thin, like ghostly fingers drawing in.",
      ],
    },
    {
      id: 3,
      title: "The Pineapple in the Field",
      img: "https://picsum.photos/id/824/300/200",
      alt: "computer",
      poem: [
        "There once was a pineapple, proud and round, who somehow sprouted in farming ground.",
        "Among the wheat and rows of corn, he stood confused, alone, forlorn.",
        "The carrots laughed, 'You’re not from here!' but Pineapple puffed his leafy crown.",
        "He stood tall, bright, and never bowed down.",
      ],
    },
  ];

  const handleNext = () => setActive(active === cards.length ? 1 : active + 1);

  const getCardClasses = (id) => {
    if (id === active)
      return "translate-y-0 scale-100 opacity-100 z-30";
    if (id === ((active % cards.length) + 1))
      return "-translate-y-6 scale-95 opacity-80 z-20";
    return "-translate-y-12 scale-90 opacity-60 z-10";
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white py-12 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        🌄 Learn Finance
      </h1>

      <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
        {cards.map((card) => (
          <article
            key={card.id}
            className={`absolute inset-0 transform transition-all duration-500 ease-in-out bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden ${getCardClasses(card.id)}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#00bcd4] to-[#26c6da] text-white">
              <h2 className="font-semibold text-lg">{card.title}</h2>
              <button
                onClick={handleNext}
                className="text-2xl font-bold hover:rotate-90 transition-transform"
              >
                ↻
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-40 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />
              <div className="max-h-40 overflow-y-auto">
                {card.poem.map((line, i) => (
                  <p key={i} className="text-sm text-gray-700 leading-relaxed mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

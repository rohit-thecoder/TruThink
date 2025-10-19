"use client";

import { useState } from "react";

function FlippingCard() {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full max-w-xl h-[26rem] perspective">
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-white rounded-lg shadow-xl backface-hidden transition-transform duration-500 transform ${
            flipped ? "rotate-y-180" : "rotate-y-0"
          }`}
        >
          <div className="overflow-hidden rounded-lg p-4 h-full flex flex-col">
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/4389389/pexels-photo-4389389.jpeg"
              alt="Card front"
            />

            <figcaption
              className="mt-auto p-2 cursor-pointer bg-white rounded-b-lg shadow-inner"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h4 className="flex justify-between items-center text-gray-700 font-semibold">
                1.1.0 Lorem ipsum
                <span className="text-green-500 text-lg">{hovered ? "-" : "+"}</span>
              </h4>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  hovered ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quidem. Accusantium adipisci a nam dignissimos cupiditate voluptates sed, commodi natus unde itaque dolor.
                </p>
                <button
                  className="mt-2 px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                  onClick={() => setFlipped(true)}
                >
                  Read the back &#x27F6;
                </button>
              </div>
            </figcaption>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full bg-white rounded-lg shadow-xl backface-hidden rotate-y-180 transition-transform duration-500 transform ${
            flipped ? "rotate-y-0" : "rotate-y-180"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
              <h2 className="text-lg font-semibold">1.1.0 Lorem ipsum - dolor sit amet.</h2>
              <button
                className="px-3 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-900"
                onClick={() => setFlipped(false)}
              >
                Back to front &#x21A9;
              </button>
            </div>
            <p className="text-gray-600 text-sm flex-grow overflow-y-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum facilis fugit corporis non suscipit quod? Assumenda amet nisi, ratione eaque harum recusandae? Sunt maiores voluptatum quaerat illum accusamus voluptate id unde officia neque...
            </p>
          </div>
        </div>
      </div>
  );
}
function FlippingCardTwo() {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full max-w-xl h-[26rem] perspective">
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-white rounded-lg shadow-xl backface-hidden transition-transform duration-500 transform ${
            flipped ? "rotate-y-180" : "rotate-y-0"
          }`}
        >
          <div className="overflow-hidden rounded-lg p-4 h-full flex flex-col">
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
              alt="Cityscape"
            />

            <figcaption
              className="mt-auto p-2 cursor-pointer bg-white rounded-b-lg shadow-inner"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h4 className="flex justify-between items-center text-gray-700 font-semibold">
                2.0.0 Dolor Sit
                <span className="text-blue-500 text-lg">{hovered ? "-" : "+"}</span>
              </h4>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  hovered ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-500 text-sm">
                  Consectetur adipisicing elit. Molestias, quidem. Accusantium adipisci a nam dignissimos cupiditate voluptates sed.
                </p>
                <button
                  className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                  onClick={() => setFlipped(true)}
                >
                  Read the back &#x27F6;
                </button>
              </div>
            </figcaption>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full bg-white rounded-lg shadow-xl backface-hidden rotate-y-180 transition-transform duration-500 transform ${
            flipped ? "rotate-y-0" : "rotate-y-180"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
              <h2 className="text-lg font-semibold">2.0.0 Dolor Sit - Consectetur.</h2>
              <button
                className="px-3 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-900"
                onClick={() => setFlipped(false)}
              >
                Back to front &#x21A9;
              </button>
            </div>
            <p className="text-gray-600 text-sm flex-grow overflow-y-auto">
              Suscipit quod? Assumenda amet nisi, ratione eaque harum recusandae? Sunt maiores voluptatum quaerat illum accusamus voluptate id unde officia neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum facilis fugit corporis non...
            </p>
          </div>
        </div>
      </div>
  );
}

export default function FlippingCardsPage() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-200 p-8 gap-12">
            <FlippingCard />
            <FlippingCardTwo />
            <style jsx>{`
                .perspective {
                  perspective: 2000px;
                }
                .backface-hidden {
                  backface-visibility: hidden;
                }
                .rotate-y-180 {
                  transform: rotateY(180deg);
                }
                .rotate-y-0 {
                  transform: rotateY(0deg);
                }
            `}</style>
        </div>
    )
}

"use client";
import React from "react";

export default function CardEffect() {
  return (
    <div className="w-full flex flex-wrap justify-center items-start bg-white">
      {/* Card 1 */}
      <div className="relative max-w-[262px] bg-[#f2f8f9] rounded-md p-8 m-3 overflow-hidden z-0">
        <a href="#" className="block relative no-underline text-gray-600 group">
          <p className="text-[17px] font-normal leading-5">This is heading</p>
          <p className="text-[14px] mt-2">
            Card description with lots of great facts and interesting details.
          </p>

          {/* expanding circle */}
          <span
            className="absolute top-[-16px] right-[-16px] h-8 w-8 rounded-full bg-[#00838d] scale-100 transition-transform duration-300 ease-out -z-10 group-hover:scale-[21]"
          ></span>

          {/* arrow corner */}
          <div className="absolute top-0 right-0 h-8 w-8 bg-[#00838d] rounded-tr-md rounded-bl-[32px] flex items-center justify-center text-white font-mono">
            →
          </div>

          {/* hover text color */}
          <style jsx>{`
            a:hover p {
              transition: all 0.3s ease-out;
              color: rgba(255, 255, 255, 0.8);
            }
          `}</style>
        </a>
      </div>

      {/* Card 2 */}
      <div className="relative max-w-[262px] bg-[#f2f8f9] rounded-md p-8 m-3 overflow-hidden z-0">
        <a href="#" className="block relative no-underline text-gray-600 group">
          <p className="text-[17px] font-normal leading-5">Second Card</p>
          <p className="text-[14px] mt-2">
            This card now has the same hover animation and design.
          </p>

          {/* expanding circle */}
          <span
            className="absolute top-[-16px] right-[-16px] h-8 w-8 rounded-full bg-[#00838d] scale-100 transition-transform duration-300 ease-out -z-10 group-hover:scale-[21]"
          ></span>

          {/* arrow corner */}
          <div className="absolute top-0 right-0 h-8 w-8 bg-[#00838d] rounded-tr-md rounded-bl-[32px] flex items-center justify-center text-white font-mono">
            →
          </div>

          {/* hover text color */}
          <style jsx>{`
            a:hover p {
              transition: all 0.3s ease-out;
              color: rgba(255, 255, 255, 0.8);
            }
          `}</style>
        </a>
      </div>

      {/* Card 3 */}
      <div className="relative max-w-[262px] bg-[#f2f8f9] rounded-md p-8 m-3 overflow-hidden z-0">
        <a href="#" className="block relative no-underline text-gray-600 group">
          <p className="text-[17px] font-normal leading-5">Third Card</p>
          <p className="text-[14px] mt-2">
            Same clean design, same hover expansion effect.
          </p>

          {/* expanding circle */}
          <span
            className="absolute top-[-16px] right-[-16px] h-8 w-8 rounded-full bg-[#00838d] scale-100 transition-transform duration-300 ease-out -z-10 group-hover:scale-[21]"
          ></span>

          {/* arrow corner */}
          <div className="absolute top-0 right-0 h-8 w-8 bg-[#00838d] rounded-tr-md rounded-bl-[32px] flex items-center justify-center text-white font-mono">
            →
          </div>

          {/* hover text color */}
          <style jsx>{`
            a:hover p {
              transition: all 0.3s ease-out;
              color: rgba(255, 255, 255, 0.8);
            }
          `}</style>
        </a>
      </div>

      {/* Card 4 */}
      <div className="relative max-w-[262px] bg-[#f2f8f9] rounded-md p-8 m-3 overflow-hidden z-0">
        <a href="#" className="block relative no-underline text-gray-600 group">
          <p className="text-[17px] font-normal leading-5">Fourth Card</p>
          <p className="text-[14px] mt-2">
            Same style with expanding teal hover background.
          </p>

          {/* expanding circle */}
          <span
            className="absolute top-[-16px] right-[-16px] h-8 w-8 rounded-full bg-[#00838d] scale-100 transition-transform duration-300 ease-out -z-10 group-hover:scale-[21]"
          ></span>

          {/* arrow corner */}
          <div className="absolute top-0 right-0 h-8 w-8 bg-[#00838d] rounded-tr-md rounded-bl-[32px] flex items-center justify-center text-white font-mono">
            →
          </div>

          {/* hover text color */}
          <style jsx>{`
            a:hover p {
              transition: all 0.3s ease-out;
              color: rgba(255, 255, 255, 0.8);
            }
          `}</style>
        </a>
      </div>
    </div>
  );
}

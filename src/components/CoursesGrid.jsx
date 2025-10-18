"use client";
import React from "react";

export default function CoursesGrid() {
  const courses = [
    { title: "UI/Web & Graph design for teenagers 11-17 years old", date: "04.11.2022", color: "bg-yellow-500" },
    { title: "UX/UI Web-Design + Mobile Design", date: "04.11.2022", color: "bg-green-500" },
    { title: 'Annual package "Product+UX/UI+Graph designer 2022"', date: "04.11.2022", color: "bg-red-600" },
    { title: "Graphic Design", date: "04.11.2022", color: "bg-purple-600" },
    { title: "Motion Design", date: "30.11.2022", color: "bg-pink-500" },
    { title: "Front-end development + jQuery + CMS", date: "", color: "bg-blue-600" },
    { title: "Digital Marketing", date: "", color: "bg-indigo-500" },
    { title: "Interior Design", date: "31.10.2022", color: "bg-orange-500" },
  ];

  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <div className="max-w-[1140px] mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, idx) => (
          <a
            key={idx}
            href="#"
            className="relative block p-8 bg-gray-900 rounded-3xl overflow-hidden group transition-all duration-500"
          >
            {/* Default corner circle */}
            <div
              className={`absolute top-5 right-5 w-16 h-16 ${course.color} rounded-full z-0 transition-transform duration-500 transform group-hover:scale-[15]`}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-white text-2xl font-bold mb-4">{course.title}</h2>
              {course.date && (
                <div className="text-white text-lg">
                  Start:{" "}
                  <span className="font-bold text-yellow-400 group-hover:text-white transition-colors duration-300">
                    {course.date}
                  </span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

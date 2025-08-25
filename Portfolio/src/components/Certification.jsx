import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
  { id: 1, name: "Application Arcitect web and mobile", image: "\LtsuApplicationArchitect.png" },
  { id: 1, name: "Experimental Project", image: "\MCA degree.jpg" },
  { id: 1, name: "Logic Building project", image: "\LtsuApplicationArchitect.png" },

];

const Certification = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800  mb-18">
        Certifications
      </h2>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute -left-30 p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
        >
          <ChevronLeft size={28} className="text-gray-700 dark:text-gray-200" />
        </button>

        {/* Carousel */}
        <div className="flex items-center justify-center">
          <div
            className="transition-transform duration-300 rounded-lg shadow-md border border-blue-500 scale-110"
            style={{ width: "600px", height: "450px" }}
          >
            <img
              src={certifications[activeIndex].image}
              alt={certifications[activeIndex].name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>


        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute -right-30 p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
        >
          <ChevronRight size={28} className="text-gray-700 dark:text-gray-200" />
        </button>
      </div>

      {/* Certification Name */}
      <p className="mt-16 text-xl font-semibold text-gray-800 ">
        {certifications[activeIndex].name}
      </p>
    </div>
  );
};

export default Certification;

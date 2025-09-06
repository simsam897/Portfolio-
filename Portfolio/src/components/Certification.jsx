import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
  { id: 1, name: "Application Architect (Web & Mobile)", image: "/LtsuApplicationArchitect.png" },
  { id: 2, name: "MCA Degree", image: "/MCA degree.jpg" },
  { id: 3, name: "Logic Building Project", image: "/LtsuApplicationArchitect.png" },
];

const Certification = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h2>

        {/* Flex wrapper keeps arrows beside image instead of overlapping */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="
              p-2 rounded-full bg-white dark:bg-gray-800 shadow
              hover:scale-105 transition
            "
          >
            <ChevronLeft size={28} className="text-gray-700 dark:text-gray-200" />
          </button>

          {/* Image */}
          <div className="w-full max-w-[680px] rounded-lg shadow-md border border-blue-500 bg-white">
            <img
              src={certifications[activeIndex].image}
              alt={certifications[activeIndex].name}
              className="block w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="
              p-2 rounded-full bg-white dark:bg-gray-800 shadow
              hover:scale-105 transition
            "
          >
            <ChevronRight size={28} className="text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Name */}
        <p className="mt-6 text-xl font-semibold text-gray-800 text-center">
          {certifications[activeIndex].name}
        </p>
      </div>
    </section>
  );
};

export default Certification;

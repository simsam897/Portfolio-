import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

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
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          Certifications
        </h2>

        {/* Flex wrapper keeps arrows on sides */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="p-2 sm:p-3 md:p-4 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
          >
            <FaChevronCircleLeft
              size={20} // small screens
              className="sm:hidden text-gray-700 dark:text-gray-200"
            />




            <FaChevronCircleLeft
              size={28} // medium+
              className="hidden sm:block text-gray-700 dark:text-gray-200"
            />
          </button>

          {/* Certificate Image */}
          <div className="w-full max-w-[360px] sm:max-w-[500px] md:max-w-[680px] rounded-lg shadow-md border border-blue-500 bg-white overflow-hidden">
            <img
              src={certifications[activeIndex].image}
              alt={certifications[activeIndex].name}
              className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] object-contain"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="p-2 sm:p-3 md:p-4 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
          >
            <FaChevronCircleRight
              size={20}
              className="sm:hidden text-gray-700 dark:text-gray-200"
            />
            <FaChevronCircleRight
              size={28}
              className="hidden sm:block text-gray-700 dark:text-gray-200"
            />
          </button>
        </div>

        {/* Certificate Name */}
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center">
          {certifications[activeIndex].name}
        </p>
      </div>
    </section>
  );
};

export default Certification;

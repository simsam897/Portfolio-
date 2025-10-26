import React from "react";
export default function Education() {
  const timeline = [
    { year: "2018-2021", title: "Bacheloer's of computer applications", institution: "Ludhiana group of colleges , chowki mann" },
    { year: "2021-2023", title: "Master of computer applications", institution: "Ludhiana group of colleges , chowki mann" },
    { year: "2023-may2024", title: "Web development course", institution: "Lamrin tech sills university , Ropar" },
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
        {timeline.map((item, index) => (
          <div key={index} className="mb-10 relative">
            <span className=" sm:relative sm:block sm:mb-2  text-lg font-semibold text-blue-950 ">
              {item.year}
            </span>
            <div className="bg-[#85BEFF] p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

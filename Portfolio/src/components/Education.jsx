import React from "react";
export default function Education() {
  const timeline = [
    { year: "2020", title: "B.Sc. in Computer Science", institution: "ABC University" },
    { year: "2022", title: "Frontend Developer Internship", institution: "XYZ Company" },
    { year: "2023", title: "React.js Specialization", institution: "Online Course" },
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
        {timeline.map((item, index) => (
          <div key={index} className="mb-10 relative">
            <span className=" sm:relative sm:block sm:mb-2 lgx:ml-[-5rem] text-lg font-semibold text-gray-700 dark:text-gray-300">
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

import React from "react";
import { FaReact, FaJs, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { MdApi } from "react-icons/md";

const About = () => {
  const skills = [
    { label: "React", icon: <FaReact className="text-blue-500" /> },
    { label: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { label: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { label: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { label: "API Integration", icon: <MdApi className="text-green-600" /> },

  ];

  return (
    <div className="max-w-6xl flex flex-col justify-center mx-auto gap-10  md-about:flex-row  md-about:items-start   ">
      {/* About Section */}
      <section className="mx-auto max-w-4xl px-4 py-10 w-[50%]">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-slate-700 max-w-3xl">
          I'm a frontend developer with a passion for creating user-friendly,
          responsive web applications. I enjoy building modern, accessible
          interfaces with clean and fast code.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-4xl px-4 py-10 w-[50%]  overflow-auto">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="md:flex md:flex-wrap md:content-start overflow-x-visible  gap-3 mt-4    ">
          {skills.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 m-2.5 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200"
            >
              {s.icon}
              {s.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

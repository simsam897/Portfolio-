import React from 'react'

const About = () => {

  const skills = [
    { label: "React" },
    { label: "JavaScript" },
    { label: "Redux" },
    { label: "Tailwind CSS" },
    { label: "Git" },
    { label: "API Integration" },
  ];
  return (
    <div className='flex flex-col gap-5  sm:flex-row'>
      <section className="mx-auto max-w-6xl px-4 py-10 w-[50%]">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-slate-700 max-w-2xl">
          I'm a frontend developer with a passion for creating user‑friendly, responsive web applications. I enjoy building modern, accessible interfaces with clean and fast code.
        </p>


      </section>


      <section className="mx-auto :max-w-6xl px-4 w-[50%] py-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="  grid   grid-cols-2   gap-1.5
        sm:flex-wrap gap-3 mt-4">
          {skills.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {s.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
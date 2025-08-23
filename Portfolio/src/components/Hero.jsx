import React from 'react'

const Hero = () => {
  return (

    <section id="home" className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* text-section  */}
      <div>
        <div className="inline-flex h-6 w-6 items-center justify-center rounded border text-xs font-semibold mb-6">SS</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Simranjit Singh</h1>
        <p className="mt-2 text-xl text-blue-700 font-semibold">Frontend Developer</p>
        <p className="mt-4 text-slate-600">
          Building clean, interactive UIs with React & modern JavaScript.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            View Projects
          </a>
          <a href="/contact" className="inline-flex items-center rounded-md border border-blue-600 px-4 py-2 text-blue-700 hover:bg-blue-50">
            Contact
          </a>
        </div>
      </div>
      {/* // ProfilePicture  */}
      <div className="flex justify-center md:justify-center">
        <div className="h-64 w-64 rounded-3xl bg-gradient-to-b from-blue-300 to-blue-600 p-1">
          <img src="WhatsApp Image 2025-04-02 at 06.53.23_acc77da1.jpg" alt="Avatar" className=" p-10 w-full rounded-b-2xl  object-cover " />
        </div>
      </div>
    </section>

  )
}

export default Hero
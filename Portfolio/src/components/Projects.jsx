import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS showcasing projects , my education details , expericence and contact me with multiple ways.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJGddJ1Z_ixOzZa9q11y483VyRGQ6toS6EA&s",
    link: "#",
  },
  {
    title: "Blog site",
    description:
      "This Blog site platform userful in createing blog  easily by user and admin . Admin can delete any user or post",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJGddJ1Z_ixOzZa9q11y483VyRGQ6toS6EA&s",
    link: "#",
  },
  {
    title: "Library management system",
    description:
      "RLinrary managment system which usefull to mange main tasks that are performed by librarian like adding new book , delete book , add new member , delete user and user can perform tasks like search a book  , borrow  a book .",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJGddJ1Z_ixOzZa9q11y483VyRGQ6toS6EA&s",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white  py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 ">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-black  max-w-2xl mx-auto bg-[#b1c5db] rounded">
            Here are some of my recent works demonstrating my front-end and
            full-stack development skills.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-white">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" border-1 rounded-xl  overflow-hidden "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover bg-white "
              />
              <div className="p-6 ">
                <h3 className="text-xl font-semibold text-blue-600  mb-2">
                  {project.title}
                </h3>
                <p className=" mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

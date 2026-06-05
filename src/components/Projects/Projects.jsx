import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 bg-[#111827] text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Projects
          </h2>

          <p className="text-zinc-400 text-lg">
            Some of the projects I built using ReactJS,
            Python, JavaScript, and modern web technologies.
          </p>

        </div>

        {/* Projects Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
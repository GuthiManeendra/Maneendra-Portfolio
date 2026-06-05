import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  // If Project Not Found

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <h2 className="text-4xl font-bold">
          Project Not Found
        </h2>
      </section>
    );
  }

  return (
    <section
      className="
        min-h-screen
        bg-[#0f172a]
        text-white
        px-6
        py-24
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-3
            mb-10
            text-cyan-400
            hover:text-white
            transition
          "
        >
          <FaArrowLeft />
          Back To Home
        </Link>

        {/* Project Image */}

        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            mb-12
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-[500px]
              object-cover
            "
          />

        </div>

        {/* Content */}

        <div
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-10
          "
        >

          {/* Title */}

          <h1
            className="
              text-5xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
              mb-6
            "
          >
            {project.title}
          </h1>

          {/* Description */}

          <p
            className="
              text-zinc-300
              leading-9
              text-lg
              mb-10
            "
          >
            {project.description}
          </p>

          {/* Tech Stack */}

          <div className="mb-10">

            <h3 className="text-2xl font-semibold mb-5">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-4">

              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="
                    px-5
                    py-3
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-zinc-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5">

            {/* GitHub */}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-full
                bg-white/5
                border
                border-white/10
                hover:bg-cyan-400
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FaGithub />
              View Code
            </a>

            {/* Live Demo */}

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                text-black
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;
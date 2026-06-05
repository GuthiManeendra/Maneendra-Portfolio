import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        group
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        hover:-translate-y-3
        hover:border-cyan-400/40
        transition-all
        duration-500
      "
    >

      {/* Project Image */}

      <div className="overflow-hidden">

        <img
          src={project.images}
          alt={project.title}
          className="
            w-full
            h-60
            object-cover
            group-hover:scale-110
            transition-transform
            duration-500
          "
        />

      </div>

      {/* Content */}

      <div className="p-7">

        {/* Project Title */}

        <h3 className="text-3xl font-semibold mb-4 text-white">
          {project.title}
        </h3>

        {/* Description */}

        <p className="text-zinc-400 leading-7 mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mb-8">

          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="
                px-4
                py-2
                rounded-full
                bg-white/5
                border
                border-white/10
                text-sm
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}


      </div>

    </div>
  );
};

export default ProjectCard;
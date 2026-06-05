import skills from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 bg-[#0f172a] text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Skills
          </h2>

          <p className="text-zinc-400 text-lg">
            Technologies and tools I use to build modern web applications
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-5
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}

                <div
                  className="
                    text-5xl
                    text-cyan-400
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <Icon />
                </div>

                {/* Skill Name */}

                <h3 className="text-lg font-medium text-zinc-200 text-center">
                  {skill.name}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-24 bg-[#111827] text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Internship Experience
          </h2>

          <p className="text-zinc-400 text-lg">
            My practical learning journey and development experience
          </p>

        </div>

        {/* Timeline */}

        <div className="relative border-l border-cyan-400/30 pl-10 space-y-14">

          {/* First Internship */}

          <div className="relative">

            {/* Timeline Dot */}
            <div className="absolute -left-[49px] top-3 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

              {/* Top Section */}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                <div>

                  <h3 className="text-3xl font-semibold flex items-center gap-3">
                    <FaBriefcase className="text-cyan-400" />
                    Python Full Stack Development Intern
                  </h3>

                  <p className="text-cyan-400 mt-2 text-lg">
                    AchieversIT
                  </p>

                </div>

                <span className="px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm w-fit">
                  6 Months Internship
                </span>

              </div>

              {/* Description */}

              <div className="space-y-5 text-zinc-300 leading-8">

                <p>
                  Learned frontend technologies including HTML,
                  CSS, JavaScript, and ReactJS for building
                  responsive and interactive user interfaces.
                </p>

                <p>
                  Gained backend development knowledge in Python,
                  including functions, loops, conditional statements,
                  and object-oriented programming concepts.
                </p>

                <p>
                  Worked with SQL for database creation, queries,
                  and efficient data management.
                </p>

                <p>
                  Improved problem-solving and coding skills through
                  practical assignments and real-time projects.
                </p>

              </div>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-4 mt-8">

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  HTML5
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  CSS3
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  JavaScript
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  ReactJS
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  Python
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  SQL
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  Object-Oriented Programming
                </span>

              </div>

            </div>

          </div>

          {/* Second Internship */}

          <div className="relative">

            {/* Timeline Dot */}
            <div className="absolute -left-[49px] top-3 w-5 h-5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

              {/* Top Section */}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                <div>

                  <h3 className="text-3xl font-semibold flex items-center gap-3">
                    <FaBriefcase className="text-purple-400" />
                    Virtual Internship - Python Full Stack Development
                  </h3>

                  <p className="text-purple-400 mt-2 text-lg">
                    EXCELR
                  </p>

                </div>

                <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm w-fit">
                  3 Months Internship
                </span>

              </div>

              {/* Description */}

              <div className="space-y-5 text-zinc-300 leading-8">

                <p>
                  Developed full-stack web applications using
                  Python, ReactJS, JavaScript, HTML, and CSS.
                </p>

                <p>
                  Built and integrated RESTful APIs connecting
                  frontend interfaces with backend services.
                </p>

                <p>
                  Designed responsive user interfaces using
                  ReactJS and Bootstrap.
                </p>

                <p>
                  Managed database operations and data storage
                  using SQL.
                </p>

                <p>
                  Utilized Git and GitHub for version control
                  and collaboration.
                </p>

              </div>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-4 mt-8">

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  ReactJS
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  Python
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  JavaScript
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  HTML5
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  CSS3
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  SQL
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  Bootstrap
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  Git & GitHub
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  Object-Oriented Programming
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
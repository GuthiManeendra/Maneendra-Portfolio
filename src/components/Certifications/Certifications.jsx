import {
  FaCloud,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 py-24 bg-[#0f172a] text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>

          <p className="text-zinc-400 text-lg">
            Certifications and internship achievements that strengthened my technical skills
          </p>

        </div>

        {/* Certification Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* EXCELR */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300">

            <div className="flex items-center gap-5 mb-6">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-3xl text-cyan-400">
                <FaCode />
              </div>

              <div>

                <h3 className="text-2xl font-semibold">
                  Python Full Stack Development
                </h3>

                <p className="text-cyan-400 mt-1">
                  EXCELR
                </p>

              </div>

            </div>

            <p className="text-zinc-400 leading-8 mb-6">
              Successfully completed Python Full Stack Development
              certification covering frontend development,
              backend development, ReactJS, SQL, APIs,
              and real-world project implementation.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3">

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
                APIs
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                Object-Oriented Programming
              </span>

            </div>

          </div>

          {/* NPTEL */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-purple-400/40 transition duration-300">

            <div className="flex items-center gap-5 mb-6">

              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl text-purple-400">
                <FaCloud />
              </div>

              <div>

                <h3 className="text-2xl font-semibold">
                  Cloud Computing
                </h3>

                <p className="text-purple-400 mt-1">
                  NPTEL
                </p>

              </div>

            </div>

            <p className="text-zinc-400 leading-8 mb-6">
              Completed Cloud Computing certification focused on
              cloud infrastructure, virtualization, distributed systems,
              deployment models, and cloud service architecture.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                Cloud Basics
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                Virtualization
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                Distributed Systems
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                Deployment Models
              </span>

            </div>

          </div>

          {/* AchieversIT Internship */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-pink-400/40 transition duration-300">

            <div className="flex items-center gap-5 mb-6">

              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-3xl text-pink-400">
                <FaLaptopCode />
              </div>

              <div>

                <h3 className="text-2xl font-semibold">
                  Python Full Stack Internship
                </h3>

                <p className="text-pink-400 mt-1">
                  AchieversIT
                </p>

              </div>

            </div>

            <p className="text-zinc-400 leading-8 mb-6">
              Successfully completed internship training in
              Python Full Stack Development including
              frontend technologies, ReactJS,
              backend development, SQL, and project-based learning.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                HTML5
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                CSS3
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

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                Git & GitHub
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
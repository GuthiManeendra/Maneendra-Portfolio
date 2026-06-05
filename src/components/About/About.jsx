import { motion } from "framer-motion";

const About = () => {

  // Animation
  const container = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-28 bg-[#111827]
      text-white px-6 overflow-hidden relative"
    >

      {/* Background Glow */}
      <div
        className="absolute top-0 left-0
        w-[250px] h-[250px]
        bg-cyan-400/10 blur-[120px]
        rounded-full"
      ></div>

      <div
        className="absolute bottom-0 right-0
        w-[250px] h-[250px]
        bg-purple-500/10 blur-[120px]
        rounded-full"
      ></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >

        {/* Section Heading */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold
          mb-16 text-center"
        >
          About{" "}

          <span
            className="bg-gradient-to-r
            from-cyan-400 to-purple-500
            bg-clip-text text-transparent"
          >
            Me
          </span>
        </motion.h2>

        {/* About Card */}
        <motion.div
          variants={item}
          whileHover={{
            y: -8,
          }}
          className="bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-3xl p-10 md:p-14
          shadow-[0_0_40px_rgba(0,255,255,0.05)]"
        >

          <p
            className="text-zinc-300 leading-9
            text-lg md:text-xl"
          >
            Entry-level Software Developer with strong
            full-stack development skills in
            <span className="text-cyan-400 font-semibold">
              {" "}Python
            </span>,
            <span className="text-cyan-400 font-semibold">
              {" "}JavaScript
            </span>,
            and
            <span className="text-cyan-400 font-semibold">
              {" "}React
            </span>.
            Passionate about building scalable,
            customer-focused web applications and
            continuously learning modern development practices.

            <br /><br />

            
            <span className="text-cyan-400 font-semibold">
              {" "} Completed a 6-month Python Full Stack Development Internship
            
            at AchieversIT where I gained hands-on experience
            in frontend technologies including HTML, CSS,
            JavaScript, and ReactJS along with backend
            development using Python and SQL.
            </span>

            <br /><br />

            
            <span className="text-cyan-400 font-semibold">
              {" "} Developed projects like a Travel Booking Application
            </span>
            
            <span className="text-cyan-400 font-semibold">
              {"  "} and an AI-based Cybersecurity System for Healthcare Networks 
              using technologies such as ReactJS, Python,
            Machine Learning, Bootstrap, and SQLite3.
            </span>
            

            <br /><br />

            Quick learner with strong problem-solving,
            analytical thinking, teamwork, and effective
            communication skills focused on creating
            user-friendly applications.
          </p>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default About;
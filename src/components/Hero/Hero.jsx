import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const Hero = () => {

  // Text Animation
  const textContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each Item Animation
  const textItem = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0f172a]
      text-white flex items-center
      justify-center px-6 overflow-hidden relative"
    >

      {/* Background Glow */}
      <div
        className="absolute top-[-100px] left-[-100px]
        w-[300px] h-[300px]
        bg-cyan-400/20 blur-[120px]
        rounded-full"
      ></div>

      <div
        className="absolute bottom-[-100px] right-[-100px]
        w-[300px] h-[300px]
        bg-purple-500/20 blur-[120px]
        rounded-full"
      ></div>

      {/* Hero Content */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="visible"
        className="text-center relative z-10"
      >

        {/* Small Intro */}
        <motion.p
          variants={textItem}
          className="text-cyan-400 tracking-[4px]
          uppercase text-sm md:text-base mb-5"
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={textItem}
          className="text-5xl md:text-7xl font-black
          leading-tight mb-6"
        >
          Hi, I'm{" "}

          <span
            className="bg-gradient-to-r
            from-cyan-400 via-blue-400 to-purple-500
            bg-clip-text text-transparent"
          >
            Maneendra
          </span>
        </motion.h1>

        {/* Animated Role */}
        <motion.h2
          variants={textItem}
          className="text-2xl md:text-4xl
          font-semibold text-zinc-300 mb-8"
        >
          Frontend & Python Developer
        </motion.h2>

        {/* Career Objective */}
        <motion.p
          variants={textItem}
          className="max-w-3xl mx-auto
          text-zinc-400 leading-8
          text-base md:text-lg mb-10"
        >
          Entry-level Software Developer with strong full-stack
          development skills in Python, JavaScript, and React.
          Passionate about building scalable, customer-focused
          web applications and continuously learning modern
          development practices.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={textItem}
          className="flex flex-col sm:flex-row
          items-center justify-center gap-5"
        >

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="group px-8 py-4 rounded-full
            bg-cyan-400 text-black font-semibold
            flex items-center gap-3
            hover:scale-105 transition duration-300
            shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            <FaDownload />

            Download Resume

            <span
              className="absolute inset-0 rounded-full
              opacity-0 group-hover:opacity-100
              transition duration-500"
            ></span>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-8 py-4 rounded-full
            border border-cyan-400/40
            text-cyan-400 font-semibold
            hover:bg-cyan-400 hover:text-black
            transition duration-300"
          >
            Hire Me
          </a>

        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={textItem}
          className="flex items-center justify-center
          gap-6 mt-12"
        >

          {/* GitHub */}
          <motion.a
            whileHover={{
              scale: 1.15,
              y: -5,
            }}
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full
            border border-white/10
            bg-white/5 backdrop-blur-xl
            flex items-center justify-center
            text-xl hover:bg-cyan-400
            hover:text-black
            transition duration-300"
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{
              scale: 1.15,
              y: -5,
            }}
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full
            border border-white/10
            bg-white/5 backdrop-blur-xl
            flex items-center justify-center
            text-xl hover:bg-cyan-400
            hover:text-black
            transition duration-300"
          >
            <FaLinkedinIn />
          </motion.a>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;
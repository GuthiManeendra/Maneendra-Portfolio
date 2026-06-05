import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {

  // Footer Links Animation
  const linksContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Each Link Animation
  const linkItem = {
    hidden: {
      opacity: 0,
      x: -30,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-[#0f172a] border-t border-white/10 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left Section */}
          <div>

            {/* Rotating Logo */}
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              className="relative w-fit mb-6"
            >

              {/* Rotating Border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full
                bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400
                p-[2px]"
              >
                <div className="w-full h-full rounded-full bg-[#0f172a]"></div>
              </motion.div>

              {/* Logo */}
              <img
                src="/Images/Logo.png"
                alt="logo"
                className="relative z-10
                w-16 h-16
                rounded-full
                object-cover
                border border-cyan-300
                shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              />

            </motion.div>

            <p className="text-zinc-400 leading-8">
              Frontend & Python Developer passionate about
              building responsive, modern, and user-friendly
              web applications using React, TailwindCSS,
              JavaScript, Python, and SQL.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Quick Links
            </h3>

            <motion.ul
              variants={linksContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-zinc-400"
            >

              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Contact",
              ].map((item, index) => (

                <motion.li
                  key={index}
                  variants={linkItem}
                  whileHover={{
                    x: 8,
                  }}
                  className="relative w-fit"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    {item}
                  </a>

                  {/* Underline */}
                  <span
                    className="absolute left-0 -bottom-1
                    h-[2px] w-0 bg-cyan-400
                    transition-all duration-500
                    hover:w-full"
                  ></span>

                </motion.li>

              ))}

            </motion.ul>

          </div>

          {/* Contact & Social */}
          <div>

            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Connect With Me
            </h3>

            <motion.div
              variants={linksContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 text-zinc-400"
            >

              <motion.div
                variants={linkItem}
                className="flex items-center gap-3"
              >
                <FaEnvelope className="text-cyan-400" />
                <span>maneendraguthi@gmail.com</span>
              </motion.div>

              <motion.div
                variants={linkItem}
                className="flex items-center gap-3"
              >
                <FaPhoneAlt className="text-cyan-400" />
                <span>+91 6304054870</span>
              </motion.div>

              <motion.div
                variants={linkItem}
                className="flex items-center gap-3"
              >
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Andhra Pradesh, India</span>
              </motion.div>

            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={linksContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-5 mt-8"
            >

              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/GuthiManeendra/",
                },

                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/maneendraguthi",
                },

                {
                  icon: <FaEnvelope />,
                  link: "mailto:maneendraguthi@gmail.com",
                },
              ].map((item, index) => (

                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={linkItem}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  className="w-12 h-12 rounded-full
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  text-xl hover:bg-cyan-400
                  hover:text-black
                  transition duration-300"
                >
                  {item.icon}
                </motion.a>

              ))}

            </motion.div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-5 text-center text-zinc-500 text-sm">

        © 2026 Maneendra. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;
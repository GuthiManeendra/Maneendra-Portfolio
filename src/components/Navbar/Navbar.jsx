import { useState } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import navLinks from "./navbarData";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3">

      {/* Main Navbar */}

      <nav
        className="
          max-w-6xl
          mx-auto
          bg-[#07122b]/90
          backdrop-blur-xl
          border
          border-cyan-400/10
          rounded-full
          px-5
          lg:px-8
          py-3
          flex
          items-center
          justify-between
          shadow-[0_0_30px_rgba(0,255,255,0.08)]
        "
      >

        {/* Logo */}

        <a
          href="#home"
          className="relative flex items-center justify-center"
        >

          {/* Glow */}

          <div
            className="
              absolute
              w-14
              h-14
              rounded-full
              bg-cyan-400/20
              blur-xl
            "
          ></div>

          {/* Logo Image */}

          <img
            src="/Images/Logo.png"
            alt="logo"
            className="
              relative
              z-10
              w-12
              h-12
              rounded-full
              object-cover
              border
              border-cyan-400/40
              shadow-[0_0_15px_rgba(0,255,255,0.3)]
            "
          />

        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <li key={item.id}>

              <a
                href={item.link}
                className="
                  relative
                  text-white
                  font-medium
                  text-base
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-gradient-to-r
                  after:from-cyan-400
                  after:to-purple-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>

            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            lg:hidden
            text-white
            text-xl
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ${open
            ? "max-h-[500px] opacity-100 mt-3"
            : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            bg-[#07122b]/95
            backdrop-blur-xl
            border
            border-cyan-400/10
            rounded-3xl
            px-5
            py-5
          "
        >

          <ul className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="
                    text-white
                    text-base
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >
                  {item.name}
                </a>

              </li>
            ))}

          </ul>

        </div>

      </div>

    </header>
  );
};

export default Navbar;
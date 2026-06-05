import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#0f172a]
        text-white
        px-6
        relative
        overflow-hidden
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          top-[-100px]
          left-[-100px]
          w-72
          h-72
          bg-cyan-400/20
          rounded-full
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          bottom-[-100px]
          right-[-100px]
          w-72
          h-72
          bg-purple-500/20
          rounded-full
          blur-3xl
        "
      ></div>

      {/* Main Content */}

      <div
        className="
          relative
          z-10
          text-center
          max-w-2xl
        "
      >

        {/* 404 */}

        <h1
          className="
            text-[120px]
            md:text-[180px]
            font-extrabold
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
            leading-none
          "
        >
          404
        </h1>

        {/* Title */}

        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
          Page Not Found
        </h2>

        {/* Description */}

        <p className="text-zinc-400 text-lg leading-8 mb-10">
          The page you are looking for does not exist
          or may have been moved.
        </p>

        {/* Button */}

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-3
            px-8
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
          <FaHome />
          Back To Home
        </Link>

      </div>

    </section>
  );
};

export default NotFound;
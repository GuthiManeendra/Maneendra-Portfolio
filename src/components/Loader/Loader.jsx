const Loader = () => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-[#0f172a]
      "
    >

      {/* Loader Container */}

      <div className="flex flex-col items-center gap-8">

        {/* Animated Circles */}

        <div className="relative w-28 h-28">

          {/* Outer Ring */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-[6px]
              border-cyan-400/20
            "
          ></div>

          {/* Spinning Ring */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-[6px]
              border-transparent
              border-t-cyan-400
              border-r-purple-500
              animate-spin
            "
          ></div>

          {/* Inner Glow */}

          <div
            className="
              absolute
              inset-5
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              blur-xl
              opacity-60
            "
          ></div>

          {/* Center Text */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-2xl
              font-bold
              text-white
            "
          >
            M
          </div>

        </div>

        {/* Loading Text */}

        <div className="text-center">

          <h2
            className="
              text-3xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
              mb-2
            "
          >
            Loading Portfolio
          </h2>

          <p className="text-zinc-400">
            Preparing modern web experience...
          </p>

        </div>

      </div>

    </div>
  );
};

export default Loader;
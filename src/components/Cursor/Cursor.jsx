import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  // Mouse Move

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Hover Effect

  useEffect(() => {
    const hoverElements = document.querySelectorAll(
      "a, button"
    );

    const mouseEnter = () => setIsHovering(true);
    const mouseLeave = () => setIsHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}

      <div
        className={`
          fixed
          top-0
          left-0
          z-[9999]
          pointer-events-none
          rounded-full
          border
          border-cyan-400
          transition-all
          duration-150
          ease-out
          backdrop-blur-sm
          hidden
          md:block
          ${
            isHovering
              ? "w-16 h-16 bg-cyan-400/10"
              : "w-10 h-10 bg-transparent"
          }
        `}
        style={{
          transform: `translate(${position.x - 20}px, ${
            position.y - 20
          }px)`,
        }}
      ></div>

      {/* Inner Cursor */}

      <div
        className="
          fixed
          top-0
          left-0
          z-[9999]
          pointer-events-none
          w-3
          h-3
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          hidden
          md:block
        "
        style={{
          transform: `translate(${position.x - 6}px, ${
            position.y - 6
          }px)`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
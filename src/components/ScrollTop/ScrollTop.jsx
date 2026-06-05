import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show Button When Scrolling

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll To Top

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-8
            right-8
            z-50
            w-14
            h-14
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            text-white
            flex
            items-center
            justify-center
            shadow-lg
            shadow-cyan-500/30
            hover:scale-110
            transition-all
            duration-300
          "
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollTop;
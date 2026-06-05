import Cursor from "../components/Cursor/Cursor";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Intern_Experience/Experience";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";

const Home = () => {
  return (
    <div className="bg-[#0f172a] text-white overflow-hidden">

      {/* Custom Cursor */}
      {/* <Cursor /> */}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      {/* <Footer /> */}

      {/* Scroll To Top */}
      <ScrollTop />

    </div>
  );
};

export default Home;
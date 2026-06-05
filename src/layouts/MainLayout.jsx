import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#0f172a] text-white overflow-hidden min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>

        <Outlet />

      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollTop />

    </div>
  );
};

export default MainLayout;
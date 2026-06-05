import {
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Main Layout Routes */}

      <Route path="/" element={<MainLayout />}>

        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Project Details */}
        <Route
          path="project/:id"
          element={<ProjectDetails />}
        />

      </Route>

      {/* Not Found */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;
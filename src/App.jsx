import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AppRoutes />
      )}
    </>
  );
}

export default App;
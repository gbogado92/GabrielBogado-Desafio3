import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MenScreen from "../pages/MenScreen";
import WomenScreen from "../pages/WomenScreen";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
      <Router>
        {/* Renderiza la barra de navegación en la parte superior */}
        <Navbar />
        <Routes>
          {/* Define las rutas de la aplicación */}
          <Route exact path="/men" element={<MenScreen />} />
          <Route exact path="/women" element={<WomenScreen />} />
          {/* Ruta por defecto que redirige a /men */}
          <Route path="*" element={<Navigate to="/men" />} />
        </Routes>
        {/* Renderiza el footer en la parte inferior */}
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;

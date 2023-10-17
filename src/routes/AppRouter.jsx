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

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/men" element={<MenScreen />} />
          <Route exact path="/women" element={<WomenScreen />} />
          <Route path="*" element={<Navigate to="/men" />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

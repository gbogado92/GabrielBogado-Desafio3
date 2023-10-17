import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenScreen from "../pages/MenScreen";
import WomenScreen from "../pages/WomenScreen";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/men" element={<MenScreen />} />
          <Route exact path="/women" element={<WomenScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

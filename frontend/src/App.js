import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FarmerPage from "./pages/FarmerPage.js";
import Fmart from "./pages/Fmart.js";
import AboutUsPage from "./pages/AboutUs.js";
import AshramPage from "./pages/AshramPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/farmers" element={<FarmerPage />} />
        <Route path="/fmart" element={<Fmart />} />
        <Route path="/ashram" element={<AshramPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FarmerPage from "./pages/FarmerPage.js";
import Fmart from "./pages/Fmart.js";
import AboutUsPage from "./pages/AboutUs.js";
import AshramPage from "./pages/AshramPage.js";
import LandingPage from "./pages/LandingPage.js";
import FarmerDetailPage from "./pages/FarmerDetailPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/" element={<LandingPage />} /> {/* <-- default route */}
        <Route path="/ashram" element={<AshramPage />} />
         <Route path="/farmers" element={<FarmerPage />} />
        <Route path="/farmers/:id" element={<FarmerDetailPage />} />
        <Route path="/Fmart" element={<Fmart />} />

      </Routes>
    </Router>
  );
}

export default App;

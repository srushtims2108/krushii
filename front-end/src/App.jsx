import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs.jsx";
import AshramPage from "./pages/AshramPage.jsx";
import FarmerPage from "./pages/FarmerPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";  
import FarmerDetailPage from "./pages/FarmerDetailPage.jsx";
import Fmart from "./pages/Fmart.jsx";
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
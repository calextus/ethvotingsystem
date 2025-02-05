import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PartyRegistry from "./pages/PartyRegistry"; // Ensure this component exists

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/party-registry" element={<PartyRegistry />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

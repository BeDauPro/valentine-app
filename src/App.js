import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HeartPage from "./HeartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<HeartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

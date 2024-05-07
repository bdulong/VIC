import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from "./components/landing/landing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from "./components/landing/landing.jsx";
import IdeasPage from "./components/ideas/ideas.jsx";
import JoinPage from "./components/join/join.jsx";
import ConnectPage from "./components/connect/connect.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/vos-idees" element={<IdeasPage/>} />
        <Route path="/nous-rejoindre" element={<JoinPage/>} />
        <Route path="/se-connecter" element={<ConnectPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
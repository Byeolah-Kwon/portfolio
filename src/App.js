import React from "react";
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import Resume from './pages/Home';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
     <Routes>
          <Route path="/portfolio" element={<Home/>} />
          <Route path="/portfolio/projects" element={<Projects/>} />
          <Route path="/portfolio/Resume" element={<Resume/>} />
          <Route path="/portfolio/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;

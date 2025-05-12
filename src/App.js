import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
 
      <Routes>
          <Route path="portfolio" element={<Home/>} />
          <Route path="portfolio/projects" element={<Projects/>} />
          <Route path="resume" element={<Resume/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
   
    </div>
  );
}

export default App;

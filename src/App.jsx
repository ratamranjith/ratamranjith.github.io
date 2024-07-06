import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/main/Header';
import Navigation from './components/main/Navigation';
import Projects from './components/main/Projects';
import Certifications from './components/main/Certifications';
import Contact from './components/main/Contact';
import ThemeToggle from './components/main/ThemeToggle';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <Navigation />
      
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

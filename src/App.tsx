import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Calculator from './pages/Calculator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          &copy; 2024 Carbon Credit Calculator. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
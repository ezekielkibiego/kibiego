import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Kib from './components/Kib';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cert from './components/Cert';
import NotFoundPage from './components/NotFoundPage'; // Import the NotFoundPage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Kib />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Cert />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Fallback route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Kib from './components/Kib';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Kib />
      <About />
      <Experience />
      <Skills />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;

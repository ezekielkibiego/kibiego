import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/eklogo.png';
import '../styles/Navbar.css'; 
import { ThemeContext } from "../context/ThemeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

function Navbar() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" style={{ maxWidth: '50px' }} />
        </Link>
        <button className={`navbar-toggler ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certifications" onClick={closeMenu}>
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="theme-button" onClick={handleThemeChange}>
            {theme === "light" ? (
              <HiOutlineMoon className="theme-icon" /> 
            ) : (
              <HiOutlineSun className="theme-icon" /> 
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0" style={{ width: '100%', zIndex: '1000' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ maxWidth: '50px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

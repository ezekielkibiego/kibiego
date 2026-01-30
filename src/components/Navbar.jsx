// FILE: src/components/Navbar.jsx

import React, { useState, useMemo, useCallback, memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import logo from '../../public/images/kiblogo.png';

// Memoized NavItem component to prevent re-renders
const NavItem = memo(({ link, navLinkClasses }) => (
  <NavLink
    to={link.path}
    className={({ isActive }) => `${navLinkClasses} ${isActive ? 'nav-link-active' : ''}`}
  >
    {link.name}
  </NavLink>
));

NavItem.displayName = 'NavItem';

// Memoized Mobile NavItem component
const MobileNavItem = memo(({ link, onNavigate }) => (
  <NavLink
    to={link.path}
    onClick={onNavigate}
    className={({ isActive }) => `w-full text-center text-lg font-medium text-text-primary rounded-md py-3 hover:bg-card-background transition-colors will-change-transform ${isActive ? 'nav-link-active' : ''}`}
  >
    {link.name}
  </NavLink>
));

MobileNavItem.displayName = 'MobileNavItem';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ], []);

  const navLinkClasses = "text-lg hover:text-primary transition-colors duration-300 will-change-colors";
  
  const handleMobileNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold text-primary hover:text-primary-hover transition-colors duration-300">
            <img src={logo} alt="EK Logo - Go to home page" width={30} loading="lazy"/>
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavItem
                key={link.name}
                link={link}
                navLinkClasses={navLinkClasses}
              />
            ))}
            <a
              href="https://drive.google.com/file/d/14XWzUYMSD7_Ls44mMlP-Vv1ORjYG72Ae/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-base shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <FiDownload size={18} />
              Resume
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://drive.google.com/file/d/14XWzUYMSD7_Ls44mMlP-Vv1ORjYG72Ae/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden relative group p-2 rounded-full bg-card-background text-text-primary hover:bg-cyan-500/20 transition-colors"
              aria-label="Download Resume"
            >
              <FiDownload size={20} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-card-background border-2 border-cyan-500/40 rounded-lg text-xs font-semibold text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Download Resume
              </span>
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-card-background text-text-primary hover:bg-cyan-500/20 transition-colors will-change-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-text-primary will-change-transform"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${isOpen ? 'max-h-screen border-t border-cyan-500/40' : 'max-h-0'}`}>
        <nav className="container mx-auto px-6 py-4 flex flex-col items-center space-y-2">
          {navLinks.map((link) => (
            <MobileNavItem
              key={link.name}
              link={link}
              onNavigate={handleMobileNavClick}
            />
          ))}
          <a
            href="https://drive.google.com/file/d/14XWzUYMSD7_Ls44mMlP-Vv1ORjYG72Ae/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMobileNavClick}
            className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-base shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 mt-4 will-change-transform"
          >
            <FiDownload size={18} />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

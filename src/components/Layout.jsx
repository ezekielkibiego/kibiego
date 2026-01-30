import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Loader from './Loader';

const PageLayout = () => {
  const { isLoading } = useTheme();

  return (
    // No more dark: prefixes needed!
    // The body tag in index.css already handles the base theme.
    <div className="min-h-screen flex flex-col">
      {isLoading && <Loader />} 
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
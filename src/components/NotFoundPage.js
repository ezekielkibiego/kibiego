import React from 'react';
import NotFoundImage from '../assets/404.png'; // Adjust the import path based on your directory structure
import '../styles/NotFoundPage.css'; // Import the CSS file for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <img src={NotFoundImage} alt="404 Page Not Found" className="not-found-image" />
      <p className="not-found-text">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;

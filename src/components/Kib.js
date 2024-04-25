import React from 'react';
import '../styles/Kib.css'; // Adjust the path as needed for your styles
import profileImage from '../assets/1668089397549 (1).jpg'; // Import your profile image

function Kib() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="content">
          <div className="image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div className="text-container">
            <h1 className="name">Ezekiel Kibiego</h1>
            <p className="subtitle">Software Engineer</p>
            <div className="highlights-container">
              <p className="highlight">Full Stack Developer</p>
              <p className="highlight">DevOps Specialist</p>
              <p className="highlight">API Gateway</p>
              <p className="highlight">Technical Mentor</p>
              <p className="highlight">Technical Writer</p>
              <p className="highlight">Quality Assurance Expert</p>
            </div>
            <div className="description">
              <p>Welcome to my professional portfolio. With expertise in software development, DevOps, mentoring, technical writing, and quality assurance, I bring a comprehensive skill set to every project. I thrive on solving complex problems and delivering innovative solutions that drive business growth.</p>
              <p>Feel free to explore my work and projects. If you have any inquiries or opportunities, don't hesitate to get in touch </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kib;

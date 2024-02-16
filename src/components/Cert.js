// Cert.js
import React from 'react';
import '../styles/Cert.css';
import cert1 from '../assets/agile.jpg';
import cert2 from '../assets/bash.jpg';
import cert3 from '../assets/cloud.jpg';
import cert4 from '../assets/cyber.jpg';
import cert5 from '../assets/EQ.jpg';
import cert6 from '../assets/kube.jpg';
import cert7 from '../assets/linux.jpg';
import cert8 from '../assets/networking.jpg';
import cert9 from '../assets/oauthcert.jpg';
import cert10 from '../assets/scrum.jpg';
import cert11 from '../assets/security.jpg';
import cert12 from '../assets/springbootcert.jpg';
import cert13 from '../assets/wso2.jpg';
import cert14 from '../assets/python.png';
import cert15 from '../assets/seo.jpeg';
import cert16 from '../assets/sql.png';
import cert17 from '../assets/critical_thinking.png';
import cert18 from '../assets/tips.png';

function Certification() {
  const certifications = [
    {
      image: cert1
      
    },
    {
      image: cert2
    },
    {
        image: cert3
      },

      {
        image: cert4
      },
      {
        image: cert5
      },
      {
        image: cert6
      },
      {
        image: cert7
      },
      {
        image: cert8
      },
      {
        image: cert9
      },
      {
        image: cert10
      },
      {
        image: cert11
      },
      {
        image: cert12
      },
      {
        image: cert13
      },
      {
        image: cert14
      },
      {
        image: cert15
      },
      {
        image: cert16
      },
      {
        image: cert17
      },
      {
        image: cert18
      }
  ];

  return (
    <div className="container cert-container">
      <h1 className="cert-header">Certifications</h1>
      <a href="https://www.linkedin.com/in/ezekielkibiego/details/certifications/" target="_blank" rel="noopener noreferrer" className="linkedin-button">View All Certifications on LinkedIn</a>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-item" key={index}>
            <img src={cert.image} alt={`Certificate ${index + 1}`} className="cert-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;

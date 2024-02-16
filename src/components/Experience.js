import React, { useState, useEffect } from 'react';
import bhalogo from '../assets/bharathbrands_logo.jpeg'; 
import zindualogo from '../assets/zindua.jpeg'; 
import bringlogo from '../assets/bring.jpeg'; 
import gebeyalogo from '../assets/gebeya.jpeg'; 
import '../styles/Exp.css';

function Experience() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ezekielkibiego/repos');
        if (response.ok) {
          const data = await response.json();
          // Filter out forked repositories and those without descriptions
          const filteredRepos = data.filter(repo => !repo.fork && repo.description);
          setRepositories(filteredRepos);
        } else {
          console.error('Failed to fetch repositories:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching repositories:', error.message);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section id="experience">
      <div className="container exp">
        <h2 className="text-center mt-5 mb-2">My Work Experience</h2>
        <div className="row">
          {/* BharathBrands Experience */}
          <div className="col-md-6">
            <div className="experience-entry">
              <img
                src={bhalogo}
                alt="BharathBrands Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
              <div className="experience-details">
                <h3>BharathBrands PVT LTD</h3>
                <p className="position">Back End Software Engineer</p>
                <p className="duration">Oct 2023 - Present</p>
                <p className="location">Nairobi County, Kenya</p>
                {/* Add your other details here */}
              </div>
            </div>
          </div>
          {/* Zindua School Experience */}
          <div className="col-md-6">
            <div className="experience-entry">
              <img
                src={zindualogo}
                alt="Zindua Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
              <div className="experience-details">
                <h3>Zindua coding School</h3>
                <p className="position">Software Development Technical Mentor</p>
                <p className="duration">Feb 2023 - Present</p>
                <p className="location">Nairobi, Kenya (Remote)</p>
                {/* Add your other details here */}
              </div>
            </div>
          </div>
          {/* Gebeya Inc. Experience */}
          <div className="col-md-6">
            <div className="experience-entry">
              <img
                src={gebeyalogo}
                alt="Gebeya Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
              <div className="experience-details">
                <h3>Gebeya Inc.</h3>
                <p className="position">Software Developer</p>
                <p className="duration">Jul 2019 - Jun 2023</p>
                <p className="location">Nairobi, Kenya (Remote)</p>
                {/* Add your other details here */}
              </div>
            </div>
          </div>
          {/* Bring Global Experience */}
          <div className="col-md-6">
            <div className="experience-entry">
              <img
                src={bringlogo}
                alt="Bring' Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
              <div className="experience-details">
                <h3>Bring Global</h3>
                <p className="position">Integration Consultant</p>
                <p className="duration">Apr 2022 - Jan 2023</p>
                <p className="location">Nairobi, Kenya (Hybrid)</p>
                {/* Add your other details here */}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Repositories */}
        <h2 className="text-center mt-5 mb-2">My GitHub Repositories</h2>

        <div className="row">
          {repositories.map(repo => (
            <div className="col-md-6 repo-entry" key={repo.id}>
              <div className="experience-entry">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">View Repository</a>
              </div>
            </div>
          ))}
        </div>

        {/* Button link directing to GitHub */}
        <div className="text-center mt-5">
          <a href="https://github.com/ezekielkibiego" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View More on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Experience;

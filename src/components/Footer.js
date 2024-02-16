import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <p>Email: kibiezekiel@gmail.com</p>
            <p>Phone: +254722991833</p> {/* Added phone number */}
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">About</a>
              </li>
              <li>
                <a href="/experience" className="text-light text-decoration-none">Experience</a>
              </li>
              <li>
                <a href="/skills" className="text-light text-decoration-none">Skills</a>
              </li>
              <li>
                <a href="/blogs" className="text-light text-decoration-none">Blogs</a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">Contact</a>
              </li>
              {/* Add more quick links as needed */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect with Me</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://linkedin.com/in/ezekielkibiego" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/ezekielkibiego" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/KibiegoEzekiel" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linktr.ee/ekibiego" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Linktree
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1Zqj-HjPGn28NewYr44xRvpwKt4X7e_vO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Resume
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} Ezekiel Kibiego. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

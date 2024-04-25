import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import '../styles/Footer.css'; 

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer py-4 mt-5 ${theme}`}>
      <hr className="footer-line" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <p>Email: kibiezekiel@gmail.com</p>
            <p>Phone: +254722991833</p> {/* Added phone number */}
            <a
              href="https://drive.google.com/file/d/1Zqj-HjPGn28NewYr44xRvpwKt4X7e_vO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`theme-${theme}-link text-decoration-none` } // Dynamic class for link color
            >
              Resume
            </a>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className={`theme-${theme}-link text-decoration-none`}>About</a>
              </li>
              <li>
                <a href="/experience" className={`theme-${theme}-link text-decoration-none`}>Experience</a>
              </li>
              <li>
                <a href="/skills" className={`theme-${theme}-link text-decoration-none`}>Skills</a>
              </li>
              <li>
                <a href="/blogs" className={`theme-${theme}-link text-decoration-none`}>Blogs</a>
              </li>
              <li>
                <a href="/contact" className={`theme-${theme}-link text-decoration-none`}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect with Me</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://linkedin.com/in/ezekielkibiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`theme-${theme}-link text-decoration-none`}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ezekielkibiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`theme-${theme}-link text-decoration-none`}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/KibiegoEzekiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`theme-${theme}-link text-decoration-none`}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/ekibiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`theme-${theme}-link text-decoration-none`}
                >
                  Linktree
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

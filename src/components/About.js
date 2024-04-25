import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
      
        <div className="about-content">
          <p>
            I am a software developer with expertise in <strong>Java</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, and <strong>DevOps</strong>. I have a proven track record of architecting robust and scalable applications that adapt to the ever-evolving demands of clients. My proficiency extends to API gateway technologies and a deep understanding of WSO2's API Management, Rate Limiting, and Identity Server.
          </p>
          <p>
            My project portfolio includes:
          </p>
          <ul className="project-list">
            <li>🚀 Developing and deploying RESTful APIs and microservices using Java Spring Boot.</li>
            <li>🌐 Utilizing Apache Camel to integrate diverse systems and data sources.</li>
            <li>💻 Crafting web services with Django and providing ongoing system maintenance.</li>
            <li>📈 Managing and scaling microservices with Docker and Kubernetes.</li>
            <li>🔧 Streamlining deployment pipelines with automation using Jenkins.</li>
            <li>🛡️ Implementing industry-leading practices in authentication, authorization, and data encryption.</li>
            <li>📚 Maintaining meticulous documentation for all APIs and microservices.</li>
            <li>🌐 Building robust web applications using Node.js with the Express framework.</li>
            <li>📨 Implementing asynchronous messaging systems for real-time communication and event-driven architectures.</li>
            <li>🔍 Applying technical SEO techniques to improve website visibility, crawlability, and indexing.</li>
            <li>⚛️ Developing interactive user interfaces with React.js.</li>
          </ul>
          <p>
            With a keen eye for detail, I have also demonstrated expertise in:
          </p>
          <ul className="expertise-list">
            <li>📊 Designing and implementing scalable database solutions using SQL and NoSQL databases.</li>
            <li>📡 Integrating third-party APIs and services to enhance application functionality and user experience.</li>
            <li>🛠️ Troubleshooting complex issues and providing timely resolutions.</li>
            <li>🧪 Conducting thorough testing, including unit testing, integration testing, and end-to-end testing.</li>
            <li>📝 Collaborating closely with cross-functional teams to deliver solutions that exceed expectations.</li>
            <li>🔒 Implementing best practices for cybersecurity to protect applications and data.</li>
            <li>📈 Analyzing performance metrics and user feedback to drive continuous enhancement of products and services.</li>
          </ul>
          <p>
            Not just a software developer, I also double as a Technical Mentor, imparting knowledge and guidance to the next generation of developers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

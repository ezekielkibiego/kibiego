import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillsData = [
    { skill: 'Software Developer', level: 'Advanced', type: 'Technical' },
    { skill: 'Java(Spring Boot, Apache Camel)', level: 'Advanced', type: 'Technical' },
    { skill: 'Python(Django, Flask, Fast API)', level: 'Advanced', type: 'Technical' },
    { skill: 'JavaScript(React, Angular)', level: 'Advanced', type: 'Technical' },
    { skill: 'Software Development Technical Mentor', level: 'Expert', type: 'Technical' },
    { skill: 'SQL(PostgreSQL, MySQL, Oracle)', level: 'Advanced', type: 'Technical' },
    { skill: 'DevOps(Docker, Docker Swarm, Kubernetes', level: 'Advanced', type: 'Technical' },
    { skill: 'Cloud Computing(AWS, Microsoft Azure, Google Cloud Platform)', level: 'Advanced', type: 'Technical' },
    { skill: 'WSO2(API Management, Rate Limiting, Identity Server)', level: 'Advanced', type: 'Technical' },
    { skill: 'Agile & Scrum', level: 'Advanced', type: 'Technical' },
    { skill: 'QA', level: 'Advanced', type: 'Technical' },
    { skill: 'Apache MQ(ActiveMQ and Kafka)', level: 'Expert', type: 'Technical' },
    { skill: 'Pandas', level: 'Intermediate', type: 'Technical' },
    { skill: 'Numpy', level: 'Intermediate', type: 'Technical' },
    { skill: 'Matplotlib', level: 'Intermediate', type: 'Technical'},
    { skill: 'Communication', level: 'Expert', type: 'Soft' },
    { skill: 'Teamwork', level: 'Expert', type: 'Soft' },
    { skill: 'Problem Solving', level: 'Expert', type: 'Soft' },
    { skill: 'Creativity', level: 'Expert', type: 'Soft' },
    { skill: 'Adaptability', level: 'Expert', type: 'Soft' },
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'red';
      case 'intermediate':
        return 'orange';
      case 'advanced':
        return 'green';
      case 'expert':
        return 'blue';
      default:
        return 'black';
    }
  };

  const technicalSkills = skillsData.filter(skill => skill.type === 'Technical');
  const softSkills = skillsData.filter(skill => skill.type === 'Soft');

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="skills-container">
          {technicalSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-name">{skill.skill}</div>
              <div
                className="skill-level"
                style={{ backgroundColor: getLevelColor(skill.level) }}
              >
                {skill.level}
              </div>
            </div>
          ))}
        </div>
        <h2 className="section-heading">Soft Skills</h2>
        <div className="skills-container">
          {softSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-name">{skill.skill}</div>
              <div
                className="skill-level"
                style={{ backgroundColor: getLevelColor(skill.level) }}
              >
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

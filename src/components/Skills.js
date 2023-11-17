import React from 'react';
import '../styles/Skills.css'


function Skills() {
  const skillsData = [
    { skill: 'Software Developer', level: 'Advanced' },
    { skill: 'Java(Spring Boot, Apache Camel)', level: 'Advanced' },
    { skill: 'Python(Django, Flask, Fast API)', level: 'Advanced' },
    { skill: 'JavaScript(React, Angular)', level: 'Advanced' },
    { skill: 'Software Development Technical Mentor', level: 'Expert' },
    { skill: 'SQL(PostgreSQL, MySQL, Oracle)', level: 'Advanced' },
    { skill: 'DevOps(Docker, Docker Swarm, Kubernetes', level: 'Advanced' },
    { skill: 'Cloud Computing(AWS, Microsoft Azure, Google Cloud Platform)', level: 'Advanced' },
    { skill: 'WSO2(API Management, Rate Limiting, Identity Server)', level: 'Advanced' },
    { skill: 'Agile & Scrum', level: 'Advanced' },
    { skill: 'QA', level: 'Advanced' },
    { skill: 'Apache MQ(ActiveMQ and Kafka)', level: 'Expert' },
    { skill: 'Pandas', level: 'Intermediate' },
    { skill: 'Numpy', level: 'Intermediate' },
    { skill: 'Matplotlib', level: 'Intermediate'},
  
    
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

  return (
    <section id="skills">
      <div className="container skills">
        <h2 className='text-center  '>My Skills</h2>
       

        {/* Display the skills with colored bars */}
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Level of Experience</th>
                </tr>
              </thead>
              <tbody>
                {skillsData.map((skill, index) => (
                  <tr key={index}>
                    <td>{skill.skill}</td>
                    <td>
                      <div
                        className="level-bar"
                        style={{ backgroundColor: getLevelColor(skill.level) }}
                      >
                        {skill.level}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

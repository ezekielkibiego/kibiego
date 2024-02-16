import React from 'react';
import '../styles/Blogs.css';

import blogImage1 from '../assets/cv.jpg';
import blogImage2 from '../assets/soft.jpg';
import blogImage3 from '../assets/8mistakes.jpg';
import blogImage4 from '../assets/myths.jpg';
import blogImage5 from '../assets/cyber-1.jpg';

function Blogs() {
  const blogPosts = [
    {
      image: blogImage3,
      title: '8 Common Mistakes in Software Development',
      description: 'Introduction Software development is a rapidly growing industry, with a growing number...',
      link: 'https://zinduaschool.com/8-common-mistakes-in-software-development/',
    },
 
    
    {
      image: blogImage2,
      title: 'The Roadmap from Junior Software Developer to Senior',
      description: 'Transitioning from a junior software developer to a senior role is a pivotal moment in your career, a journey of…',
      link: 'https://zinduaschool.com/the-roadmap-from-junior-software-developer-to-senior-a-comprehensive-guide/',
    },
    {
      image: blogImage5,
      title: 'Cyber Security Awareness – How to be Safe Online',
      description: 'In today’s digital age, the internet has become an integral part of our lives. It is hard to imagine a…',
      link: 'https://zinduaschool.com/cyber-security-awareness-how-to-be-safe-online/',
    },
    {
      image: blogImage4,
      title: '6 Myths and Misconceptions about Software Development in Kenya',
      description: 'The software development sector in Kenya is one of the fastest-growing in the world. In just a few years, the…',
      link: 'https://zinduaschool.com/myths-and-misconceptions-about-software-development/',
    },
    {
      image: blogImage1,
      title: 'Delving into the Nuances of CVs and Resumes',
      description: 'Navigating the professional world often involves presenting your qualifications...',
      link: 'https://zinduaschool.com/delving-into-the-nuances-of-cvs-and-resumes-a-comprehensive-guide/',
    },
 
    
  ];

  return (
<div className="container blogs">
  <h2>Blogs</h2>
  <div className="blog-grid">
    {blogPosts.map((post, index) => (
      <div className="blog-item" key={index}>
        <img src={post.image} alt={`Certificate ${index + 1}`} className="blog-image" />
        <div className="blog-content">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <a href={post.link} className="read-more">Read More</a>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default Blogs;

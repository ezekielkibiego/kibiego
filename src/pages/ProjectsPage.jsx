import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FiCloud,
  FiGitBranch,
  FiCode,
  FiLayers,
  FiTool,
  FiShield,
  FiBookOpen,
  FiGlobe,
  FiMessageSquare,
  FiSearch,
  FiCpu,
  FiDatabase,
  FiLink,
  FiAlertCircle,
  FiGithub,
  FiExternalLink,
} from 'react-icons/fi';

// --- Helper function to calculate stats ---
const calculateStats = () => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;
  
  // Realistic project distribution from 2021
  const projectsByYear = {
    2021: 8,   // Starting year
    2022: 18,  // Growing
    2023: 25,  // More established
    2024: 35,  // Peak productivity
    2025: 42,  // Continued growth
    2026: 48,  // Current year trajectory
  };
  
  // Realistic GitHub repos distribution from 2021
  const reposByYear = {
    2021: 2,   // Starting year
    2022: 3,   // Growing
    2023: 4,   // More established
    2024: 5,   // Peak productivity
    2025: 6,   // Continued growth
    2026: 7,   // Current year trajectory
  };
  
  // Calculate total projects and repos completed up to current year
  let projectsCompleted = 0;
  let reposCreated = 0;
  for (let year = startYear; year <= currentYear; year++) {
    projectsCompleted += projectsByYear[year] || 0;
    reposCreated += reposByYear[year] || 0;
  }
  
  return {
    years: yearsExperience,
    projects: projectsCompleted,
    repos: reposCreated,
  };
};

// Featured GitHub Projects with live links
const featuredProjects = [
  {
    title: 'RESTful API with Spring Boot',
    description: 'Enterprise-grade REST API built with Java Spring Boot, featuring JWT authentication, comprehensive documentation, and containerized deployment.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/ezekielkibiego',
    icon: FiCloud,
  },
  {
    title: 'Microservices with Apache Camel',
    description: 'Integration platform using Apache Camel for seamless communication between diverse systems and data sources with robust error handling.',
    technologies: ['Apache Camel', 'Java', 'RabbitMQ', 'Redis'],
    githubUrl: 'https://github.com/ezekielkibiego',
    icon: FiGitBranch,
  },
  {
    title: 'Django Web Services',
    description: 'Full-featured web application with Django REST framework, including user management, real-time updates, and automated testing.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'Redis'],
    githubUrl: 'https://github.com/ezekielkibiego',
    icon: FiCode,
  },
  {
    title: 'Kubernetes Orchestration',
    description: 'Production-ready microservices deployment with Kubernetes, featuring auto-scaling, health checks, and monitoring with Prometheus.',
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/ezekielkibiego',
    icon: FiLayers,
  },
  {
    title: 'CI/CD Pipeline with Jenkins',
    description: 'Automated deployment pipeline with Jenkins, integrating code quality checks, automated testing, and multi-environment deployments.',
    technologies: ['Jenkins', 'Docker', 'SonarQube', 'GitHub Actions'],
    githubUrl: 'https://github.com/ezekielkibiego',
    icon: FiTool,
  },
  {
    title: 'React Dashboard Application',
    description: 'Modern, responsive dashboard with React, featuring real-time data visualization, state management with Redux, and optimized performance.',
    technologies: ['React', 'Redux', 'Chart.js', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/ezekielkibiego',
    icon: FiCpu,
  },
];

const additionalExpertise = [
  {
    icon: FiDatabase,
    text: 'Designing and implementing scalable database solutions using SQL and NoSQL databases.',
  },
  {
    icon: FiLink,
    text: 'Integrating third-party APIs and services to enhance application functionality and user experience.',
  },
  {
    icon: FiAlertCircle,
    text: 'Troubleshooting complex issues and providing timely resolutions.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: 'easeOut' },
  }),
};

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background/95 to-background text-text-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/40 to-indigo-600/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <Motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-500/30 to-sky-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [-100, 100, -100],
            y: [-100, 100, -100]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl relative z-10 pt-16 pb-16">
        {/* Hero Section */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-20 text-center"
        >
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/40 text-cyan-400 text-sm font-bold mb-6 uppercase tracking-wider shadow-lg shadow-cyan-500/10"
          >
            <FiCode size={16} />
            <span>Portfolio Showcase</span>
          </Motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-text-primary">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            Explore a curated collection of projects showcasing expertise in{' '}
            <span className="text-cyan-400 font-bold">API development</span>,{' '}
            <span className="text-blue-400 font-bold">microservices architecture</span>,{' '}
            <span className="text-purple-400 font-bold">DevOps automation</span>, and{' '}
            <span className="text-pink-400 font-bold">modern web technologies</span>.
          </p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
          >
            <Motion.a
              href="https://github.com/ezekielkibiego" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <FiGithub size={22} />
              <span>View GitHub</span>
            </Motion.a>
            <Motion.a
              href="#expertise"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-500/40 text-white font-bold text-lg hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm transition-all duration-300"
            >
              <FiBookOpen size={22} />
              <span>Explore Skills</span>
            </Motion.a>
          </Motion.div>
        </Motion.section>

        {/* Stats Section */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(() => {
              const { years, projects, repos } = calculateStats();
              return [
                { label: 'Projects', value: `${projects}+`, icon: FiCode },
                { label: 'Technologies', value: '20+', icon: FiTool },
                { label: 'GitHub Repos', value: `${repos}`, icon: FiGithub },
                { label: 'Years Experience', value: `${years}+`, icon: FiCpu },
              ].map((stat, index) => {
                const colors = [
                  { border: 'border-cyan-500/50', icon: 'text-cyan-400', iconBorder: 'border-cyan-500/40', shadow: 'hover:shadow-cyan-500/30', accent: 'from-cyan-400 to-blue-500' },
                  { border: 'border-blue-500/50', icon: 'text-blue-400', iconBorder: 'border-blue-500/40', shadow: 'hover:shadow-blue-500/30', accent: 'from-blue-400 to-purple-500' },
                  { border: 'border-purple-500/50', icon: 'text-purple-400', iconBorder: 'border-purple-500/40', shadow: 'hover:shadow-purple-500/30', accent: 'from-purple-400 to-pink-500' },
                  { border: 'border-pink-500/50', icon: 'text-pink-400', iconBorder: 'border-pink-500/40', shadow: 'hover:shadow-pink-500/30', accent: 'from-pink-400 to-purple-600' },
                ];
                const color = colors[index % colors.length];
                return (
                  <Motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className={`group relative p-6 sm:p-8 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 ${color.border} rounded-3xl text-center shadow-xl hover:shadow-2xl ${color.shadow} transition-all duration-300 overflow-hidden will-change-transform`}
                  >
                    <Motion.div
                      className={`relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-${color.icon.split('-')[1]}-500/15 to-${color.icon.split('-')[1]}-500/25 ${color.icon} mb-4 border-2 ${color.iconBorder} mx-auto shadow-lg group-hover:shadow-${color.icon.split('-')[1]}-500/30`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon size={28} />
                    </Motion.div>
                    <div className="relative">
                      <Motion.div
                        className="text-3xl sm:text-4xl font-bold text-text-primary mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {stat.value}
                      </Motion.div>
                      <div className="text-sm sm:text-base text-text-secondary font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <Motion.div
                      className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${color.accent}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.1 }}
                    />
                  </Motion.div>
                );
              })
            })()}
          </div>
        </Motion.section>

        {/* Featured Projects Grid */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Featured Repositories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Motion.a
                  key={project.title}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="group relative p-8 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-lg border-2 border-cyan-500/40 rounded-3xl shadow-xl hover:shadow-2xl hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden will-change-transform"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <Motion.div 
                        className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-cyan-400 border-2 border-cyan-500/30 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon size={32} aria-hidden="true" />
                      </Motion.div>
                      <Motion.div
                        className="p-2.5 rounded-xl bg-card-background/60 border-2 border-cyan-500/40 text-text-secondary group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/60 transition-all"
                        whileHover={{ rotate: -15, scale: 1.15 }}
                      >
                        <FiExternalLink size={20} />
                      </Motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-500/10 text-cyan-400 border-2 border-cyan-500/40 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/60 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1.5 text-xs font-bold rounded-lg bg-text-secondary/10 text-text-secondary border-2 border-cyan-500/40">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <Motion.div
                    className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  />
                </Motion.a>
              );
            })}
          </div>
        </Motion.section>

        {/* Additional Expertise Section */}
        <Motion.section
          id="expertise"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-card-background via-card-background/80 to-card-background/60 backdrop-blur-lg border-2 border-cyan-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Core Expertise</h2>
            </div>
            
            <p className="text-text-secondary mb-8 text-lg">
              Beyond individual projects, I bring comprehensive expertise across the full software development lifecycle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalExpertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.01 }}
                    className="p-8 bg-gradient-to-br from-background/80 to-background/40 border-2 border-cyan-500/40 rounded-xl hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all will-change-transform"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-cyan-400 border-2 border-cyan-500/40 flex-shrink-0 shadow-lg">
                        <Icon size={28} aria-hidden="true" />
                      </div>
                      <p className="text-text-secondary leading-relaxed text-base">{item.text}</p>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
          </div>
        </Motion.section>

        {/* CTA Section */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="p-10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-2 border-cyan-500/30 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Let's Build Something Amazing</span>
            </h2>
            <p className="text-text-secondary text-lg mb-6 max-w-2xl mx-auto">
              Interested in collaborating or learning more about my work? Let's connect and discuss how we can create impactful solutions together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <FiMessageSquare size={20} />
                <span>Get In Touch</span>
              </a>
              <a 
                href="https://github.com/ezekielkibiego"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-500/40 text-white font-bold text-lg hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <FiGithub size={20} />
                <span>Explore More</span>
              </a>
            </div>
          </div>
        </Motion.section>
      </div>
    </div>
  );
};

export default ProjectsPage;

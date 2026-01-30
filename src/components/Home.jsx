// FILE: src/components/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FiArrowRight, FiDownload, FiAward, FiUsers, FiTrendingUp, FiCode, FiServer, FiShield, FiCpu, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion as Motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ==================== UTILITY FUNCTIONS ====================

// Calculate stats dynamically from 2021
const calculateStats = () => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;
  
  const projectsByYear = {
    2021: 8, 2022: 18, 2023: 25, 2024: 35, 2025: 42, 2026: 48,
  };
  
  const reposByYear = {
    2021: 2, 2022: 3, 2023: 4, 2024: 5, 2025: 6, 2026: 7,
  };
  
  let projectsCompleted = 0;
  let reposCreated = 0;
  
  for (let year = startYear; year <= currentYear; year++) {
    projectsCompleted += projectsByYear[year] || 0;
    reposCreated += reposByYear[year] || 0;
  }
  
  return { years: yearsExperience, projects: projectsCompleted, repos: reposCreated };
};

// ==================== DATA ====================

const stats = (() => {
  const { years, projects } = calculateStats();
  return [
    { label: 'Years Experience', value: `${years}+`, icon: FiTrendingUp },
    { label: 'Projects Delivered', value: `${projects}+`, icon: FiAward },
    { label: 'Clients Served', value: '30+', icon: FiUsers },
  ];
})();

const milestones = [
  {
    year: '2021',
    title: 'Started Software Engineering Journey',
    description: 'Began professional career in full stack development, mastering Java Spring Boot and React.js',
    achievements: ['Built 10+ enterprise applications', 'Learned modern web frameworks'],
    icon: FiCode,
    color: 'from-sky-500 to-blue-500',
  },
  {
    year: '2022',
    title: 'DevOps & Cloud Infrastructure',
    description: 'Specialized in containerization, orchestration, and automated deployment pipelines',
    achievements: ['Deployed 20+ microservices', 'Reduced deployment time by 60%'],
    icon: FiServer,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    year: '2023',
    title: 'API Gateway & Security Expert',
    description: 'Led WSO2 API Management implementations with advanced authentication and rate limiting',
    achievements: ['Managed 100+ API endpoints', 'Implemented OAuth2/JWT security'],
    icon: FiShield,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    year: '2024',
    title: 'Senior Engineer & Technical Mentor',
    description: 'Architecting scalable enterprise solutions and mentoring development teams',
    achievements: ['Mentored 500+ developers globally', 'Led 5 major projects to success'],
    icon: FiCpu,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2025-Present',
    title: 'Solutions Architect & Team Lead',
    description: 'Driving technical strategy, system design, and fostering engineering excellence',
    achievements: ['Architected multi-tenant platforms', 'Established best practices'],
    icon: FiAward,
    color: 'from-pink-500 to-rose-500',
  },
];

// ==================== COMPONENTS ====================

// ==================== COMPONENTS ====================

// Achievement Timeline Carousel
const AchievementTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % milestones.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const milestone = milestones[currentIndex];
  const Icon = milestone.icon;

  return (
    <div className="relative h-full flex flex-col py-2 sm:py-4">
      <div className="flex-1 flex items-center justify-center px-3 sm:px-4">
        <AnimatePresence mode="wait">
          <Motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full max-w-sm"
          >
            <div className="text-center mb-4 sm:mb-6">
              <Motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className={`inline-flex p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${milestone.color} text-white shadow-2xl mb-3 sm:mb-4`}
              >
                <Icon size={28} />
              </Motion.div>
              <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider mb-1 sm:mb-2">{milestone.year}</p>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 leading-tight">{milestone.title}</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 sm:mb-6">{milestone.description}</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {milestone.achievements.map((achievement, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-background/40 border-2 border-cyan-500/40"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-text-secondary">{achievement}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons at Bottom */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-2">
        <Motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-1.5 sm:p-2 rounded-full bg-card-background/80 backdrop-blur-sm border-2 border-cyan-500/40 text-text-primary hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all duration-300 shadow-lg"
        >
          <FiChevronLeft size={20} />
        </Motion.button>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          {milestones.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? 'w-6 sm:w-8 h-2 bg-primary' : 'w-2 h-2 bg-cyan-500/40 hover:bg-cyan-500/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-1.5 sm:p-2 rounded-full bg-card-background/80 backdrop-blur-sm border-2 border-cyan-500/40 text-text-primary hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all duration-300 shadow-lg"
        >
          <FiChevronRight size={20} />
        </Motion.button>
      </div>
    </div>
  );
};

// Animated Background Particles
const FloatingParticles = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const colors = ['bg-blue-400/40', 'bg-purple-400/40', 'bg-pink-400/40', 'bg-cyan-400/40', 'bg-indigo-400/40'];
        const color = colors[i % colors.length];
        return (
          <Motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 ${color} rounded-full shadow-lg shadow-current`}
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        );
      })}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
// ==================== MAIN COMPONENT ====================

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background via-indigo-950/20 to-background/90 text-text-primary pt-12 overflow-hidden">
      {/* Animated Background */}
      <FloatingParticles />
      
      {/* Gradient Orbs */}
      <Motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-sky-500/40 to-blue-500/40 blur-3xl"
        style={{ y: y1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div 
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 blur-3xl"
        style={{ y: y2 }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.7, 0.5, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div 
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], x: [-50, 50, -50], y: [-50, 50, -50] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[1px]" />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 py-20">
          
          {/* Left Section - Hero Content */}
          <Motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <Motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
              variants={itemVariants}
            >
              <span className="text-text-primary">Ezekiel</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Kibiego</span>
            </Motion.h1>

            {/* Dynamic Roles */}
            <Motion.div 
              className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Motion.span 
                className="font-mono mr-3 text-cyan-400 text-2xl font-bold"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {'❯'}
              </Motion.span>
              <span className="font-bold text-text-primary">
                <Typewriter
                  words={[
                    'Software Engineer', 
                    'Full Stack Developer', 
                    'DevOps Specialist',
                    'API Architect',
                    'Technical Mentor',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </Motion.div>
            
            {/* Description */}
            <Motion.p 
              className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Software engineer specializing in <span className="text-cyan-400 font-bold">scalable architecture</span>, <span className="text-blue-400 font-bold">API platforms</span>, and <span className="text-purple-400 font-bold">DevOps excellence</span>. Building secure, high-performance solutions that transform business operations.
            </Motion.p>

            {/* Stats */}
            <Motion.div
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0 mb-12"
              variants={itemVariants}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colors = [
                  { icon: 'text-cyan-400' },
                  { icon: 'text-blue-400' },
                  { icon: 'text-purple-400' },
                ];
                const color = colors[index % colors.length];
                return (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <Icon className={`${color.icon} drop-shadow-lg`} size={24} />
                      <p className="text-3xl sm:text-4xl font-bold text-text-primary">{stat.value}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary font-semibold">{stat.label}</p>
                  </div>
                );
              })}
            </Motion.div>

            {/* CTA Buttons */}
            <Motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <Motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <span>View My Work</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Link>
              </Motion.div>
              
              <Motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-400/60 text-white font-bold text-lg hover:border-pink-400 hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm transition-all duration-300"
                >
                  Let's Collaborate
                </Link>
              </Motion.div>
              
              <Motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://drive.google.com/file/d/14XWzUYMSD7_Ls44mMlP-Vv1ORjYG72Ae/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card-background/30 border-2 border-cyan-500/40 text-text-secondary hover:text-cyan-400 hover:border-cyan-500/60 font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  <FiDownload size={20} />
                  <span>Resume</span>
                </a>
              </Motion.div>
            </Motion.div>
          </Motion.div>

          {/* Right Section - Timeline Card */}
          <Motion.div 
            className="w-full lg:w-1/2 min-h-[450px] sm:min-h-[500px] lg:h-[600px] relative group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Main card */}
            <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 border-cyan-500/40 shadow-2xl hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all">
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-purple-500/5" />
              
              {/* Accent corner borders */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyan-500/40 rounded-br-3xl" />
              
              {/* Timeline content */}
              <div className="relative h-full p-6 sm:p-8 flex flex-col justify-center items-center">
                <div className="text-center w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 flex items-center justify-center gap-2 flex-shrink-0">
                    <FiTrendingUp className="text-primary flex-shrink-0" size={24} />
                    Career Milestones
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mb-6 flex-shrink-0">My journey of continuous growth</p>
                </div>
                <div className="w-full">
                  <AchievementTimeline />
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

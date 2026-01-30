import React, { useState, useEffect, useCallback } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, FiLayers, FiZap, FiHeart, FiCode, FiServer, FiCpu, FiDatabase, FiShield, FiUsers, FiStar
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import profileImage from '/images/profile.jpg';
import fullStackImg from '/images/full-stack-architecture.jpg';
import devopsImg from '/images/devops-automation.jpg';
import apiGatewayImg from '/images/api-gateway.jpg';
import cybersecurityImg from '/images/cybersecurity-qa.jpg';

// --- Countdown Timer Component ---
const CountdownTimer = ({ duration }) => {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const timeLeft = Math.max(0, Math.round((duration - elapsed) * 10) / 10);
      setRemaining(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  return <span>{remaining.toFixed(1)}s</span>;
};

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

// --- Reusable Components and Data ---

// Animated background orbs
const BackgroundOrbs = () => (
  <>
    <Motion.div
      className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.7, 0.5],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <Motion.div
      className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -40, 0],
        y: [0, 40, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </>
);

// Reusable Section Component
const Section = ({ children, className = '' }) => (
  <Motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className={`py-12 sm:py-16 md:py-20 ${className}`}
  >
    {children}
  </Motion.section>
);

// Pillar Card Component
const PillarCard = ({ icon, title, children, delay }) => (
  <Motion.div 
    initial={{ opacity: 0, y: 20, rotateX: -10 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ 
      duration: 0.4, 
      delay: delay * 0.08, 
      ease: 'easeOut'
    }}
    whileHover={{ 
      y: -5, 
      scale: 1.01,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    className="relative p-10 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 border-cyan-500/40 rounded-3xl shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/60 text-left group overflow-hidden h-full will-change-transform"
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
    
    <Motion.div 
      className="relative flex items-center justify-start p-5 rounded-2xl mb-6 border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-cyan-400 w-fit"
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.3 }}
    >
      {React.cloneElement(icon, { size: 34 })}
    </Motion.div>
    
    <h3 className="relative text-xl sm:text-2xl font-bold text-text-primary mb-4 group-hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
      {title}
    </h3>
    <p className="relative text-text-secondary leading-relaxed text-base">{children}</p>
    
    {/* Bottom accent line */}
    <Motion.div 
      className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.5, delay: delay * 0.08 + 0.2 }}
    />
  </Motion.div>
);

const expertiseAreas = [
  {
    icon: FiCode,
    title: 'Full Stack Architecture',
    color: 'sky-500',
    imageUrl: fullStackImg,
    description: 'Building scalable applications from database to UI with seamless user experiences and maintainable code.',
    techs: ['Java Spring Boot', 'React.js', 'Node.js (Express)', 'Python (Django)'],
  },
  {
    icon: FiServer,
    title: 'DevOps & Automation',
    color: 'blue-500',
    imageUrl: devopsImg,
    description: 'Architecting CI/CD pipelines for rapid deployments with reliability and scalability in mind.',
    techs: ['Docker', 'Kubernetes', 'Jenkins', 'Apache Camel'],
  },
  {
    icon: FiCpu,
    title: 'API Gateway Management',
    color: 'indigo-500',
    imageUrl: apiGatewayImg,
    description: 'Designing secure and efficient API ecosystems with expertise in WSO2 and API management.',
    techs: ['API Management', 'Rate Limiting', 'Identity Server', 'RESTful APIs'],
  },
  {
    icon: FiShield,
    title: 'Security & Quality',
    color: 'sky-600',
    imageUrl: cybersecurityImg,
    description: 'Ensuring application integrity through rigorous testing practices and security implementation.',
    techs: ['Data Encryption', 'Unit Testing', 'Integration Testing', 'E2E Testing'],
  },
];

// --- Main About Page Component ---
const AboutPage = () => {
  const [selectedArea, setSelectedArea] = useState(expertiseAreas[0]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotate expertise cards every 5 seconds
  useEffect(() => {
    if (!isAutoRotating) return;

    const intervalId = setInterval(() => {
      setSelectedArea((current) => {
        const currentIndex = expertiseAreas.findIndex(area => area.title === current.title);
        const nextIndex = (currentIndex + 1) % expertiseAreas.length;
        return expertiseAreas[nextIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isAutoRotating]);

  // Stop auto-rotation when user clicks
  const handleManualSelection = useCallback((area) => {
    setIsAutoRotating(false);
    setSelectedArea(area);
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsAutoRotating(true), 10000);
  }, []);

  const colorVariants = {
    'sky-500': 'bg-sky-500',
    'blue-500': 'bg-blue-500',
    'indigo-500': 'bg-indigo-500',
    'blue-600': 'bg-blue-600',
    'sky-600': 'bg-sky-600',
    'indigo-600': 'bg-indigo-600',
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-background via-background/95 to-background/90 text-text-primary pt-20 pb-16 overflow-hidden">
      {/* Animated Background */}
      <BackgroundOrbs />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-screen-2xl">
        {/* Page Header with enhanced animations */}
        <Section className="!pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Profile Image with ring animation */}
            <Motion.div 
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Motion.div className="relative inline-block">
                <Motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Motion.img 
                  src={profileImage} 
                  alt="Ezekiel Kibiego"
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-2xl object-cover shadow-2xl border-4 border-cyan-500/40 hover:border-cyan-500/60 transition-all duration-300"
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.2, 
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/1f2f37/76e6e6?text=Ezekiel'; }}
                />
                {/* Decorative stars */}
                {[...Array(3)].map((_, i) => (
                  <Motion.div
                    key={i}
                    className="absolute text-primary/40"
                    style={{
                      top: `${20 + i * 30}%`,
                      right: `${-10 - i * 15}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <FiStar size={16 + i * 4} />
                  </Motion.div>
                ))}
              </Motion.div>
            </Motion.div>

            {/* Right: About content */}
            <Motion.div 
              className="text-left space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600">About Me</span>
              </Motion.h1>
              
              <Motion.p 
                className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                I'm a <span className="text-primary font-semibold">software architect</span> and <span className="text-primary font-semibold">mentor</span> passionate about crafting elegant, high-performance solutions for real-world challenges.
              </Motion.p>
              
              {/* Stats badges */}
              <Motion.div
                className="flex flex-wrap items-center gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                >
                  {(() => {
                    const { years, projects } = calculateStats();
                    return [
                      { label: `${years}+ Years`, icon: FiZap },
                      { label: `${projects}+ Projects`, icon: FiCode },
                      { label: '20+ Technologies', icon: FiLayers },
                    ].map((badge, index) => (
                      <Motion.div
                        key={badge.label}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-card-background/60 backdrop-blur-sm border-2 border-cyan-500/40 rounded-full text-sm font-medium text-text-primary"
                        whileHover={{ scale: 1.05, borderColor: 'var(--color-primary)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                      >
                        <badge.icon className="text-primary" size={16} />
                        {badge.label}
                      </Motion.div>
                    ));
                  })()}
              </Motion.div>
            </Motion.div>
          </div>
        </Section>

        {/* Core Principles Section with enhanced layout */}
        <Section>
          <Motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/40 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              <FiStar size={16} />
              Core Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">What Drives My Work</h2>
          </Motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <PillarCard icon={<FiLayers />} title="Robust Architecture" delay={0}>
              Architecting scalable, maintainable, and secure solutions that deliver long-term value and adapt to evolving needs.
            </PillarCard>
            <PillarCard icon={<FiZap />} title="Efficient Automation" delay={1}>
              Leveraging cutting-edge automation tools for faster development cycles, enhanced reliability, and seamless deployments.
            </PillarCard>
            <PillarCard icon={<FiHeart />} title="Collaborative Mentorship" delay={2}>
              Empowering teams through knowledge sharing, code reviews, and fostering a culture of continuous learning and excellence.
            </PillarCard>
          </div>
        </Section>

        {/* Interactive Expertise Section with enhanced UI */}
        <Section>
          <Motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/40 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              <FiCode size={16} />
              Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">My Expertise</h2>
            <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              Explore the technologies and philosophies driving my work across the full stack.
            </p>
          </Motion.div>
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:items-stretch">
            {/* Left Column: Navigation with improved styling */}
            <Motion.div 
              className="w-full lg:w-5/12 flex"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-full sticky top-24 flex flex-col gap-4 p-8 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 border-cyan-500/40 rounded-3xl shadow-xl h-fit lg:min-h-[600px]">
                {/* Auto-rotation indicator */}
                {isAutoRotating && (
                  <Motion.div
                    className="mb-2 flex items-center gap-2 text-xs text-text-secondary/70"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Motion.div
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span>Auto-rotating every 5 seconds</span>
                  </Motion.div>
                )}
                
                {expertiseAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <Motion.button
                      key={area.title}
                      onClick={() => handleManualSelection(area)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`group relative w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 overflow-hidden ${
                        selectedArea.title === area.title 
                          ? `${colorVariants[area.color]} text-white shadow-xl` 
                          : 'text-text-secondary hover:bg-gradient-to-br hover:from-card-background hover:to-card-background/80 border-2 border-cyan-500/40 hover:border-cyan-500/60'
                      } font-semibold text-sm sm:text-base`}
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ 
                        scale: selectedArea.title === area.title ? 1 : 1.02,
                        x: selectedArea.title === area.title ? 0 : 6
                      }}
                    >
                      {selectedArea.title === area.title && (
                        <>
                          <Motion.div
                            layoutId="activeExpertise"
                            className={`absolute inset-0 ${colorVariants[area.color]} rounded-xl`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                          />
                          {isAutoRotating && (
                            <Motion.div
                              className="absolute bottom-0 left-0 h-1 bg-white/40 rounded-b-xl"
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 5, ease: "linear" }}
                              key={selectedArea.title}
                              style={{ transformOrigin: "left" }}
                            />
                          )}
                          <Motion.div
                            className="absolute top-2 right-3 text-xs font-bold text-white/70 tabular-nums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            key={`counter-${selectedArea.title}`}
                          >
                            {isAutoRotating && (
                              <CountdownTimer duration={5} />
                            )}
                          </Motion.div>
                        </>
                      )}
                      <Motion.div 
                        className={`relative z-10 p-3 rounded-xl ${
                          selectedArea.title === area.title 
                            ? 'bg-white/20 shadow-lg' 
                            : 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/20'
                        }`}
                        whileHover={{ rotate: selectedArea.title === area.title ? 0 : 15, scale: 1.1 }}
                      >
                        <Icon size={22} />
                      </Motion.div>
                      <span className="relative z-10 flex-1">{area.title}</span>
                      {selectedArea.title === area.title && (
                        <Motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="relative z-10"
                        >
                          <FiArrowRight size={18} />
                        </Motion.div>
                      )}
                    </Motion.button>
                  );
                })}
              </div>
            </Motion.div>

            {/* Right Column: Content Display with enhanced animations */}
            <Motion.div 
              className="w-full lg:w-7/12 flex"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full p-10 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 border-blue-500/40 rounded-3xl shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/60 transition-all duration-500 lg:min-h-[600px] flex flex-col">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={selectedArea.title}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex flex-col h-full"
                  >
                    <Motion.div 
                      className="relative mb-8 rounded-2xl overflow-hidden group flex-shrink-0"
                      whileHover={{ scale: 1.01, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <div className="absolute inset-0 border-2 border-blue-500/40 rounded-2xl group-hover:border-blue-500/60 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300" />
                      <Motion.img 
                        src={selectedArea.imageUrl} 
                        alt={`${selectedArea.title} - Specialty in software development`}
                        loading="lazy"
                        className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </Motion.div>
                    
                    <Motion.h3 
                      className="font-bold text-2xl sm:text-2xl text-text-primary mb-3 bg-clip-text flex-shrink-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {selectedArea.title}
                    </Motion.h3>
                    
                    <Motion.p 
                      className="text-text-secondary mb-6 leading-relaxed text-base line-clamp-3 h-24 flex-shrink-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                    >
                      {selectedArea.description}
                    </Motion.p>
                    
                    <Motion.div 
                      className="flex flex-wrap gap-3 mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {selectedArea.techs.map((tech, index) => (
                        <Motion.span
                          key={tech}
                          className="px-4 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-cyan-400 border-2 border-cyan-500/40 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + index * 0.03, duration: 0.3 }}
                          whileHover={{ y: -3 }}
                        >
                          {tech}
                        </Motion.span>
                      ))}
                    </Motion.div>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </Motion.div>
          </div>
        </Section>

        {/* Call to Action with enhanced design */}
        <Section>
          <Motion.div 
            className="relative text-center p-10 sm:p-12 md:p-16 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/90 backdrop-blur-lg border-2 border-cyan-500/40 rounded-3xl shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/60 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated gradient background */}
            <Motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/40 rounded-full text-primary text-sm font-semibold mb-6">
                  <FiHeart size={16} />
                  Let's Connect
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                  Let's Create Something{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                    Amazing
                  </span>
                </h2>
                
                <p className="text-text-secondary mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  Excited to tackle new projects and challenges. Have an innovative idea? Let's collaborate and bring it to life together.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/projects" 
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-text-primary font-bold text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FiCode size={20} />
                      <span>View My Work</span>
                      <Motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiArrowRight />
                      </Motion.div>
                    </Link>
                  </Motion.div>
                  
                  <Motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-500/40 text-text-primary font-bold text-lg hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm transition-all duration-300"
                    >
                      <FiHeart size={20} />
                      <span>Get In Touch</span>
                    </Link>
                  </Motion.div>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        </Section>
      </div>
    </div>
  );
};

export default AboutPage;
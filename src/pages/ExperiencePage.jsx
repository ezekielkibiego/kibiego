import React, { useState, useCallback } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  FiChevronDown, FiAward, FiTrendingUp, FiTarget, FiUsers, FiCode, FiServer, FiCheckCircle, FiMapPin, FiClock
} from 'react-icons/fi';

// Calculate stats dynamically from 2021
const calculateStats = () => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;
  
  const projectsByYear = {
    2021: 8, 2022: 18, 2023: 25, 2024: 35, 2025: 42, 2026: 48,
  };
  
  let projectsCompleted = 0;
  
  for (let year = startYear; year <= currentYear; year++) {
    projectsCompleted += projectsByYear[year] || 0;
  }
  
  return { years: yearsExperience, projects: projectsCompleted };
};

const ExperiencePage = () => {
  const [expandedId, setExpandedId] = useState(0);

  const handleExpandClick = useCallback((id) => {
    setExpandedId(prev => prev === id ? -1 : id);
  }, []);

  const experiences = [
    {
      id: 0,
      title: "Software Development Technical Mentor & Team Lead",
      company: "Zindua School",
      location: "Nairobi, Kenya",
      duration: "Feb 2023 - Present",
      period: "2+ years",
      description: "Train, mentor and equip software development learners with comprehensive programming skills and lead technical teams",
      responsibilities: [
        "Train and mentor software development learners in Frontend and Backend programming (JavaScript, TypeScript, Python, Data Structures and Algorithms)",
        "Develop technical content and documentation for comprehensive courses including Django Backend Course",
        "Lead and coordinate team of Technical Mentors, setting tools, delegating tasks, and ensuring effective content delivery",
        "Establish and maintain coding standards, best practices, and learning pathways for software developers",
        "Conduct code reviews and provide constructive feedback to improve code quality across projects"
      ],
      achievements: [
        { icon: FiUsers, text: "Mentored 50+ developers" },
        { icon: FiTarget, text: "Created course content" },
        { icon: FiTrendingUp, text: "Team lead 8+ mentors" },
        { icon: FiCheckCircle, text: "90% mentee satisfaction" }
      ],
      technologies: ["JavaScript", "TypeScript", "Python", "Django", "Data Structures", "Algorithms"],
      color: "cyan"
    },
    {
      id: 1,
      title: "Backend Engineer",
      company: "Bharathbrands PVT",
      location: "Nairobi, Kenya",
      duration: "Aug 2023 - Mar 2024",
      period: "8 months",
      description: "Architected and developed secure Integration APIs and Microservices for banking and government sectors",
      responsibilities: [
        "Developed secure and efficient Integration APIs and Microservices for leading bank and KRA integrations using Java, Spring Boot, Apache Camel, and Apache ActiveMQ",
        "Created Mock Services for testing Microservices to simulate integration processes and validate functionality",
        "Mentored Junior Developers on efficient and secure Microservices development best practices",
        "Developed Django APIs for Community Banking Project and Health Management Project",
        "Created automated testing protocols within DevOps framework, executing 1,000+ test cases per week"
      ],
      achievements: [
        { icon: FiServer, text: "Banking APIs integration" },
        { icon: FiCode, text: "1000+ tests/week automated" },
        { icon: FiTrendingUp, text: "100% test automation" },
        { icon: FiUsers, text: "Mentored junior devs" }
      ],
      technologies: ["Java", "Spring Boot", "Apache Camel", "Apache ActiveMQ", "Django", "DevOps", "Testing Automation"],
      color: "blue"
    },
    {
      id: 2,
      title: "Integration Engineer",
      company: "Bring Global",
      location: "Nairobi, Kenya",
      duration: "Apr 2022 - Jan 2023",
      period: "10 months",
      description: "Designed and developed banking APIs with focus on integration, security, and automation",
      responsibilities: [
        "Developed banking APIs with Spring Boot and Apache Camel for secure financial transactions",
        "Managed, secured, and monitored APIs using WSO2 for enterprise-level API governance",
        "Developed and maintained automation scripts in Python and Bash to automate system administration tasks",
        "Reduced manual effort by 60% through intelligent automation and improved system efficiency",
        "Implemented API security protocols and monitoring dashboards for real-time API health tracking"
      ],
      achievements: [
        { icon: FiTarget, text: "Banking API solutions" },
        { icon: FiTrendingUp, text: "60% automation gain" },
        { icon: FiServer, text: "WSO2 API management" },
        { icon: FiCheckCircle, text: "Zero security breaches" }
      ],
      technologies: ["Spring Boot", "Apache Camel", "WSO2", "Python", "Bash", "REST APIs", "API Security"],
      color: "purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.3 }
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: "border-cyan-500/40",
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
        accent: "from-cyan-500/20 to-blue-500/20",
        hover: "hover:border-cyan-500/60 hover:shadow-cyan-500/20"
      },
      blue: {
        border: "border-blue-500/40",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        accent: "from-blue-500/20 to-purple-500/20",
        hover: "hover:border-blue-500/60 hover:shadow-blue-500/20"
      },
      purple: {
        border: "border-purple-500/40",
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        accent: "from-purple-500/20 to-pink-500/20",
        hover: "hover:border-purple-500/60 hover:shadow-purple-500/20"
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl pt-20 pb-16 relative z-10">
        {/* Header Section */}
        <Motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/40 rounded-full text-cyan-400 text-sm font-semibold">
              <FiAward size={16} />
              Career Timeline
            </div>
          </Motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Experience</span>
          </h1>
          
          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A comprehensive timeline of my career progression, roles, achievements, and the technologies I've mastered along the way.
          </p>
        </Motion.div>

        {/* Timeline Section */}
        <Motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            const isExpanded = expandedId === exp.id;

            return (
              <Motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Connector */}
                {index !== experiences.length - 1 && (
                  <div className={`absolute left-8 top-24 w-1 h-12 bg-gradient-to-b ${colors.accent} hidden sm:block`} />
                )}

                <Motion.div
                  className={`relative p-6 sm:p-8 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-lg border-2 ${colors.border} rounded-3xl shadow-xl transition-all duration-300 cursor-pointer group ${colors.hover} will-change-transform`}
                  onClick={() => handleExpandClick(exp.id)}
                  whileHover={{ y: -4 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 top-8 hidden sm:flex">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.accent} border-4 ${colors.border} flex items-center justify-center shadow-lg`}>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="sm:ml-8">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className={`text-base font-semibold ${colors.text} mb-2`}>
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-text-secondary">
                          <span className="flex items-center gap-1">
                            <FiMapPin size={16} className="flex-shrink-0" /> {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiClock size={16} className="flex-shrink-0" /> {exp.duration}
                          </span>
                          <span className={`px-2 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}>
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <Motion.button
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className={`flex-shrink-0 p-3 rounded-full ${colors.bg} ${colors.text} transition-all`}
                      >
                        <FiChevronDown size={20} />
                      </Motion.button>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed will-change-auto">
                      {exp.description}
                    </p>

                    {/* Expandable Content */}
                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <Motion.div
                          variants={expandVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="mt-6 pt-6 border-t border-cyan-500/20 space-y-6"
                        >
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                              <FiTarget size={18} className={colors.text} />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, idx) => (
                                <Motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex gap-3 text-text-secondary"
                                >
                                  <span className={`flex-shrink-0 ${colors.text}`}>
                                    <FiCheckCircle size={18} className="mt-0.5" />
                                  </span>
                                  <span>{resp}</span>
                                </Motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                              <FiTrendingUp size={18} className={colors.text} />
                              Key Achievements
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {exp.achievements.map((achievement, idx) => {
                                const Icon = achievement.icon;
                                return (
                                  <Motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.08 }}
                                    className={`p-3 rounded-xl bg-gradient-to-br ${colors.accent} border border-cyan-500/20 flex items-center gap-2`}
                                  >
                                    <Icon className={`${colors.text} flex-shrink-0`} size={16} />
                                    <span className="text-sm font-medium text-text-secondary">{achievement.text}</span>
                                  </Motion.div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                              <FiCode size={18} className={colors.text} />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <Motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${colors.bg} ${colors.text} border border-cyan-500/20`}
                                >
                                  {tech}
                                </Motion.span>
                              ))}
                            </div>
                          </div>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Motion.div>
              </Motion.div>
            );
          })}
        </Motion.div>

        {/* Summary Stats */}
        <Motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {(() => {
          const { years } = calculateStats();
          return [
            { label: "Years Experience", value: `${years}+`, icon: FiAward },
            { label: "Companies", value: "3", icon: FiUsers },
            { label: "Technologies", value: "20+", icon: FiCode },
            { label: "Developers Mentored", value: "50+", icon: FiTarget }
          ];
        })().map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 border-2 border-cyan-500/40 text-center shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 will-change-transform"
              >
                <Icon className="text-cyan-400 mx-auto mb-3 sm:mb-4" size={24} />
                <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary font-medium">{stat.label}</div>
              </Motion.div>
            );
          })}
        </Motion.div>

        {/* CTA Section */}
        <Motion.div
          className="mt-20 sm:mt-24 p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-2 border-cyan-500/40 text-center shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities, challenges, and meaningful collaborations. Let's discuss how we can work together to create something exceptional.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-500/40 text-white font-bold text-lg hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Get In Touch
            <FiChevronDown className="rotate-[270deg]" size={20} />
          </a>
        </Motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;

import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FiCode, FiServer, FiShield, FiCloud, FiTool, FiCpu } from 'react-icons/fi';

const skillGroups = [
  {
    title: 'Full Stack Engineering',
    icon: FiCode,
    summary: 'Designing resilient web platforms with modern front-end and back-end stacks.',
    skills: [
      { name: 'Java Spring Boot', level: 92 },
      { name: 'Node.js (Express)', level: 88 },
      { name: 'React.js', level: 90 },
      { name: 'Django', level: 84 },
    ],
  },
  {
    title: 'DevOps & Automation',
    icon: FiCloud,
    summary: 'Operational excellence through CI/CD, containers, and infrastructure automation.',
    skills: [
      { name: 'Docker & Kubernetes', level: 86 },
      { name: 'Jenkins Pipelines', level: 82 },
      { name: 'Apache Camel', level: 78 },
      { name: 'Monitoring & Observability', level: 80 },
    ],
  },
  {
    title: 'API Gateway & Security',
    icon: FiShield,
    summary: 'Securing and scaling APIs with strong governance and identity management.',
    skills: [
      { name: 'WSO2 API Management', level: 88 },
      { name: 'Identity Server', level: 84 },
      { name: 'OAuth2 / JWT', level: 86 },
      { name: 'Rate Limiting & Throttling', level: 82 },
    ],
  },
  {
    title: 'Quality & Delivery',
    icon: FiTool,
    summary: 'Building with quality in mind across testing, documentation, and release readiness.',
    skills: [
      { name: 'Automated Testing', level: 80 },
      { name: 'API Documentation', level: 86 },
      { name: 'Release Management', level: 78 },
      { name: 'System Troubleshooting', level: 84 },
    ],
  },
  {
    title: 'Architecture & Leadership',
    icon: FiCpu,
    summary: 'Driving scalable design and mentoring teams to deliver impact.',
    skills: [
      { name: 'System Architecture', level: 90 },
      { name: 'Technical Mentorship', level: 88 },
      { name: 'Stakeholder Communication', level: 82 },
      { name: 'Solution Design', level: 86 },
    ],
  },
  {
    title: 'Platform Services',
    icon: FiServer,
    summary: 'Reliable platform foundations across data, messaging, and integrations.',
    skills: [
      { name: 'SQL & NoSQL Databases', level: 85 },
      { name: 'Event-Driven Systems', level: 80 },
      { name: 'Third-party Integrations', level: 83 },
      { name: 'Performance Optimization', level: 82 },
    ],
  },
];

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background via-indigo-950/20 to-background/50 text-text-primary pt-20 pb-16 overflow-hidden">
      {/* Animated background orbs */}
      <Motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/50 to-indigo-600/50 rounded-full blur-3xl opacity-60" 
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full blur-3xl opacity-60" 
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div 
        className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500/40 to-sky-500/40 rounded-full blur-3xl opacity-50" 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl relative z-10">
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="py-12 sm:py-16 md:py-20 mb-4"
        >
          <div className="text-center max-w-3xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2.5 rounded-full bg-cyan-500/10 border-2 border-cyan-500/40 text-cyan-400 text-sm font-bold mb-4">Technical Proficiency</span>
            </Motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className="text-text-primary">Skills & </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Expertise</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A comprehensive view of the technologies and platforms that drive technical excellence and deliver measurable impact.
            </p>
          </div>
        </Motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                className="group relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 border-cyan-500/40 rounded-3xl shadow-xl hover:shadow-2xl hover:border-cyan-500/70 hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden will-change-transform"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/8 group-hover:to-accent/8 transition-all duration-500 rounded-3xl" />
                
                {/* Top accent line */}
                <Motion.div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                />
                
                <div className="relative flex items-start gap-4 sm:gap-5 mb-8">
                  <Motion.div 
                    className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 text-primary border-2 border-cyan-500/40 flex-shrink-0 shadow-lg group-hover:shadow-cyan-500/30"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={28} />
                  </Motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">{group.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed line-clamp-2">{group.summary}</p>
                  </div>
                </div>
                
                <div className="relative space-y-6">
                  {group.skills.map((skill, skillIdx) => (
                    <Motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIdx * 0.05, duration: 0.3 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-text-secondary group-hover/skill:text-text-primary transition-colors duration-300 truncate">{skill.name}</span>
                        <Motion.span 
                          className="text-xs sm:text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full flex-shrink-0"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIdx * 0.08 + 0.1 }}
                        >
                          {skill.level}%
                        </Motion.span>
                      </div>
                      <div className="relative h-2.5 w-full rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 overflow-hidden border-1 border-cyan-500/30 shadow-inner">
                        {/* Background shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/skill:animate-pulse" />
                        <Motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 + skillIdx * 0.05 }}
                        />
                      </div>
                    </Motion.div>
                  ))}
                </div>
                
                {/* Bottom accent line */}
                <Motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 + 0.15 }}
                />
              </Motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

// FILE: src/components/Footer.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { motion as Motion } from 'framer-motion';

const Footer = () => {
  useTheme();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/ezekielkibiego', name: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ezekielkibiego/', name: 'LinkedIn' },
  ];

  const activeLinkStyle = {
    color: 'var(--color-primary)',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-card-background/50 via-card-background/80 to-background text-text-secondary overflow-hidden">
      {/* Animated gradient border top */}
      <Motion.div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: '200% 100%' }}
      />
      
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <Motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 py-16 max-w-screen-2xl relative z-10">
        {/* Main footer content */}
        <Motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Brand Column */}
          <Motion.div 
            className="lg:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-card-background/40 to-card-background/20 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300" 
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 group mb-4">
              <Motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                EK
              </Motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ezekiel Kibiego
              </span>
            </Link>
            <Motion.p 
              className="text-sm leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Software Engineer & Technical Mentor building scalable solutions that drive business growth.
            </Motion.p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group p-2.5 rounded-lg bg-card-background border-2 border-blue-500/40 hover:border-blue-500/60 hover:shadow-glow-sm hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 shadow-lg"
                  whileHover={{ 
                    y: -5,
                    scale: 1.1
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <div className="text-text-secondary group-hover:text-blue-400 transition-colors">
                    {React.cloneElement(social.icon, { size: 18 })}
                  </div>
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          {/* Quick Links */}
          <Motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-card-background/40 to-card-background/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Motion.div 
                className="h-1 w-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 16 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link, index) => (
                <Motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <NavLink
                    to={link.path}
                    style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                    className="text-sm transition-all inline-flex items-center gap-3 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 relative pl-4"
                  >
                    <span className="absolute left-0 w-2 h-[2px] bg-cyan-500/40 group-hover:w-3 group-hover:bg-cyan-400 transition-all duration-300" />
                    {link.name}
                  </NavLink>
                </Motion.div>
              ))}
            </nav>
          </Motion.div>

          {/* Services */}
          <Motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-card-background/40 to-card-background/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Motion.div 
                className="h-1 w-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 16 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              Services
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              {['Full Stack Development', 'DevOps Solutions', 'API Architecture', 'Technical Mentoring'].map((service, index) => (
                <Motion.li
                  key={service}
                  className="transition-colors cursor-pointer inline-flex items-center gap-3 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 relative pl-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="absolute left-0 w-2 h-[2px] bg-purple-500/40 group-hover:w-3 group-hover:bg-purple-400 transition-all duration-300" />
                  {service}
                </Motion.li>
              ))}
            </ul>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-card-background/40 to-card-background/20 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Motion.div 
                className="h-1 w-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 16 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              Get In Touch
            </h3>
            <div className="flex flex-col space-y-3 text-sm">
              <Motion.a 
                href="mailto:kibiezekiel@gmail.com" 
                className="transition-all group flex items-start gap-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 3 }}
              >
                <Motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiMail className="mt-0.5 flex-shrink-0" size={16} />
                </Motion.div>
                <span className="group-hover:underline">kibiezekiel@gmail.com</span>
              </Motion.a>
              <Motion.p 
                className="flex items-start gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Motion.span 
                  className="inline-block w-2 h-2 mt-1.5 bg-success rounded-full flex-shrink-0"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.6, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span>Available for freelance & full-time opportunities</span>
              </Motion.p>
              <Motion.p 
                className="flex items-start gap-2 text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="inline-block w-1.5 h-1.5 mt-1 bg-text-secondary rounded-full flex-shrink-0" />
                Nairobi, Kenya
              </Motion.p>
            </div>
          </Motion.div>

        </Motion.div>

        {/* Bottom Bar */}
        <Motion.div 
          className="pt-8 mt-8 border-t border-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs px-6">
            <Motion.p 
              className="text-text-secondary flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-2xl">©</span>
              {new Date().getFullYear()} 
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">Ezekiel Kibiego</span>
              <span>• All rights reserved</span>
            </Motion.p>
            <Motion.div 
              className="flex items-center gap-3 text-text-secondary"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="flex items-center gap-2">
                Built with 
                <span className="text-cyan-400 font-semibold">React</span> 
                & 
                <span className="text-blue-400 font-semibold">Tailwind CSS</span>
              </span>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;

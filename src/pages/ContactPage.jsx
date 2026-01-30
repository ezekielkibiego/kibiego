import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const contactDetails = [
  { label: 'Email', value: 'kibiezekiel@gmail.com', icon: FiMail },
  { label: 'Phone', value: '+254 722 991 833', icon: FiPhone },
  { label: 'Location', value: 'Nairobi, Kenya', icon: FiMapPin },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ezekielkibiego', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/ezekielkibiego', icon: FiGithub },
  { label: 'Twitter', href: 'https://twitter.com/KibiegoEzekiel', icon: FiTwitter },
];

const ContactPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (status.type === 'success' && status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.name.trim().length > 0 && 
           emailRegex.test(formData.email) && 
           formData.message.trim().length > 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // EmailJS configuration - Replace with your actual values from https://dashboard.emailjs.com/
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you within 24-48 hours.'
        });
        setFormData({ name: '', email: '', message: '' });
        formRef.current.reset();
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly at kibiezekiel@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background text-text-primary pt-20 pb-16 overflow-hidden">
      {/* Animated background orbs - static instead of continuous animation */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/40 to-sky-500/40 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl relative z-10">
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className="text-text-primary">Let's </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Connect</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Have a project, partnership, or idea to explore? Reach out and let's build something meaningful together.
            </p>
          </div>
        </Motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group relative p-8 sm:p-10 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-lg border-2 border-cyan-500/40 rounded-3xl shadow-xl hover:shadow-2xl hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden will-change-transform"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Contact Information</h2>
              <p className="text-base text-text-secondary leading-relaxed">
                Prefer a direct conversation? Here's the fastest way to reach me.
              </p>
            </div>
            <div className="relative mt-8 space-y-5">
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                const colors = [
                  { border: 'border-cyan-500/50', icon: 'text-cyan-400', hover: 'hover:border-cyan-500/70 hover:bg-cyan-500/5' },
                  { border: 'border-blue-500/50', icon: 'text-blue-400', hover: 'hover:border-blue-500/70 hover:bg-blue-500/5' },
                  { border: 'border-purple-500/50', icon: 'text-purple-400', hover: 'hover:border-purple-500/70 hover:bg-purple-500/5' },
                ];
                const color = colors[idx % colors.length];
                return (
                  <Motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className={`group/item flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 border-2 ${color.border} ${color.hover} transition-all duration-300`}
                  >
                    <Motion.div
                      className={`p-3.5 rounded-2xl bg-gradient-to-br from-${color.icon.split('-')[1]}-500/15 to-${color.icon.split('-')[1]}-500/25 ${color.icon} border-2 ${color.border} flex-shrink-0 shadow-lg`}
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={24} />
                    </Motion.div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-text-secondary font-bold">{detail.label}</p>
                      <p className="text-base text-text-primary font-bold">{detail.value}</p>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
            <div className="relative mt-10 pt-10 border-t-2 border-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30">
              <h3 className="text-sm uppercase tracking-widest text-text-secondary font-bold mb-5">Connect on Social</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const colors = [
                    { border: 'border-blue-500/50', icon: 'text-blue-400', hover: 'hover:border-blue-400 hover:bg-blue-500/10' },
                    { border: 'border-purple-500/50', icon: 'text-purple-400', hover: 'hover:border-purple-400 hover:bg-purple-500/10' },
                    { border: 'border-cyan-500/50', icon: 'text-cyan-400', hover: 'hover:border-cyan-400 hover:bg-cyan-500/10' },
                  ];
                  const color = colors[idx % colors.length];
                  return (
                    <Motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 ${color.border} bg-gradient-to-br from-background/50 to-background/30 ${color.icon} ${color.hover} backdrop-blur-sm transition-all duration-300 font-bold shadow-lg`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{link.label}</span>
                    </Motion.a>
                  );
                })}
              </div>
            </div>
            
            {/* Bottom accent line */}
            <Motion.div
              className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group relative p-8 sm:p-10 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-lg border-2 border-blue-500/40 rounded-3xl shadow-xl hover:shadow-2xl hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden will-change-transform"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Send a Message</h2>
              <p className="text-base text-text-secondary leading-relaxed">
                Share a brief overview and I'll get back to you within 24-48 hours.
              </p>
            </div>

            {/* Status Message */}
            {status.message && (
              <Motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
                  status.type === 'success'
                    ? 'bg-success/10 border border-success/20 text-success'
                    : 'bg-red-500/10 border border-red-500/20 text-red-500'
                }`}
              >
                {status.type === 'success' ? (
                  <FiCheckCircle size={20} className="flex-shrink-0" />
                ) : (
                  <FiAlertCircle size={20} className="flex-shrink-0" />
                )}
                <p className="text-sm">{status.message}</p>
              </Motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl bg-background/70 border-2 border-cyan-500/40 px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/70 transition-all"
                  aria-label="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@email.com"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  className="mt-2 w-full rounded-xl bg-background/70 border-2 border-blue-500/40 px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/70 transition-all"
                  aria-label="Email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
                  Project Summary
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full rounded-xl bg-background/70 border-2 border-purple-500/40 px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all resize-none"
                  aria-label="Project message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 ${
                  isSubmitting || !isFormValid() ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Submit Message
                  </>
                )}
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

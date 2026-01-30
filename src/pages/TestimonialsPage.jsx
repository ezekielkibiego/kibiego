import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FiMessageCircle, FiLinkedin, FiChevronLeft, FiChevronRight, FiAward, FiUsers } from 'react-icons/fi';

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Jesse Karanja',
      role: 'Co-Founder at Zindua School and Chaptr Global',
      relationship: 'Manager',
      date: 'January 2, 2025',
      text: "I have had the pleasure of working closely with Ezekiel over the past two years, during which he has been an exceptional Lead for the Software Development Department at Zindua School. Working with him has been nothing short of delightful—he brings a rare blend of professionalism, reliability, and calm leadership that makes collaboration easy and enjoyable. Ezekiel has an incredible ability to take ownership of his roles, executing them with dedication and a willingness to continuously improve. His openness to feedback and adaptability have been key in driving the team forward. Under his leadership, the software team has achieved remarkable milestones, including significant curriculum updates and enhanced class delivery. These improvements are clearly reflected in the quality of graduates we now produce—a testament to Ezekiel's vision and hard work. What stands out most about Ezekiel is his dependability. You can count on him for anything, even tasks that go beyond his immediate responsibilities. His willingness to step up and be available is unmatched and speaks volumes about his commitment to the team and the school. It's been an honor to work alongside him.",
      highlight: 'Exceptional leadership and reliability',
      color: 'cyan'
    },
    {
      id: 2,
      name: 'Joan Kirui',
      role: 'Software Developer',
      relationship: 'Classmate at Moringa School',
      date: 'March 17, 2023',
      text: "I highly recommend Ezekiel Kibiego for any software development role. I had the pleasure of studying with him at Moringa School, and he consistently demonstrated a strong understanding of software development principles and a dedication to producing high-quality code. Throughout our time together, Ezekiel consistently showed strong problem-solving skills, an eagerness to learn, and excellent communication skills. He was always willing to collaborate with others and provided valuable insights and suggestions during group projects. Moreover, Ezekiel is a highly motivated and focused individual who takes pride in his work. He is reliable, responsible, and always meets deadlines. I am confident that he would be a valuable asset to any team he joins.",
      highlight: 'Strong problem-solving and collaboration',
      color: 'blue'
    },
    {
      id: 3,
      name: 'Frederico Carvalho',
      role: 'Learning & Development at Bringglobal',
      relationship: 'Manager',
      date: 'February 2, 2023',
      text: "I have had the pleasure of working with Ezekiel Kibiego as part of the Bringglobal team in the Information Technologies department. He was an invaluable asset to the team, delivering good work and contributing to the success of our projects. Ezekiel possesses a unique combination of technical skills and problem-solving abilities that allowed him to understand and develop creative solutions. He was always eager to lend a hand and support colleagues, demonstrating a strong team spirit and a positive attitude. I would highly recommend Ezekiel for any future endeavors, as he has proven to be a reliable and competent professional.",
      highlight: 'Technical excellence and team spirit',
      color: 'purple'
    },
    {
      id: 4,
      name: 'Mary Njenga',
      role: 'Software Engineer',
      relationship: 'Classmate at Moringa School',
      date: 'January 22, 2023',
      text: "Ezekiel is a highly talented software developer who is not only skilled in coding but also in understanding the business needs of the project. He is a team player who is always willing to go the extra mile to ensure the project is delivered on time and to the highest standard. He is also an excellent communicator and always able to explain complex technical issues to non-technical team members in a clear and concise manner. His ability to work under pressure and handle multiple tasks simultaneously is truly impressive. I highly recommend Ezekiel for any software development position. He has the skills, drive, and dedication to excel in any role and will be a valuable asset to any team.",
      highlight: 'Business acumen and communication',
      color: 'pink'
    },
    {
      id: 5,
      name: 'Kennedy Mwenga',
      role: 'Networking - Cybersecurity - APIs',
      relationship: 'Colleague',
      date: 'January 25, 2023',
      text: "Ezekiel Kibiego is capable of working with people, managing their time effectively, and taking initiative when necessary. He has also shown an ability to work well under pressure and meet deadlines.",
      highlight: 'Time management and initiative',
      color: 'blue'
    },
    {
      id: 6,
      name: 'Lucy Wambui',
      role: 'Technical mentor at Moringa School',
      relationship: 'Teacher',
      date: 'January 25, 2023',
      text: "Very Committed and professional with a growth mindset.",
      highlight: 'Growth mindset and professionalism',
      color: 'purple'
    },
    {
      id: 7,
      name: 'Diana Mongina',
      role: 'Building a Neobank for Global Gig Workers',
      relationship: 'Classmate at Moringa School',
      date: 'January 22, 2023',
      text: "Ezekiel is highly skilled in a variety of programming languages, including Java, python, javascript, and Ruby on Rails, and is always willing to learn new technologies to tackle any project that comes their way. They are a true team player, always willing to lend a helping hand and share their knowledge with their colleagues. In addition to their technical skills, Ezekiel is also an effective communicator and able to explain complex technical concepts in a clear and concise manner. They are able to work well under pressure and consistently deliver high-quality work on time.",
      highlight: 'Versatile technical skills',
      color: 'cyan'
    }
  ];

  const colorClasses = {
    cyan: {
      border: 'border-cyan-500/40',
      bg: 'from-cyan-500/10',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20'
    },
    blue: {
      border: 'border-blue-500/40',
      bg: 'from-blue-500/10',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20'
    },
    purple: {
      border: 'border-purple-500/40',
      bg: 'from-purple-500/10',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20'
    },
    pink: {
      border: 'border-pink-500/40',
      bg: 'from-pink-500/10',
      text: 'text-pink-400',
      glow: 'shadow-pink-500/20'
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];
  const colors = colorClasses[activeTestimonial.color];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-background via-background/95 to-background/90 text-text-primary pt-20 pb-16 overflow-hidden">
      {/* Animated background orbs - reduced animation load */}
      <Motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
        }}
      />
      <Motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
        style={{
          animation: 'float 16s ease-in-out infinite'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl pt-20 pb-16 relative z-10">
        {/* Header Section */}
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/40 rounded-full text-cyan-400 text-sm font-semibold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <FiAward size={16} />
            Testimonials
          </Motion.div>
          <Motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              What People Say
            </span>
          </Motion.h1>
          <Motion.p 
            className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Recommendations from colleagues, managers, and peers who've worked with me
          </Motion.p>
        </Motion.div>

        {/* Main Testimonial Card */}
        <Motion.div
          className="mb-16 will-change-transform"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className={`relative p-8 sm:p-12 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 ${colors.border} rounded-3xl shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500`}>
            {/* Quote icon */}
            <Motion.div
              className={`absolute top-6 left-6 ${colors.text} opacity-20`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              <FiMessageCircle size={48} />
            </Motion.div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Highlight Badge */}
              <Motion.div
                className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${colors.bg} to-transparent border ${colors.border} rounded-full ${colors.text} text-xs font-semibold mb-6`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <FiAward size={14} />
                {activeTestimonial.highlight}
              </Motion.div>

              {/* Testimonial Text */}
              <Motion.p
                key={activeIndex}
                className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                "{activeTestimonial.text}"
              </Motion.p>

              {/* Author Info */}
              <Motion.div
                className="flex items-start justify-between flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{activeTestimonial.name}</h3>
                    <p className="text-sm text-text-secondary mb-1">{activeTestimonial.role}</p>
                    <p className={`text-xs ${colors.text} font-semibold`}>{activeTestimonial.relationship}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiLinkedin className={colors.text} size={20} />
                  <span className="text-xs text-text-secondary">{activeTestimonial.date}</span>
                </div>
              </Motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 gap-4">
            <Motion.button
              onClick={handlePrev}
              className="flex items-center gap-2 px-6 py-3 bg-card-background border-2 border-cyan-500/40 rounded-xl text-text-primary font-semibold hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft size={20} />
              <span className="hidden sm:inline">Previous</span>
            </Motion.button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <Motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full will-change-transform ${
                    index === activeIndex
                      ? `${colors.bg} w-8 h-2 border ${colors.border}`
                      : 'bg-text-secondary/30 w-2 h-2'
                  }`}
                  whileHover={{ scale: 1.5 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Motion.button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl text-text-primary font-semibold shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Next</span>
              <FiChevronRight size={20} />
            </Motion.button>
          </div>
        </Motion.div>

        {/* Testimonial Grid Preview */}
        <Motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => {
            const cardColors = colorClasses[testimonial.color];
            return (
              <Motion.div
                key={testimonial.id}
                className={`relative p-8 bg-gradient-to-br from-card-background via-card-background/95 to-card-background/80 backdrop-blur-xl border-2 ${cardColors.border} rounded-3xl shadow-2xl hover:${cardColors.glow} cursor-pointer overflow-hidden will-change-transform`}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.4 }}
              >
                {/* Background icon */}
                <Motion.div
                  className={`absolute top-4 right-4 ${cardColors.text} opacity-10`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4 + index * 0.08, type: 'spring', duration: 0.5 }}
                >
                  <FiMessageCircle size={40} />
                </Motion.div>

                {/* Highlight badge */}
                <Motion.div
                  className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${cardColors.bg} to-transparent border ${cardColors.border} rounded-full ${cardColors.text} text-xs font-semibold mb-4`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <FiAward size={12} />
                  {testimonial.highlight}
                </Motion.div>

                {/* Quote text */}
                <p className="text-sm text-text-secondary line-clamp-4 mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="border-t-2 border-gradient-to-r from-transparent via-cyan-500/20 to-transparent pt-4 relative z-10">
                  <h4 className="text-base font-bold text-text-primary mb-1">{testimonial.name}</h4>
                  <p className="text-xs text-text-secondary mb-1">{testimonial.role}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs ${cardColors.text} font-semibold`}>{testimonial.relationship}</span>
                    <span className="text-xs text-text-secondary">•</span>
                    <FiLinkedin className={cardColors.text} size={14} />
                  </div>
                </div>

                {/* Hover indicator */}
                <Motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cardColors.bg} to-transparent`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Motion.div>
            );
          })}
        </Motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;

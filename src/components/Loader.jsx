import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const totalDuration = 5000; // 5 seconds in milliseconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      
      setProgress(Math.round(newProgress));

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setProgress(100);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-[9999] flex flex-col items-center justify-center backdrop-blur-sm">
      {/* Animated background orbs */}
      <Motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Progress counter */}
      <div className="relative z-10 text-center">
        <Motion.div
          className="text-8xl sm:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {progress}%
        </Motion.div>
        
        <Motion.div
          className="w-64 h-2 bg-cyan-500/30 rounded-full overflow-hidden mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Motion.div>
        
        <Motion.p
          className="text-text-secondary text-lg font-medium"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading your experience...
        </Motion.p>
      </div>
    </div>
  );
};

export default Loader;

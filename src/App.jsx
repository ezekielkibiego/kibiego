// FILE: src/App.jsx

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// --- Import Layout and Page Components ---
import PageLayout from './components/Layout';
import Home from './components/Home';
// Lazy load all pages for better code splitting
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));

const NotFoundPage = () => <div className="text-center py-40"><h2>404 - Page Not Found</h2></div>;


function App() {
  return (
    // The ThemeProvider wraps everything, making the theme and loader
    // available to all components within the application.
    <ThemeProvider>
      <Router>
        <Routes>
          {/* The PageLayout component wraps all nested routes, 
              providing the consistent Navbar and Footer. */}
          <Route path="/" element={<PageLayout />}>
            
            {/* The `index` route renders in the Outlet when the path is exactly "/" */}
            <Route index element={<Home />} />

            {/* Other pages are lazy loaded for better performance */}
            <Route path="/about" element={<Suspense fallback={null}><AboutPage /></Suspense>} />
            <Route path="/experience" element={<Suspense fallback={null}><ExperiencePage /></Suspense>} />
            <Route path="/projects" element={<Suspense fallback={null}><ProjectsPage /></Suspense>} />
            <Route path="/skills" element={<Suspense fallback={null}><SkillsPage /></Suspense>} />
            <Route path="/testimonials" element={<Suspense fallback={null}><TestimonialsPage /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={null}><ContactPage /></Suspense>} />
            
            {/* This is a catch-all route for any undefined paths */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

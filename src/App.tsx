import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth intro animation
    const timer = setTimeout(() => {
      setLoading(false);

      
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        {loading ? (
          <div className="fixed inset-0 bg-white dark:bg-slate-900 flex items-center justify-center z-50">
            <div className="animate-pulse text-4xl font-bold text-slate-800 dark:text-white">
              Portfolio
            </div>
          </div>
        ) : (
          <>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
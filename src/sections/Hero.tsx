import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Front-end Developer";
  const typingSpeed = 120;

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200 dark:bg-pink-900/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-4">
              OUDOM
            </h1>
            <div className="h-8">
              <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
                {typedText}<span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="max-w-lg mx-auto text-slate-600 dark:text-slate-300 mt-6 mb-8 leading-relaxed">
              I specialize in creating beautiful, responsive, and user-friendly websites and applications using modern technologies like React, TypeScript, and Tailwind CSS.
            </p>
            
            <div className="flex gap-4 justify-center mb-12">
              <a 
                href="#"
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="#"
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#contact"
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProjects();
                }}
              >
                View My Work
              </a>
            </div>
          </div>
          
          <div 
            className="absolute bottom-10 animate-bounce cursor-pointer"
            onClick={scrollToProjects}
          >
            <ArrowDown 
              size={24} 
              className="text-slate-600 dark:text-slate-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  scrollPosition: number;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollPosition }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-800 shadow-lg transition-all duration-300 ${
        scrollPosition > 300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};
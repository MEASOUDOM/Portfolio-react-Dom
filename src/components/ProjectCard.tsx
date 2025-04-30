import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transform transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
        
        {project.featured && (
          <div className="absolute top-3 left-3 bg-slate-800/90 dark:bg-white/90 text-white dark:text-slate-800 text-xs py-1 px-2 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5 pt-0 flex justify-between mt-auto">
        <a 
          href={project.repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
        >
          <Github size={16} className="mr-1" />
          <span>Repository</span>
        </a>
        <a 
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
        >
          <ExternalLink size={16} className="mr-1" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};
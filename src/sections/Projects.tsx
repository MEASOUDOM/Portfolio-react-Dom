import React, { useState, useEffect } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  // Extract unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  useEffect(() => {
    if (selectedTag) {
      setFilteredProjects(projects.filter(project => project.tags.includes(selectedTag)));
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedTag]);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Recent Projects
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>
        
        {/* Tags for filtering */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          <button
            className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
              selectedTag === null
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
            }`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Load more button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              className="px-6 py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors duration-300 shadow-md"
              onClick={loadMoreProjects}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
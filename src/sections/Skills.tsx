import React, { useState } from 'react';
import { SkillItem } from '../components/SkillItem';
import { skills , getSkillsByCategory } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'languages', label: 'Languages' }
  ];
  
  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            These are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 mx-2 mb-2 rounded-md transition-colors duration-300 text-sm md:text-base ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkillsByCategory(selectedCategory).map(skill => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
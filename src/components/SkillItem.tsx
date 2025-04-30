import React from 'react';
import { Code, Server, PenTool as Tool, Languages } from 'lucide-react';
import type { Skill } from '../data/skills';

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="text-blue-500" size={24} />;
      case 'backend':
        return <Server className="text-green-500" size={24} />;
      case 'tools':
        return <Tool className="text-amber-500" size={24} />;
      case 'languages':
        return <Languages className="text-purple-500" size={24} />;
      default:
        return <Code className="text-blue-500" size={24} />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-3">
        {getIcon(skill.category)}
        <h3 className="text-lg font-semibold ml-2 text-slate-800 dark:text-white">{skill.name}</h3>
      </div>
      <div className="mt-2">
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div 
            className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
            style={{ width: `${(skill.level / 5) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs mt-1 text-slate-600 dark:text-slate-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
    </div>
  );
};
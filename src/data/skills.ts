export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level: number; // 1-5
}

export const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    name: "React",
    icon: "react",
    category: "frontend",
    level: 5
  },
  {
    id: 2,
    name: "JavaScript",
    icon: "javascript",
    category: "frontend",
    level: 5
  },
  {
    id: 3,
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    level: 4
  },
  {
    id: 4,
    name: "HTML5",
    icon: "html",
    category: "frontend",
    level: 5
  },
  {
    id: 5,
    name: "CSS3",
    icon: "css",
    category: "frontend",
    level: 5
  },
  {
    id: 6,
    name: "Bootstrap 5",
    icon: "tailwind",
    category: "frontend",
    level: 4
  },
  {
    id: 7,
    name: "Redux",
    icon: "redux",
    category: "frontend",
    level: 4
  },
  
  // Backend
  {
    id: 8,
    name: "Node.js",
    icon: "node",
    category: "backend",
    level: 4
  },
  {
    id: 9,
    name: "Express",
    icon: "express",
    category: "backend",
    level: 3
  },
  {
    id: 10,
    name: "MongoDB",
    icon: "mongodb",
    category: "backend",
    level: 3
  },
  {
    id: 11,
    name: "Firebase",
    icon: "firebase",
    category: "backend",
    level: 4
  },
  
  // Tools
  {
    id: 12,
    name: "Git",
    icon: "git",
    category: "tools",
    level: 4
  },
  {
    id: 13,
    name: "Webpack",
    icon: "webpack",
    category: "tools",
    level: 3
  },
  {
    id: 14,
    name: "Figma",
    icon: "figma",
    category: "tools",
    level: 3
  },
  {
    id: 15,
    name: "VS Code",
    icon: "vscode",
    category: "tools",
    level: 5
  },
  
  // Languages
  {
    id: 16,
    name: "PHP",
    icon: "PHP",
    category: "languages",
    level: 4
  },
  {
    id: 17,
    name: "Java",
    icon: "java",
    category: "languages",
    level: 3
  },
  {
    id: 17,
    name: "C#",
    icon: "C#",
    category: "languages",
    level: 2
  }
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};
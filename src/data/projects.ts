export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform built with React, Redux, and Firebase. Features include user authentication, product filtering, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux", "Firebase", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool for managing tasks with drag-and-drop functionality, user authentication, and data persistence. Built with React and Firebase.",
    image: "https://images.pexels.com/photos/6956503/pexels-photo-6956503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that displays current weather and forecasts for any location. Utilizes the OpenWeather API and features dynamic UI updates.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "API", "Charts.js"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "An application for tracking personal expenses and income with visualizations, budgeting features, and data analysis tools.",
    image: "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Chart.js", "LocalStorage"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Movie Database App",
    description: "A movie browsing application built with React that uses the TMDB API to display movie information, trailers, and reviews.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "API", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "A dashboard for managing and analyzing social media accounts across multiple platforms. Features data visualization and scheduling tools.",
    image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Chart.js", "OAuth"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true
  }
];
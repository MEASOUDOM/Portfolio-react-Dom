import React from 'react';
import { Calendar, MapPin, Award, Book } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Learn more about my background, experience, and what drives me as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-75 transform -rotate-6"></div>
              <img src="assets/About/Meas Oudom.png" alt="Profile" 
                className="relative rounded-lg object-cover w-full shadow-xl"/>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Passionate Web Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a front-end developer with a passion for creating beautiful, responsive, and user-friendly websites. With over 6 mount of experience in web development, I've worked on a variety of projects ranging from small business websites to large e-commerce platforms.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              My goal is to create websites that not only look great but also provide a seamless user experience. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-slate-600 dark:text-slate-300">Sangkat Boeng Salang, Khan Toul Kork, Phnom Penh Capital</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-slate-600 dark:text-slate-300">6+ mount Experience</span>
              </div>
              <div className="flex items-center">
                <Award className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-slate-600 dark:text-slate-300">B.S. Computer Science</span>
              </div>
              <div className="flex items-center">
                <Book className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-slate-600 dark:text-slate-300">Continuous Learner</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Professional Journey
          </h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 shadow-lg flex items-center justify-center z-10">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="md:text-right md:pr-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                        System Engineer
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">2024 - Present</p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Currently working as a system engineer, focusing on cloud infrastructure and DevOps practices.
                        Build up server ubuntu and windows server, and deploy web application on cloud. 
                      </p>
                    </div>
                  </div>
                  <div className="md:hidden"></div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 shadow-lg flex items-center justify-center z-10">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="md:hidden"></div>
                  <div className="md:pl-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                        Frontend Developer
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">MAR 2025 - JUL 2025</p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Developed responsive websites and web applications using React, TypeScript, and modern CSS frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Item 3
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 shadow-lg flex items-center justify-center z-10">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="md:text-right md:pr-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                        Junior Developer
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">2017 - 2019</p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Started my career as a junior developer working on HTML, CSS, and JavaScript projects.
                      </p>
                    </div>
                  </div>
                  <div className="md:hidden"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
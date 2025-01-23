
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Bot, 
  Cloud, 
  Store, 
  Sun, 
  CreditCard, 
  Coffee, 
  Lightbulb, 
  Code, 
  Eye 
} from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: any;
  link?: string;
  demoLink?: string;
  category: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  demoLink,
  category, 
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize the hover handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6 bg-[#0A0A1F]/40 backdrop-blur-sm rounded-xl 
                  border border-gray-800/50 group-hover:border-blue-500/50 
                  transition-all duration-500 h-full relative overflow-hidden
                  hover:transform hover:scale-[1.02]">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Icon className="w-8 h-8 text-blue-400 group-hover:animate-bounce" />
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
          </motion.div>
          
          <p className="text-gray-300 mb-6 line-clamp-3 hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
          
          {/* Links Container */}
          <div className="flex gap-4 mb-4">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors px-3 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/20"
              >
                <Code className="w-4 h-4" />
                View Code
              </motion.a>
            )}
            
            {demoLink && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors px-3 py-1 rounded-full bg-green-500/10 hover:bg-green-500/20"
              >
                <Eye className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
          
          <motion.div 
            className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.div>
        </div>

        {/* Sparkles Effect */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm"
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Throttled mouse move handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        timeoutId = undefined;
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const projects = [
    {
      category: "IOT Projects",
      projects: [
        {
          title: "Accident Detector & Emergency Alert System",
          description: "IoT-based vehicle safety system enabling real-time tracking and immediate emergency alerts for crashed vehicles. Features enhanced reliability and efficient response mechanisms.",
          icon: Cloud,
          link: "https://github.com/yourusername/accident-detector",
          demoLink: "https://accident-detector-demo.vercel.app"
        },
        {
          title: "Street Light Controller",
          description: "Advanced IoT-based autonomous street lighting system that optimizes energy consumption through intelligent sensors and real-time condition monitoring.",
          icon: Lightbulb,
          link: "https://github.com/yourusername/street-light",
          demoLink: "https://street-light-demo.vercel.app"
        }
      ]
    },
    {
      category: "Frontend Projects",
      projects: [
        {
          title: "NaveenAI Chatbot",
          description: "Advanced chatbot leveraging Google Gemini API for human-like conversations. Features NLP capabilities for precise, well-informed responses.",
          icon: Bot,
          link: "https://github.com/yourusername/ai-chatbot",
          demoLink: "https://ai-chatbot-demo.vercel.app"
        },
        {
          title: "Github Repository Viewer",
          description: "Web application for exploring public GitHub repositories. Features responsive design and user-friendly interface.",
          icon: Github,
          link: "https://github.com/yourusername/github-viewer",
          demoLink: "https://github-viewer-demo.vercel.app"
        },
        {
          title: "Starbucks Clone",
          description: "Redesigned Starbucks website with custom styling and improved functionality. Features dynamic content and animations.",
          icon: Store,
          link: "https://github.com/yourusername/starbucks-clone",
          demoLink: "https://starbucks-clone-demo.vercel.app"
        },
        {
          title: "Weather Checker",
          description: "Live weather update application with location-based data and responsive design.",
          icon: Sun,
          link: "https://github.com/yourusername/weather-app",
          demoLink: "https://weather-app-demo.vercel.app"
        }
      ]
    },
    {
      category: "Python Projects",
      projects: [
        {
          title: "ATM Machine Simulation",
          description: "Object-oriented implementation of ATM functionalities including authentication, balance inquiries, withdrawals, and deposits.",
          icon: CreditCard,
          link: "https://github.com/yourusername/atm-simulation",
          demoLink: "https://atm-simulation-demo.vercel.app"
        },
        {
          title: "Cafe Management System",
          description: "Comprehensive system for restaurant bill calculation and management with detailed itemized listing capabilities.",
          icon: Coffee,
          link: "https://github.com/yourusername/cafe-management",
          demoLink: "https://cafe-management-demo.vercel.app"
        }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-[#030014] overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#1a365d,transparent)] animate-pulse-slow"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_600px_at_60%_60%,#3b0764,transparent)] animate-pulse-slow"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring innovation through code. Here's a collection of my notable projects
            spanning IoT, web development, and software engineering.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === null 
                ? 'bg-blue-500 text-white' 
                : 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {projects.map((section) => (
            <motion.button
              key={section.category}
              onClick={() => setSelectedCategory(section.category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === section.category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {projects
            .filter(section => !selectedCategory || section.category === selectedCategory)
            .map((section) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-white mb-8"
                >
                  {section.category}
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.projects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      {...project}
                      delay={index * 0.1}
                      category={section.category}
                    />
                  ))}
                </div>
              </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
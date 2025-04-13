import React, { useState, useEffect } from 'react';
import ProjectCard from '../projectCard';

function Projects() {
  const [filter, setFilter] = useState('All');
  const [scrollY, setScrollY] = useState(0);
  const [animated, setAnimated] = useState([]);
  
  const projects = [
    {
      Name: "Mini-Blog",
      Category: "Full-Stack Blog Application Using Appwrite",
      Description: "Developed a full-featured blog platform with complete CRUD operations using React, Redux, and Appwrite. Implemented user authentication, post creation/editing/deletion, image upload, and post preview functionality.",
      Code: "https://github.com/robin8998/Mini-Blog",
      LiveLink: "https://mini-blog-robin-singh-s-projects.vercel.app/",
      Image: "",
      Tech: "React, Redux, React Hook Form, Appwrite (Database + Storage + Auth), Tailwind CSS, React Router DOM",
      Features: ["User Sign Up / Login / Logout", "Create, Edit, Delete Posts", "Upload and display featured images", "Author-based access control"]
    },
    {
      Name: "Theme-changer",
      Category: "Front-End Utility / UI-UX Enhancement",
      Description: "Built a reusable theme-switching component using React and Tailwind CSS. Supports dynamic light/dark mode with plans to persist user preference.",
      Code: "https://github.com/robin8998/theme-changer",
      LiveLink: "https://theme-changer-robin-singh-s-projects.vercel.app/",
      Image: "",
      Tech: "React, Tailwind CSS, Vite",
      Features: ["Light/Dark mode toggle", "Tailwind CSS dark class-based implementation", "Responsive layout with Vite + Tailwind", "Minimal, modern UI"]
    },
    {
      Name: "Todo-list",
      Category: "Front-End Productivity App",
      Description: "Developed a functional To-Do List application using React and Tailwind CSS. Allows users to add, mark complete, and delete tasks in a clean and responsive UI.",
      Code: "https://github.com/robin8998/ToDo-list-",
      LiveLink: "https://to-do-list-robin-singh-s-projects.vercel.app/",
      Image: "",
      Tech: "React, Tailwind CSS, Vite",
      Features: ["Add and remove tasks", "Mark tasks as completed", "Clean, mobile-responsive design with Tailwind CSS"]
    },
  ];

  // Extract unique categories for filter
  const categories = ['All', ...new Set(projects.map(project => {
    const mainCategory = project.Category.split('/')[0].trim();
    return mainCategory;
  }))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.Category.includes(filter));

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Check which elements should be animated
    const checkAnimation = () => {
      const elements = document.querySelectorAll('.project-card');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // If element is in viewport
        if (rect.top <= window.innerHeight * 0.85 && !animated.includes(index)) {
          setAnimated(prev => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    checkAnimation(); // Check on initial load
    
    const scrollListener = setInterval(checkAnimation, 200);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(scrollListener);
    };
  }, [animated]);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header with animation */}
        <div 
          className="text-center mb-12 opacity-0 animate-fade-in-down"
          style={{animation: 'fadeInDown 0.8s ease forwards'}}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work showcasing my skills in web development
          </p>
        </div>

        {/* Category Filter with animation */}
        <div 
          className="flex flex-wrap justify-center gap-2 mb-10 opacity-0"
          style={{animation: 'fadeInUp 0.8s ease 0.2s forwards'}}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              style={{transition: 'all 0.3s ease', animationDelay: `${0.3 + index * 0.1}s`}}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with staggered animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`project-card transition-all duration-500 transform ${
                animated.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}

export default Projects;
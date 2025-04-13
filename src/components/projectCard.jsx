import React from 'react';

function ProjectCard({ Name, Category, Description, Code, LiveLink, Tech, Features, Image }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-1">
      {/* Project Header - More compact */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
        <h2 className="text-xl font-bold text-white">{Name}</h2>
        <span className="inline-block px-2 py-1 mt-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full">
          {Category}
        </span>
      </div>
      
      {/* Project Content - More compact */}
      <div className="p-4">
        {/* Description - Shortened */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 line-clamp-3">
          {Description}
        </p>
        
        {/* Technologies */}
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Tech Stack</h3>
          <div className="flex flex-wrap gap-1">
            {Tech.split(',').slice(0, 3).map((item, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
              >
                {item.trim()}
              </span>
            ))}
            {Tech.split(',').length > 3 && (
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">
                +{Tech.split(',').length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Features - Simplified without bullets */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Key Features</h3>
          <div className="text-xs text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-1">
            {Array.isArray(Features) ? (
              Features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  <span>{feature}</span>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                <span>{Features}</span>
              </div>
            )}
            {Array.isArray(Features) && Features.length > 4 && (
              <div className="flex items-center gap-1 text-blue-500">
                <span>+ {Features.length - 4} more</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Links - Horizontal space-saving layout */}
        <div className="flex gap-2 mt-auto">
          <a 
            href={Code} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 px-3 py-1.5 bg-gray-800 text-white rounded text-xs text-center hover:bg-gray-700 transition-colors"
          >
            View Code
          </a>
          
          <a 
            href={LiveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 px-3 py-1.5 bg-blue-600 text-white rounded text-xs text-center hover:bg-blue-700 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
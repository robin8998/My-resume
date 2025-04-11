import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [currentItem, setCurrentItem] = useState('Home');
  const navigate = useNavigate();

  const navItems = [
    { name: 'Resume', slug: '/resume' },
    { name: 'Projects', slug: '/projects' },
    { name: 'Contact', slug: '/contact' },
  ];

  const currentSection = (item) => {
    navigate(item.slug);
    setCurrentItem(item.name);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand */}
          <div className="text-xl font-bold text-gray-800 cursor-pointer" onClick={() => { navigate('/'); setCurrentItem('Home'); }}>
            PixelProfile
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.slug}
                onClick={() => currentSection(item)}
                className={`text-sm font-medium transition duration-200 ${
                  currentItem === item.name
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav (optional) */}
      {/* You can add a hamburger menu for smaller screens if you want */}
    </header>
  );
}

export default Header;

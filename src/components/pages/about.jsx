import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Coffee, Monitor, Sparkles } from 'lucide-react';

function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Skills with icons
  const skills = [
    { name: "Frontend Development", icon: <Monitor className="w-5 h-5" /> },
    { name: "React & Redux", icon: <Code className="w-5 h-5" /> },
    { name: "UI/UX Design", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Problem Solving", icon: <Terminal className="w-5 h-5" /> },
    { name: "Continuous Learning", icon: <Coffee className="w-5 h-5" /> }
  ];

  // Pixel grid background element
  const PixelBackground = ({ className }) => {
    return (
      <div className={`grid grid-cols-6 gap-2 ${className}`}>
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: i % 3 === 0 ? 0.7 : 0.4, 
              scale: 1,
              rotate: i % 2 === 0 ? 0 : 45
            }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
            className={`w-3 h-3 rounded-sm ${
              i % 4 === 0 ? 'bg-indigo-300' : 
              i % 3 === 0 ? 'bg-cyan-300' : 
              i % 2 === 0 ? 'bg-purple-300' : 'bg-indigo-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-purple-50 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20 z-0">
        <PixelBackground className="transform -rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 z-0">
        <PixelBackground className="transform rotate-12" />
      </div>
      
      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-bold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
              About Me
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-cyan-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-100"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                Hi, I'm <span className="font-semibold text-indigo-600">Robin Singh</span> – a passionate front-end developer with a strong foundation in
                HTML, CSS, JavaScript, and React. I recently stepped into the world of web development and love crafting user-friendly, responsive,
                and visually appealing web applications.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mb-8 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white rounded-2xl p-6 shadow-xl"
            >
              <p className="leading-relaxed">
                I've explored tools like React Redux, React Router, and Appwrite to build full-stack projects, including my personal blog platform.
                I enjoy turning ideas into real-world projects and continuously learning to improve my skills.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-100"
            >
              <p className="text-gray-700 leading-relaxed">
                Currently, I'm diving deeper into responsive design, UI/UX principles, and backend integration to become a more well-rounded developer.
                When I'm not coding, you'll find me exploring design inspiration or learning something new in tech.
              </p>
            </motion.div>
            
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-indigo-800 mb-4"
            >
              Skills & Expertise
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-indigo-100"
                >
                  <span className="text-cyan-500">{skill.icon}</span>
                  <span className="text-indigo-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-lg font-medium text-indigo-600"
            >
              <span>Let's build something amazing together!</span>
              <motion.div 
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image with Pixel Frame */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/3 flex justify-center relative"
          >
            <div className="relative">
              {/* Animated pixel frame */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: i % 2 === 0 ? 0 : 45
                  }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className={`absolute w-4 h-4 rounded-sm ${
                    i % 3 === 0 ? 'bg-cyan-400' : 
                    i % 2 === 0 ? 'bg-indigo-500' : 'bg-purple-500'
                  }`}
                  style={{
                    top: `${Math.sin(i) * 20 - 10}px`,
                    left: `${Math.cos(i) * 20 - 10}px`,
                    transform: `rotate(${i * 18}deg) translateX(${130 + (i % 3) * 5}px)`
                  }}
                />
              ))}
              
              {/* Profile image */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src="/images/myPhoto.jpg"
                  alt="Robin Singh"
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white z-10 relative"
                />
              </motion.div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 z-20 pointer-events-none" />
              
              {/* Animated background glow */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px 10px rgba(99, 102, 241, 0.3)', 
                    '0 0 30px 15px rgba(124, 58, 237, 0.3)', 
                    '0 0 20px 10px rgba(99, 102, 241, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl z-0"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
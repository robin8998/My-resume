import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Terminal, Coffee, Monitor, Sparkles, FileJson, Database, Award, Zap, BookOpen } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);
  
  // Enhanced skills with more detail
  const skills = [
    { name: "Frontend Development", icon: <Monitor className="w-5 h-5" />, level: 90 },
    { name: "JavaScript", icon: <FileJson className="w-5 h-5" />, level: 85 },
    { name: "React & Redux", icon: <Code className="w-5 h-5" />, level: 88 },
    { name: "Appwrite", icon: <Database className="w-5 h-5" />, level: 75 },
    { name: "UI/UX Design", icon: <Sparkles className="w-5 h-5" />, level: 82 },
    { name: "Problem Solving", icon: <Terminal className="w-5 h-5" />, level: 92 },
    { name: "Continuous Learning", icon: <BookOpen className="w-5 h-5" />, level: 95 },
    { name: "Responsive Design", icon: <Zap className="w-5 h-5" />, level: 88 },
    { name: "Performance Optimization", icon: <Award className="w-5 h-5" />, level: 78 }
  ];

  // GSAP animations setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      // Underline animation
      gsap.from(".heading-underline", {
        width: 0,
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        }
      });

      // Content cards animation
      gsap.from(".content-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        }
      });
      
      // Skills animation
      gsap.from(".skill-item", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        }
      });
      
      // Progress bars animation
      gsap.from(".skill-progress-fill", {
        width: "0%",
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
        }
      });
      
      // Profile image animation
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
        }
      });
      
      // Pixel dots animation around image
      gsap.from(".pixel-dot", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
        }
      });
      
      // Floating animation for pixels
      gsap.to(".pixel-dot", {
        y: "random(-10, 10)",
        x: "random(-10, 10)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reset"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-teal-400"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                borderRadius: '40%',
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                transform: `scale(${Math.random() + 0.5})`,
                filter: 'blur(90px)'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="heading-underline h-1 bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400 w-24 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <div ref={contentRef} className="lg:w-2/3 text-center lg:text-left space-y-8">
            <div className="content-card glass-card bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 text-gray-300">
              <p className="leading-relaxed text-lg">
                Hi, I'm <span className="font-semibold text-teal-400">Robin Singh</span> – a passionate front-end developer with a strong foundation in
                HTML, CSS, JavaScript, and React. I recently stepped into the world of web development and love crafting user-friendly, responsive,
                and visually appealing web applications.
              </p>
            </div>
            
            <div className="content-card glass-card bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-md text-white rounded-2xl p-6 shadow-xl border border-teal-500/20">
              <p className="leading-relaxed">
                I've explored tools like React Redux, React Router, and Appwrite to build full-stack projects, including my personal blog platform.
                I enjoy turning ideas into real-world projects and continuously learning to improve my skills.
              </p>
            </div>
            
            <div className="content-card glass-card bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 text-gray-300">
              <p className="leading-relaxed">
                Currently, I'm diving deeper into responsive design, UI/UX principles, and backend integration to become a more well-rounded developer.
                When I'm not coding, you'll find me exploring design inspiration or learning something new in tech.
              </p>
            </div>
            
            <div ref={skillsRef} className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Skills & <span className="text-teal-400">Expertise</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-item glass-card bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                        {skill.icon}
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-slate-700/70 rounded-full overflow-hidden">
                      <div 
                        className="skill-progress-fill h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="content-card inline-flex items-center gap-2 text-lg font-medium text-teal-400">
              <span>Let's build something amazing together!</span>
              <Sparkles className="w-5 h-5 text-teal-400" />
            </div>
          </div>
          
          {/* Image with Pixel Frame */}
          <div ref={imageRef} className="lg:w-1/3 flex justify-center relative">
            <div className="relative">
              {/* Animated pixel frame */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`pixel-dot absolute w-4 h-4 rounded-sm ${
                    i % 3 === 0 ? 'bg-teal-400' : 
                    i % 2 === 0 ? 'bg-emerald-500' : 'bg-sky-400'
                  }`}
                  style={{
                    transform: `rotate(${i * 18}deg) translateX(${130 + (i % 3) * 5}px)`
                  }}
                />
              ))}
              
              {/* Profile image */}
              <div className="group relative">
                <img
                  src="/images/myPhoto.jpg"
                  alt="Robin Singh"
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-2 border-teal-300/30 z-10 relative transition-all duration-300 group-hover:shadow-teal-500/40"
                />
                
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 z-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
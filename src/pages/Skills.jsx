import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Code,
  Terminal,
  Coffee,
  Monitor,
  Sparkles,
  FileJson,
  Database,
} from "lucide-react";

const Skills = () => {
  const containerRef = useRef(null);
  const skillsRowRef = useRef(null);
  const animationRef = useRef(null);

  const skills = [
    { name: "Frontend Development", icon: <Monitor className="w-5 h-5" /> },
    { name: "JavaScript", icon: <FileJson className="w-5 h-5" /> },
    { name: "React & Redux", icon: <Code className="w-5 h-5" /> },
    { name: "Appwrite", icon: <Database className="w-5 h-5" /> },
    { name: "UI/UX Design", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Problem Solving", icon: <Terminal className="w-5 h-5" /> },
    { name: "Continuous Learning", icon: <Coffee className="w-5 h-5" /> },
  ];

  const allSkills = [...skills, ...skills]; // Duplicate for looping

  useEffect(() => {
    const skillsRow = skillsRowRef.current;

    const createAnimation = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      const totalWidth = skillsRow.scrollWidth / 2;

      animationRef.current = gsap.to(skillsRow, {
        x: -totalWidth,
        duration: 20,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(skillsRow, { x: 0 });
        },
      });
    };

    createAnimation();

    const container = containerRef.current;
    const pause = () => animationRef.current?.pause();
    const play = () => animationRef.current?.play();

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", play);

    return () => {
      animationRef.current?.kill();
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="w-full px-4 py-16 bg-[#0F1115]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <h3 className="text-5xl font-semibold font-Monoton text-white mb-12 text-center tracking-[0.5em] sm:text-4xl md:text-5xl">
          Skills & Expertise
        </h3>

        <div
          ref={containerRef}
          className="w-full overflow-hidden relative"
        >
          <div
            ref={skillsRowRef}
            className="flex w-max"
          >
            {allSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#13161b] px-6 py-4 rounded-full shadow-md border-2 mx-2 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 font-Kanit text-xl flex-shrink-0 sm:px-4 sm:py-3 sm:text-base md:px-8 md:py-6 md:text-xl"
              >
                <span className="text-gray-300">{skill.icon}</span>
                <span className="text-white font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

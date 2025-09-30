"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectCard from "../ProjectCard.jsx"

function Projects() {
  const sectionRef = useRef(null)
  const projectsTrackRef = useRef(null)
  const headingRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  const projects = [
    {
      Name: "Mini-Blog",
      Category: "Full-Stack Blog Application Using Appwrite",
      Description:
        "Developed a full-featured blog platform with complete CRUD operations using React, Redux, and Appwrite. Implemented user authentication, post creation/editing/deletion, image upload, and post preview functionality.",
      Code: "https://github.com/robin8998/Mini-Blog",
      LiveLink: "https://mini-blog-robin-singh-s-projects.vercel.app/",
      Image: "/images/SSminiblog.png",
      Tech: "React, Redux, React Hook Form, Appwrite (Database + Storage + Auth), Tailwind CSS, React Router DOM",
      Features: [
        "User Sign Up / Login / Logout",
        "Create, Edit, Delete Posts",
        "Upload and display featured images",
        "Author-based access control",
      ],
    },
    {
      Name: "Theme-changer",
      Category: "Front-End Utility / UI-UX Enhancement",
      Description:
        "Built a reusable theme-switching component using React and Tailwind CSS. Supports dynamic light/dark mode with plans to persist user preference.",
      Code: "https://github.com/robin8998/theme-changer",
      LiveLink: "https://theme-changer-robin-singh-s-projects.vercel.app/",
      Image: "/images/SSthemechanger.png",
      Tech: "React, Tailwind CSS, Vite",
      Features: [
        "Light/Dark mode toggle",
        "Tailwind CSS dark class-based implementation",
        "Responsive layout with Vite + Tailwind",
        "Minimal, modern UI",
      ],
    },
    {
      Name: "Todo-list",
      Category: "Front-End Productivity App",
      Description:
        "Developed a functional To-Do List application using React and Tailwind CSS. Allows users to add, mark complete, and delete tasks in a clean and responsive UI.",
      Code: "https://github.com/robin8998/ToDo-list-",
      LiveLink: "https://to-do-list-robin-singh-s-projects.vercel.app/",
      Image: "/images/SStodolist.png",
      Tech: "React, Tailwind CSS, Vite",
      Features: [
        "Add and remove tasks",
        "Mark tasks as completed",
        "Clean, mobile-responsive design with Tailwind CSS",
      ],
    },
  ]

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Kill any existing ScrollTrigger instances to prevent conflicts
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    if (isMobile) {
      // Mobile layout - vertical scrolling
      gsap.set(sectionRef.current, { height: "auto" })
      gsap.set(projectsTrackRef.current, { x: 0 })

      // Create a sticky effect for the heading on mobile
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 5%",
        end: "bottom top+=200",
        pin: true,
        pinSpacing: false,
      })
    } else {
      // Desktop layout - horizontal scrolling
      // Calculate the height needed for scrolling (to match the width of all projects)
      const totalProjectsWidth = projectsTrackRef.current.scrollWidth
      const sectionHeight = totalProjectsWidth

      // Set height of the section container to allow for enough scrolling distance
      gsap.set(sectionRef.current, { height: sectionHeight + "px" })

      // Create the horizontal scroll effect with vertical offset for project cards
      const scrollTween = gsap.to(projectsTrackRef.current, {
        x: -totalProjectsWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: projectsTrackRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Create a sticky effect for the heading
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 5%",
        end: `+=${sectionHeight}`,
        pin: true,
        pinSpacing: false,
      })

      return () => {
        // Clean up
        scrollTween.scrollTrigger?.kill()
      }
    }

    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isMobile]) // Re-run when isMobile changes

  return (
    <section id="projects" className="relative w-full bg-gradient-to-r from-[#807e77] to-gray-500 pt-6 overflow-hidden">
      {/* Title with its own pin behavior */}
      <div ref={headingRef} className="container mx-auto py-6 sm:py-8 md:py-12 px-4 z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center font-Monoton tracking-[0.3em] md:tracking-[0.5em]">
          My Projects
        </h2>
      </div>

      {/* Spacer to position project cards below the heading */}
      <div className="h-12 md:h-24"></div>

      {/* Scrolling container */}
      <div ref={sectionRef} className="w-full relative">
        {/* Projects track - this gets pinned and moves horizontally on desktop, or stacks vertically on mobile */}
        <div
          ref={projectsTrackRef}
          className={`${isMobile ? "flex flex-col items-center gap-8 pb-20" : "flex absolute top-0 left-0 mt-32"}`}
          style={!isMobile ? { width: `${projects.length * 100}vw` } : {}}
        >
          {projects.map((project, index) => (
            <div key={index} className={isMobile ? "w-full px-4 mb-8" : "w-screen flex-shrink-0"}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Empty div to ensure proper layout flow after the projects section */}
      {!isMobile && <div className="h-screen"></div>}
    </section>
  )
}

export default Projects

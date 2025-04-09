import React from 'react'

function Projects() {

  const projects = [
    {
      name : "Mini-Blog",
      Category: "Full-Stack Blog Application Using Appwrite",
      description : "Developed a full-featured blog platform with complete CRUD operations using React, Redux, and Appwrite. Implemented user authentication, post creation/editing/deletion, image upload, and post preview functionality. Integrated a responsive UI with Tailwind CSS, rich text editing, and route protection using React Router. Deployed on Vercel for seamless production access.",
      code : "https://github.com/robin8998/Mini-Blog",
      liveLink : "https://mini-blog-robin-singh-s-projects.vercel.app/",
      image : "",
      tech : "React, Redux, React Hook Form, Appwrite (Database + Storage + Auth), Tailwind CSS, React Router DOM",
      features : ["User Sign Up / Login / Logout","Create, Edit, Delete Posts","Upload and display featured images","Author-based access control (only authors can edit/delete their posts)","Dynamic routing","Clean and responsive UI"]
    },  

    {
      name : "Theme-changer",
      Category: "Front-End Utility / UI-UX Enhancement",
      description : "Built a reusable theme-switching component using React and Tailwind CSS. Supports dynamic light/dark mode with plans to persist user preference.",
      code : "https://github.com/robin8998/theme-changer",
      liveLink : "https://theme-changer-robin-singh-s-projects.vercel.app/",
      image : "",
      tech : "React, Tailwind CSS, Vite",
      features : ["Light/Dark mode toggle","Tailwind CSS dark class-based implementation","esponsive layout with Vite + Tailwind","Minimal, modern UI","Ideal for personal portfolios, blogs, and dashboards"]
    },  

    {
      name : "Todo-list",
      Category: "Front-End Productivity App",
      description : "Developed a functional To-Do List application using React and Tailwind CSS. Allows users to add, mark complete, and delete tasks in a clean and responsive UI. Designed with component-based architecture and optimized for simplicity and usability. Great as a beginner-friendly productivity tool and a solid demonstration of React fundamentals.",
      code : "https://github.com/robin8998/ToDo-list-",
      liveLink : "https://to-do-list-robin-singh-s-projects.vercel.app/",
      image : "",
      tech : "React, Tailwind CSS, Vite",
      features : ["Add and remove tasks","Mark tasks as completed","Clean, mobile-responsive design with Tailwind CSS"]
    },  
  ]
  return (
    <div>Projects</div>
  )
}

export default Projects
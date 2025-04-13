import React from 'react'

function Projects() {

  const projects = [
    {
      Name : "Mini-Blog",
      Category: "Full-Stack Blog Application Using Appwrite",
      Description : "Developed a full-featured blog platform with complete CRUD operations using React, Redux, and Appwrite. Implemented user authentication, post creation/editing/deletion, image upload, and post preview functionality. Integrated a responsive UI with Tailwind CSS, rich text editing, and route protection using React Router. Deployed on Vercel for seamless production access.",
      Code : "https://github.com/robin8998/Mini-Blog",
      LiveLink : "https://mini-blog-robin-singh-s-projects.vercel.app/",
      Image : "",
      Tech : "React, Redux, React Hook Form, Appwrite (Database + Storage + Auth), Tailwind CSS, React Router DOM",
      Features : ["User Sign Up / Login / Logout","Create, Edit, Delete Posts","Upload and display featured images","Author-based access control (only authors can edit/delete their posts)","Dynamic routing","Clean and responsive UI"]
    },  

    {
      Name : "Theme-changer",
      Category: "Front-End Utility / UI-UX Enhancement",
      Description : "Built a reusable theme-switching component using React and Tailwind CSS. Supports dynamic light/dark mode with plans to persist user preference.",
      Code : "https://github.com/robin8998/theme-changer",
      LiveLink : "https://theme-changer-robin-singh-s-projects.vercel.app/",
      Image : "",
      Tech : "React, Tailwind CSS, Vite",
      Features : ["Light/Dark mode toggle","Tailwind CSS dark class-based implementation","esponsive layout with Vite + Tailwind","Minimal, modern UI","Ideal for personal portfolios, blogs, and dashboards"]
    },  

    {
      Name : "Todo-list",
      Category: "Front-End Productivity App",
      Description : "Developed a functional To-Do List application using React and Tailwind CSS. Allows users to add, mark complete, and delete tasks in a clean and responsive UI. Designed with component-based architecture and optimized for simplicity and usability. Great as a beginner-friendly productivity tool and a solid demonstration of React fundamentals.",
      Code : "https://github.com/robin8998/ToDo-list-",
      LiveLink : "https://to-do-list-robin-singh-s-projects.vercel.app/",
      Image : "",
      Tech : "React, Tailwind CSS, Vite",
      Features : ["Add and remove tasks","Mark tasks as completed","Clean, mobile-responsive design with Tailwind CSS"]
    },  
  ]
  return (
    <div>Projects</div>
  )
}

export default Projects
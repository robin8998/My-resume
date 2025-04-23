import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Header() {
  const [currentItem, setCurrentItem] = useState("Home")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { name: "Resume", slug: "/resume",  },
    { name: "Projects", slug: "/projects", },
    { name: "Contact", slug: "/contact", },
  ]

  // Handle scroll effect for header
 

   
  return (
    <nav className="flex justify-between px-4 py-4  bg-[#13161B] items-center sticky top-0 z-50">
      <div className="font-[700] cursor-pointer">
        <span className="text-blue-400">Robin </span>Singh
      </div>

      <div>
        <span className="font-[700] cursor-pointer">Download CV</span>
      </div>
    </nav>
  )
}

export default Header
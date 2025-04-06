import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Header() {
    const [currentItem,setCurrentItem] = useState("Home")
    const navigate = useNavigate()

    const navItems = [

        {
            name : "Resume",
            slug : "/resume",
            isCurrent : currentItem
        },

        {
            name : "Projects",
            slug : "/projects",
            isCurrent : currentItem
        },

        {
            name : "Contact",
            slug : "/contact",
            isCurrent : currentItem
        },
    ]
    
    const currentSection = (item) =>{    // to highlight the current section in navbar 
     navigate(item.slug)    
     setCurrentItem(item.name)
    }
  return (
    <div>
     <header>
        <nav>
            {navItems.map((item)=>
            (
                <li>
                    <button>{item.name}</button>
                </li>
            )
            )}
        </nav>
     </header>
    </div>
  )
}

export default Header
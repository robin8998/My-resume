import React, { useState } from 'react'

function Header() {
    const [currentItem,setCurrentItem] = useState("Home")

    const navItems = [
        {
            name : "Robin Singh/Frontend Developer",
            slug : "/" ,
            isCurrent : currentItem
        },

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
  return (
    <div>
       
    </div>
  )
}

export default Header
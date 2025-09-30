import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import { About, Contact, Projects,  } from './components'
import MyBg from './components/MyBg'
import Myname from './components/Myname'
import Skills from './components/pages/Skills'

function App() {
  
  return (
    <div>
      <div className='overflow-hidden'>
        <Header/>
        <main>
          <MyBg/>
          <Myname/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
      </div>
    </div>
  )
}

export default App

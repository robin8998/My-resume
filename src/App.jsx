import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import { About, Contact, Projects, Resume } from './components'

function App() {
  
  return (
    <div>
      <div>
        <Header/>
        <main>
          <About/>
          <Projects/>
          <Contact/>
        </main>
      </div>
    </div>
  )
}

export default App

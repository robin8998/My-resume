import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

function App() {
  

  return (
    <div>
      <div>
        <Header/>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default App

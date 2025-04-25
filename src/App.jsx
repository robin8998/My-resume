import Header from './components/header/Header'
import { About, Contact, Projects,  } from './components/index'
import MyBg from './components/MyBg'
import Myname from './components/Myname'
import Skills from './components/pages/Skills'

function App() {
    
  return (
      <div>
        <Header/>
        <main>
          <MyBg/>
          <Myname/>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
        </main>
      </div>
  )
}

export default App

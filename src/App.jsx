import Header from './components/header/Header'
import { About, Contact, Projects,  } from './components'
import MyBg from './components/MyBg'
import Myname from './components/Myname'

function App() {
  
  return (
    <div>
      <div>
        <Header/>
        <main>
          <MyBg/>
          <Myname/>
          <About/>
          <Projects/>
          <Contact/>
        </main>
      </div>
    </div>
  )
}

export default App

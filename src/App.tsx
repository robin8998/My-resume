import { Navbar} from "./Navbar"
import AboutMe from "./pages/about"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"

function App() {
    
  return (
    <div className="bg-[#000]">
        <Navbar/>
        <main>
          <AboutMe/>
          <Skills/>
          <Projects/>
        </main>
      </div>
  )
}

export default App

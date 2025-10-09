import { Navbar} from "./Navbar"
import AboutMe from "./pages/about"
import Skills from "./pages/Skills"

function App() {
    
  return (
    <div className="bg-[#000]">
        <Navbar/>
        <main>
          <AboutMe/>
          <Skills/>
        </main>
      </div>
  )
}

export default App

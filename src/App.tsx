import { Navbar} from "./Navbar"
import AboutMe from "./pages/about"

function App() {
    
  return (
    <div className="bg-[#000]">
        <Navbar/>
        <main>
          <AboutMe/>
        </main>
      </div>
  )
}

export default App

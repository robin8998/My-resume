import TextRoller from "./components/ui/text-roller"
import { Navbar} from "./Navbar"
import AboutMe from "./pages/about"

function App() {
    
  return (
    <div className="bg-[#000]">
        <Navbar/>
        <main>
          <AboutMe/>
          <TextRoller/>
        </main>
      </div>
  )
}

export default App

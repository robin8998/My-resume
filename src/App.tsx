import { Navbar} from "./Navbar"
import AboutMe from "./pages/about"

function App() {
    
  return (
    <div className="bg-gray-600">
        <Navbar/>
        <main>
          <AboutMe/>
        </main>
      </div>
  )
}

export default App

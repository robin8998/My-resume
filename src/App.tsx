import { Navbar} from "./Navbar"
import { MyPixalatedCanvas } from "./components/MyCanvas"

function App() {
    
  return (
    <div className="bg-gray-600">
        <Navbar/>
        <main>
        <MyPixalatedCanvas/>
        </main>
      </div>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { About,Contact,Projects,Resume } from './components/index.js'

const routes = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/projects",
        element: <Projects/>
      },
      {
        path: "/resume",
        element : <Resume/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
  </StrictMode>,
)

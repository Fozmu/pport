import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home.tsx"
import Aboutme from "./Aboutme.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Aboutme></Aboutme>
    
     <Home></Home>


    </>
  )
}

export default App

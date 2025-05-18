import { useState } from 'react'
import './App.css'
import Increment from "./modules/increment/Increment.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Increment />
    </div>
  )
}

export default App

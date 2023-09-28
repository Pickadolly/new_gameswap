import { useState } from 'react'
import './App.css'
import "/style.css"
import Homepage from './components/homepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Homepage></Homepage>
  )
}

export default App

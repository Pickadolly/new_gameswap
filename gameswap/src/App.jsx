import { useState } from 'react'
import './App.css'
import "/style.css"
import Homepage from './components/homepage'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App

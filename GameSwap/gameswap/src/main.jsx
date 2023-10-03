import React from 'react'
import { CookiesProvider } from "react-cookie"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
)

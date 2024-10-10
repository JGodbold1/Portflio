import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppV2 from './AppV2.jsx'
import './tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode>,
)

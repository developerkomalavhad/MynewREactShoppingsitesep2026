import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shopora from './Shopora.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopora />
  </StrictMode>,
)

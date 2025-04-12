import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shell from './ui/shell'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Shell />
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('React app is starting...')

const rootElement = document.getElementById('root')
console.log('Root element found:', rootElement)

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('React app rendered successfully')
} else {
  console.error('Root element not found!')
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { SupabaseProvider } from './providers/supabaseProvider.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
   <SupabaseProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SupabaseProvider>
  </StrictMode>,
)

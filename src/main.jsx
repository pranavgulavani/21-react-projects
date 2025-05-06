import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import BirthdayBuddy from './projects/birthdayBuddy/BirthdayBuddy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<App />} />
         <Route path="/birthday-buddy" element={<BirthdayBuddy/>} />
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)

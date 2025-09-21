import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import BirthdayBuddy from './projects/birthdayBuddy/BirthdayBuddy.jsx'
import Tours from './projects/tours/Tours.jsx'

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/birthday-buddy" element={<BirthdayBuddy />} />
          <Route path="/tours" element={<Tours />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
})


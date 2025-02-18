import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navBar.jsx'
import HeroSection from './components/heroSection.jsx'
import FooterSection from './components/footerSection.jsx'
import App from './App.jsx'
// import  ThreeStar from './components/ThreeStar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <HeroSection />
    < FooterSection />
    {/* <ThreeStar /> */}
  </StrictMode>,
)

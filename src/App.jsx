import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceAreas from './components/ServiceAreas'
import SEOSection from './components/SEOSection'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  const [openLead, setOpenLead] = useState(false)
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero onLeadClick={() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }} />
      <Services />
      <ServiceAreas />
      <SEOSection />
      <LeadForm />
      <Footer />
    </div>
  )
}

export default App

import { Phone, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">F</span>
            <div className="leading-tight">
              <p className="font-bold text-slate-900">Frank's Plumbing</p>
              <p className="text-xs text-slate-500">Fontana • Inland Empire</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#areas" className="hover:text-blue-600">Service Area</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+19095551234" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700">
              <Phone size={18} /> Call Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a href="#services" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Services</a>
              <a href="#areas" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Service Area</a>
              <a href="#about" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Contact</a>
              <a href="tel:+19095551234" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 mt-2">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

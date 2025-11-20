import { Phone, ShieldCheck, Clock, Wrench } from 'lucide-react'

export default function Hero({ onLeadClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">Local • Licensed • Reliable</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Frank's Plumbing — Trusted Plumber in Fontana & the Inland Empire</h1>
          <p className="mt-4 text-lg text-slate-700">Fast, friendly plumbing services for homes and small businesses. Specializing in toilet installs, water heaters, and whole‑home repiping. No physical storefront — we come to you anywhere in the IE.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:+19095551234" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">
              <Phone size={18} /> Call (909) 555‑1234
            </a>
            <button onClick={onLeadClick} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-slate-800 font-semibold hover:bg-slate-50">
              Get a Free Estimate
            </button>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <li className="inline-flex items-center gap-2"><ShieldCheck className="text-blue-600" size={18}/> Licensed & Insured</li>
            <li className="inline-flex items-center gap-2"><Clock className="text-blue-600" size={18}/> Same‑Day Service</li>
            <li className="inline-flex items-center gap-2"><Wrench className="text-blue-600" size={18}/> Upfront Pricing</li>
            <li className="inline-flex items-center gap-2"><Wrench className="text-blue-600" size={18}/> 5‑Star Local Service</li>
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-slate-200 shadow-xl bg-white p-6">
            <img src="/plumber-hero.jpg" alt="Frank's Plumbing in action" className="w-full rounded-lg object-cover h-72" />
            <p className="mt-4 text-sm text-slate-600">Serving Fontana, Rancho Cucamonga, Ontario, Upland, Rialto, Riverside, and more.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

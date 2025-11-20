export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-bold text-white">Frank's Plumbing</p>
          <p className="text-sm text-slate-400">Fontana, CA • Serving the Inland Empire</p>
          <p className="mt-2 text-xs text-slate-500">No physical address. Mobile service only.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-2 space-y-1">
            <li>Toilet Installation</li>
            <li>Water Heater Repair & Replacement</li>
            <li>Whole‑Home Repiping</li>
            <li>General Plumbing</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2">Phone: (909) 555‑1234</p>
          <p className="text-xs text-slate-500">Mon–Sat 7am–7pm</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">© {year} Frank's Plumbing. All rights reserved.</div>
    </footer>
  )
}

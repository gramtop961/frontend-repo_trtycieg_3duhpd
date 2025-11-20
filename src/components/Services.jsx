import { ShowerHead, Toilet, Flame, Pipe, Wrench } from 'lucide-react'

const services = [
  {
    icon: Toilet,
    title: 'Toilet Installation & Repair',
    desc: 'New installs, replacements, seal leaks, clogs, and tank repairs. We handle all major brands with proper sealing and code compliance.',
    slug: 'toilet-installation-fontana'
  },
  {
    icon: Flame,
    title: 'Water Heaters (Repair & Replace)',
    desc: 'Same‑day water heater repair and professional replacements. Tank and tankless options with proper venting and permits.',
    slug: 'water-heater-repair-fontana'
  },
  {
    icon: Pipe,
    title: 'Whole‑Home Repiping',
    desc: 'Copper or PEX repipes for aging or leaking lines. Water pressure fixes, slab leak solutions, and clean wall patching.',
    slug: 'repiping-fontana'
  },
  {
    icon: ShowerHead,
    title: 'General Plumbing',
    desc: 'Faucets, garbage disposals, hose bibs, pressure regulators, leak detection, and more.',
    slug: 'plumber-fontana'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Plumbing Services</h2>
        <p className="mt-2 text-slate-600">Expert work, honest pricing, and clean job sites.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <a key={s.title} href={`/#contact`} className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <s.icon className="text-blue-600" />
              <h3 className="mt-3 font-semibold text-slate-900 group-hover:text-blue-700">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <p className="mt-3 text-xs text-slate-500">Fontana • Inland Empire</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

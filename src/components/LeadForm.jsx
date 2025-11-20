import { useState } from 'react'

export default function LeadForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      phone: form.get('phone'),
      email: form.get('email') || undefined,
      service: form.get('service'),
      message: form.get('message') || undefined,
      city: form.get('city') || undefined,
      source: window.location.pathname
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus({ ok: true, message: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: 'Something went wrong. Please call us.' })
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Request a Free Estimate</h2>
            <p className="mt-2 text-slate-600">Tell us about your plumbing issue and we’ll reach out fast.</p>

            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• Same‑day appointments when available</li>
              <li>• Upfront pricing — no surprises</li>
              <li>• Licensed, insured, and local to the Inland Empire</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-blue-600 focus:border-blue-600"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-blue-600 focus:border-blue-600"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email (optional)</label>
                <input name="email" type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-blue-600 focus:border-blue-600"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">City</label>
                <input name="city" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-blue-600 focus:border-blue-600"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Service Needed</label>
                <select name="service" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-blue-600 focus:border-blue-600">
                  <option value="Toilet Installation">Toilet Installation</option>
                  <option value="Water Heater Repair/Replace">Water Heater Repair/Replace</option>
                  <option value="Repiping">Repiping</option>
                  <option value="General Plumbing">General Plumbing</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-blue-600 focus:border-blue-600" placeholder="Tell us a little about the issue..."/>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">Get My Estimate</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.message}</p>
            )}
            <p className="mt-3 text-xs text-slate-500">By submitting you agree to receive communication about your request. No physical office — mobile service only.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

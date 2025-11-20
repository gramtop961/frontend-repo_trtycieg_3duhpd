const areas = [
  'Fontana', 'Rancho Cucamonga', 'Ontario', 'Upland', 'Rialto', 'San Bernardino', 'Redlands', 'Colton', 'Chino', 'Chino Hills', 'Corona', 'Riverside', 'Eastvale', 'Jurupa Valley', 'Norco', 'Yucaipa'
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Service Area — Inland Empire</h2>
        <p className="mt-2 text-slate-600">Home base in Fontana. No storefront — mobile service to your door.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {areas.map((city) => (
            <a key={city} href={`/${city.toLowerCase().replace(/ /g,'-')}`} className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:border-blue-400 hover:text-blue-700">{city}</a>
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-600">
          <p>We cover San Bernardino and Riverside Counties including all neighborhoods and zip codes around the I‑10, I‑15, and 210 corridors.</p>
        </div>
      </div>
    </section>
  )
}

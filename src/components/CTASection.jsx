import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTASection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-6 py-14 text-center shadow-2xl shadow-brand-900/30 sm:px-12 sm:py-20">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-accent-400/25 blur-3xl" />
      <div className="relative flex flex-col items-center gap-6">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          Ready to find your new home?
        </h2>
        <p className="max-w-xl text-base text-brand-100 sm:text-lg">
          Browse verified PGs across six cities, compare prices and book a visit in minutes.
        </p>
        <Link
          to="/pgs"
          className="group mt-2 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-400 hover:text-slate-900"
        >
          Explore PGs
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
)

export default CTASection

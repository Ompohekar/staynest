import { BadgeCheck, Star, Sparkles, Heart } from 'lucide-react'
import SearchBar from './SearchBar'
import PGArt from './PGArt'

const stats = [
  { value: '320+', label: 'Verified PGs' },
  { value: '6', label: 'Cities covered' },
  { value: '4.7', label: 'Average rating' },
]

const Hero = () => (
  <section className="section-gradient relative overflow-hidden">
    <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
    <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl" />

    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
      {/* Copy and search */}
      <div className="animate-fade-up flex flex-col gap-7">
        <span className="eyebrow w-fit">
          <Sparkles size={14} /> Verified PGs in 6 cities
        </span>

        <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
          Find Your Perfect PG,{' '}
          <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
            Feel At Home.
          </span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Comfortable, affordable and verified PG accommodations for students and working professionals.
        </p>

        <SearchBar />

        <dl className="grid max-w-md grid-cols-3 gap-4 pt-2">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-extrabold text-ink sm:text-3xl">{s.value}</dt>
              <dd className="text-xs font-medium text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Visual */}
      <div className="animate-fade-up relative mx-auto w-full max-w-xl lg:max-w-none" style={{ animationDelay: '150ms' }}>
        <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-brand-50 shadow-2xl shadow-brand-900/15 ring-1 ring-white/60 sm:aspect-[5/4]">
          <PGArt variant="room" theme={['#0f766e', '#5eead4']} seed={21} />
        </div>

        {/* Floating verified card */}
        <div className="animate-float-slow absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 pr-5 shadow-card-hover backdrop-blur-md sm:-left-8">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
            <BadgeCheck size={22} />
          </span>
          <div>
            <p className="text-sm font-bold">Verified Property</p>
            <p className="text-xs text-muted">Inspected by our team</p>
          </div>
        </div>

        {/* Floating rating card */}
        <div className="animate-float-slow absolute -right-2 bottom-10 w-56 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-card-hover backdrop-blur-md sm:-right-6" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold">BlueLeaf Homes</p>
              <p className="text-xs text-muted">Koramangala, Bangalore</p>
            </div>
            <Heart size={18} className="text-rose-400" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-bold text-amber-600">
              <Star size={12} className="fill-amber-400 text-amber-400" /> 4.8
            </span>
            <span className="text-sm font-extrabold text-brand-700">₹9,200<span className="text-xs font-medium text-muted">/mo</span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero

import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PGArt from './PGArt'

const LocationCard = ({ location }) => {
  const { city, count, theme } = location
  return (
    <Link
      to={`/pgs?location=${encodeURIComponent(city)}`}
      className="group relative block h-56 overflow-hidden rounded-3xl bg-slate-100 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <PGArt variant="city" theme={theme} seed={city.length * 13} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <h3 className="text-xl font-bold text-white">{city}</h3>
          <p className="text-sm text-white/80">{count} PGs available</p>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-700 shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent-400 group-hover:text-slate-900">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  )
}

export default LocationCard

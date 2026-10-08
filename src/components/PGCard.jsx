import { Link } from 'react-router-dom'
import { BadgeCheck, Heart, MapPin, Star, Users } from 'lucide-react'
import PGArt from './PGArt'
import { amenityCatalog } from '../data/siteData'
import { amenityIcons } from '../lib/icons'
import { useFavorites } from '../context/FavoritesContext'

const amenityLabel = (id) => amenityCatalog.find((a) => a.id === id)?.label ?? id

const formatRent = (value) => `₹${value.toLocaleString('en-IN')}`

const PGCard = ({ pg }) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(pg.id)
  const visibleAmenities = pg.amenities.slice(0, 4)
  const extraCount = pg.amenities.length - visibleAmenities.length

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <PGArt variant={pg.art.variant} theme={pg.art.theme} seed={pg.name.length + 3} />
        </div>

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-700 shadow-sm">{pg.gender}</span>
          {pg.verified && (
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/95 px-3 py-1 text-xs font-bold text-white shadow-sm">
              <BadgeCheck size={13} /> Verified
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggleFavorite(pg.id)}
          aria-pressed={favorited}
          aria-label={favorited ? `Remove ${pg.name} from favourites` : `Save ${pg.name} to favourites`}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-500 shadow-md transition-all duration-300 hover:scale-110 hover:text-rose-500 active:scale-95"
        >
          <Heart size={18} className={`transition-all duration-300 ${favorited ? 'scale-110 fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold leading-snug">{pg.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted">
              <MapPin size={14} className="shrink-0 text-brand-600" />
              <span className="truncate">
                {pg.area}, {pg.city}
              </span>
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-sm font-bold text-amber-600">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            {pg.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
            <Users size={13} /> {pg.sharing.join(' / ')} sharing
          </span>
          <span className="text-slate-400">{pg.reviews} reviews</span>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Amenities">
          {visibleAmenities.map((id) => {
            const Icon = amenityIcons[id]
            return (
              <li
                key={id}
                title={amenityLabel(id)}
                className="flex items-center gap-1.5 rounded-lg border border-brand-100 bg-brand-50/60 px-2 py-1 text-xs font-medium text-brand-800"
              >
                {Icon && <Icon size={13} />}
                {amenityLabel(id)}
              </li>
            )
          })}
          {extraCount > 0 && (
            <li className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">+{extraCount} more</li>
          )}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xl font-extrabold text-ink">
              {formatRent(pg.rent)}
              <span className="text-xs font-medium text-muted"> /month</span>
            </p>
            <p className="text-[11px] text-muted">Starting rent</p>
          </div>
          <Link
            to={`/pgs/${pg.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PGCard

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  BadgeCheck,
  Bed,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  Home as HomeIcon,
  MapPin,
  Phone,
  Star,
  Heart,
  ScrollText,
  Users,
} from 'lucide-react'
import PGCard from '../components/PGCard'
import { amenityCatalog, getPgById, getRoomTypes, houseRules, ownerPhoto, pgs } from '../data/siteData'
import { amenityIcons } from '../lib/icons'
import { useFavorites } from '../context/FavoritesContext'

const formatRent = (value) => `₹${value.toLocaleString('en-IN')}`

const timeSlots = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM']

const PGDetailsPage = () => {
  const { id } = useParams()
  const pg = getPgById(id)
  const { isFavorite, toggleFavorite } = useFavorites()

  const [activeImage, setActiveImage] = useState(0)
  const [showContact, setShowContact] = useState(false)
  const [showVisit, setShowVisit] = useState(false)
  const [visitDate, setVisitDate] = useState('')
  const [visitSlot, setVisitSlot] = useState(timeSlots[1])
  const [visitConfirmed, setVisitConfirmed] = useState(false)

  if (!pg) {
    return (
      <div className="section-gradient flex min-h-[70vh] flex-col items-center justify-center gap-5 px-4 text-center">
        <h1 className="text-3xl font-extrabold">We couldn’t find that PG</h1>
        <p className="max-w-md text-muted">It may have been removed or the link is incorrect. Browse all verified PGs instead.</p>
        <Link to="/pgs" className="btn-primary">
          Browse PGs
        </Link>
      </div>
    )
  }

  const favorited = isFavorite(pg.id)
  const roomTypes = getRoomTypes(pg)
  // Same-city PGs first, topped up with other properties so the row always has three cards.
  const others = pgs.filter((p) => p.id !== pg.id)
  const sameCity = others.filter((p) => p.city === pg.city)
  const similar = [...sameCity, ...others.filter((p) => p.city !== pg.city)].slice(0, 3)

  const current = pg.photos[activeImage]

  const handleVisit = (e) => {
    e.preventDefault()
    if (!visitDate) return
    setVisitConfirmed(true)
  }

  return (
    <div className="section-gradient">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <Link to="/" className="flex items-center gap-1 hover:text-brand-700">
            <HomeIcon size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/pgs" className="hover:text-brand-700">PGs</Link>
          <ChevronRight size={14} />
          <Link to={`/pgs?location=${encodeURIComponent(pg.city)}`} className="hover:text-brand-700">{pg.city}</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-ink">{pg.name}</span>
        </nav>

        {/* Title row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 shadow-sm ring-1 ring-brand-100">{pg.gender}</span>
              {pg.verified && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                  <BadgeCheck size={13} /> Verified
                </span>
              )}
            </div>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{pg.name}</h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                <strong className="text-ink">{pg.rating.toFixed(1)}</strong> ({pg.reviews} reviews)
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-brand-600" /> {pg.area}, {pg.city}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toggleFavorite(pg.id)}
            aria-pressed={favorited}
            className={`inline-flex w-fit items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              favorited ? 'border-rose-200 bg-rose-50 text-rose-600' : 'border-slate-200 bg-white text-slate-700 hover:border-rose-200 hover:text-rose-500'
            }`}
          >
            <Heart size={18} className={favorited ? 'fill-rose-500 text-rose-500' : ''} />
            {favorited ? 'Saved to favourites' : 'Save PG'}
          </button>
        </div>

        {/* Gallery */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-card sm:aspect-[16/9]">
            <img
              key={current}
              src={current}
              alt={`${pg.name} photo ${activeImage + 1} of ${pg.photos.length}`}
              className="animate-fade-up h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur">
              {activeImage + 1} / {pg.photos.length}
            </span>
          </div>
          <div className="no-scrollbar flex gap-3 overflow-x-auto lg:w-44 lg:flex-col lg:overflow-y-auto lg:max-h-[16rem]">
            {pg.photos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-pressed={activeImage === i}
                className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl ring-2 transition-all duration-300 lg:h-24 lg:w-full ${
                  activeImage === i ? 'ring-brand-600' : 'ring-transparent hover:ring-brand-200'
                }`}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* Main column */}
          <div className="flex min-w-0 flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">About this PG</h2>
              <p className="text-base leading-relaxed text-slate-600">{pg.description}</p>
            </section>

            <section className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">Available room types</h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {roomTypes.map((room) => (
                  <div key={room.name} className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                        <Bed size={20} />
                      </span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${room.available > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`}>
                        {room.available} beds left
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold">{room.name}</h3>
                      <p className="text-xs text-muted">{room.size}</p>
                    </div>
                    <p className="text-lg font-extrabold text-ink">
                      {formatRent(room.rent)} <span className="text-xs font-medium text-muted">/month</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">Amenities</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {amenityCatalog.map((a) => {
                  const included = pg.amenities.includes(a.id)
                  const Icon = amenityIcons[a.id]
                  return (
                    <li
                      key={a.id}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-sm font-medium ${
                        included ? 'border-brand-100 bg-white text-ink shadow-sm' : 'border-dashed border-slate-200 text-slate-400 line-through'
                      }`}
                    >
                      <span className={`grid h-9 w-9 place-items-center rounded-lg ${included ? 'bg-brand-50 text-brand-700' : 'bg-slate-100 text-slate-400'}`}>
                        {Icon && <Icon size={18} />}
                      </span>
                      {a.label}
                      {included && <Check size={16} className="ml-auto text-emerald-500" />}
                    </li>
                  )
                })}
              </ul>
            </section>

            <section className="flex flex-col gap-5">
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <ScrollText size={22} className="text-brand-600" /> House rules
              </h2>
              <ul className="flex flex-col gap-3">
                {houseRules.map((rule) => (
                  <li key={rule} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <Check size={14} />
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Location</h2>
              <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:flex-row sm:items-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <MapPin size={24} />
                </span>
                <div>
                  <p className="font-semibold">{pg.address}</p>
                  <p className="text-sm text-muted">Well connected to public transport and major office hubs.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Booking sidebar */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-card-hover">
              <div>
                <p className="text-sm font-medium text-muted">Monthly rent starts at</p>
                <p className="mt-1 text-4xl font-extrabold text-ink">
                  {formatRent(pg.rent)} <span className="text-base font-medium text-muted">/month</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
                  <Users size={16} className="text-brand-600" />
                  <span className="font-semibold">{pg.sharing.join(' / ')}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
                  <Clock size={16} className="text-brand-600" />
                  <span className="font-semibold">Move in in 48h</span>
                </div>
              </div>

              <button type="button" onClick={() => setShowContact((v) => !v)} className="btn-ghost w-full">
                <Phone size={16} /> Contact Owner
              </button>
              {showContact && (
                <div className="animate-fade-up flex flex-col gap-4 rounded-2xl bg-brand-50 p-4 text-sm text-brand-900">
                  <div className="flex items-center gap-3">
                    <img src={ownerPhoto} alt="Om Pohekar" className="h-14 w-14 rounded-full object-cover ring-4 ring-white" />
                    <div>
                      <p className="font-bold">Om Pohekar</p>
                      <p className="text-xs text-brand-800">Owner, {pg.name}</p>
                    </div>
                  </div>
                  <p className="text-brand-800">
                    Our team will call you within 30 minutes. You can also reach Om directly at{' '}
                    <a href="tel:+919225327383" className="font-semibold underline">+91 92253 27383</a>{' '}
                    or <a href="mailto:ompohekar123@gmail.com" className="font-semibold underline">ompohekar123@gmail.com</a>.
                  </p>
                </div>
              )}

              <button type="button" onClick={() => setShowVisit((v) => !v)} className="btn-primary w-full">
                <CalendarCheck size={16} /> Book Visit
              </button>

              {showVisit && !visitConfirmed && (
                <form onSubmit={handleVisit} className="animate-fade-up flex flex-col gap-4 rounded-2xl border border-slate-100 p-4">
                  <label className="flex flex-col gap-1.5 text-sm font-semibold">
                    Visit date
                    <input
                      type="date"
                      required
                      value={visitDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="input-base"
                    />
                  </label>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Preferred time</span>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setVisitSlot(slot)}
                          aria-pressed={visitSlot === slot}
                          className={`rounded-lg border px-2 py-2 text-xs font-semibold transition ${
                            visitSlot === slot ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-200 text-slate-600 hover:border-brand-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full">Confirm visit</button>
                </form>
              )}
              {visitConfirmed && (
                <div className="animate-fade-up flex gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
                  <Check size={18} className="mt-0.5 shrink-0" />
                  <p>
                    Visit requested for <strong>{visitDate}</strong> at <strong>{visitSlot}</strong>. We’ll confirm
                    shortly by SMS.
                  </p>
                </div>
              )}

              <p className="text-center text-xs text-muted">No booking fee. Free cancellation before your visit.</p>
            </div>
          </aside>
        </div>

        {/* Similar PGs */}
        <section className="mt-20 flex flex-col gap-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold">{sameCity.length ? `More PGs in ${pg.city}` : 'You may also like'}</h2>
            <Link to="/pgs" className="hidden text-sm font-semibold text-brand-700 hover:underline sm:block">
              View all
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {similar.map((p) => (
              <PGCard key={p.id} pg={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default PGDetailsPage

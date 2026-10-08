import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpDown, Home as HomeIcon, SlidersHorizontal, X } from 'lucide-react'
import PGCard from '../components/PGCard'
import Filters, { defaultFilters, genderOptions, MAX_RENT } from '../components/Filters'
import { pgs } from '../data/siteData'

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating: High to Low' },
]

// Reads initial filter values from the URL, e.g. /pgs?location=Pune&maxRent=10000&gender=Girls.
const filtersFromParams = (params) => {
  const gender = params.get('gender')
  const maxRent = Number(params.get('maxRent'))
  return {
    ...defaultFilters,
    location: params.get('location') ?? '',
    maxRent: maxRent > 0 ? Math.min(maxRent, MAX_RENT) : MAX_RENT,
    gender: genderOptions.includes(gender) ? gender : 'All',
  }
}

const PGListingPage = () => {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => filtersFromParams(searchParams))
  const [sort, setSort] = useState('recommended')
  const [mobileOpen, setMobileOpen] = useState(false)

  const results = useMemo(() => {
    const filtered = pgs.filter((pg) => {
      if (filters.location && pg.city !== filters.location) return false
      if (pg.rent > filters.maxRent) return false
      if (filters.gender !== 'All' && pg.gender !== filters.gender) return false
      if (filters.sharing.length && !filters.sharing.some((s) => pg.sharing.includes(s))) return false
      if (!filters.amenities.every((a) => pg.amenities.includes(a))) return false
      return true
    })

    const sorters = {
      recommended: (a, b) => Number(b.featured ?? 0) - Number(a.featured ?? 0) || b.rating - a.rating,
      'price-asc': (a, b) => a.rent - b.rent,
      'price-desc': (a, b) => b.rent - a.rent,
      rating: (a, b) => b.rating - a.rating,
    }
    return [...filtered].sort(sorters[sort])
  }, [filters, sort])

  const hasActiveFilters =
    filters.location ||
    filters.maxRent < MAX_RENT ||
    filters.gender !== 'All' ||
    filters.sharing.length ||
    filters.amenities.length

  return (
    <div className="section-gradient min-h-[70vh]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Header */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="flex items-center gap-1 hover:text-brand-700">
            <HomeIcon size={14} /> Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-ink">PGs</span>
        </nav>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {filters.location ? `PGs in ${filters.location}` : 'Find your PG'}
          </h1>
          <p className="text-muted">
            {results.length} verified {results.length === 1 ? 'property' : 'properties'} match your search
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar: always visible on desktop, drawer on mobile */}
          <aside
            className={`${
              mobileOpen ? 'fixed inset-0 z-40 overflow-y-auto bg-slate-950/40 p-4 backdrop-blur-sm' : 'hidden'
            } lg:sticky lg:top-28 lg:block lg:h-fit lg:overflow-visible lg:bg-transparent lg:p-0 lg:backdrop-blur-none`}
            aria-label="Search filters"
          >
            <div className={mobileOpen ? 'mx-auto max-w-md animate-fade-up' : ''}>
              {mobileOpen && (
                <div className="mb-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-md"
                    aria-label="Close filters"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
              <Filters
                filters={filters}
                onChange={setFilters}
                onReset={() => setFilters(defaultFilters)}
                resultCount={results.length}
              />
              {mobileOpen && (
                <button type="button" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full">
                  Show {results.length} PGs
                </button>
              )}
            </div>
          </aside>

          {/* Results */}
          <section aria-label="PG results" className="flex min-w-0 flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white/80 p-3 shadow-card backdrop-blur">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold transition hover:border-brand-300 hover:text-brand-700 lg:hidden"
              >
                <SlidersHorizontal size={16} /> Filters
                {hasActiveFilters && <span className="h-2 w-2 rounded-full bg-brand-600" />}
              </button>

              <label className="ml-auto flex items-center gap-2 text-sm font-semibold text-slate-600">
                <ArrowUpDown size={16} className="text-brand-600" />
                <span className="sr-only sm:not-sr-only">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {results.map((pg) => (
                  <PGCard key={pg.id} pg={pg} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <SlidersHorizontal size={28} />
                </span>
                <h2 className="text-xl font-bold">No PGs match these filters</h2>
                <p className="max-w-sm text-sm text-muted">Try widening your rent range or removing an amenity to see more stays.</p>
                <button type="button" onClick={() => setFilters(defaultFilters)} className="btn-primary">
                  Clear all filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default PGListingPage

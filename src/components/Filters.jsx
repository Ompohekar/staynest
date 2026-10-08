import { RotateCcw } from 'lucide-react'
import { amenityCatalog, locations, sharingOptions } from '../data/siteData'
import { amenityIcons } from '../lib/icons'

export const MIN_RENT = 5000
export const MAX_RENT = 20000
export const genderOptions = ['All', 'Boys', 'Girls', 'Co-ed']

export const defaultFilters = {
  location: '',
  maxRent: MAX_RENT,
  gender: 'All',
  sharing: [],
  amenities: [],
}

const toggleItem = (list, item) => (list.includes(item) ? list.filter((x) => x !== item) : [...list, item])

const Chip = ({ active, onClick, children, ...rest }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${
      active
        ? 'border-brand-600 bg-brand-600 text-white shadow-md shadow-brand-600/25'
        : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700'
    }`}
    {...rest}
  >
    {children}
  </button>
)

const Section = ({ title, children }) => (
  <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 first:border-t-0 first:pt-0">
    <h3 className="text-sm font-bold text-ink">{title}</h3>
    {children}
  </div>
)

const Filters = ({ filters, onChange, onReset, resultCount }) => {
  const set = (patch) => onChange({ ...filters, ...patch })

  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Filters</h2>
          <p className="text-xs text-muted">{resultCount} PGs match</p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          <RotateCcw size={13} /> Reset
        </button>
      </div>

      <Section title="Location">
        <select
          value={filters.location}
          onChange={(e) => set({ location: e.target.value })}
          className="input-base cursor-pointer"
          aria-label="Filter by location"
        >
          <option value="">All cities</option>
          {locations.map((l) => (
            <option key={l.city} value={l.city}>
              {l.city}
            </option>
          ))}
        </select>
      </Section>

      <Section title="Monthly rent">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Up to</span>
          <span className="font-bold text-brand-700">₹{filters.maxRent.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min={MIN_RENT}
          max={MAX_RENT}
          step={500}
          value={filters.maxRent}
          onChange={(e) => set({ maxRent: Number(e.target.value) })}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-brand-100 accent-brand-600"
          aria-label="Maximum monthly rent"
        />
        <div className="flex justify-between text-[11px] font-medium text-slate-400">
          <span>₹{MIN_RENT.toLocaleString('en-IN')}</span>
          <span>₹{MAX_RENT.toLocaleString('en-IN')}</span>
        </div>
      </Section>

      <Section title="Gender preference">
        <div className="flex flex-wrap gap-2">
          {genderOptions.map((g) => (
            <Chip key={g} active={filters.gender === g} onClick={() => set({ gender: g })}>
              {g}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Sharing type">
        <div className="flex flex-wrap gap-2">
          {sharingOptions.map((s) => (
            <Chip key={s} active={filters.sharing.includes(s)} onClick={() => set({ sharing: toggleItem(filters.sharing, s) })}>
              {s}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Amenities">
        <div className="grid grid-cols-1 gap-2">
          {amenityCatalog.map((a) => {
            const Icon = amenityIcons[a.id]
            const checked = filters.amenities.includes(a.id)
            return (
              <label
                key={a.id}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  checked ? 'border-brand-300 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-600 hover:border-brand-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => set({ amenities: toggleItem(filters.amenities, a.id) })}
                  className="h-4 w-4 cursor-pointer accent-brand-600"
                />
                {Icon && <Icon size={16} className={checked ? 'text-brand-600' : 'text-slate-400'} />}
                {a.label}
              </label>
            )
          })}
        </div>
      </Section>
    </div>
  )
}

export default Filters

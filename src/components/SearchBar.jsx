import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BedDouble, ChevronDown, MapPin, Search, Wallet } from 'lucide-react'
import { budgetOptions, locations, pgTypeOptions } from '../data/siteData'

const Field = ({ icon: Icon, label, value, onChange, children }) => (
  <label className="group flex min-w-0 flex-1 cursor-pointer flex-col gap-1 rounded-xl px-4 py-3 transition hover:bg-slate-50 focus-within:bg-brand-50/60">
    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</span>
    <span className="relative flex items-center gap-2">
      <Icon size={16} className="shrink-0 text-brand-600" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none truncate bg-transparent pr-6 text-sm font-semibold text-ink outline-none"
      >
        {children}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-0 text-slate-400 transition group-hover:text-brand-600" />
    </span>
  </label>
)

const SearchBar = () => {
  const navigate = useNavigate()
  const [city, setCity] = useState('')
  const [budget, setBudget] = useState('')
  const [type, setType] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (city) params.set('location', city)
    if (budget) params.set('maxRent', budget)
    if (type) params.set('gender', type)
    navigate({ pathname: '/pgs', search: params.toString() ? `?${params}` : '' })
  }

  return (
    <form
      onSubmit={handleSearch}
      role="search"
      className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:flex-row md:items-stretch md:rounded-full md:p-2 md:pl-2"
    >
      <div className="flex flex-1 flex-col divide-y divide-slate-100 md:flex-row md:divide-x md:divide-y-0">
        <Field icon={MapPin} label="Location" value={city} onChange={setCity}>
          <option value="">Any city</option>
          {locations.map((l) => (
            <option key={l.city} value={l.city}>
              {l.city}
            </option>
          ))}
        </Field>
        <Field icon={Wallet} label="Budget" value={budget} onChange={setBudget}>
          {budgetOptions.map((o) => (
            <option key={o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </Field>
        <Field icon={BedDouble} label="PG Type" value={type} onChange={setType}>
          {pgTypeOptions.map((o) => (
            <option key={o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </Field>
      </div>
      <button type="submit" className="btn-primary !rounded-full md:ml-1 md:px-7">
        <Search size={18} />
        Search
      </button>
    </form>
  )
}

export default SearchBar

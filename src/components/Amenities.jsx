import { amenityCatalog } from '../data/siteData'
import { amenityIcons } from '../lib/icons'

const amenityDescriptions = {
  wifi: 'Fibre broadband with backup, ready for work and streaming.',
  food: 'Fresh, home-style meals with weekly menus and diet options.',
  laundry: 'Pick-up and drop laundry service, delivered within 48 hours.',
  ac: 'Air-conditioned rooms and common areas for comfortable nights.',
  housekeeping: 'Daily cleaning of common areas and weekly room cleaning.',
  cctv: '24x7 camera coverage across entrances, corridors and parking.',
  power: 'Uninterrupted power with generator backup for all rooms.',
  parking: 'Secure two-wheeler and four-wheeler parking on the premises.',
}

const Amenities = () => (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {amenityCatalog.map((item) => {
      const Icon = amenityIcons[item.id]
      return (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-100 hover:shadow-card-hover"
        >
          <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150" />
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
            {Icon && <Icon size={26} />}
          </span>
          <h3 className="relative mt-5 text-lg font-bold">{item.label}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-muted">{amenityDescriptions[item.id]}</p>
        </div>
      )
    })}
  </div>
)

export default Amenities

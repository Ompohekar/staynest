import { features } from '../data/siteData'
import { featureIcons } from '../lib/icons'

const WhyChoose = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {features.map((f, i) => {
      const Icon = featureIcons[f.icon]
      return (
        <div
          key={f.title}
          className="group flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="flex items-center justify-between">
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                i % 2 ? 'bg-accent-400/15 text-amber-600' : 'bg-brand-50 text-brand-700'
              }`}
            >
              {Icon && <Icon size={26} />}
            </span>
            <span className="text-3xl font-black text-slate-100 transition-colors group-hover:text-brand-100">0{i + 1}</span>
          </div>
          <h3 className="text-lg font-bold">{f.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{f.description}</p>
        </div>
      )
    })}
  </div>
)

export default WhyChoose

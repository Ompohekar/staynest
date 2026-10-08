import { Search, GitCompare, KeyRound } from 'lucide-react'
import { steps } from '../data/siteData'

const stepIcons = [Search, GitCompare, KeyRound]

const HowItWorks = () => (
  <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
    {/* Connector line on desktop */}
    <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 md:block" />

    {steps.map((step, i) => {
      const Icon = stepIcons[i]
      return (
        <div key={step.title} className="relative flex flex-col items-center gap-5 text-center">
          <div className="relative">
            <span className="grid h-18 w-18 place-items-center rounded-3xl bg-white shadow-card ring-1 ring-brand-100 transition-transform duration-500 hover:-rotate-3 hover:scale-105">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30">
                <Icon size={24} />
              </span>
            </span>
            <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-accent-400 text-xs font-extrabold text-slate-900 shadow-md">
              {i + 1}
            </span>
          </div>
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{step.description}</p>
        </div>
      )
    })}
  </div>
)

export default HowItWorks

import { useState } from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/siteData'

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

const Avatar = ({ name, src }) => {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
        {initials(name)}
      </span>
    )
  }
  return (
    <img
      src={src}
      alt={`${name} profile`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-14 w-14 rounded-full object-cover ring-4 ring-brand-50"
    />
  )
}

const Testimonials = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {testimonials.map((t) => (
      <figure
        key={t.name}
        className="relative flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
      >
        <Quote size={34} className="absolute right-6 top-6 text-brand-100" />
        <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'} />
          ))}
        </div>
        <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-600">“{t.quote}”</blockquote>
        <figcaption className="flex items-center gap-4 border-t border-slate-100 pt-5">
          <Avatar name={t.name} src={t.avatar} />
          <div>
            <p className="font-bold">{t.name}</p>
            <p className="text-sm text-muted">{t.role}</p>
            <p className="text-xs font-medium text-brand-700">{t.city}</p>
          </div>
        </figcaption>
      </figure>
    ))}
  </div>
)

export default Testimonials

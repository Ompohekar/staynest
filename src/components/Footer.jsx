import { Link } from 'react-router-dom'
import { Home as HomeIcon, Mail, Phone, User } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './SocialIcons'
import { locations } from '../data/siteData'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Browse PGs', to: '/pgs' },
  { label: 'Amenities', to: '/#amenities' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'Testimonials', to: '/#testimonials' },
]

const socials = [
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'X (Twitter)', icon: XIcon },
  { label: 'LinkedIn', icon: LinkedinIcon },
]

const linkClass = 'text-sm text-slate-400 transition-colors duration-200 hover:text-white'

const Footer = () => (
  <footer id="contact" className="relative overflow-hidden bg-slate-950 text-slate-300">
    <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />

    <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {/* Brand */}
      <div className="flex flex-col gap-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-300 text-slate-950">
            <HomeIcon size={20} strokeWidth={2.4} />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Stay<span className="text-brand-400">Nest</span>
          </span>
        </Link>
        <p className="max-w-xs text-sm leading-relaxed text-slate-400">
          StayNest connects students and working professionals with verified, comfortable and affordable PG
          accommodations across India.
        </p>
        <div className="flex gap-3">
          {socials.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#contact"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div>
        <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
        <ul className="flex flex-col gap-3">
          {quickLinks.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Locations */}
      <div>
        <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Popular Locations</h4>
        <ul className="grid grid-cols-2 gap-3">
          {locations.map((l) => (
            <li key={l.city}>
              <Link to={`/pgs?location=${encodeURIComponent(l.city)}`} className={linkClass}>
                {l.city}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-center gap-3">
            <User size={18} className="shrink-0 text-brand-400" />
            <span className="font-semibold text-white">Om Pohekar</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="shrink-0 text-brand-400" />
            <a href="tel:+919225327383" className="hover:text-white">+91 92253 27383</a>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="shrink-0 text-brand-400" />
            <a href="mailto:ompohekar123@gmail.com" className="hover:text-white">ompohekar123@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="relative border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} StayNest PG Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#contact" className="hover:text-white">Privacy</a>
          <a href="#contact" className="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

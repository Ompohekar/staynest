import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Home as HomeIcon } from 'lucide-react'
import { navLinks } from '../data/siteData'

const Logo = () => (
  <Link to="/" className="group flex items-center gap-2.5" aria-label="StayNest home">
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-md shadow-brand-600/30 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
      <HomeIcon size={20} strokeWidth={2.4} />
    </span>
    <span className="text-xl font-extrabold tracking-tight">
      Stay<span className="text-brand-600">Nest</span>
    </span>
  </Link>
)

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route or hash changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const linkClass = ({ isActive }) =>
    `relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:text-brand-700 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      isActive ? 'text-brand-700 after:scale-x-100' : 'text-slate-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              {item.to.startsWith('/#') || item.to === '/' ? (
                <Link to={item.to} className="relative rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-brand-700">
                  {item.label}
                </Link>
              ) : (
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/#contact" className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            List Your PG
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-brand-300 hover:text-brand-700 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-out lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/#contact" className="btn-primary w-full">
              List Your PG
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar

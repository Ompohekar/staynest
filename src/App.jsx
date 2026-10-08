import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PGListingPage from './pages/PGListingPage'
import PGDetailsPage from './pages/PGDetailsPage'
import { FavoritesProvider } from './context/FavoritesContext'

// Scrolls to the anchor for "/#section" links, or back to the top on route changes.
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

const NotFound = () => (
  <div className="section-gradient flex min-h-[70vh] flex-col items-center justify-center gap-5 px-4 text-center">
    <p className="text-sm font-bold uppercase tracking-wider text-brand-600">404</p>
    <h1 className="text-4xl font-extrabold">This page has moved out</h1>
    <p className="max-w-md text-muted">The page you are looking for doesn’t exist. Let’s get you back to finding a home.</p>
    <Link to="/" className="btn-primary">
      Back to home
    </Link>
  </div>
)

const App = () => (
  <FavoritesProvider>
    <ScrollManager />
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pgs" element={<PGListingPage />} />
          <Route path="/pgs/:id" element={<PGDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </FavoritesProvider>
)

export default App

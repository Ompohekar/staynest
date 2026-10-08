import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import LocationCard from '../components/LocationCard'
import PGCard from '../components/PGCard'
import Amenities from '../components/Amenities'
import WhyChoose from '../components/WhyChoose'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import { featuredPgs, locations } from '../data/siteData'

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
)

const HomePage = () => (
  <>
    <Hero />

    <Section id="locations">
      <SectionHeading
        eyebrow="Explore cities"
        title="Popular Locations"
        subtitle="Find well-connected PGs near tech parks, universities and business districts across India's top cities."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <LocationCard key={loc.city} location={loc} />
        ))}
      </div>
    </Section>

    <Section id="featured" className="section-gradient">
      <SectionHeading
        eyebrow="Handpicked for you"
        title="Featured PGs"
        subtitle="Top-rated, verified stays with transparent pricing and everything you need on day one."
        action={
          <Link to="/pgs" className="btn-ghost w-fit">
            View all PGs <ArrowRight size={16} />
          </Link>
        }
      />
      <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPgs.map((pg) => (
          <PGCard key={pg.id} pg={pg} />
        ))}
      </div>
    </Section>

    <Section id="amenities">
      <SectionHeading
        eyebrow="Everything included"
        title="Amenities That Make It Home"
        subtitle="From high-speed Wi-Fi to round-the-clock security, every StayNest property covers the essentials."
      />
      <div className="mt-12">
        <Amenities />
      </div>
    </Section>

    <Section id="why-staynest" className="section-gradient">
      <SectionHeading
        eyebrow="Why StayNest"
        title="Why Choose StayNest"
        subtitle="We do the groundwork so you can focus on settling into your new city."
      />
      <div className="mt-12">
        <WhyChoose />
      </div>
    </Section>

    <Section id="how-it-works">
      <SectionHeading
        eyebrow="Simple process"
        title="How It Works"
        subtitle="Three easy steps from searching to unpacking your bags."
      />
      <div className="mt-16">
        <HowItWorks />
      </div>
    </Section>

    <Section id="testimonials" className="section-gradient">
      <SectionHeading
        eyebrow="Loved by residents"
        title="What Our Residents Say"
        subtitle="Real stories from students and working professionals who found their home with StayNest."
      />
      <div className="mt-12">
        <Testimonials />
      </div>
    </Section>

    <CTASection />
  </>
)

export default HomePage

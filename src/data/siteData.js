// Static mock data for StayNest PG. Replace these exports with API responses later.

export const amenityCatalog = [
  { id: 'wifi', label: 'High-speed Wi-Fi' },
  { id: 'food', label: 'Home-style Food' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'ac', label: 'Air Conditioning' },
  { id: 'housekeeping', label: 'Housekeeping' },
  { id: 'cctv', label: 'CCTV Security' },
  { id: 'power', label: 'Power Backup' },
  { id: 'parking', label: 'Parking' },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'PGs', to: '/pgs' },
  { label: 'Locations', to: '/#locations' },
  { label: 'Amenities', to: '/#amenities' },
  { label: 'About', to: '/#why-staynest' },
  { label: 'Contact', to: '/#contact' },
]

export const locations = [
  { city: 'Pune', count: 38, theme: ['#0f766e', '#5eead4'] },
  { city: 'Bangalore', count: 52, theme: ['#1e3a8a', '#93c5fd'] },
  { city: 'Hyderabad', count: 41, theme: ['#9d174d', '#f9a8d4'] },
  { city: 'Mumbai', count: 33, theme: ['#92400e', '#fcd34d'] },
  { city: 'Delhi', count: 47, theme: ['#4c1d95', '#c4b5fd'] },
  { city: 'Chennai', count: 29, theme: ['#0c4a6e', '#7dd3fc'] },
]

export const budgetOptions = [
  { label: 'Any budget', value: '' },
  { label: 'Under ₹7,000', value: '7000' },
  { label: 'Up to ₹10,000', value: '10000' },
  { label: 'Up to ₹13,000', value: '13000' },
  { label: 'Up to ₹20,000', value: '20000' },
]

export const pgTypeOptions = [
  { label: 'Any type', value: '' },
  { label: 'Boys', value: 'Boys' },
  { label: 'Girls', value: 'Girls' },
  { label: 'Co-ed', value: 'Co-ed' },
]

export const sharingOptions = ['Single', 'Double', 'Triple']

export const houseRules = [
  'Entry allowed 6:00 AM to 11:00 PM. Late entry needs prior intimation.',
  'Visitors are allowed in common areas only, until 8:00 PM.',
  'No smoking or alcohol on the premises.',
  'Keep rooms clean. Common areas are cleaned by our housekeeping team.',
  'One month notice period and one month refundable security deposit.',
]

export const pgs = [
  {
    id: 'urbannest-residency',
    name: 'UrbanNest Residency',
    city: 'Pune',
    area: 'Koregaon Park',
    address: 'Lane 5, Koregaon Park, Pune 411001',
    rent: 8500,
    rating: 4.6,
    reviews: 128,
    gender: 'Co-ed',
    sharing: ['Single', 'Double'],
    amenities: ['wifi', 'food', 'laundry', 'ac', 'cctv', 'power'],
    verified: true,
    featured: true,
    art: { variant: 'building', theme: ['#0f766e', '#5eead4'] },
    tagline: 'Modern co-living steps away from cafes and the riverside.',
    description:
      'UrbanNest Residency is a 4-storey, fully furnished co-living building in the heart of Koregaon Park. Rooms come with attached study desks, premium mattresses and blackout curtains. Daily home-cooked meals, a rooftop lounge and 24x7 security make it a favourite with working professionals.',
  },
  {
    id: 'blueleaf-homes',
    name: 'BlueLeaf Homes',
    city: 'Bangalore',
    area: 'Koramangala',
    address: '6th Block, Koramangala, Bengaluru 560095',
    rent: 9200,
    rating: 4.8,
    reviews: 214,
    gender: 'Boys',
    sharing: ['Double', 'Triple'],
    amenities: ['wifi', 'food', 'ac', 'housekeeping', 'power', 'parking'],
    verified: true,
    featured: true,
    art: { variant: 'room', theme: ['#1e3a8a', '#60a5fa'] },
    tagline: 'Calm, well-lit rooms in the heart of the startup hub.',
    description:
      'BlueLeaf Homes offers bright, airy rooms with large windows and a shared balcony garden. The property is a five-minute walk from major tech parks and has filtered water on every floor plus a dedicated two-wheeler parking zone.',
  },
  {
    id: 'the-cozy-corner-pg',
    name: 'The Cozy Corner PG',
    city: 'Hyderabad',
    area: 'Madhapur',
    address: 'Road No. 36, Madhapur, Hyderabad 500081',
    rent: 7400,
    rating: 4.5,
    reviews: 96,
    gender: 'Girls',
    sharing: ['Single', 'Double', 'Triple'],
    amenities: ['wifi', 'food', 'laundry', 'housekeeping', 'cctv'],
    verified: true,
    featured: true,
    art: { variant: 'room', theme: ['#9d174d', '#f9a8d4'] },
    tagline: 'A warm, safe home with a homely kitchen.',
    description:
      'The Cozy Corner PG is a women-only residence with biometric entry, warden support and a cosy common lounge. Meals are prepared fresh every day with vegetarian and non-vegetarian options. A short walk from the Hitech City metro station.',
  },
  {
    id: 'maple-heights',
    name: 'Maple Heights',
    city: 'Mumbai',
    area: 'Andheri East',
    address: 'Chakala Road, Andheri East, Mumbai 400093',
    rent: 13500,
    rating: 4.7,
    reviews: 173,
    gender: 'Co-ed',
    sharing: ['Single', 'Double'],
    amenities: ['wifi', 'ac', 'power', 'parking', 'cctv', 'laundry'],
    verified: true,
    featured: true,
    art: { variant: 'building', theme: ['#92400e', '#fcd34d'] },
    tagline: 'Premium stays near the metro with a skyline view.',
    description:
      'Maple Heights is a premium high-rise PG with lift access, a skyline-view terrace and fully air-conditioned rooms. Ideal for professionals who want a quiet, well-managed building close to the metro line.',
  },
  {
    id: 'casanova-living',
    name: 'CasaNova Living',
    city: 'Delhi',
    area: 'Saket',
    address: 'Block C, Saket, New Delhi 110017',
    rent: 10800,
    rating: 4.4,
    reviews: 88,
    gender: 'Boys',
    sharing: ['Double'],
    amenities: ['wifi', 'food', 'ac', 'laundry', 'housekeeping', 'cctv', 'power'],
    verified: true,
    featured: true,
    art: { variant: 'room', theme: ['#4c1d95', '#c4b5fd'] },
    tagline: 'Designer interiors with everything included.',
    description:
      'CasaNova Living blends designer interiors with practical comforts. Every double room has an attached study nook, a smart TV and a private wardrobe. Bills, housekeeping and high-speed internet are all included in one simple monthly rent.',
  },
  {
    id: 'skyline-stay',
    name: 'Skyline Stay',
    city: 'Chennai',
    area: 'Velachery',
    address: 'Vijaya Nagar, Velachery, Chennai 600042',
    rent: 6900,
    rating: 4.3,
    reviews: 61,
    gender: 'Co-ed',
    sharing: ['Double', 'Triple'],
    amenities: ['wifi', 'food', 'power', 'parking'],
    verified: true,
    featured: true,
    art: { variant: 'building', theme: ['#0c4a6e', '#7dd3fc'] },
    tagline: 'Budget-friendly living with a rooftop view.',
    description:
      'Skyline Stay is a value-focused PG with spacious triple rooms, a rooftop sit-out and reliable power backup. Good connectivity to the IT corridor and the Velachery MRTS station.',
  },
  {
    id: 'lotus-pearl-living',
    name: 'Lotus Pearl Living',
    city: 'Pune',
    area: 'Hinjewadi',
    address: 'Phase 2, Hinjewadi, Pune 411057',
    rent: 6800,
    rating: 4.2,
    reviews: 74,
    gender: 'Boys',
    sharing: ['Double', 'Triple'],
    amenities: ['wifi', 'food', 'laundry', 'parking'],
    verified: true,
    art: { variant: 'room', theme: ['#065f46', '#6ee7b7'] },
    tagline: 'Walkable to the IT parks, easy on the budget.',
    description:
      'Lotus Pearl Living is a practical PG for engineers working in Hinjewadi. Shuttle-friendly location, meals on all days and a quiet study room for weekend work.',
  },
  {
    id: 'greenwood-coliving',
    name: 'Greenwood Co-Living',
    city: 'Bangalore',
    area: 'HSR Layout',
    address: 'Sector 2, HSR Layout, Bengaluru 560102',
    rent: 11200,
    rating: 4.9,
    reviews: 241,
    gender: 'Co-ed',
    sharing: ['Single', 'Double'],
    amenities: ['wifi', 'food', 'ac', 'housekeeping', 'cctv', 'power', 'laundry'],
    verified: true,
    art: { variant: 'building', theme: ['#166534', '#86efac'] },
    tagline: 'Our highest-rated co-living space in Bengaluru.',
    description:
      'Greenwood is a leafy co-living community with a shared terrace garden, weekly community events and a fully equipped kitchen lounge. Rated highest for cleanliness and responsiveness.',
  },
  {
    id: 'aura-stays',
    name: 'Aura Stays',
    city: 'Hyderabad',
    area: 'Gachibowli',
    address: 'DLF Road, Gachibowli, Hyderabad 500032',
    rent: 8900,
    rating: 4.5,
    reviews: 110,
    gender: 'Girls',
    sharing: ['Single', 'Double'],
    amenities: ['wifi', 'food', 'ac', 'cctv', 'housekeeping', 'power'],
    verified: true,
    art: { variant: 'room', theme: ['#be185d', '#fbcfe8'] },
    tagline: 'Women-only stays with a calm, premium feel.',
    description:
      'Aura Stays offers women-only rooms with attached balconies, a yoga corner and a 24x7 security desk. Within walking distance of the DLF IT campus.',
  },
  {
    id: 'harbor-point-pg',
    name: 'Harbor Point PG',
    city: 'Mumbai',
    area: 'Powai',
    address: 'Hiranandani Gardens, Powai, Mumbai 400076',
    rent: 12400,
    rating: 4.6,
    reviews: 152,
    gender: 'Boys',
    sharing: ['Single', 'Double'],
    amenities: ['wifi', 'ac', 'laundry', 'power', 'cctv', 'parking'],
    verified: true,
    art: { variant: 'building', theme: ['#1e40af', '#93c5fd'] },
    tagline: 'Lakeside living for focused professionals.',
    description:
      'Harbor Point sits near Powai Lake with a clean, gated campus, a study lounge and a fitness area. Ideal for working professionals who want quiet nights and quick access to the business district.',
  },
  {
    id: 'metro-abode',
    name: 'Metro Abode',
    city: 'Delhi',
    area: 'Dwarka',
    address: 'Sector 12, Dwarka, New Delhi 110078',
    rent: 7800,
    rating: 4.1,
    reviews: 57,
    gender: 'Co-ed',
    sharing: ['Double', 'Triple'],
    amenities: ['wifi', 'food', 'power', 'parking', 'laundry'],
    verified: true,
    art: { variant: 'building', theme: ['#7c2d12', '#fdba74'] },
    tagline: 'Two minutes from the metro, straight to your office.',
    description:
      'Metro Abode is a simple, reliable PG next to Dwarka Sector 12 metro station. Triple rooms come with individual lockers and backup power covers all common areas.',
  },
  {
    id: 'marina-breeze-pg',
    name: 'Marina Breeze PG',
    city: 'Chennai',
    area: 'OMR, Sholinganallur',
    address: 'Rajiv Gandhi Salai, Sholinganallur, Chennai 600119',
    rent: 8200,
    rating: 4.4,
    reviews: 79,
    gender: 'Girls',
    sharing: ['Single', 'Double'],
    amenities: ['wifi', 'food', 'ac', 'housekeeping', 'cctv', 'laundry'],
    verified: true,
    art: { variant: 'room', theme: ['#0e7490', '#67e8f9'] },
    tagline: 'Breezy rooms just minutes from the OMR tech corridor.',
    description:
      'Marina Breeze is a women-only PG with breezy balconies, ceiling fans and AC rooms, a sunlit dining hall and biometric security on every floor.',
  },
]

export const getPgById = (id) => pgs.find((pg) => pg.id === id)

// Room options derived from the listed rent (the Double-sharing price).
// Single rooms cost more, Triple rooms cost less.
const roomPriceDelta = { Single: 2500, Double: 0, Triple: -1200 }
const roomSize = { Single: '120 sq ft', Double: '150 sq ft', Triple: '175 sq ft' }
const roomAvailability = { Single: 2, Double: 4, Triple: 3 }

export const getRoomTypes = (pg) =>
  pg.sharing.map((type) => ({
    name: `${type} Sharing`,
    rent: pg.rent + roomPriceDelta[type],
    size: roomSize[type],
    available: roomAvailability[type],
  }))

export const featuredPgs = pgs.filter((pg) => pg.featured)

export const features = [
  {
    title: 'Verified PGs',
    description: 'Every property is personally inspected by our team for hygiene, safety and the promises listed.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Safe & Secure',
    description: 'CCTV coverage, biometric entry and 24x7 security desks in all verified properties.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent monthly rent with no hidden charges. Compare options and pick what fits your budget.',
    icon: 'Wallet',
  },
  {
    title: 'Hassle-Free Booking',
    description: 'Book a visit online, get instant confirmation and move in with a simple digital agreement.',
    icon: 'CalendarCheck',
  },
]

export const steps = [
  {
    title: 'Search your location',
    description: 'Pick your city or office area, set your budget and choose Boys, Girls or Co-ed PGs.',
  },
  {
    title: 'Compare PGs',
    description: 'Check photos, ratings, amenities and room types side by side. Book a free visit in one tap.',
  },
  {
    title: 'Move into your new home',
    description: 'Confirm your room, complete the digital agreement and settle in on day one.',
  },
]

export const testimonials = [
  {
    name: 'Ananya Iyer',
    role: 'Software Engineer, Infosys',
    city: 'Bangalore',
    rating: 5,
    avatar: 'https://i.pravatar.cc/160?img=47',
    quote:
      'I moved from another city with zero contacts. StayNest made it effortless: real photos, verified owners and a visit booked in a few taps. My room is spotless and the Wi-Fi is excellent.',
  },
  {
    name: 'Rohan Mehta',
    role: 'MBA Student, Symbiosis',
    city: 'Pune',
    rating: 5,
    avatar: 'https://i.pravatar.cc/160?img=12',
    quote:
      'The filters saved me days. I set my budget and location, compared three PGs and picked one within the hour. The food is good and the staff responds quickly when something breaks.',
  },
  {
    name: 'Priya Sharma',
    role: 'Data Analyst, Deloitte',
    city: 'Hyderabad',
    rating: 4,
    avatar: 'https://i.pravatar.cc/160?img=32',
    quote:
      'Safety was my top priority as a woman living alone. The biometric entry, CCTV and warden support gave my family real peace of mind. The booking process was smooth and transparent.',
  },
]

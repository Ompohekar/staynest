# StayNest PG

A static, frontend-only PG (Paying Guest) booking website built with React, Vite, Tailwind CSS and Lucide icons.
There is no backend, authentication, database or payment integration. All listings come from `src/data/siteData.js`.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route          | Page                                                               |
| -------------- | ------------------------------------------------------------------ |
| `/`            | Home: hero with search, locations, featured PGs, amenities, why us, how it works, testimonials, CTA |
| `/pgs`         | Listing: sidebar filters (location, rent, gender, sharing, amenities), sorting, PG cards |
| `/pgs/:id`     | Details: gallery, room types, amenities, rules, description, Contact Owner, Book Visit |

Search values on the home page are passed to `/pgs` through the URL (`location`, `maxRent`, `gender`).

## Structure

```
src/
  components/   Navbar, Hero, SearchBar, LocationCard, PGCard, Amenities,
                Testimonials, Footer, Filters, WhyChoose, HowItWorks, CTASection, ...
  pages/        HomePage, PGListingPage, PGDetailsPage
  context/      FavoritesContext (heart toggles, saved to localStorage)
  data/         siteData.js (all mock content)
  lib/          icon maps
```

## Notes

- Property images are generated SVG illustrations (`PGArt.jsx`) so the site works offline. Swap them for real photos by
  replacing the `PGArt` usages with `<img>` tags.
- Testimonial avatars load from pravatar.cc and fall back to initials if the request fails.
- Forms (Book Visit, Contact Owner) are UI only. Nothing is submitted anywhere.

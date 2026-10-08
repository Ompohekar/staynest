// Brand glyphs. Lucide no longer ships brand logos, so these are drawn inline.

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const InstagramIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const FacebookIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export const XIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
)

export const LinkedinIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v6M8 7.5v.5M12 17v-6m0 2a2.5 2.5 0 0 1 5 0v4" />
  </svg>
)

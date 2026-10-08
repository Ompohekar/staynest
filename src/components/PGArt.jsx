// Generated SVG illustrations used as stock-style placeholders for PG buildings,
// rooms and city skylines. Each theme is a [dark, light] colour pair.

// Small seeded pseudo-random generator so each illustration looks consistent per seed.
const seededRandom = (seed) => {
  let s = seed || 1
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const Building = ({ theme, seed }) => {
  const rand = seededRandom(seed)
  const [dark, light] = theme
  return (
    <>
      <defs>
        <linearGradient id={`sky-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light} stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id={`bld-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#sky-${seed})`} />
      <circle cx="318" cy="62" r="26" fill={light} opacity="0.7" />
      {/* Background blocks */}
      {[
        [20, 120, 62], [70, 140, 48], [292, 110, 70], [350, 150, 50],
      ].map(([x, h, w], i) => (
        <rect key={i} x={x} y={220 - h} width={w} height={h} rx="4" fill={dark} opacity="0.12" />
      ))}
      {/* Main building */}
      <rect x="112" y="46" width="176" height="180" rx="8" fill={`url(#bld-${seed})`} />
      <rect x="112" y="46" width="176" height="14" rx="6" fill={dark} />
      <rect x="112" y="226" width="176" height="10" fill={dark} opacity="0.85" />
      {/* Windows */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const lit = rand() > 0.6
          return (
            <rect
              key={`${row}-${col}`}
              x={130 + col * 40}
              y={74 + row * 32}
              width="24"
              height="18"
              rx="3"
              fill={lit ? '#fde68a' : dark}
              opacity={lit ? 0.95 : 0.35}
            />
          )
        }),
      )}
      {/* Entrance */}
      <path d="M176 226 V 196 Q 200 178 224 196 V 226 Z" fill={dark} opacity="0.85" />
      <path d="M166 200 H 234 L 226 186 H 174 Z" fill={light} />
      {/* Trees and ground */}
      <circle cx="84" cy="200" r="22" fill="#34d399" opacity="0.85" />
      <rect x="82" y="214" width="4" height="14" fill="#78350f" opacity="0.7" />
      <circle cx="322" cy="196" r="28" fill="#10b981" opacity="0.8" />
      <rect x="320" y="216" width="4" height="12" fill="#78350f" opacity="0.7" />
      <rect y="236" width="400" height="24" fill="#cbd5e1" opacity="0.6" />
    </>
  )
}

const Room = ({ theme, seed }) => {
  const [dark, light] = theme
  return (
    <>
      <defs>
        <linearGradient id={`wall-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor={light} stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`win-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#wall-${seed})`} />
      <rect y="196" width="400" height="64" fill="#e7e5e4" />
      <rect y="196" width="400" height="4" fill="#d6d3d1" />
      {/* Window with light */}
      <rect x="34" y="36" width="104" height="120" rx="8" fill={`url(#win-${seed})`} stroke="#ffffff" strokeWidth="6" />
      <line x1="86" y1="36" x2="86" y2="156" stroke="#ffffff" strokeWidth="4" />
      <line x1="34" y1="96" x2="138" y2="96" stroke="#ffffff" strokeWidth="4" />
      <path d="M34 36 L 138 36 L 138 156 L 34 156 Z" fill="none" />
      <polygon points="34,156 138,156 170,196 52,196" fill={light} opacity="0.22" />
      <rect x="22" y="30" width="22" height="134" rx="6" fill={dark} opacity="0.75" />
      <rect x="146" y="30" width="22" height="134" rx="6" fill={dark} opacity="0.75" />
      {/* Wall art */}
      <rect x="262" y="48" width="92" height="70" rx="8" fill="#ffffff" stroke={dark} strokeOpacity="0.25" />
      <circle cx="300" cy="74" r="12" fill={light} />
      <path d="M270 110 L 292 88 L 306 100 L 318 90 L 346 110 Z" fill={dark} opacity="0.7" />
      {/* Lamp and bedside table */}
      <rect x="168" y="112" width="26" height="10" rx="3" fill={dark} opacity="0.8" />
      <rect x="180" y="82" width="2" height="30" fill={dark} opacity="0.8" />
      <path d="M160 82 H 194 L 186 62 H 168 Z" fill={light} />
      <rect x="152" y="126" width="46" height="12" rx="2" fill="#a8a29e" />
      {/* Bed */}
      <rect x="208" y="122" width="180" height="22" rx="8" fill={dark} />
      <rect x="216" y="138" width="170" height="36" rx="8" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="260" y="138" width="126" height="36" rx="8" fill={dark} opacity="0.85" />
      <rect x="226" y="132" width="34" height="14" rx="6" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="264" y="132" width="34" height="14" rx="6" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="208" y="174" width="8" height="22" fill="#78716c" />
      <rect x="380" y="174" width="8" height="22" fill="#78716c" />
      {/* Plant */}
      <path d="M30 196 H 62 L 58 226 H 34 Z" fill={dark} />
      <path d="M46 196 C 30 170, 32 150, 46 136 C 60 150, 62 172, 46 196 Z" fill="#34d399" />
      <path d="M46 196 C 60 176, 76 170, 84 178 C 74 192, 60 198, 46 196 Z" fill="#10b981" />
      <path d="M46 196 C 36 182, 20 180, 16 186 C 24 198, 36 200, 46 196 Z" fill="#6ee7b7" />
      {/* Rug */}
      <ellipse cx="230" cy="236" rx="150" ry="16" fill={light} opacity="0.45" />
    </>
  )
}

const City = ({ theme, seed }) => {
  const rand = seededRandom(seed)
  const [dark, light] = theme
  const blocks = Array.from({ length: 11 }, (_, i) => ({
    x: i * 38 - 8,
    w: 30 + Math.floor(rand() * 18),
    h: 70 + Math.floor(rand() * 110),
  }))
  return (
    <>
      <defs>
        <linearGradient id={`city-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light} stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#city-${seed})`} />
      <circle cx="330" cy="56" r="22" fill="#ffffff" opacity="0.8" />
      {blocks.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={230 - b.h} width={b.w} height={b.h} rx="3" fill={i % 2 ? dark : light} opacity={i % 2 ? 0.55 : 0.8} />
          {Array.from({ length: 4 }, (_, r) => (
            <rect key={r} x={b.x + 6} y={230 - b.h + 12 + r * 22} width="6" height="8" rx="1" fill="#ffffff" opacity="0.7" />
          ))}
        </g>
      ))}
      <rect y="230" width="400" height="30" fill={dark} opacity="0.9" />
    </>
  )
}

const PGArt = ({ variant = 'building', theme = ['#0f766e', '#5eead4'], seed = 7, className = '' }) => {
  const Scene = variant === 'room' ? Room : variant === 'city' ? City : Building
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    >
      <Scene theme={theme} seed={seed} />
    </svg>
  )
}

export default PGArt

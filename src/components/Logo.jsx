export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="hl-g" x1="6" y1="8" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" /><stop offset=".55" stopColor="#8b5cf6" /><stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path d="M6 22 L30 8 L50 12 L36 22 Z" fill="url(#hl-g)" />
      <path d="M36 22 L50 12 L60 22 L50 26 Z" fill="url(#hl-g)" opacity=".85" />
      <path d="M50 26 L60 22 L58 34 L52 30 Z" fill="url(#hl-g)" opacity=".7" />
      <path d="M6 22 L36 22 L44 30 L26 58 L20 36 Z" fill="url(#hl-g)" opacity=".9" />
      <path d="M41 17 L46 15.5 L44.5 19.5 Z" fill="#0b0b14" />
    </svg>
  )
}

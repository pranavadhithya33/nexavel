'use client'

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <defs>
        <linearGradient id={`logoGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E23636" />
          <stop offset="100%" stopColor="#2B3784" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="28" stroke={`url(#logoGrad-${size})`} strokeWidth="2" />
      <line x1="30" y1="2" x2="30" y2="58" stroke={`url(#logoGrad-${size})`} strokeWidth="1" opacity="0.5" />
      <line x1="2" y1="30" x2="58" y2="30" stroke={`url(#logoGrad-${size})`} strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="10" x2="50" y2="50" stroke={`url(#logoGrad-${size})`} strokeWidth="0.8" opacity="0.4" />
      <line x1="50" y1="10" x2="10" y2="50" stroke={`url(#logoGrad-${size})`} strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="30" cy="30" rx="3" ry="4" fill={`url(#logoGrad-${size})`} />
    </svg>
  )
}
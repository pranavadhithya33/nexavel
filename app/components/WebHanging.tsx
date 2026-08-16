'use client'

import React from 'react'

interface WebHangingProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
}

export default function WebHanging({ position = 'top-left', className = '' }: WebHangingProps) {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'rotate(90deg)'
      case 'bottom-right':
        return 'rotate(180deg)'
      case 'bottom-left':
        return 'rotate(270deg)'
      default:
        return 'rotate(0deg)'
    }
  }

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-0 right-0'
      case 'bottom-right':
        return 'bottom-0 right-0'
      case 'bottom-left':
        return 'bottom-0 left-0'
      default:
        return 'top-0 left-0'
    }
  }

  return (
    <div
      className={`absolute ${getPositionClasses()} pointer-events-none z-10 opacity-40 hover:opacity-80 transition-opacity duration-300 ${className}`}
      style={{ transform: getTransform() }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 0 L 120 0 L 0 120 Z" fill="url(#webGradient)" opacity="0.08" />
        {/* Radial Web Threads */}
        <path d="M 0 0 L 120 0" stroke="var(--accent-primary)" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M 0 0 L 0 120" stroke="var(--accent-primary)" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M 0 0 L 110 30" stroke="var(--accent-primary)" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M 0 0 L 90 60" stroke="var(--accent-primary)" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M 0 0 L 60 90" stroke="var(--accent-primary)" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M 0 0 L 30 110" stroke="var(--accent-primary)" strokeWidth="1" strokeOpacity="0.4" />

        {/* Concentric Web Arcs */}
        <path d="M 30 0 Q 25 25 0 30" fill="none" stroke="var(--accent-secondary)" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M 60 0 Q 50 50 0 60" fill="none" stroke="var(--accent-primary)" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M 90 0 Q 75 75 0 90" fill="none" stroke="var(--accent-secondary)" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M 120 0 Q 100 100 0 120" fill="none" stroke="var(--accent-primary)" strokeWidth="1.2" strokeOpacity="0.6" />

        <defs>
          <radialGradient id="webGradient" cx="0%" cy="0%" r="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

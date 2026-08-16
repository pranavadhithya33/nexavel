'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useSuit } from '../context/SuitContext'

interface Particle {
  id: number
  x: number
  y: number
  angle: number
  speed: number
  length: number
  alpha: number
}

export default function WebShooterEffect() {
  const { playWebSound } = useSuit()
  const [particles, setParticles] = useState<Particle[]>([])

  const handleGlobalClick = useCallback((e: MouseEvent) => {
    // Only fire web particles if target is interactive or user clicks background
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('a') || target.closest('.interactive-web')) {
      playWebSound('thwip')

      const newParticles: Particle[] = []
      const particleCount = 8
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount
        newParticles.push({
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          angle,
          speed: 4 + Math.random() * 4,
          length: 20 + Math.random() * 30,
          alpha: 1,
        })
      }
      setParticles((prev) => [...prev, ...newParticles])
    }
  }, [playWebSound])

  useEffect(() => {
    window.addEventListener('click', handleGlobalClick)
    return () => window.removeEventListener('click', handleGlobalClick)
  }, [handleGlobalClick])

  // Particle decay loop
  useEffect(() => {
    if (particles.length === 0) return
    const timer = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + Math.cos(p.angle) * p.speed,
            y: p.y + Math.sin(p.angle) * p.speed,
            alpha: p.alpha - 0.08,
          }))
          .filter((p) => p.alpha > 0)
      )
    }, 16)
    return () => clearInterval(timer)
  }, [particles])

  if (particles.length === 0) return null

  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-[999]">
      {particles.map((p) => (
        <line
          key={p.id}
          x1={p.x}
          y1={p.y}
          x2={p.x + Math.cos(p.angle) * p.length}
          y2={p.y + Math.sin(p.angle) * p.length}
          stroke="var(--accent-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity={p.alpha}
        />
      ))}
    </svg>
  )
}
